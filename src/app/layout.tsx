import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@app/providers";
import Header from "@components/layout/Header";
import DateNavigation from "@components/layout/DateNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Kitty",
  description: "A cat a day",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen container mx-auto px-6`}
      >
        <Providers>
          <Header />
          <DateNavigation />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
