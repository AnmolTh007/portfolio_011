import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Anmol Thakur | Software Engineer",
  description: " Anmol Thakur is a software engineer based in India. He is passionate about building products that make a difference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
      <Header/>
        {children}
      </body>
    </html>
  );
}
