import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEVILMAXY | DMX KING",
  description:
    "DEVILMAXY — DMX KING. Free Fire gaming, live streams, gameplay, clips and entertainment.",
  other: {
    "google-adsense-account": "ca-pub-1798515508355649",
  },
  keywords: [
    "DEVILMAXY",
    "DMX KING",
    "Free Fire",
    "Free Fire gaming",
    "Free Fire live",
    "Free Fire streamer",
    "gaming",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1798515508355649"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}