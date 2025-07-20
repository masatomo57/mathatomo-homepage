import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mathsatomo57.com"),
  title: {
    default: "まさとものWebsite",
    template: "%s | まさとものWebsite",
  },
  description: "まさとものWebsiteです",
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
    title: "まさとものWebsite",
    description: "まさとものWebsiteです",
    type: "website",
    images: [
      {
        url: "/og_default.jpg",
        width: 800,
        height: 600,
        alt: "まさとものアイコン",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "まさとものWebsite",
    description: "まさとものWebsiteです",
    images: ["/og_default.jpg"],
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
