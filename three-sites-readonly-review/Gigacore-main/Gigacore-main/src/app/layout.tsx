import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DivisionSwitcher from '@/components/DivisionSwitcher';
import clsx from 'clsx';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: 'Gigacore Energy | Next-Generation Hydrogen Platform',
    description: 'Empowering the future of energy infrastructure with next-generation hydrogen platforms and sustainable grid solutions.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={clsx(inter.className, "antialiased bg-white text-gray-900")}>
                <Navbar />
                {children}
                <DivisionSwitcher current="energy" />
                <Footer />
            </body>
        </html>
    );
}
