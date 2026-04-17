import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Aba Nicaisse",
  description:
    "Professional web developer portfolio showcasing projects, skills, and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white overflow-x-hidden">
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
