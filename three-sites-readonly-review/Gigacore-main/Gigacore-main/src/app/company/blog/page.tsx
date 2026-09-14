"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { blogPosts, BLOG_CATEGORIES } from "@/data/blogPosts";

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);

    const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];
    const filteredPosts = blogPosts.filter(
        (p) =>
            p.slug !== featuredPost.slug &&
            (activeCategory === "All" || p.category === activeCategory)
    );
    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const hasMore = visibleCount < filteredPosts.length;

    return (
        <main className="bg-white">
            {/* ── Hero Section ── */}
            <section className="relative w-full overflow-hidden bg-brand-secondary min-h-[520px] lg:min-h-[600px] flex items-center">
                {/* Grid background */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.06] pointer-events-none" />
                {/* Green glow orb */}
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

                <SectionWrapper className="relative z-10 py-20 lg:py-28">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                        {/* ── Left: Text ── */}
                        <div className="flex-1 text-left">
                            {/* Green badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 mb-6"
                            >
                                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                                <span className="text-brand-primary text-[13px] font-bold tracking-widest uppercase">
                                    Gigacore Insights
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight mb-6 text-white leading-[1.1]"
                            >
                                Where Hydrogen
                                <br />
                                Meets <span className="text-brand-primary">Clarity.</span>
                            </motion.h1>

                            {/* Green rule */}
                            <motion.div
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                className="w-16 h-[3px] bg-brand-primary mb-6"
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.35 }}
                                className="space-y-4 max-w-[480px]"
                            >
                                <p className="text-[17px] text-gray-300 leading-[1.7]">
                                    Rigorous perspectives on green hydrogen, next gen hydrogen technology, and the hard
                                    economics of industrial decarbonisation - written for engineers, investors, and
                                    decision-makers.
                                </p>
                            </motion.div>
                        </div>

                        {/* ── Right: Featured Post Card ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.25 }}
                            className="flex-1 w-full max-w-[580px]"
                        >
                            <Link href={`/company/blog/${featuredPost.slug}`} className="block group">
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_24px_80px_rgba(0,213,99,0.12)] hover:border-brand-primary/30 transition-all duration-500">
                                    {/* Image */}
                                    <div className="relative h-[230px] sm:h-[300px] w-full overflow-hidden bg-gray-800">
                                        {featuredPost.image ? (
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 brightness-90 group-hover:brightness-100"
                                                style={{ backgroundImage: `url('${featuredPost.image}')` }}
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary flex items-center justify-center">
                                                <ArrowRight className="w-10 h-10 text-brand-primary" />
                                            </div>
                                        )}
                                        {/* Featured pill */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-brand-primary text-white text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                                                Featured
                                            </span>
                                        </div>
                                        {/* Gradient bleed */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>

                                    {/* Card body */}
                                    <div className="p-7 sm:p-8">
                                        <p className="text-brand-primary text-[12px] font-bold tracking-widest uppercase mb-3">
                                            {featuredPost.category}
                                        </p>
                                        <h3 className="text-[20px] sm:text-[22px] font-bold text-white mb-3 leading-[1.35] group-hover:text-brand-primary transition-colors duration-300">
                                            {featuredPost.title}
                                        </h3>
                                        {featuredPost.excerpt && (
                                            <p className="text-gray-400 text-[14px] leading-relaxed mb-4 line-clamp-2">
                                                {featuredPost.excerpt}
                                            </p>
                                        )}
                                        <div className="flex items-center justify-between">
                                            <p className="text-gray-500 text-[13px] font-medium">{featuredPost.date}</p>
                                            <span className="inline-flex items-center gap-1.5 text-brand-primary text-[13px] font-bold group-hover:gap-2.5 transition-all duration-300">
                                                Read Article <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                    </div>
                </SectionWrapper>
            </section>


            {/* ── Blog Content ── */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <SectionWrapper>

                    {/* ── Section header ── */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
                        <div>
                            <p className="text-brand-primary text-[13px] font-bold tracking-widest uppercase mb-2">All Articles</p>
                            <h2 className="text-2xl sm:text-3xl font-bold text-brand-secondary">
                                {activeCategory === "All" ? "Latest Insights" : activeCategory}
                            </h2>
                        </div>
                        <p className="text-sm text-gray-500 font-medium shrink-0">
                            {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                        </p>
                    </div>

                    {/* ── Category Filter Bar ── */}
                    <div className="flex flex-wrap gap-2 mb-12">
                        {BLOG_CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => { setActiveCategory(cat); setVisibleCount(6); }}
                                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 border ${activeCategory === cat
                                    ? "bg-brand-primary text-white border-brand-primary shadow-sm"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-brand-primary hover:text-brand-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* ── Posts Grid ── */}
                    <motion.div
                        key={activeCategory}
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                    >
                        {visiblePosts.map((post) => (
                            <motion.div key={post.slug} variants={fadeUp}>
                                <Link href={`/company/blog/${post.slug}`} className="block group h-full">
                                    <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:border-brand-primary/20 transition-all duration-300 h-full flex flex-col">
                                        {/* Image */}
                                        <div className="relative h-[200px] w-full overflow-hidden bg-gray-100">
                                            {post.image ? (
                                                <div
                                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                    style={{ backgroundImage: `url('${post.image}')` }}
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-gray-50 flex items-center justify-center">
                                                    <ArrowRight className="w-8 h-8 text-brand-primary" />
                                                </div>
                                            )}
                                            {/* Category chip over image */}
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-white/90 backdrop-blur-sm text-brand-primary text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-brand-primary/20">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="p-5 sm:p-6 flex flex-col flex-1">
                                            <h3 className="text-[16px] sm:text-[17px] font-bold text-gray-900 mb-2.5 leading-snug group-hover:text-brand-primary transition-colors duration-200 flex-grow">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-500 text-[13px] leading-relaxed line-clamp-2 mb-4">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                                                <div className="flex items-center gap-1.5 text-[12px] text-gray-400">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {post.date}
                                                </div>
                                                <span className="inline-flex items-center gap-1 text-brand-primary text-[12px] font-bold group-hover:gap-2 transition-all duration-200">
                                                    Read <ArrowRight className="w-3.5 h-3.5" />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Empty state */}
                    {visiblePosts.length === 0 && (
                        <div className="text-center py-24">
                            <p className="text-gray-400 text-lg mb-4">No articles in this category yet.</p>
                            <button
                                onClick={() => setActiveCategory("All")}
                                className="text-brand-primary font-semibold hover:underline"
                            >
                                View all articles
                            </button>
                        </div>
                    )}

                    {/* Load More */}
                    {hasMore && (
                        <div className="text-center mt-14">
                            <button
                                onClick={() => setVisibleCount((c) => c + 6)}
                                className="px-8 py-3 rounded-full border-2 border-brand-primary text-brand-primary font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300"
                            >
                                Load More
                            </button>
                        </div>
                    )}

                </SectionWrapper>
            </section>

        </main>
    );
}
