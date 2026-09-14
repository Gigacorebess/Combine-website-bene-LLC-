"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Credibility() {
    return (
        <section className="py-[var(--spacing-section)] bg-brand-light relative border-b border-gray-100">
            <SectionWrapper className="relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="mb-12 text-left max-w-3xl">
                        <h2 className="text-[length:var(--font-h2)] font-bold text-brand-secondary tracking-tight mb-4">
                            Industry Validated
                        </h2>
                        <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                            Trusted by industry leaders for mission-critical hydrogen deployment.
                        </p>
                    </div>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex w-max animate-[wave-scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
                            {/* Duplicate items for seamless infinite scroll (2 sets) */}
                            {[...[
                                {
                                    src: "/home/Proven Reliability.webp",
                                    alt: "Proven Reliability Track Record",
                                    label: "Proven Reliability"
                                },
                                {
                                    src: "/home/CREDIBILITY.png",
                                    alt: "Verified Performance Data",
                                    label: "Verified Performance"
                                },
                                {
                                    src: "/home/Global Safety.png",
                                    alt: "Global Safety Standards",
                                    label: "Global Safety"
                                },
                                {
                                    src: "/home/Export-Linked Market Opportunities.jpg",
                                    alt: "Export-Linked Market Opportunities",
                                    label: "Market Opportunities"
                                }
                            ], ...[
                                {
                                    src: "/home/Proven Reliability.webp",
                                    alt: "Proven Reliability Track Record",
                                    label: "Proven Reliability"
                                },
                                {
                                    src: "/home/CREDIBILITY.png",
                                    alt: "Verified Performance Data",
                                    label: "Verified Performance"
                                },
                                {
                                    src: "/home/Global Safety.png",
                                    alt: "Global Safety Standards",
                                    label: "Global Safety"
                                },
                                {
                                    src: "/home/Export-Linked Market Opportunities.jpg",
                                    alt: "Export-Linked Market Opportunities",
                                    label: "Market Opportunities"
                                }
                            ]].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="relative aspect-[16/9] w-[300px] md:w-[400px] flex-shrink-0 mx-4 bg-white border border-gray-100 shadow-sm group overflow-hidden"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 300px, 400px"
                                        />
                                        {/* Gradient Overlay for Text Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-white font-bold text-lg leading-tight">{item.label}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
