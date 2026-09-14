import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import Logo from "../ui/Logo";
import { LinkedinIcon } from "../ui/SocialIcons";

export default function Footer() {
    return (
        <footer className="bg-brand-secondary text-gray-400 py-20 border-t border-brand-primary/20 shadow-[0_-10px_40px_rgba(0,213,99,0.1)] font-light">
            <SectionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    {/* 1. Brand & Mission */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <Logo />
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
                            Advancing next-generation hydrogen production systems designed for real-world industrial deployment. Built for scale, reliability, and economic viability.
                        </p>
                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://www.linkedin.com/company/gigacore-energy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-brand-gray-800 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 text-gray-400 group"
                            >
                                <LinkedinIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Platform Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Platform</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: "Technology", href: "/technology" },
                                { name: "Economics", href: "/economics" },
                                { name: "Applications", href: "/applications" },
                                { name: "Green Ammonia", href: "/applications#green-ammonia" },
                                { name: "Green Steel", href: "/applications#green-steel" },
                                { name: "Data Centers", href: "/applications#data-centers" },
                                { name: "Refining & Petrochemicals", href: "/applications#refining-petrochemicals" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-brand-primary transition-colors flex items-center gap-3 group">
                                        <span className="w-1 h-1 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary transition-all group-hover:w-2"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Company Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Company</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: "Market Opportunity", href: "/market" },
                                { name: "Partnerships", href: "/partnership" },
                                { name: "About Us", href: "/company" },
                                { name: "Our Team", href: "/company/team" },
                                { name: "Blog", href: "/company/blog" },
                                { name: "Contact", href: "/contact" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-brand-primary transition-colors flex items-center gap-3 group">
                                        <span className="w-1 h-1 rounded-full bg-brand-primary/50 group-hover:bg-brand-primary transition-all group-hover:w-2"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Contact</h4>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-brand-gray-800 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white mb-1 font-medium">General Inquiries</p>
                                    <a href="mailto:info@gigacore.energy" className="hover:text-brand-primary transition-colors">info@gigacore.energy</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-brand-gray-800 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white mb-1 font-medium">Phone</p>
                                    <a href="tel:+911202443724" className="hover:text-brand-primary transition-colors">+ 91-120-2443724</a>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-brand-gray-800 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white mb-1 font-medium">Headquarters</p>
                                    <p className="leading-relaxed">B-37, Sector - 1, Noida - 201 301<br />Delhi NCR</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-brand-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
                    <p>© {new Date().getFullYear()} Gigacore Energy. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Cookie Settings</a>
                    </div>
                </div>
            </SectionWrapper>
        </footer>
    );
}
