import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://salatify.vercel.app/"),

  title: {
    default: "Salatify",
    template: "%s | Salatify",
  },

  manifest: "https://salatify.vercel.app/manifest.json",

  applicationName: "Salatify",

  creator: "Mohamed Lifa",

  authors: [
    {
      name: "Mohamed Lifa",
      url: "https://mohamed-lifa7.vercel.app",
    },
  ],

  icons: [{ rel: "icon", url: "/favicon.ico" }],

  description:
    "Salatify provides Islamic prayer times, resources for Ramadan, dua supplications, and more.",

  openGraph: {
    title: "Salatify",
    description:
      "Salatify provides Islamic prayer times, resources for Ramadan, dua supplications, and more.",
    url: new URL("https://salatify.vercel.app/"),
    siteName: "Salatify",
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
    title: "Salatify",
    creator: "@LifaSeddik",
    card: "summary_large_image",
    images: ["https://salatify.vercel.app/og-image.jpg"],
  },

  keywords: ["Islam", "Muslim", "Prayer", "Salah", "Ramadan", "Dua"],
};

export const links = {
  github: "https://github.com/Mohamed-lifa7/Salatify",
  twitter: "https://twitter.com/LifaSeddik",
  portfolio: "https://mohamed-lifa7.vercel.app",
};
