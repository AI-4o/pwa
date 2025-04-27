import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'dog-dating',
    short_name: 'dd',
    description: 'An app to let at least your dog find a date 😊',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/icon-48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/icon-64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: '/icon-72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: '/icon-96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/icon-128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '/icon-144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/icon-152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: '/icon-180.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
