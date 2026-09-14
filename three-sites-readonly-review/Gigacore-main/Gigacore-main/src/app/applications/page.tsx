"use client";
import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";
import {
    Factory, Zap, TrendingUp, Beaker, CheckCircle, Server, Flame, Ship,
} from "lucide-react";

/* ─── reusable check-list item ─────────────────────────────── */
function CheckItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3 font-medium bg-gradient-to-r from-brand-primary/5 to-white p-3 rounded-lg border border-brand-primary/10 shadow-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-brand-primary shrink-0" />
            {text}
        </li>
    );
}

/* ─── section image ─────────────────────────────────────────── */
function SectionImage({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" unoptimized />
        </div>
    );
}

export default function ApplicationsPage() {
    return (
        <main className="bg-white">

            {/* ── 1. Hero ─────────────────────────────────────────────── */}
            <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/application/hero%20section.png')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-brand-primary text-[13px] font-bold tracking-widest uppercase mb-6 block"
                    >
                        Hydrogen Applications
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-[1.1] text-white"
                    >
                        Hydrogen Where It Is{" "}
                        <span className="text-brand-primary">Actually Used</span>
                    </motion.h1>
                </SectionWrapper>
            </section>

            {/* ── 2. Intro ─────────────────────────────────────────────── */}
            <section className="py-[var(--spacing-section)] bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-normal leading-relaxed text-gray-800 mb-8">
                            The platform is designed for applications where hydrogen demand already exists at scale - where cost, reliability, and integration determine adoption.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[length:var(--font-body)] text-gray-600 mb-10 max-w-3xl leading-relaxed">
                            Rather than targeting speculative or niche use cases, deployment is focused on{" "}
                            <span className="text-brand-primary font-bold">industrial and infrastructure sectors</span>{" "}
                            with continuous hydrogen consumption and clear economic drivers.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* ── 3. Data Centers ──────────────────────────────────────── */}
            <section id="data-centers" className="py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] overflow-hidden bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <SectionImage src="/application/Data%20Centers.jpg" alt="Data Centers" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-[15px] mb-4 block">Power-Constrained Digital Infrastructure</span>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-8 tracking-tight leading-[1.1] text-[#001F1B]">Data Centers</h2>
                            <div className="text-lg text-gray-700 space-y-4">
                                <p>
                                    Access to reliable power is becoming the primary limitation for new data center development. As AI workloads increase power intensity, grid availability is reshaping site selection and expansion timelines.
                                </p>
                                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider text-brand-primary pt-2">Hydrogen-Based Onsite Generation Enables</h4>
                                <ul className="space-y-1">
                                    {[
                                        "Faster time to power deployment",
                                        "Supplemental or primary onsite power",
                                        "Reduced grid dependency",
                                        "Modular scalability from mid-scale to large campuses",
                                    ].map((item, i) => <CheckItem key={i} text={item} />)}
                                </ul>
                                <p className="text-[15px] text-gray-600 leading-relaxed pt-2">
                                    Hydrogen-integrated power systems can support baseload and backup power, microgrid integration, and combined heat and power (CHP) systems.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </section>

            {/* ═══════════════════════════════════════════════════════════
                ESTABLISHED INDUSTRIAL APPLICATIONS
            ═══════════════════════════════════════════════════════════ */}

            {/* ── 4. Industrial Hydrogen Feedstock ─────────────────────── */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/application/Hydrogen is a core input for multiple industrial processes..jpg"
                imageAlt="Industrial Feedstock"
                subtitle="Core Industrial Input"
                title="Industrial Hydrogen Feedstock"
                content={
                    <>
                        <p className="mb-6">
                            Hydrogen is a foundational input across refining, chemicals, steel, and heavy industry. Replacing fossil-derived hydrogen requires continuous, industrial-grade systems operating at competitive cost.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider text-brand-primary">Applicable Use Cases</h4>
                        <ul className="space-y-1 mb-6">
                            {[
                                "Chemical & petrochemical feedstock",
                                "Process hydrogen for manufacturing",
                                "Replacement of captive grey hydrogen systems",
                                "Integration with existing hydrogen infrastructure",
                            ].map((item, i) => <CheckItem key={i} text={item} />)}
                        </ul>
                        <p className="text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4 text-[15px]">
                            Lower energy intensity directly improves the economic feasibility of industrial decarbonization at scale.
                        </p>
                    </>
                }
            />

            {/* ── 5. Green Ammonia ─────────────────────────────────────── */}
            <div id="green-ammonia">
                <SplitSection
                    theme="light"
                    imagePosition="left"
                    imageSrc="/application/Green Ammonia.png"
                    imageAlt="Green Ammonia"
                    unoptimized
                    subtitle="Fertilizer & Energy Export"
                    title="Green Ammonia"
                    content={
                        <>
                            <p className="mb-6">
                                Ammonia remains one of the largest global hydrogen sinks and a cornerstone of fertilizer production and emerging energy export markets.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider text-brand-primary">Platform Capabilities</h4>
                            <ul className="space-y-1 mb-6">
                                {[
                                    "Cost-competitive hydrogen supply",
                                    "Continuous, baseload operation",
                                    "Integration with large ammonia synthesis plants",
                                ].map((item, i) => <CheckItem key={i} text={item} />)}
                            </ul>
                            <p className="text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4 text-[15px]">
                                Competitive hydrogen economics enable decarbonization without disrupting plant margins.
                            </p>
                        </>
                    }
                />
            </div>

            {/* ── 6. Green Steel ───────────────────────────────────────── */}
            <div id="green-steel">
                <SplitSection
                    theme="gray"
                    imagePosition="right"
                    imageSrc="/application/Steel%20and%20Metals%20Processing.webp"
                    imageAlt="Green Steel"
                    subtitle="Heavy Industry Transition"
                    title="Green Steel"
                    content={
                        <>
                            <p className="mb-6">
                                Steelmaking is structurally difficult to decarbonize due to high energy demand and metallurgical constraints.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider text-brand-primary">Hydrogen Enables</h4>
                            <ul className="space-y-1 mb-6">
                                {[
                                    "Direct Reduced Iron (DRI) pathways",
                                    "Partial fuel substitution",
                                    "Integration with existing blast or electric arc systems",
                                ].map((item, i) => <CheckItem key={i} text={item} />)}
                            </ul>
                            <p className="text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4 text-[15px]">
                                Modular deployment supports phased adoption without full plant redesign.
                            </p>
                        </>
                    }
                />
            </div>

            {/* ── 7. Refining & Petrochemicals ─────────────────────────── */}
            <div id="refining-petrochemicals">
                <SplitSection
                    theme="light"
                    imagePosition="left"
                    imageSrc="/application/Refining%20%26%20Petrochemicals.jpg"
                    imageAlt="Refining"
                    unoptimized
                    subtitle="Early Adoption Sector"
                    title="Refining & Petrochemicals"
                    content={
                        <>
                            <p className="mb-6">
                                Refineries are natural early adopters due to constant hydrogen demand and existing process integration.
                            </p>
                            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider text-brand-primary">Deployment Models</h4>
                            <ul className="space-y-1 mb-6">
                                {[
                                    "On-site hydrogen generation",
                                    "Partial grey hydrogen replacement",
                                    "Renewable integration for emissions reduction",
                                ].map((item, i) => <CheckItem key={i} text={item} />)}
                            </ul>
                            <p className="text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4 text-[15px]">
                                Designed to align with refinery uptime, reliability, and safety standards.
                            </p>
                        </>
                    }
                />
            </div>

            {/* ── 8. Utilities & Grid Support ──────────────────────────── */}
            <section className="py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] overflow-hidden bg-gray-50">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
                        {/* Image - first in DOM so it appears first on mobile */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-2"
                        >
                            <SectionImage src="/application/Utilities%20%26%20Grid%20Support.jpg" alt="Utilities &amp; Grid Support" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-center lg:order-1"
                        >
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-[15px] mb-4 block">Decentralized Grid Augmentation</span>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-8 tracking-tight leading-[1.1] text-[#001F1B]">Utilities &amp; Grid Support</h2>
                            <div className="text-lg text-gray-700 space-y-4">
                                <p>
                                    Rising electricity demand and decarbonization targets are straining grid infrastructure. Hydrogen systems provide a modular, scalable augmentation layer.
                                </p>
                                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider text-brand-primary pt-2">Hydrogen Systems Can Support</h4>
                                <ul className="space-y-1">
                                    {[
                                        "Peak load management",
                                        "Grid resilience enhancement",
                                        "Microgrid deployment",
                                        "Distributed generation",
                                    ].map((item, i) => <CheckItem key={i} text={item} />)}
                                </ul>
                                <p className="text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4 text-[15px]">
                                    Modular architecture enables scalable deployment without stranded asset risk.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </section>

            {/* ── 9. Oil & Gas ─────────────────────────────────────────── */}
            <section className="py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] overflow-hidden bg-white">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <SectionImage src="/application/Oil%20%26%20Gas.jpg" alt="Oil & Gas" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-center"
                        >
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-[15px] mb-4 block">Energy Transition Within Existing Infrastructure</span>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-8 tracking-tight leading-[1.1] text-[#001F1B]">Oil & Gas</h2>
                            <div className="text-lg text-gray-700 space-y-4">
                                <p>
                                    Oil & gas operators face growing pressure to reduce emissions while maintaining operational reliability. Hydrogen provides a viable pathway that integrates with existing infrastructure.
                                </p>
                                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider text-brand-primary pt-2">Hydrogen Solutions Enable</h4>
                                <ul className="space-y-1">
                                    {[
                                        "Low-emission onsite power",
                                        "Combustion replacement pathways",
                                        "Emissions reduction across upstream and downstream assets",
                                        "Integration with natural gas, LNG, or synthetic fuels",
                                    ].map((item, i) => <CheckItem key={i} text={item} />)}
                                </ul>
                                <p className="text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4 text-[15px]">
                                    Reliable onsite generation improves resilience in remote or grid-limited environments.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </section>

            {/* ── 10. Marine & Heavy Transport ─────────────────────────── */}
            <section className="py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] overflow-hidden bg-gray-50">
                <SectionWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
                        {/* Image - first in DOM so it appears first on mobile */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="lg:order-2"
                        >
                            <SectionImage src="/application/Marine%20%26%20Heavy%20Transport.jpg" alt="Marine &amp; Heavy Transport" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col justify-center lg:order-1"
                        >
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-[15px] mb-4 block">Low-Emission Auxiliary and Propulsion Power</span>
                            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-8 tracking-tight leading-[1.1] text-[#001F1B]">Marine &amp; Heavy Transport</h2>
                            <div className="text-lg text-gray-700 space-y-4">
                                <p>
                                    Maritime regulations are accelerating the transition away from diesel-based onboard systems. Hydrogen offers a clean, modular alternative suited to marine environments.
                                </p>
                                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider text-brand-primary pt-2">Hydrogen Supports</h4>
                                <ul className="space-y-1">
                                    {[
                                        "Auxiliary vessel power",
                                        "Hybrid propulsion systems",
                                        "Integration with ammonia or synthetic marine fuels",
                                        "Low-noise, low-emission operation",
                                    ].map((item, i) => <CheckItem key={i} text={item} />)}
                                </ul>
                                <p className="text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4 text-[15px]">
                                    Compact, modular systems are well suited for space-constrained environments.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </section>

            {/* ── 11. On-Site & Distributed Hydrogen ───────────────────── */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/application/On-Site%20%26%20Distributed%20Hydrogen.jpg"
                imageAlt="Distributed Hydrogen"
                unoptimized
                subtitle="Logistics Optimization"
                title="On-Site & Distributed Hydrogen"
                content={
                    <>
                        <p className="mb-6">
                            Transport, storage, and compression significantly increase hydrogen cost and complexity. On-site generation eliminates these layers.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider text-brand-primary">On-Site Generation Provides</h4>
                        <ul className="space-y-1">
                            {[
                                "Reduced logistics burden",
                                "Improved energy security",
                                "Lower compression and transport requirements",
                                "Scalability aligned to demand growth",
                            ].map((item, i) => <CheckItem key={i} text={item} />)}
                        </ul>
                        <p className="mt-4 text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4 text-[15px]">
                            Modular systems enable distributed deployment without centralized infrastructure dependence.
                        </p>
                    </>
                }
            />

            {/* ── 12. Energy Storage & Sector Coupling ─────────────────── */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/application/Energy%20Storage%20and%20Conversion%20Pathways.jpg"
                imageAlt="Energy Storage"
                subtitle="Hydrogen as Energy Carrier"
                title="Energy Storage & Sector Coupling"
                content={
                    <>
                        <p className="mb-6">
                            Hydrogen enables long-duration energy storage and sector integration - bridging renewable generation with industrial and power demand.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider text-brand-primary">Relevant Pathways</h4>
                        <ul className="space-y-1">
                            {[
                                "H₂-to-ammonia conversion",
                                "Industrial heat substitution",
                                "Hybrid renewable integration",
                                "Carbon capture compatibility",
                            ].map((item, i) => <CheckItem key={i} text={item} />)}
                        </ul>
                        <p className="mt-4 text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4 text-[15px]">
                            Designed to remain compatible with evolving downstream technologies.
                        </p>
                    </>
                }
            />

            {/* ── 13. India-First ──────────────────────────────────────── */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/application/India-First%20Industrial%20Deployment.jpg"
                imageAlt="India Deployment"
                subtitle="Strategy"
                title="India-First Deployment"
                content={
                    <>
                        <p className="mb-6">
                            India presents a unique combination of large and growing hydrogen demand, acute cost sensitivity, and strong policy-driven decarbonization momentum.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider text-brand-primary">India Offers</h4>
                        <ul className="space-y-1 mb-6">
                            {[
                                "High existing hydrogen demand",
                                "Strong cost sensitivity across industry",
                                "Policy-driven decarbonization momentum",
                            ].map((item, i) => <CheckItem key={i} text={item} />)}
                        </ul>
                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider text-brand-primary">Priority Sectors</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Fertilizer & Ammonia", "Public Refining", "Steel", "Industrial Clusters", "Emerging Data Infrastructure"].map((s) => (
                                <span key={s} className="px-3 py-1.5 bg-brand-primary/5 border border-brand-primary/20 rounded-lg text-sm text-gray-700 font-medium">
                                    {s}
                                </span>
                            ))}
                        </div>
                        <p className="mt-5 text-brand-primary font-medium italic border-l-4 border-brand-primary pl-4 text-[15px]">
                            Deployment targets regions where hydrogen demand already exists and cost parity drives adoption.
                        </p>
                    </>
                }
            />

            {/* ── 14. Globally Scalable ────────────────────────────────── */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/application/Globally%20Scalable%20Use%20Cases.png"
                imageAlt="Global Scale"
                subtitle="Global Reach"
                title="Globally Scalable Use Cases"
                content={
                    <>
                        <p className="mb-6">
                            The same application logic applies globally where industries face rising pressure to decarbonize without eroding margins.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider text-brand-primary">Industries Facing</h4>
                        <ul className="space-y-1 mb-6">
                            {[
                                "Rising decarbonization mandates",
                                "Grid capacity constraints",
                                "Margin pressure from fossil alternatives",
                                "Infrastructure bottlenecks",
                            ].map((item, i) => <CheckItem key={i} text={item} />)}
                        </ul>
                        <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider text-brand-primary">Target Markets</h4>
                        <div className="flex flex-wrap gap-2">
                            {["Export Hydrogen Hubs", "Industrial Decarbonization Zones", "Manufacturing Clusters", "AI-Driven Data Center Regions"].map((s) => (
                                <span key={s} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </>
                }
            />

            {/* ── 15. Application-Driven Deployment Strategy ───────────── */}
            <section className="py-[var(--spacing-section)] bg-gray-900 text-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.span variants={fadeUp} className="text-brand-primary text-[13px] font-bold tracking-widest uppercase mb-4 block">
                            Deployment Philosophy
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
                            Application-Driven{" "}
                            <span className="text-brand-primary">Deployment Strategy</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[15px] text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed">
                            Deployment is prioritized where hydrogen demand already exists, cost sensitivity is high, and scale can be achieved through industrial partnerships.
                        </motion.p>
                        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: Beaker, title: "Existing Demand", desc: "Replacement of grey hydrogen users" },
                                { icon: Server, title: "Power Constraints", desc: "Where grid access limits expansion" },
                                { icon: TrendingUp, title: "High Cost Sensitivity", desc: "Industries where OPEX dominates decisions" },
                                { icon: Factory, title: "Industrial Scale", desc: "Partnership-driven large-volume consumption" },
                            ].map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-brand-primary/30 transition-all duration-300 text-left">
                                    <Icon className="w-8 h-8 text-brand-primary mb-4" />
                                    <h4 className="font-bold mb-2 text-[15px] text-white">{title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* ── 16. CTA ──────────────────────────────────────────────── */}
            <section className="relative py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">
                        The Market is Ready
                    </h2>
                    <p className="text-[15px] text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We don&apos;t build for hypothetical futures. We build for immediate industrial demand. See the market landscape.
                    </p>
                    <Link href="/market">
                        <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[220px] whitespace-nowrap shadow-glow">
                            Understand the Market
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
