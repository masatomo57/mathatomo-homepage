import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { BASE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/constants/conf";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og_default.jpg`,
        width: 800,
        height: 600,
        alt: "まさとものアイコン",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [`${BASE_URL}/og_default.jpg`],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
