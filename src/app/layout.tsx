import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../stylesheet/index.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glamour Nail",
  description: "Indulge in luxury at Glamour Nail, the premier nail salon offering an array of pampering services for your hands and feet. Experience the glamour.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
