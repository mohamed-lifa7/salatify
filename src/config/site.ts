import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://salaatify.vercel.app/"),

  title: {
    default: "Salaatify",
    template: "%s | Salaatify",
  },

  manifest: "https://salaatify.vercel.app/manifest.json",

  applicationName: "Salaatify",

  creator: "Mohamed Lifa",

  authors: [
    {
      name: "Mohamed Lifa",
      url: "https://mohamed-lifa7.vercel.app",
    },
  ],

  icons: [{ rel: "icon", url: "/favicon.ico" }],

  description:
    "Salaatify provides Islamic prayer times, resources for Ramadan, dua supplications, and more.",

  openGraph: {
    title: "Salaatify",
    description:
      "Salaatify provides Islamic prayer times, resources for Ramadan, dua supplications, and more.",
    url: new URL("https://salaatify.vercel.app/"),
    siteName: "Salaatify",
    images: ["/og-image.jpg"],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    title: "Salaatify",
    creator: "@LifaSeddik",
    card: "summary_large_image",
    images: ["https://salaatify.vercel.app/og-image.jpg"],
  },

  keywords: ["Islam", "Muslim", "Prayer", "Salah", "Ramadan", "Dua"],
};

export const links = {
  github: "https://github.com/Mohamed-lifa7/Salaatify",
  twitter: "https://twitter.com/LifaSeddik",
  portfolio: "https://mohamed-lifa7.vercel.app",
};
