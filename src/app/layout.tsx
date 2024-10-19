import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/globals.css";
import Navbar from "@/_components/Navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Positivus",
  description:
    "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
