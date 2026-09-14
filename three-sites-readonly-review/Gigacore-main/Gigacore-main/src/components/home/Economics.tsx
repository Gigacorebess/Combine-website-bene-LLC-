"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Image from "next/image";

export default function Economics() {
    return (
        <section className="py-[var(--spacing-section)] bg-brand-light border-b border-gray-100">
            <SectionWrapper>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full lg:w-1/2"
                    >
                        <h2 className="text-[36px] md:text-[52px] font-bold leading-[1.15] text-brand-secondary mb-6">
                            Designed Around <br />
                            <span className="text-brand-primary">Energy Efficiency</span>
                        </h2>
                        <p className="text-xl text-brand-gray-600 font-light leading-[1.75] mb-10 max-w-xl">
                            Hydrogen economics are fundamentally driven by electrical input per unit of output. Gigacore’s architecture prioritizes ionization efficiency to minimize operational expenditure.
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    title: "Optimized Energy Transfer",
                                    desc: "Controlled electrical input is matched precisely to the water-splitting reaction, minimising rectification and parasitic losses."
                                },
                                {
                                    title: "Elimination of Auxiliary Loads",
                                    desc: "Removal of high-pressure circulation loops reduces system-level parasitic energy consumption."
                                },
                                {
                                    title: "Linear Capital Deployment",
                                    desc: "Modular CAPEX scaling allows investment to strictly match actual demand growth."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="border-l-2 border-brand-primary/30 pl-6">
                                    <h3 className="text-xl font-bold text-brand-secondary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-[15px] sm:text-[16px]">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Side - Industrial Macro */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full lg:w-1/2"
                    >
                        <div className="relative aspect-[16/9] w-full bg-brand-light border border-gray-100 p-2">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src="/home/Designed Around.png"
                                    alt="Efficiency Schematic"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </SectionWrapper>
        </section>
    );
}
