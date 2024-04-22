import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/Navigation"

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
    <html lang="en" className="bg-zinc-950">
      <body className={inter.className}>
        <div className="dev-info">This website is under construction</div>
        <main>
          {children}
        </main>
        <Navigation/>
      </body>
    </html>
  );
}
