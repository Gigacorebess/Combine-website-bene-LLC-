import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import Image from 'next/image';

interface SplitSectionProps {
    title: string;
    subtitle?: string;
    content: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: 'left' | 'right';
    theme?: 'light' | 'dark' | 'gray';
    className?: string;
    unoptimized?: boolean;
    imageClassName?: string;
}

const SplitSection: React.FC<SplitSectionProps> = ({
    title,
    subtitle,
    content,
    imageSrc,
    imageAlt,
    imagePosition = 'left',
    theme = 'light',
    className,
    unoptimized = false,
    imageClassName,
}) => {
    const isImageRight = imagePosition === 'right';

    const themeStyles = {
        light: 'bg-white text-gray-900',
        dark: 'bg-gray-900 text-white',
        gray: 'bg-gray-50 text-gray-900',
    };

    const textColors = {
        light: 'text-gray-700',
        dark: 'text-gray-300',
        gray: 'text-gray-700',
    };

    const headingColors = {
        light: 'text-[#001F1B]', // Very dark green/black
        dark: 'text-white',
        gray: 'text-[#001F1B]',
    };

    return (
        <section className={cn("py-[var(--spacing-section)] lg:py-[calc(var(--spacing-section)*1.5)] overflow-hidden", themeStyles[theme], className)}>
            <SectionWrapper>
                <div className={cn(
                    "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center"
                )}>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isImageRight ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={cn(
                            "relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl",
                            isImageRight ? "lg:order-2" : "lg:order-1"
                        )}
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className={cn("object-cover", imageClassName)}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            unoptimized={unoptimized}
                        />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className={cn(
                            "flex flex-col justify-center",
                            isImageRight ? "lg:order-1" : "lg:order-2"
                        )}
                    >
                        {subtitle && (
                            <span className="text-brand-primary font-bold uppercase tracking-widest text-[15px] mb-4 block">
                                {subtitle}
                            </span>
                        )}

                        <h2 className={cn(
                            "text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-8 tracking-tight leading-[1.1]",
                            headingColors[theme]
                        )}>
                            {title}
                        </h2>

                        <div className={cn(
                            "text-lg md:text-xl leading-[1.5] font-normal space-y-6",
                            textColors[theme]
                        )}>
                            {content}
                        </div>
                    </motion.div>

                </div>
            </SectionWrapper>
        </section>
    );
};

export default SplitSection;
