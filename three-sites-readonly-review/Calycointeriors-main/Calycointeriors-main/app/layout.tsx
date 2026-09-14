import type { Metadata } from "next";
import "./globals.css";
import DivisionSwitcher from '@/components/DivisionSwitcher';

export const metadata: Metadata = {
  title: "Calyco Interiors",
  description: "Designing homes people love living in. Premium interiors with complete transparency."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&family=Josefin+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}<DivisionSwitcher current="interiors" /></body>
    </html>
  );
}
