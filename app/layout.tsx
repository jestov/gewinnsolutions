import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const typo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optiks | Providing Financial Optiks + Strategies for Startups",
  description:
    "Your trusted financial advisor to grow the value of your company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="text-primary scroll-smooth">
      <body className={typo.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
