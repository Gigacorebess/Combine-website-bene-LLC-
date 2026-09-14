import { Variants } from "framer-motion";

// Premium Easing Curves
const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1]; // Custom Cubic Bezier for "calm" snap

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: EASE_PREMIUM }
    }
};

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 1.0, ease: "easeOut" }
    }
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const imageReveal: Variants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1.4, ease: EASE_PREMIUM }
    }
};

export const slowParallax: Variants = {
    hidden: { y: 0 },
    visible: {
        y: -50,
        transition: { duration: 2, ease: "linear" }
    }
};

export const menuSlide: Variants = {
    hidden: { x: "100%" },
    visible: {
        x: "0%",
        transition: { duration: 0.5, ease: EASE_PREMIUM }
    },
    exit: {
        x: "100%",
        transition: { duration: 0.4, ease: EASE_PREMIUM }
    }
};
