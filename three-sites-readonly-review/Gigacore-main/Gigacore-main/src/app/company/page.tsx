"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";
import { ArrowRight, Target, Lightbulb, Zap, Rocket, ShieldCheck, UserCheck, Globe, Briefcase, CheckCircle } from "lucide-react";

export default function CompanyPage() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/company/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-tight text-white"
                    >
                        About <span className="text-gradient-green-glow">Gigacore</span>
                    </motion.h1>
                </SectionWrapper>
            </section>

            {/* 2. Intro Section */}
            <section className="py-[var(--spacing-section)] bg-white text-center">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto flex flex-col items-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-normal leading-relaxed text-gray-800 mb-8">
                            Gigacore is a climate-technology company focused on advancing next-generation hydrogen production systems designed for real-world industrial deployment.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[length:var(--font-body)] text-gray-600 mb-10 max-w-3xl leading-relaxed">
                            We address a fundamental challenge: how to produce clean hydrogen at the <span className="text-brand-primary font-bold">scale and cost required by industry</span>, without relying on incremental improvements to legacy technologies.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. Mission */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/company/Our%20Mission.jpg"
                imageAlt="Our Mission"
                subtitle="Purpose"
                title="Our Mission"
                content={
                    <>
                        <p className="mb-6">
                            To enable the global transition to clean energy by developing innovative hydrogen technologies that are economically viable, industrially scalable, and deployable where energy demand already exists.
                        </p>
                        <div className="p-4 bg-white rounded-lg border-l-4 border-brand-primary shadow-sm">
                            <p className="text-brand-primary font-medium italic">
                                "Clean energy solutions must compete on fundamentals - cost, reliability, and scale - to achieve lasting impact."
                            </p>
                        </div>
                    </>
                }
            />

            {/* 4. Vision */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/company/Our%20Vision.jpg"
                imageAlt="Our Vision"
                subtitle="Aspiration"
                title="Our Vision"
                content={
                    <>
                        <p className="mb-6">
                            Gigacore envisions a future where green hydrogen is not a niche solution, but a core industrial input. We see a world where energy infrastructure is decoupled from carbon intensity without compromising on reliability or economic output.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                                Establish new global benchmarks for efficiency
                            </li>
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                                Support large-scale industrial decarbonization
                            </li>
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" />
                                Prioritize deployment and impact over demonstration
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 5. Why Gigacore Exists */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/company/Why%20Giga.jpg"
                imageAlt="The Challenge"
                subtitle="The Challenge"
                title="Why Gigacore Exists"
                content={
                    <>
                        <p className="mb-6">
                            Conventional hydrogen production methods struggle to meet the cost thresholds required for widespread industrial adoption.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0 text-brand-primary font-bold text-sm">1</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Molecular Rethink</h4>
                                    <p className="text-gray-600 text-sm">Rethinking how energy is delivered at the molecular level.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0 text-brand-primary font-bold text-sm">2</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Advanced Physics</h4>
                                    <p className="text-gray-600 text-sm">Applying a proprietary next-gen electrochemical reactor architecture.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-brand-primary/10 rounded-full flex items-center justify-center shrink-0 text-brand-primary font-bold text-sm">3</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Scalability First</h4>
                                    <p className="text-gray-600 text-sm">Designing systems around efficiency and massive scalability.</p>
                                </div>
                            </div>
                        </div>
                    </>
                }
            />

            {/* 6. Technology Philosophy */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/company/Technology%20Philosophy.jpg"
                imageAlt="Philosophy"
                subtitle="Innovation"
                title="Technology Philosophy"
                content={
                    <>
                        <p className="mb-6">
                            Rather than optimizing existing electrochemical systems, we focus on alternative physical mechanisms that enable hydrogen separation using less total energy.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" /> Precision energy delivery
                            </li>
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" /> Moderate operating conditions
                            </li>
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" /> Distributed interaction architectures
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 7. Industrial Deployment */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/company/Built%20for%20Industrial%20Deployment.jpg"
                imageAlt="Deployment"
                subtitle="Execution"
                title="Industrial Deployment"
                content={
                    <>
                        <p className="mb-6">
                            The objective is to move beyond laboratory success toward commercially relevant, infrastructure-grade systems.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" /> Continuous operation requirements
                            </li>
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" /> EPC compatibility
                            </li>
                            <li className="flex gap-3 items-center text-gray-700 font-medium">
                                <CheckCircle className="w-5 h-5 text-brand-primary shrink-0" /> Third-party validation
                            </li>
                        </ul>
                    </>
                }
            />

            {/* 8. Global Impact */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/company/Global%20Impact,%20Practical%20Focus.webp"
                imageAlt="Global Impact"
                subtitle="Reach"
                title="Global Impact, Practical Focus"
                content={
                    <>
                        <p className="mb-6">
                            While the technology has global relevance, deployment strategy emphasizes regions and sectors where hydrogen demand is immediate and substantial.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Fertilizers</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Refining</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Metals</span>
                            <span className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 font-medium shadow-sm">Manufacturing Clusters</span>
                        </div>
                    </>
                }
            />

            {/* NEW: Global Commercialisation Phases */}
            <section className="py-[var(--spacing-section)] bg-[#0b1320] border-y border-brand-primary/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04] pointer-events-none" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <motion.div variants={fadeUp} className="text-center mb-14">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Deployment Strategy</span>
                            <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-4">
                                Global Commercialisation <span className="text-brand-primary">Pathway</span>
                            </h2>
                            <p className="text-[15px] sm:text-[16px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                Following pilot validation in India, expansion proceeds in three structured phases — each building on operational data, commercial relationships, and validated economics from the prior stage.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    phase: "Phase 1",
                                    years: "Years 1–3",
                                    region: "India",
                                    flag: "🇮🇳",
                                    title: "Validation & First Commercial Systems",
                                    color: "border-brand-primary",
                                    items: [
                                        "Pilot deployment and independent certification",
                                        "First commercial modular systems deployed",
                                        "Ammonia and refining sector offtake",
                                        "India SIGHT grant applications ($2–$5M target)",
                                    ],
                                    highlight: true,
                                },
                                {
                                    phase: "Phase 2",
                                    years: "Years 3–4",
                                    region: "GCC",
                                    flag: "🇦🇪",
                                    title: "Joint-Venture Regional Expansion",
                                    color: "border-white/20",
                                    items: [
                                        "JV deployments with regional EPC partners",
                                        "Green ammonia export infrastructure",
                                        "Co-located renewable power agreements",
                                        "Multi-site modular manufacturing in region",
                                    ],
                                    highlight: false,
                                },
                                {
                                    phase: "Phase 3",
                                    years: "Years 4–5",
                                    region: "Europe & US",
                                    flag: "🌐",
                                    title: "Industrial Decarbonisation Projects",
                                    color: "border-white/20",
                                    items: [
                                        "EU hydrogen strategy alignment",
                                        "US IRA-supported industrial projects",
                                        "Refining and steel sector decarbonisation",
                                        "IP acquisition or licensing opportunities",
                                    ],
                                    highlight: false,
                                },
                            ].map((item, i) => (
                                <div key={i} className={`rounded-2xl border ${item.color} p-8 flex flex-col ${item.highlight ? "bg-brand-primary/10" : "bg-white/5"} hover:bg-white/10 transition-all duration-300`}>
                                    <div className="flex items-center justify-between mb-6">
                                        <span className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${item.highlight ? "bg-brand-primary text-white" : "bg-white/10 text-gray-400"}`}>{item.phase}</span>
                                        <span className="text-2xl">{item.flag}</span>
                                    </div>
                                    <div className="text-brand-primary text-[12px] font-bold uppercase tracking-wider mb-1">{item.years}</div>
                                    <div className="text-gray-300 text-[14px] font-bold mb-1">{item.region}</div>
                                    <h3 className="text-white text-[16px] font-bold mb-4 leading-snug">{item.title}</h3>
                                    <ul className="space-y-2 mt-auto">
                                        {item.items.map((point, j) => (
                                            <li key={j} className="flex items-start gap-2 text-gray-400 text-[13px]">
                                                <CheckCircle className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 9. Credibility */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-primary">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h2 className="text-[length:var(--font-h1)] font-bold mb-6 text-brand-secondary">Commitment to <span className="text-gradient-green-glow">Credibility</span></h2>
                        <p className="text-[15px] sm:text-[16px] text-gray-600 mb-12 leading-relaxed">
                            We prioritize long-term credibility over short-term visibility. We build trust through measurable performance, transparent milestones, and structured validation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <UserCheck className="w-6 h-6 text-brand-primary" />
                                    <h4 className="text-[16px] sm:text-[18px] font-bold text-brand-secondary">Collaboration-Driven Growth</h4>
                                </div>
                                <p className="text-gray-600 mb-4">Growth is pursued through partnerships that align technical capability with execution scale.</p>
                                <ul className="space-y-2">
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Industrial operators</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Public-sector enterprises</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Infrastructure developers</li>
                                </ul>
                            </div>
                            <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="flex items-center gap-3 mb-4">
                                    <Rocket className="w-6 h-6 text-brand-primary" />
                                    <h4 className="text-[16px] sm:text-[18px] font-bold text-brand-secondary">Looking Ahead</h4>
                                </div>
                                <p className="text-gray-600 mb-4">The company’s journey is defined not by hype, but by execution.</p>
                                <ul className="space-y-2">
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Advancing technology readiness</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Performance at scale</li>
                                    <li className="text-sm text-gray-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-primary rounded-full" />Enabling industrial adoption</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 10. CTA Section */}
            <section className="relative py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">Engage with Gigacore</h2>
                    <p className="text-[15px] sm:text-[16px] text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        We work with partners who approach hydrogen as an industrial input and an infrastructure asset.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[220px] whitespace-nowrap shadow-glow">
                            Strategic Discussions
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
