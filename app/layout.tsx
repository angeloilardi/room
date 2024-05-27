import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";
import Navbar from "./components/Navbar";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "room",
  description: "Furniture shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.className} relative flex flex-col bg-white min-h-screen`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
