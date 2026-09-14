"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";
import { ArrowRight, Building2, Factory, Users, Microscope, Coins, CheckCircle, Target, Zap } from "lucide-react";

export default function PartnershipPage() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/patnership/hero%20section.jpg')] bg-cover bg-center opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
                <SectionWrapper className="relative h-full flex flex-col justify-center items-center text-center text-white z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[length:var(--font-hero)] font-bold tracking-tight mb-6 leading-[1.1] text-white"
                    >
                        Partnerships: <span className="text-brand-primary">Built to Scale Through Collaboration</span>
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
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-normal leading-relaxed text-gray-800 mb-8">
                            Large-scale deployment requires coordinated execution across technology, infrastructure, and capital.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[length:var(--font-body)] text-gray-600 mb-10 max-w-3xl leading-relaxed">
                            Our platform is designed for deployment with partners - combining technical capability with industrial reach. The objective is simple: <span className="text-brand-primary font-bold">Move from pilot to disciplined commercial scale.</span>
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. Partnership Philosophy */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/patnership/Partnership%20Philosophy.avif"
                imageAlt="Partnership Philosophy"
                subtitle="Philosophy"
                title="Partnership Philosophy"
                content={
                    <>
                        <p className="mb-6">
                            Partnerships are structured around shared execution - not vendor relationships.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Guiding principles:</h4>
                        <ul className="space-y-2">
                            {[
                                "Long-term alignment over transactional engagement",
                                "Clear division of roles and responsibilities",
                                "Transparency in technical and economic validation",
                                "Deployment at meaningful industrial scale"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 4. Industrial & Offtake Partners */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/patnership/Industrial%20&%20Offtake%20Partners.jpg"
                imageAlt="Industrial Partners"
                subtitle="Core Partners"
                title="Industrial & Offtake Partners"
                content={
                    <>
                        <p className="mb-6">
                            Industrial partners anchor deployment by providing existing hydrogen demand, real operational environments, and continuous offtake pathways.
                        </p>
                        <p className="text-base text-gray-500 font-bold mb-4">Priority sectors:</p>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {["Fertilizers and ammonia", "Refining and petrochemicals", "Steel and metals processing", "Industrial clusters"].map((sector, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-gray-200 text-gray-700 shadow-sm"
                                >
                                    {sector}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-800 font-medium border-l-4 border-brand-primary pl-4">
                            Deployment is driven by <strong>demand certainty</strong> - not speculative projections.
                        </p>
                    </>
                }
            />

            {/* 5. Public-Sector & PSU Collaboration */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/patnership/Public-Sector%20&%20PSU%20Collaboration.jpg"
                imageAlt="Public Sector"
                subtitle="Nation Building"
                title="Public-Sector & PSU Collaboration"
                content={
                    <>
                        <p className="mb-6">
                            Public-sector enterprises play a critical role where scale, reliability, and national priorities intersect.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Collaboration areas:</h4>
                        <ul className="space-y-2">
                            {[
                                "Pilot and demonstration facilities",
                                "Industrial retrofits and brownfield integration",
                                "Large-scale hydrogen and ammonia projects",
                                "Alignment with national hydrogen programs"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 6. EPC & Infrastructure Partners */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/patnership/EPC%20&%20Infrastructure%20Partners.jpg"
                imageAlt="EPC Partners"
                subtitle="Execution"
                title="EPC & Infrastructure Partners"
                content={
                    <>
                        <p className="mb-6">
                            EPC partners translate technology into bankable infrastructure. The platform integrates into <strong>established EPC workflows</strong> - not bespoke experimental builds.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Focus areas:</h4>
                        <ul className="space-y-2">
                            {[
                                "System integration and plant design",
                                "Construction and commissioning",
                                "Safety and regulatory compliance",
                                "Multi-site replication"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 7. Manufacturing & Localization Partners */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/patnership/Manufacturing & Localization Partners.jpg"
                imageAlt="Manufacturing"
                subtitle="Supply Chain"
                title="Manufacturing & Localization Partners"
                content={
                    <>
                        <p className="mb-6">
                            Scalable deployment requires aligned manufacturing capability. This enables <strong>predictable scaling</strong> aligned with domestic manufacturing priorities.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Partnership scope:</h4>
                        <ul className="space-y-2">
                            {[
                                "Modular system fabrication",
                                "Localization of components",
                                "Standardization and quality control",
                                "Cost optimization at scale"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 8. Research & Validation Partners */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/patnership/Research%20&%20Validation%20Partners.jpg"
                imageAlt="Research Partners"
                subtitle="Validation"
                title="Research & Validation Partners"
                content={
                    <>
                        <p className="mb-6">
                            Independent validation underpins industrial adoption and financing. Credibility is built through <strong>validation</strong> - not claims.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Research collaboration supports:</h4>
                        <ul className="space-y-2">
                            {[
                                "Performance verification",
                                "Long-duration reliability testing",
                                "Third-party technical review",
                                "Continuous optimization"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* 9. Capital & Infrastructure Investors */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/patnership/Capital & Infrastructure Investors.jpg"
                imageAlt="Investors"
                subtitle="Finance"
                title="Capital & Infrastructure Investors"
                content={
                    <>
                        <p className="mb-6">
                            Hydrogen infrastructure requires patient, infrastructure-aligned capital. The platform is structured for <strong>bankable assets</strong>.
                        </p>
                        <h4 className="font-bold text-gray-900 mb-4">Investor collaboration focuses on:</h4>
                        <ul className="space-y-2">
                            {[
                                "Project-level structures",
                                "Infrastructure-grade risk assessment",
                                "Phased capital deployment",
                                "Long-term offtake alignment"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-gray-700 font-medium items-start">
                                    <CheckCircle className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </>
                }
            />

            {/* NEW: Revenue Streams */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-y border-brand-primary/5">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <motion.div variants={fadeUp} className="text-center mb-14">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Business Model</span>
                            <h2 className="text-[length:var(--font-h1)] font-bold text-brand-secondary mb-4">
                                Three Revenue <span className="text-brand-primary">Streams</span>
                            </h2>
                            <p className="text-[15px] sm:text-[16px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
                                GigaCore's revenue model is structured around the deployment and long-term servicing of modular hydrogen production systems — creating both upfront equipment revenue and durable recurring income.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    number: "01",
                                    title: "Equipment Sales",
                                    icon: Factory,
                                    tag: "Upfront Capital Revenue",
                                    desc: "Sale of standardised modular hydrogen production systems to industrial operators. Each base module produces approximately 1 kg H₂/hr and is manufactured as a standardised containerised unit — enabling mass production and rapid deployment.",
                                    highlight: ["Modular 1 kg/hr containerised units", "Scalable factory production model", "Industrial-grade materials — no PGMs"],
                                },
                                {
                                    number: "02",
                                    title: "O&M Contracts",
                                    icon: Coins,
                                    tag: "Recurring Annual Revenue",
                                    desc: "Long-term Operations & Maintenance service agreements modelled at approximately 8% of system value annually. As the installed fleet grows, this revenue stream compounds — providing durable income independent of new equipment sales.",
                                    highlight: ["~8% of system value per year", "Long-term service agreements", "Grows with installed fleet size"],
                                },
                                {
                                    number: "03",
                                    title: "Joint-Venture Deployment",
                                    icon: Building2,
                                    tag: "Project Revenue Share",
                                    desc: "Industrial partners finance plant construction and hydrogen offtake while GigaCore provides reactor technology, engineering integration, and operational oversight. Hydrogen plants are expected to target 10,000–20,000 tonnes annually at $30M–$60M per facility revenue.",
                                    highlight: ["Partner-financed plant construction", "$30M–$60M revenue per facility at $3/kg", "GCC and export market focus"],
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300 flex flex-col group">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="w-6 h-6" strokeWidth={1.5} />
                                        </div>
                                        <span className="text-[40px] font-black text-gray-100 leading-none">{item.number}</span>
                                    </div>
                                    <div className="text-[11px] font-bold uppercase tracking-widest text-brand-primary mb-2">{item.tag}</div>
                                    <h3 className="text-[20px] font-bold text-brand-secondary mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-[14px] leading-relaxed mb-5 flex-1">{item.desc}</p>
                                    <ul className="space-y-2 border-t border-gray-100 pt-4 mt-auto">
                                        {item.highlight.map((point, j) => (
                                            <li key={j} className="flex items-start gap-2 text-gray-600 text-[13px] font-medium">
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

            {/* 10. Partnership Models & Deployment Pathway (Feature Section) */}
            <section className="relative py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.2)] bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
                <SectionWrapper className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Partnership Models */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl md:text-4xl font-bold mb-4 text-brand-secondary tracking-tight"
                            >
                                Partnership <span className="text-brand-primary">Models</span>
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className="text-[16px] text-gray-600 leading-relaxed mb-10"
                            >
                                Engagement structures are tailored to partner roles and objectives:
                            </motion.p>

                            <div className="space-y-4">
                                {[
                                    "Pilot and demonstration collaborations",
                                    "Joint development and deployment",
                                    "Licensing and manufacturing partnerships",
                                    "Project-level joint ventures"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        className="group flex gap-4 items-center p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-brand-primary/20 transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-[#E5F3EB] flex items-center justify-center text-brand-primary shrink-0 transition-transform group-hover:scale-110 duration-300">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <span className="text-gray-800 font-semibold group-hover:text-brand-secondary transition-colors">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* From Partnership to Deployment */}
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <motion.h2
                                variants={fadeUp}
                                className="text-3xl md:text-4xl font-bold mb-4 text-brand-secondary tracking-tight"
                            >
                                From Partnership to <span className="text-brand-primary">Deployment</span>
                            </motion.h2>
                            <motion.p
                                variants={fadeUp}
                                className="text-[16px] text-gray-600 leading-relaxed mb-10"
                            >
                                The pathway from engagement to operation is structured and disciplined:
                            </motion.p>

                            <div className="relative space-y-6">
                                {/* Connecting timeline line */}
                                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-primary via-brand-primary/50 to-transparent hidden sm:block" />

                                {[
                                    { step: "1", title: "Technical and economic alignment" },
                                    { step: "2", title: "Pilot or demonstration deployment" },
                                    { step: "3", title: "Performance validation" },
                                    { step: "4", title: "Commercial-scale rollout" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={fadeUp}
                                        className="relative flex gap-5 md:gap-6 items-center group"
                                    >
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-primary font-bold flex-shrink-0 z-10 border-2 border-brand-primary relative shadow-[0_0_15px_rgba(0,213,99,0.15)] group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                                            {item.step}
                                        </div>
                                        <div className="flex-1 p-5 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] group-hover:-translate-y-1 transition-all duration-300">
                                            <p className="text-gray-800 font-semibold text-[16px]">{item.title}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </section>

            {/* 11. Engage as a Partner - CTA */}
            <section className="relative py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">Engage as a Partner</h2>
                    <p className="text-[15px] sm:text-[16px] text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Engagement is focused on organizations seeking deployable, scalable hydrogen solutions.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[220px] whitespace-nowrap shadow-glow">
                            Contact Us
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>

        </main>
    );
}
