import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEVILMAXY | DMX KING",
  description:
    "DEVILMAXY — DMX KING. Free Fire gaming, live streams, gameplay, clips and entertainment.",
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
      <body>{children}</body>
    </html>
  );
}