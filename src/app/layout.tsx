import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {UserProvider} from "@auth0/nextjs-auth0/client";
import UserHeader from "@/app/components/userHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cwm.com",
  description: "Your go-to source for information on coffee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <UserProvider>
      <body className={inter.className}>
      <header className="bg-white h-10">
        <nav className="mx-auto flex items-center justify-between p-2 lg:px-8 lg:gap-x-24">
          <Link href="/" className="text-sm font-extrabold font-mono leading-6 text-gray-900">
            Coffee World Map
          </Link>
          <div className=" mx-auto flex items-center justify-between grow px-2 leading-6 lg">
            <Link href="/map" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200 text-center grow rounded-lg">
              Map
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200 text-center grow rounded-lg">
              About
            </Link>
            <Link href="/coffee-recipes" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200 text-center grow rounded-lg">
              Coffee Recipes
            </Link>
            <Link href="/calculator" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-200 text-center grow rounded-lg">
              Extraction Calculator
            </Link>
            <UserHeader/>
          </div>
        </nav>
      </header>
      {children}
      </body>
    </UserProvider>
    </html>
  );
}
