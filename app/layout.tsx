import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';
import Navbar from "@/components/navigation/navbar";

export const metadata: Metadata = {
  title: "Soteria",
  description: "Boosting digital income steams for oppressed citizens of Myanmar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
