import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from '@/components/Providers';
import Header from '@/components/Header';
// Removed ThemeProvider import (dark-mode temporarily disabled)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Book Club Discussion Board',
  description: 'A forum for readers to create threads, post comments, and vote.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <div className="animate__animated animate__fadeIn animate__faster">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
