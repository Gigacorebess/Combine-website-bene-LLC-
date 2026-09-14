"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import Button from "../ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import * as THREE from "three";
// @ts-ignore
import CELLS from "vanta/dist/vanta.cells.min";

export default function Hero() {
    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        if (!vantaEffect) {
            setVantaEffect(
                CELLS({
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    color1: 0x00D563, // Brand Primary (Bright Green) - Neural pathways
                    color2: 0x020617, // Deepest Black/Slate - Infinite depth
                    size: isMobile ? 1.0 : 1.8, // Smaller cells for more "complexity"
                    speed: 1.0, // Slow, deliberate movement
                    distro: -1.0, // Organic distribution
                    THREE: THREE
                })
            );
        }
        return () => {
            if (vantaEffect) (vantaEffect as any).destroy();
        };
    }, [vantaEffect]);

    return (
        <section className="relative h-[100svh] min-h-[600px] md:min-h-[800px] flex items-center overflow-hidden bg-brand-secondary text-white">
            {/* Background Vanta Effect */}
            <div ref={vantaRef} className="absolute inset-0 z-0 opacity-100" />

            {/* Cinematic Vignette Overlay - Adds depth and focus */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-brand-secondary/20 to-brand-secondary/90 z-10 pointer-events-none" />

            <SectionWrapper className="relative z-20 w-full">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl flex flex-col items-start text-left px-4 md:px-0 pt-16 md:pt-20"
                >
                    <motion.div variants={fadeUp} className="mb-6 md:mb-8">
                        <span className="text-brand-primary text-[15px] md:text-base font-bold tracking-widest uppercase">
                            Next Gen Hydrogen Production
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        className="text-[8.5vw] sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight mb-8 md:mb-10 leading-[1.1] md:leading-[1.15] text-white uppercase break-words hyphens-auto"
                    >
                        Breakthrough<br />
                        Technology<br />
                        Reshaping<br />
                        <span className="text-brand-primary">Decarbonization</span>
                    </motion.h1>

                    <motion.div
                        variants={fadeUp}
                        className="w-full max-w-[800px] h-2 md:h-4 bg-brand-primary mb-8 md:mb-8"
                    />

                    <motion.div variants={fadeUp} className="flex flex-col gap-4">
                        <div className="mt-6 md:mt-8 w-full sm:w-auto">
                            <Button href="/contact" variant="primary" size="md" className="w-full sm:w-auto min-w-[180px]">
                                Contact Us
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
