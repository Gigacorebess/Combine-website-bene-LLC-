"use client";
import React from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { DollarSign, Recycle, Maximize, Rocket } from "lucide-react";

const demands = [
    {
        icon: DollarSign,
        title: "Economically viable",
        desc: "Competing fundamentally on cost and unit economics.",
    },
    {
        icon: Recycle,
        title: "Material-efficient",
        desc: "Designed to minimize rare earth and critical material dependence.",
    },
    {
        icon: Maximize,
        title: "Scalable",
        desc: "Architected for massive industrial adoption and expansion.",
    },
    {
        icon: Rocket,
        title: "Deployment-ready",
        desc: "Focused on execution, integration, and infrastructure readiness.",
    },
];

export default function SmarterPath() {
    return (
        <section className="relative py-[var(--spacing-section)] bg-gray-50 border-b border-gray-100 overflow-hidden">
            {/* Subtle premium background pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />

            <SectionWrapper>
                <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-[length:var(--font-h1)] font-bold text-gray-900 mb-6 tracking-tight">
                            A Smarter Path to <span className="text-brand-primary">Clean Hydrogen</span>
                        </h2>
                        <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed">
                            The global energy transition demands solutions that are
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 mb-16"
                >
                    {demands.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center lg:items-start lg:text-left"
                        >
                            <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-[18px] font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-[14px] text-gray-500 leading-relaxed font-medium group-hover:text-gray-700 transition-colors">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-4xl mx-auto text-center relative z-10"
                >
                    <div className="inline-block bg-white px-8 py-6 rounded-2xl border border-brand-primary/20 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-primary" />
                        <p className="text-[16px] sm:text-[18px] text-gray-800 font-medium leading-relaxed">
                            Gigacore’s next-gen electrochemical approach is <span className="text-brand-primary font-bold">engineered to meet these demands</span> while accelerating the shift toward sustainable hydrogen ecosystems.
                        </p>
                    </div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
