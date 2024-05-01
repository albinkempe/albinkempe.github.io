import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albin Kempe",
  description: "by Albin Kempe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        <main>
          {children}
        </main>
        <footer>
          <a href="/about#socials"><p>by Albin Kempe</p></a>
        </footer>
      </body>
    </html>
  );
}
