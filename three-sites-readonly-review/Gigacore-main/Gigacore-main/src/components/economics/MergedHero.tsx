"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE_PREMIUM } },
};

export default function MergedHero() {
    const greenRef  = useRef<HTMLDivElement>(null);
    const orangeRef = useRef<HTMLDivElement>(null);
    const greenFx   = useRef<any>(null);
    const orangeFx  = useRef<any>(null);

    useEffect(() => {
        let destroyed = false;

        async function init() {
            try {
                const THREE     = await import("three");
                const VantaMod  = await import("vanta/dist/vanta.cells.min");
                const VantaCells = (VantaMod as any).default ?? VantaMod;

                if (destroyed) return;

                const isMobile = window.innerWidth < 768;
                const size = isMobile ? 1.0 : 1.8;

                // ── Green Vanta (left half — Gigacore identity) ──
                if (greenRef.current && !greenFx.current) {
                    greenFx.current = VantaCells({
                        el: greenRef.current,
                        THREE,
                        mouseControls: false,
                        touchControls: false,
                        gyroControls:  false,
                        minHeight: 200,
                        minWidth:  200,
                        scale:  1.0,
                        color1: 0x00D563,   // Gigacore bright green cells
                        color2: 0x072b14,   // rich dark green bg (not black) — cells pop
                        size:   isMobile ? 1.2 : 2.0,
                        speed:  1.0,
                        distro: -1.0,
                    });
                }

                // ── Orange Vanta (right half — Red Mud identity) ──
                if (orangeRef.current && !orangeFx.current) {
                    orangeFx.current = VantaCells({
                        el: orangeRef.current,
                        THREE,
                        mouseControls: false,
                        touchControls: false,
                        gyroControls:  false,
                        minHeight: 200,
                        minWidth:  200,
                        scale:  1.0,
                        color1: 0xff6b2b,   // Red Mud bright orange cells
                        color2: 0x2a0c01,   // rich dark rust bg (not black) — cells pop
                        size:   isMobile ? 1.2 : 2.0,
                        speed:  1.4,
                        distro: -1.0,
                    });
                }
            } catch (e) {
                console.warn("Vanta init failed:", e);
            }
        }

        init();

        return () => {
            destroyed = true;
            if (greenFx.current)  { greenFx.current.destroy();  greenFx.current  = null; }
            if (orangeFx.current) { orangeFx.current.destroy(); orangeFx.current = null; }
        };
    }, []);

    return (
        <section
            className="relative flex items-center justify-center overflow-hidden text-white"
            style={{ background: "#061a0d", height: "100svh", minHeight: "700px" }}
        >
            {/* ── LEFT: Green Vanta CELLS — fades out toward center via mask ── */}
            <div
                ref={greenRef}
                className="absolute top-0 bottom-0 left-0"
                style={{
                    width: "65%",
                    zIndex: 0,
                    WebkitMaskImage: "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
                    maskImage:       "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
                }}
            />

            {/* ── RIGHT: Orange Vanta CELLS — fades out toward center via mask ── */}
            <div
                ref={orangeRef}
                className="absolute top-0 bottom-0 right-0"
                style={{
                    width: "65%",
                    zIndex: 0,
                    WebkitMaskImage: "linear-gradient(to left, black 0%, black 50%, transparent 100%)",
                    maskImage:       "linear-gradient(to left, black 0%, black 50%, transparent 100%)",
                }}
            />

            {/* ── Very light vignette — just enough for text legibility ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    zIndex: 1,
                    background:
                        "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(4,16,8,0.25) 100%)",
                }}
            />

            {/* ── Hero Content ── */}
            <div
                className="relative w-full max-w-5xl mx-auto px-6 md:px-10 text-center"
                style={{ zIndex: 10, paddingTop: "5rem" }}
            >
                <motion.div variants={staggerContainer} initial="hidden" animate="visible">

                    <motion.h1
                        variants={fadeUp}
                        className="font-bold tracking-tight uppercase mb-6"
                        style={{
                            fontSize:   "clamp(28px, 5vw, 62px)",
                            lineHeight: 1.08,
                            color:      "#ffffff",
                        }}
                    >
                        Hydrogen Economics
                        <br />
                        Is an{" "}
                        <span style={{ color: "#00D563" }}>Energy Problem</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="max-w-2xl mx-auto mb-10 leading-relaxed"
                        style={{
                            fontSize: "clamp(14px, 1.4vw, 17px)",
                            color:    "rgba(255,255,255,0.72)",
                        }}
                    >
                        Across all hydrogen production pathways, electricity consumption is the
                        single largest determinant of cost. Gigacore addresses this root cause by fundamentally reducing the energy required for production.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/company"
                            className="px-7 py-3.5 font-semibold rounded-lg transition-all duration-300 text-sm tracking-wide whitespace-nowrap"
                            style={{ background: "#00D563", color: "#010c09" }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#00b353")}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#00D563")}
                        >
                            Learn More About Gigacore
                        </Link>
                        <Link
                            href="/contact"
                            className="px-7 py-3.5 text-white font-semibold rounded-lg transition-all duration-300 text-sm tracking-wide whitespace-nowrap"
                            style={{ background: "#ea580c" }}
                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#c2410c")}
                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#ea580c")}
                        >
                            Get In Touch
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
