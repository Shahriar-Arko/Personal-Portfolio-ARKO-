import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Shahriar Arko | Portfolio",
  description:
    "Personal portfolio of Shahriar Arko.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

        <body className="min-h-screen bg-[#090d11] text-white antialiased">

          <CustomCursor />

          <AnimatedBackground />

          <Navbar />

          <main className="relative z-10">
            {children}
          </main>

        </body>

    </html>
  );
}