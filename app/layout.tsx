import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";

const typo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gewinn Solutions",
  description: "Construyendo fitness center con maestría",
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
