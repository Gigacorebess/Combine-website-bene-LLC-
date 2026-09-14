import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import DivisionSwitcher from '@/components/DivisionSwitcher';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bene LLC — Materials that move the world',
  description: 'Global commodity trading and supply chain solutions. Sulphur, urea, crude oil, LNG, metals, carbon products and agricultural commodities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <DivisionSwitcher current="trading" />
      </body>
    </html>
  );
}
