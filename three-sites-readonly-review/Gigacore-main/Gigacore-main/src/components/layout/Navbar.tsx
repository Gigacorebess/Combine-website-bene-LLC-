"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Users, MessageSquare, Phone, Building2 } from "lucide-react";
import clsx from "clsx";
import SectionWrapper from "../ui/SectionWrapper";
import { menuSlide } from "@/lib/motion";
import Logo from "../ui/Logo";

interface NavLink {
    name: string;
    href: string;
    children?: { name: string; href: string; icon?: React.ElementType }[];
}

const NAV_LINKS: NavLink[] = [
    { name: "Technology", href: "/technology" },
    { name: "Economics", href: "/economics" },
    { name: "Applications", href: "/applications" },
    { name: "Market", href: "/market" },
    { name: "Partnerships", href: "/partnership" },
    {
        name: "Company",
        href: "/company",
        children: [
            { name: "About Us", href: "/company", icon: Building2 },
            { name: "Our Team", href: "/company/team", icon: Users },
            { name: "Blog", href: "/company/blog", icon: MessageSquare },
            { name: "Contact", href: "/contact", icon: Phone },
        ],
    },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Blog listing page has dark hero → white navbar text (like Home)
    // Blog detail pages have light background → need dark navbar text
    const isBlogDetailPage = /^\/company\/blog\/.+/.test(pathname || "");
    const isTeamPage = pathname?.includes("/company/team");
    const useDarkText = isScrolled || isTeamPage || isBlogDetailPage;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDropdownEnter = (name: string) => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        setOpenDropdown(name);
    };

    const handleDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/20 py-3"
                        : "bg-transparent py-4"
                )}
            >
                <SectionWrapper className="flex items-center justify-between">
                    <Link href="/" className="relative z-50 group">
                        <Logo isScrolled={useDarkText || isMobileOpen} />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden xl:flex items-center gap-8">
                        {NAV_LINKS.map((link) =>
                            link.children ? (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => handleDropdownEnter(link.name)}
                                    onMouseLeave={handleDropdownLeave}
                                >
                                    <button
                                        className={clsx(
                                            "text-sm font-medium transition-all duration-300 relative group tracking-wide flex items-center gap-1",
                                            useDarkText ? "text-brand-secondary hover:text-brand-primary" : "text-white hover:text-brand-primary"
                                        )}
                                    >
                                        {link.name}
                                        <ChevronDown className={clsx(
                                            "w-3.5 h-3.5 transition-transform duration-200",
                                            openDropdown === link.name && "rotate-180"
                                        )} />
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-brand-primary" />
                                    </button>
                                    <AnimatePresence>
                                        {openDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                                exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="absolute top-full right-0 pt-4"
                                            >
                                                <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-black/5 py-2 min-w-[240px] overflow-hidden">
                                                    {link.children.map((child) => (
                                                        <Link
                                                            key={child.name}
                                                            href={child.href}
                                                            onClick={() => setOpenDropdown(null)}
                                                            className="flex items-center justify-between px-6 py-3.5 text-sm text-brand-secondary hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-200 font-medium group"
                                                        >
                                                            <span>{child.name}</span>
                                                            {child.icon && (
                                                                <child.icon className="w-4 h-4 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-0.5 transition-all duration-200" />
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "text-sm font-medium transition-all duration-300 relative group tracking-wide",
                                        useDarkText ? "text-brand-secondary hover:text-brand-primary" : "text-white hover:text-brand-primary"
                                    )}
                                >
                                    {link.name}
                                    <span className={clsx(
                                        "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-brand-primary"
                                    )} />
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className={clsx(
                            "xl:hidden relative z-50 p-2 transition-colors duration-300",
                            isMobileOpen || useDarkText ? "text-brand-secondary" : "text-white"
                        )}
                    >
                        {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </SectionWrapper>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        variants={menuSlide}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl pt-24 px-6 xl:hidden overflow-y-auto h-[100dvh] flex flex-col"
                    >
                        <div className="flex flex-col space-y-2">
                            {NAV_LINKS.map((link, idx) =>
                                link.children ? (
                                    <div key={link.name} className="border-b border-gray-100/50 pb-3 last:border-0">
                                        <button
                                            onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                                            className="text-xl font-medium text-brand-secondary hover:text-brand-primary transition-colors tracking-tight flex items-center justify-between w-full text-left group"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] font-bold text-brand-primary/60 tracking-widest uppercase">0{idx + 1}</span>
                                                <span>{link.name}</span>
                                            </div>
                                            <ChevronDown className={clsx(
                                                "w-5 h-5 text-gray-300 group-hover:text-brand-primary transition-all duration-300",
                                                mobileExpanded === link.name && "rotate-180 text-brand-primary"
                                            )} />
                                        </button>
                                        <AnimatePresence>
                                            {mobileExpanded === link.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pt-2 flex flex-col gap-1 pl-4 border-l-2 border-brand-primary/10 ml-1.5 mt-2">
                                                        {link.children.map((child) => (
                                                            <Link
                                                                key={child.name}
                                                                href={child.href}
                                                                onClick={() => setIsMobileOpen(false)}
                                                                className="flex items-center justify-between text-base text-gray-500 hover:text-brand-primary transition-colors py-2 group"
                                                            >
                                                                <span>{child.name}</span>
                                                                {child.icon && (
                                                                    <child.icon className="w-4 h-4 text-gray-300 group-hover:text-brand-primary transition-colors" />
                                                                )}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="text-xl font-medium text-brand-secondary hover:text-brand-primary transition-colors tracking-tight border-b border-gray-100/50 pb-3 last:border-0 block"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-bold text-brand-primary/60 tracking-widest uppercase">0{idx + 1}</span>
                                            {link.name}
                                        </div>
                                    </Link>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

