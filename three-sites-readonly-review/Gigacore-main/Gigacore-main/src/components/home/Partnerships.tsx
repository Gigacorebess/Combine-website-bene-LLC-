"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

const COLLABORATION_MODELS = [
    {
        title: "Pilot System Deployment",
        description: "Validation of Gigacore stacks in representative industrial environments to confirm performance benchmarks."
    },
    {
        title: "Joint Integration Programs",
        description: "Co-engineering of balance-of-plant systems for specific downstream applications in steel and chemical sectors."
    },
    {
        title: "Licensed Manufacturing Pathways",
        description: "Enabling localized production for large-scale infrastructure projects through technology transfer agreements."
    }
];

export default function Partnerships() {
    return (
        <section className="py-[var(--spacing-section)] bg-white border-b border-gray-100">
            <SectionWrapper>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    <div className="flex-1 max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[length:var(--font-h1)] font-bold leading-[1.15] text-brand-secondary mb-6"
                        >
                            Industry Collaboration
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="text-[15px] sm:text-[16px] text-brand-gray-600 leading-relaxed mb-10"
                        >
                            Gigacore works with industrial operators, engineering developers, and manufacturing partners to advance deployment readiness.
                        </motion.p>

                        {/* Image Integration */}
                        <div className="relative w-full aspect-[16/9] mb-10 overflow-hidden">
                            <Image
                                src="/home/Industry Collaboration.png"
                                alt="Global Industry Collaboration"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex-1 w-full space-y-3 pt-1 lg:pt-2"
                    >
                        {COLLABORATION_MODELS.map((model, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className="group"
                            >
                                <h3 className="text-[length:var(--font-h3)] font-bold text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors">
                                    {model.title}
                                </h3>
                                <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed border-t border-gray-100 pt-2">
                                    {model.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </SectionWrapper>
        </section>
    );
}
