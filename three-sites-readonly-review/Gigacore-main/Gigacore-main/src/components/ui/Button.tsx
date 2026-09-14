"use client";
import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    href,
    children,
    className,
    ...props
}) => {
    const baseStyles = "group relative inline-flex items-center justify-center rounded-full font-bold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden z-20";

    const variants = {
        primary: "bg-brand-primary text-brand-secondary border border-brand-primary hover:text-brand-primary shadow-[0_0_20px_rgba(0,213,99,0.4)]",
        secondary: "bg-brand-secondary text-white border border-brand-secondary hover:text-brand-secondary hover:border-transparent",
        outline: "bg-transparent text-white border-2 border-white hover:text-brand-primary hover:border-transparent",
        ghost: "bg-transparent text-brand-secondary hover:text-brand-primary",
    };

    const slideBg = {
        primary: "bg-white", // White slide looks great sliding over bright green
        secondary: "bg-brand-primary",
        outline: "bg-white", // White slide looks great over transparent
        ghost: "bg-brand-green-50",
    };

    const sizes = {
        sm: "px-5 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-10 py-4 text-lg",
    };

    const classes = clsx(baseStyles, variants[variant], sizes[size], className);

    const SlideBackground = () => (
        <span
            className={clsx(
                "absolute inset-0 -z-10 -translate-x-[101%] transition-transform duration-300 ease-out group-hover:translate-x-0 group-active:translate-x-0",
                slideBg[variant as keyof typeof slideBg]
            )}
            aria-hidden="true"
        />
    );

    if (href) {
        return (
            <Link href={href} legacyBehavior passHref>
                <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={classes}
                    {...(props as any)}
                >
                    <SlideBackground />
                    <span className="relative z-10 flex items-center gap-2">{children}</span>
                </motion.a>
            </Link>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={classes}
            {...props}
        >
            <SlideBackground />
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
};

export default Button;
