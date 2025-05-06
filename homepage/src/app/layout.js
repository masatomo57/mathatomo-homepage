import NavBar from "@/components/navbar/NavBar";
import "./globals.css";


export const metadata = {
  title: "まさとものWebsite",
  description: "まさとものWebsiteです",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>まさとものWebsite</title>
      </head>
      <body>
        <NavBar />
        <div className="padding-top: 100px;">
          {children}
        </div>
      </body>
    </html>
  );
}
