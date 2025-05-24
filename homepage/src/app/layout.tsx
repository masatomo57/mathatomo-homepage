import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "まさとものWebsite",
  description: "まさとものWebsiteです",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>まさとものWebsite</title>
      </head>
      <body className="h-screen flex flex-col">
        <NavBar />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
