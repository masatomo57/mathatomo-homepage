import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
