"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { blogPosts } from "@/data/blogPosts";

export default function HomeBlogSection() {
    // Get the latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-[var(--spacing-section)] bg-white overflow-hidden">
            <SectionWrapper>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <motion.div variants={fadeUp} className="max-w-2xl">
                            <span className="text-[15px] font-bold tracking-widest text-brand-primary uppercase mb-3 block">
                                Blog
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold text-brand-secondary tracking-tight leading-[1.1]">
                                Insights Shaping <br />
                                <span className="text-brand-primary">the Future of Power</span>
                            </h2>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <Link
                                href="/company/blog"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 hover:border-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 text-sm font-semibold group"
                            >
                                All Blog Posts
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                        {latestPosts.map((post, idx) => (
                            <motion.div
                                key={post.slug}
                                variants={fadeUp}
                                className="group flex flex-col h-full"
                            >
                                {/* Image Card */}
                                <Link href={`/company/blog/${post.slug}`} className="block overflow-hidden rounded-2xl mb-6 relative aspect-[16/10]">
                                    {post.image ? (
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url('${post.image}')` }}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300">
                                            No Image
                                        </div>
                                    )}
                                </Link>

                                {/* Category Line */}
                                <div className="border-t border-gray-200 pt-6 mb-4">
                                    <span className="text-[15px] font-bold text-gray-900 tracking-wide uppercase">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <Link href={`/company/blog/${post.slug}`} className="block mb-4">
                                    <h3 className="text-2xl font-medium text-brand-primary leading-tight group-hover:text-brand-secondary transition-colors duration-300">
                                        {post.title}
                                    </h3>
                                </Link>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed flex-grow">
                                    {post.excerpt}
                                </p>

                                {/* Read More */}
                                <div className="mt-auto">
                                    <Link
                                        href={`/company/blog/${post.slug}`}
                                        className="inline-flex items-center text-sm font-bold text-brand-secondary hover:text-brand-primary transition-colors group/link"
                                    >
                                        <span className="border-b-2 border-brand-secondary/20 group-hover/link:border-brand-primary pb-0.5 transition-colors">
                                            Read more
                                        </span>
                                        <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
