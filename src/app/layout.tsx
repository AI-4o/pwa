import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PWA NextJS",
  description: "It's a simple progressive web application made with NextJS",
  generator: "Next.js",
  manifest: "/manifest",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    {
      name: "imvinojanv",
      url: "https://www.linkedin.com/in/imvinojanv/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "/icon-180.png" },
    { rel: "apple-touch-icon", sizes: "152x152", url: "/icon-152.png" },
    { rel: "apple-touch-icon", sizes: "144x144", url: "/icon-144.png" },
    { rel: "apple-touch-icon", sizes: "128x128", url: "/icon-128.png" },
    { rel: "icon", sizes: "192x192", url: "/icon-192.png" },
    { rel: "icon", sizes: "512x512", url: "/icon-512.png" },
    { rel: "icon", sizes: "16x16", url: "/icon-16.png" },
    { rel: "shortcut icon", url: "/icon.png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
