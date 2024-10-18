import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ReactQuery from "@/Providers/ReactQuery";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/common/Navbar";
import { SessionProvider } from "next-auth/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Basys.ai",
  description: "Manage Your Patients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <ReactQuery>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Navbar />
            {children}
            <Toaster />
          </body>
        </ReactQuery>
      </SessionProvider>
    </html>
  );
}
