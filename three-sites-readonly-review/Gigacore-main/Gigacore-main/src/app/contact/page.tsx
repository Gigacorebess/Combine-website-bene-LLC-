"use client";
import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";
import { Mail, ArrowRight, HeartHandshake, Microscope, TrendingUp, Megaphone, Globe, CheckCircle, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const offices = [
    {
        country: "India Headquarters",
        address: "B-37, Sector - 1, Noida - 201 301, Delhi NCR",
        phone: "+91-120-2443724",
    },
    {
        country: "Netherlands",
        address: "Zuidplein 126 WTC, Toren H, 1077 XV Amsterdam, Netherlands",
        phone: "+31 0 (20) 240 30 80",
    },
    {
        country: "USA",
        address: "3001 Mallard Fox Drive NW, Decatur, Alabama - 35601 USA",
        phone: "+1-256-686-2953",
    },
    {
        country: "Singapore",
        address: "Levels 21 & 34, Centennial Tower, 3 Temasek Avenue, Singapore - 039190",
    },
    {
        country: "Japan",
        address: "Parks Tower, 19F, Namba 2-10-70 Nanbanaka, Naniwa-ku, Osaka-shi, Japan, 556-0011",
        phone: "+81-6-7662-8710",
    },
    {
        country: "Korea",
        address: "Gangnam B/D, 1321-1, Seocho-dong, Seocho-gu, Seoul, Korea 137-070",
        phone: "+82 2 2190 3836",
    }
];

export default function ContactPage() {
    return (
        <main className="bg-white">
            {/* 1. Full-Screen Hero Section */}
            <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900 border-b border-gray-100 flex items-center justify-center">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/contact/hero%20section.jpg')] bg-cover bg-center" />
                </div>

                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto flex flex-col items-center"
                    >
                        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-primary mb-4 drop-shadow-md">
                            Engage With Us
                        </span>
                        <h1 className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-[1.1] text-white drop-shadow-lg">
                            Get in <span className="text-brand-primary">Touch</span>
                        </h1>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. Intro Statement Below Hero */}
            <section className="py-[calc(var(--spacing-section)*1.2)] bg-white text-center border-b border-gray-100">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.h2
                            variants={fadeUp}
                            className="text-3xl md:text-4xl lg:text-[40px] leading-tight md:leading-snug font-medium text-gray-800"
                        >
                            We engage with partners, institutions, and stakeholders evaluating hydrogen as an <span className="text-brand-primary font-bold">industrial input</span> and <span className="text-brand-primary font-bold">infrastructure asset</span>.
                        </motion.h2>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. Contact Form Submission Area */}
            <section className="py-[var(--spacing-section)] bg-gray-50/50 border-b border-gray-100">
                <SectionWrapper>
                    <ContactForm />
                </SectionWrapper>
            </section>

            {/* 4. General Enquiries */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/contact/General%20Enquiries.webp"
                imageAlt="General Enquiries"
                subtitle="Contact"
                title="General Enquiries"
                content={
                    <>
                        <p className="mb-6">
                            For general questions, introductions, or to request an overview of our platform.
                        </p>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-[15px] text-gray-500 font-bold uppercase tracking-wider">Email Us</p>
                                <a href="mailto:info@gigacore.energy" className="text-[16px] sm:text-[18px] font-bold text-gray-900 hover:text-brand-primary transition-colors">
                                    info@gigacore.energy
                                </a>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                            Response time: 1-2 business days
                        </p>
                    </>
                }
            />

            {/* 4. Partnerships & Deployment */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/contact/Partnerships%20&%20Deployment.jpg"
                imageAlt="Partnerships & Deployment"
                subtitle="Collaboration"
                title="Partnerships & Deployment"
                content={
                    <>
                        <p className="mb-6">
                            We work with organizations seeking deployable, scalable hydrogen solutions in industrial settings.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Focus Areas:</h4>
                        <ul className="space-y-3">
                            {[
                                "Industrial offtake and deployment",
                                "Pilot and demonstration collaborations",
                                "Public-sector and PSU engagements",
                                "EPC and infrastructure partnerships"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 items-center text-gray-700">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 5. Technical & Validation */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/contact/Technical%20&%20Validation%20Section.png"
                imageAlt="Technical & Validation"
                subtitle="Diligence"
                title="Technical & Validation"
                content={
                    <>
                        <p className="mb-6">
                            For technical reviews, diligence requests, or validation discussions under appropriate confidentiality.
                        </p>
                        <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-brand-primary">
                            <div className="flex items-center gap-3 mb-2 text-gray-900 font-bold">
                                <Microscope className="w-5 h-5 text-brand-primary" />
                                <span>Technical Reviews</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                We facilitate deep-dive technical sessions for qualified partners and investors.
                            </p>
                        </div>
                    </>
                }
            />

            {/* 6. Investor Engagement */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/contact/Investor%20Engagement%20Section.jpg"
                imageAlt="Investor Engagement"
                subtitle="Capital"
                title="Investor Engagement"
                content={
                    <>
                        <p className="mb-6">
                            We engage with long-term capital providers aligned with infrastructure-grade deployment and scale.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center text-brand-primary shrink-0 shadow-sm">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Infrastructure Capital</h4>
                                    <p className="text-sm text-gray-600">Alignment with long-term asset development.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center text-brand-primary shrink-0 shadow-sm">
                                    <Megaphone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Media & Comms</h4>
                                    <p className="text-sm text-gray-600">For speaking engagements and corporate updates.</p>
                                </div>
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 7. Operating Regions */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/contact/India-Aligned, Globally Competitive.jpg"
                imageAlt="Operating Regions"
                imageClassName="object-contain"
                subtitle="Reach"
                title="Operating Regions"
                content={
                    <>
                        <p className="mb-6">
                            Our deployment strategy is focused on industrial demand centers with immediate relevance and policy support.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                                <Globe className="w-6 h-6 text-brand-primary mx-auto mb-2" />
                                <h4 className="font-bold text-gray-900">India</h4>
                                <span className="text-xs font-bold text-white bg-brand-primary px-2 py-0.5 rounded-full inline-block mt-1">SECONDARY</span>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                                <Globe className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                                <h4 className="font-bold text-gray-900">Global</h4>
                                <span className="text-xs font-bold text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full inline-block mt-1">EVALUATING</span>
                            </div>
                        </div>
                    </>
                }
            />

            {/* 8. Global Offices */}
            <section className="py-[var(--spacing-section)] bg-gray-50/50 border-t border-gray-100">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Premium Header with Dual Images */}
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-20 text-left">
                            <motion.div variants={fadeUp} className="lg:w-5/12">
                                <span className="text-brand-primary text-[13px] font-bold tracking-widest uppercase mb-4 block">
                                    Global Presence
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#001F1B] leading-[1.1] tracking-tight">
                                    Our Global Footprint
                                </h2>
                                <p className="text-[17px] text-gray-600 leading-relaxed font-medium">
                                    Strategically located across key international markets to support our expanding deployment of industrial hydrogen solutions and infrastructure assets.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="w-full lg:w-7/12 flex gap-4 lg:gap-6 h-[300px] sm:h-[400px] mt-8 lg:mt-0">
                                <div className="w-1/2 relative rounded-[1.5rem] overflow-hidden shadow-lg transform -translate-y-4">
                                    <Image
                                        src="/contact/globe.jpg"
                                        alt="Global Connections"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
                                </div>
                                <div className="w-1/2 relative rounded-[1.5rem] overflow-hidden shadow-lg transform translate-y-8">
                                    <Image
                                        src="/contact/globe2.jpg"
                                        alt="International Team"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Cards Grid */}
                        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left relative z-10">
                            {offices.map((office, i) => (
                                <div key={i} className="p-8 lg:p-10 bg-white rounded-[1.25rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                        <div className="w-[42px] h-[42px] rounded-full bg-[#E5F3EB] flex items-center justify-center text-brand-primary shrink-0 transition-transform group-hover:scale-110 duration-300">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                                            {office.country}
                                        </h3>
                                    </div>
                                    <div className="space-y-6 flex-grow relative z-10">
                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-[18px] h-[18px] text-gray-400 shrink-0 mt-[3px]" />
                                            <p className="text-[15px] text-gray-600 leading-[1.6]">
                                                {office.address}
                                            </p>
                                        </div>
                                        {office.phone && (
                                            <div className="flex items-center gap-4">
                                                <Phone className="w-[18px] h-[18px] text-gray-400 shrink-0" />
                                                <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-[15px] text-gray-600 hover:text-brand-primary transition-colors">
                                                    {office.phone}
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 9. Engagement Process Feature Section */}
            <section className="py-[var(--spacing-section)] bg-gray-900 text-white">
                <SectionWrapper>
                    <div className="text-center mb-16">
                        <h2 className="text-[length:var(--font-h2)] font-bold mb-4 text-white">Engagement <span className="text-gradient-green-glow">Process</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Structured approach for productive discussions and alignment.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Initial Context", desc: "Understanding strategic fit" },
                            { step: "02", title: "Alignment", desc: "Defining scope and goals" },
                            { step: "03", title: "Technical", desc: "Deep-dive validation" },
                            { step: "04", title: "Pilot / Partner", desc: "Execution and deployment" }
                        ].map((item, i) => (
                            <div key={i} className="relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                                <div className="text-4xl font-bold text-brand-primary/20 mb-4 group-hover:text-brand-primary/40 transition-colors">{item.step}</div>
                                <h3 className="text-[16px] sm:text-[18px] font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </SectionWrapper>
            </section>

            {/* 10. CTA Section */}
            <section className="relative py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">Engage with Us</h2>
                    <p className="text-[15px] sm:text-[16px] text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        If you are evaluating hydrogen solutions with a focus on cost, scale, and industrial viability, we invite you to connect.
                    </p>
                    <Link href="mailto:info@gigacore.energy?subject=Request Executive Overview">
                        <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[220px] whitespace-nowrap shadow-glow">
                            Request Executive Overview
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
