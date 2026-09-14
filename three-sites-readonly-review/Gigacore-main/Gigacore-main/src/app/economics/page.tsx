"use client";
import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SplitSection from "@/components/ui/SplitSection";
import MergedHero from "@/components/economics/MergedHero";

export default function EconomicsPage() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <MergedHero />

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
                            Across all hydrogen production pathways, <span className="font-bold text-gray-900">electricity consumption</span> is the single largest determinant of cost.
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-[length:var(--font-body)] text-gray-600 mb-10 max-w-3xl leading-relaxed">
                            Conventional water electrolysis typically requires ~50 kWh of electricity per kilogram of hydrogen, which directly translates into high operating costs and sensitivity to power prices.
                        </motion.p>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. The Cost of Production */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/economics/Conventional Hydrogen Cost Structure.avif"
                imageAlt="Cost Structure"
                subtitle="OPEX Challenge"
                title="The Cost of Production"
                content={
                    <>
                        <p>
                            For green hydrogen to compete with fossil-derived inputs, the Levelized Cost of Hydrogen (LCOH) must drop significantly. Currently, <strong>70-80% of the LCOH</strong> for electrolytic hydrogen is purely the cost of electricity.
                        </p>
                        <p>
                            Even with free renewable energy, the capital cost (CAPEX) of electrolyzers and the low utilization rates of intermittent power sources make the economics challenging.
                        </p>
                    </>
                }
            />

            {/* 4. The Capital Problem */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/economics/Capital%20Efficiency%20%26%20System%20Simplicity.jpg"
                imageAlt="Capital Efficiency"
                unoptimized
                subtitle="CAPEX Barrier"
                title="The Capital Problem"
                content={
                    <>
                        <p>
                            Traditional electrolyzers are complex, material-intensive machines that require expensive stacks, membranes, and catalysts.
                        </p>
                        <ul className="space-y-4 mt-4">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                                <span>High reliance on Platinum Group Metals (PGMs)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                                <span>Complex balance of plant (BOP)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                                <span>Design life limitations due to membrane degradation</span>
                            </li>
                        </ul>
                    </>
                }
            />



            {/* 5. Energy Efficiency */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/economics/Radical Efficiency.png"
                imageAlt="OPEX Advantage"
                subtitle="The Solution"
                title="Radical Efficiency"
                content={
                    <>
                        <p>
                            Gigacore addresses the root cause of high LCOH by fundamentally reducing the energy required to split water.
                        </p>
                        <p className="border-l-4 border-brand-primary pl-4 py-2 font-medium text-brand-secondary">
                            By bypassing the thermodynamic barriers of conventional electrolysis, our platform targets a production consumption of <strong>&lt; 40 kWh/kg</strong>.
                        </p>
                        <p>
                            This 20% reduction in energy intensity effectively decouples hydrogen production from peak power volatility.
                        </p>
                    </>
                }
            />

            {/* 6. LCOH Impact */}
            <SplitSection
                theme="gray"
                imagePosition="right"
                imageSrc="/economics/Application-Level Economic Impact.webp"
                imageAlt="Economic Impact"
                subtitle="Economic Viability"
                title="A Path to $2/kg"
                content={
                    <>
                        <p>
                            When high efficiency is combined with low-cost, modular hardware, the pathway to $2/kg green hydrogen becomes an engineering reality rather than a forecast.
                        </p>
                        <p>
                            This price point effectively unlocks heavy industry applications - steel, shipping, and chemicals - that cannot switch to hydrogen at current prices of $4-6/kg.
                        </p>
                    </>
                }
            />

            {/* NEW: LCOH Sensitivity Model */}
            <section className="py-[var(--spacing-section)] bg-white border-b border-gray-100">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <motion.div variants={fadeUp} className="text-center mb-12">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Cost Model</span>
                            <h2 className="text-[length:var(--font-h1)] font-bold text-brand-secondary mb-4">
                                LCOH Sensitivity: <span className="text-brand-primary">Electricity Price vs Efficiency</span>
                            </h2>
                            <p className="text-[15px] sm:text-[16px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
                                Because electricity is 60–70% of hydrogen production cost, every reduction in system energy intensity directly flows to lower LCOH. At India's renewable electricity pricing of $0.03–$0.05/kWh, the GigaCore platform models as follows:
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="w-full border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-10">
                            {/* Header */}
                            <div className="grid grid-cols-3 bg-[#0b1320] text-white text-[13px] font-bold uppercase tracking-wider">
                                <div className="py-4 pl-6 pr-4">Electricity Price</div>
                                <div className="py-4 px-4 border-l border-white/10 text-brand-primary">GigaCore (~38 kWh/kg)</div>
                                <div className="py-4 px-4 border-l border-white/10 text-gray-400">Conventional (50–55 kWh/kg)</div>
                            </div>
                            {/* Rows */}
                            {[
                                { price: "$0.03 / kWh", gigacore: "$2.16 / kg", conv: "$3.00–$3.40 / kg", highlight: true },
                                { price: "$0.04 / kWh", gigacore: "$2.52 / kg", conv: "$3.60–$4.00 / kg", highlight: false },
                                { price: "$0.05 / kWh", gigacore: "$2.92 / kg", conv: "$4.25–$4.70 / kg", highlight: false },
                            ].map((row, i) => (
                                <div key={i} className={`grid grid-cols-3 border-t border-gray-100 ${row.highlight ? "bg-brand-primary/5" : "bg-white"} hover:bg-gray-50 transition-colors`}>
                                    <div className="py-5 pl-6 pr-4 font-bold text-gray-700">{row.price}</div>
                                    <div className="py-5 px-4 border-l border-gray-100 font-bold text-brand-primary text-[16px]">{row.gigacore}</div>
                                    <div className="py-5 px-4 border-l border-gray-100 text-gray-400 font-medium">{row.conv}</div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "Grey Ammonia Parity", value: "~$2.75/kg", sub: "Target cost parity threshold for Indian fertilizer producers including IFFCO and KRIBHCO" },
                                { label: "GigaCore LCOH Range", value: "$2.16–$2.92/kg", sub: "Modelled at $0.03–$0.05/kWh electricity. Base case: $2.52/kg at $0.04/kWh" },
                                { label: "Conventional LCOH", value: "$4.40/kg", sub: "Current green hydrogen LCOH benchmark for conventional alkaline and PEM electrolysis" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                                    <div className="text-[28px] md:text-[32px] font-bold text-brand-primary mb-2 leading-none tracking-tight">{item.value}</div>
                                    <div className="text-[13px] font-bold text-brand-secondary uppercase tracking-wider mb-3">{item.label}</div>
                                    <p className="text-gray-500 text-[13px] leading-relaxed">{item.sub}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 7. Scalability */}
            <SplitSection
                theme="light"
                imagePosition="left"
                imageSrc="/economics/Scale.jpg"
                imageAlt="Industrial Scale"
                subtitle="Scalability"
                title="Engineered for Scale"
                content={
                    <>
                        <p>
                            Our technology is not just about efficiency; it is about scalability. The system is designed to be modular and factory-produced, allowing for rapid deployment and massive scaling.
                        </p>
                        <p>
                            By moving away from bespoke, site-built plants to standardized, modular units, we can drive down CAPEX and ensure consistent quality and performance.
                        </p>
                    </>
                }
            />




            {/* NEW: Plant Revenue Potential */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-b border-brand-primary/5">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <motion.div variants={fadeUp} className="text-center mb-14">
                            <span className="text-brand-primary font-bold tracking-widest uppercase text-[12px] mb-3 block">Revenue Model</span>
                            <h2 className="text-[length:var(--font-h1)] font-bold text-brand-secondary mb-4">
                                Revenue at <span className="text-brand-primary">Industrial Scale</span>
                            </h2>
                            <p className="text-[15px] sm:text-[16px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
                                Hydrogen plants are expected to scale from pilot deployments to large industrial facilities. At $3/kg hydrogen pricing, the per-plant revenue potential is substantial.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            {[
                                {
                                    type: "Equipment Sales",
                                    metric: "Per System",
                                    value: "Standardised",
                                    color: "border-brand-primary",
                                    detail: "Sale of modular hydrogen production systems to industrial operators. Each 1 kg/hr module is manufactured as a standardised containerised unit enabling mass production.",
                                    badge: "Primary Revenue"
                                },
                                {
                                    type: "10,000 tpa Plant",
                                    metric: "Annual Revenue at $3/kg",
                                    value: "~$30M / yr",
                                    color: "border-brand-primary",
                                    detail: "Large-scale industrial facility producing 10,000 tonnes of hydrogen annually. Consistent with current refinery hydrogen procurement pricing in India.",
                                    badge: "Industrial Scale"
                                },
                                {
                                    type: "20,000 tpa Plant",
                                    metric: "Annual Revenue at $3/kg",
                                    value: "~$60M / yr",
                                    color: "border-brand-primary",
                                    detail: "Full-scale hydrogen production hub. Multiple modules integrated into shared balance-of-plant infrastructure. Target for GCC and export-oriented projects.",
                                    badge: "Export Scale"
                                },
                            ].map((item, i) => (
                                <div key={i} className={`bg-white rounded-2xl border-2 ${item.color} p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col`}>
                                    <div className="inline-flex items-center mb-4">
                                        <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary">{item.badge}</span>
                                    </div>
                                    <h3 className="text-[18px] font-bold text-brand-secondary mb-1">{item.type}</h3>
                                    <div className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-4">{item.metric}</div>
                                    <div className="text-[32px] md:text-[36px] font-bold leading-none mb-5 tracking-tight text-brand-primary">{item.value}</div>
                                    <p className="text-gray-500 text-[13px] leading-relaxed flex-1">{item.detail}</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeUp} className="bg-[#0b1320] rounded-2xl p-8 border border-brand-primary/20 text-center">
                            <div className="text-[13px] font-bold uppercase tracking-widest text-brand-primary mb-3">O&amp;M Recurring Revenue</div>
                            <p className="text-[16px] sm:text-[18px] text-gray-200 max-w-3xl mx-auto leading-relaxed">
                                Long-term Operations &amp; Maintenance contracts are modelled at approximately <span className="text-white font-bold">8% of system value annually</span> — creating a growing recurring revenue base as the installed fleet expands across commercial deployments.
                            </p>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 8. CTA Section */}
            <section className="relative py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] bg-brand-secondary overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <SectionWrapper className="relative z-10 text-center">
                    <h2 className="text-[length:var(--font-h1)] font-bold text-white mb-6">Built for Market Reality</h2>
                    <p className="text-[15px] sm:text-[16px] text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        See how this economic advantage translates into market opportunities.
                    </p>
                    <Link href="/market">
                        <Button variant="primary" size="md" className="w-full sm:w-auto min-w-[220px] whitespace-nowrap shadow-glow">
                            Explore the Market
                        </Button>
                    </Link>
                </SectionWrapper>
            </section>
        </main>
    );
}
