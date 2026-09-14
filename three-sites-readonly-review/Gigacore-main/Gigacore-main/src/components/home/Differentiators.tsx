"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp } from "@/lib/motion";
import { Plus, Minus } from "lucide-react";

const OPERATIONAL_BENEFITS = [
    {
        title: "Continuous Operation",
        description: "Systems designed for 24/7 industrial duty cycles without frequent stack degradation. Our proprietary thermal management ensures consistent output even under variable load conditions."
    },
    {
        title: "Maintainable Modular Expansion",
        description: "Cluster-based architecture allows for capacity scaling without plant shutdowns. individual reactor modules can be serviced or swapped while the rest of the array maintains production."
    },
    {
        title: "Simplified Balance-of-Plant",
        description: "Reduced auxiliary complexity through atmospheric pressure operation. Eliminates the need for high-maintenance compressors and complex membrane management systems within the generation loop."
    },
    {
        title: "Deployment-Ready Configuration",
        description: "Skid-mounted systems pre-integrated for rapid site installation. Reduces on-site engineering requirements and accelerates time-to-production for industrial off-takers."
    }
];

export default function Differentiators() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-[var(--spacing-section)] bg-brand-secondary text-white border-t border-white/10">
            <SectionWrapper>
                <div className="mb-12 text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[length:var(--font-h1)] font-bold mb-8 leading-[1.0] tracking-tight"
                    >
                        <span className="text-white">Industrial Reliability.</span><br />
                        <span className="text-brand-primary">Engineered for Uptime.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[length:var(--font-intro)] text-white font-light max-w-2xl leading-[1.75]"
                    >
                        Industrial systems require predictable performance. Gigacore’s architecture is engineered for reliability, redundancy, and scale - delivering consistent output in the harshest environments.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Left Side - Accordion */}
                    <div className="space-y-0 border-t border-white/20">
                        {OPERATIONAL_BENEFITS.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="border-b border-white/20"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between py-8 text-left group transition-all duration-300"
                                >
                                    <span className={`text-[length:var(--font-h3)] font-bold transition-colors ${openIndex === idx ? 'text-brand-primary' : 'text-white group-hover:text-brand-primary'}`}>
                                        {item.title}
                                    </span>
                                    {/* Bloom-style minimal toggle */}
                                    <span className={`flex items-center justify-center w-8 h-8 transition-colors ${openIndex === idx ? 'text-brand-primary' : 'text-white/50 group-hover:text-brand-primary'}`}>
                                        {openIndex === idx ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                    </span>
                                </button>
                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-white text-[15px] sm:text-[16px] leading-relaxed pb-8 pr-4">
                                                {item.description}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Side - Industrial Image (Build.jpg) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="relative w-full h-[300px] lg:h-full lg:min-h-[500px] bg-brand-dark/50 border border-white/10 overflow-hidden"
                    >
                        <Image
                            src="/home/build.png"
                            alt="Industrial Hydrogen Infrastructure Construction"
                            fill
                            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 border border-white/10 z-10 pointer-events-none" />
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}
