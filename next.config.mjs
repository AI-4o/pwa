//  next.config.mjs

import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,      // Enable React strict mode for improved error handling
  swcMinify: true,            // Enable SWC minification for improved performance
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development"     // Remove console.log in production
  }
};

export default withPWA({
  dest: "public",         // destination directory for the PWA files
  // disable: process.env.NODE_ENV === "development",        // disable PWA in the development environment
  register: true,         // register the PWA service worker
  skipWaiting: true,      // skip waiting for service worker activation
  runtimeCaching: [
    // Custom cache rules
    {
      urlPattern: /\/api\/user/,
      handler: 'NetworkFirst',// used for api calls, tries network first, then cache
      options: {
        cacheName: 'user-api',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60 // 24 hours
        }
      }
    },
    // ... other caching rules
  ]
})(nextConfig);
