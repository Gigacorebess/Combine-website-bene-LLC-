"use client";
import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import {
    ArrowLeft,
    ArrowRight,
    Calendar,
    Tag,
} from "lucide-react";
import { blogPosts, BLOG_CATEGORIES } from "@/data/blogPosts";

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const postIndex = blogPosts.findIndex((p) => p.slug === slug);
    const post = blogPosts[postIndex];

    if (!post) {
        return (
            <main className="bg-white min-h-screen pt-32">
                <SectionWrapper className="text-center">
                    <h1 className="text-3xl font-bold text-brand-secondary mb-4">
                        Post Not Found
                    </h1>
                    <p className="text-gray-600 mb-8">
                        The blog post you&apos;re looking for doesn&apos;t
                        exist.
                    </p>
                    <Link
                        href="/company/blog"
                        className="text-brand-primary font-semibold hover:underline"
                    >
                        Back to Blog
                    </Link>
                </SectionWrapper>
            </main>
        );
    }

    const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
    const nextPost =
        postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

    const relatedPosts = blogPosts
        .filter(
            (p) =>
                p.slug !== post.slug &&
                (p.category === post.category ||
                    blogPosts.indexOf(p) < 3)
        )
        .slice(0, 3);

    return (
        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-28 w-full overflow-hidden bg-[#F3F4F6]">
                <SectionWrapper className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        {/* Left Column: Text */}
                        <div className="flex-1 text-left">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-brand-secondary"
                            >
                                {post.title}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-sm font-medium text-gray-900 mb-6"
                            >
                                Published: {post.date} <span className="mx-2 text-gray-400">|</span> Updated: {post.date}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-brand-primary font-medium text-lg"
                            >
                                {post.category}
                            </motion.div>
                        </div>

                        {/* Right Column: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex-1 w-full"
                        >
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
                                {/* Use post.image if available, otherwise fallback */}
                                {post.image ? (
                                    <div
                                        className="h-full w-full bg-cover bg-center"
                                        style={{ backgroundImage: `url('${post.image}')` }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-green-900" />
                                )}
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>
            </section>

            {/* Article Content */}
            <section className="py-16 lg:py-20 bg-white">
                <SectionWrapper>
                    {/* Breadcrumb / back nav */}
                    <div className="flex flex-wrap items-center gap-3 mb-10">
                        <Link
                            href="/company/blog"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary hover:underline"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            All Articles
                        </Link>
                        <span className="text-gray-300">/</span>
                        {/* Category chips */}
                        {BLOG_CATEGORIES.filter((c) => c !== "All").map((cat) => (
                            <Link
                                key={cat}
                                href="/company/blog"
                                className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold border transition-all duration-200 ${post.category === cat
                                        ? "bg-brand-primary text-white border-brand-primary"
                                        : "bg-white text-gray-500 border-gray-200 hover:border-brand-primary hover:text-brand-primary"
                                    }`}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>

                    {/* Article Body */}
                    <motion.article
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        {post.content.map((block, idx) => {
                            if (block.type === "heading") {
                                return (
                                    <motion.h2
                                        key={idx}
                                        variants={fadeUp}
                                        className="text-[length:var(--font-h3)] font-bold text-brand-secondary mt-12 mb-6"
                                    >
                                        {block.text}
                                    </motion.h2>
                                );
                            }
                            if (block.type === "list") {
                                return (
                                    <motion.ul
                                        key={idx}
                                        variants={fadeUp}
                                        className="space-y-3 my-6 pl-2"
                                    >
                                        {block.items?.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-3 items-start text-gray-600 leading-relaxed"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-brand-primary mt-2.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </motion.ul>
                                );
                            }
                            return (
                                <motion.p
                                    key={idx}
                                    variants={fadeUp}
                                    className="text-gray-600 leading-relaxed mb-6 text-lg"
                                >
                                    {block.text}
                                </motion.p>
                            );
                        })}

                        {/* Post Navigation */}
                        <div className="mt-16 pt-10 border-t border-gray-100">
                            <div className="flex flex-col sm:flex-row justify-between gap-6">
                                {prevPost ? (
                                    <Link
                                        href={`/company/blog/${prevPost.slug}`}
                                        className="group flex items-center gap-3 text-gray-600 hover:text-brand-primary transition-colors"
                                    >
                                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                        <div>
                                            <span className="text-xs text-gray-400 block">Previous</span>
                                            <span className="text-sm font-medium line-clamp-1">{prevPost.title}</span>
                                        </div>
                                    </Link>
                                ) : (
                                    <div />
                                )}
                                {nextPost && (
                                    <Link
                                        href={`/company/blog/${nextPost.slug}`}
                                        className="group flex items-center gap-3 text-gray-600 hover:text-brand-primary transition-colors text-right"
                                    >
                                        <div>
                                            <span className="text-xs text-gray-400 block">Next</span>
                                            <span className="text-sm font-medium line-clamp-1">{nextPost.title}</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.article>
                </SectionWrapper>
            </section>


            {/* Related Posts */}
            <section className="py-[var(--spacing-section)] bg-brand-light border-t border-brand-primary/5">
                <SectionWrapper>
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-[length:var(--font-h3)] font-bold text-brand-secondary">
                            You might also like
                        </h2>
                        <Link
                            href="/company/blog"
                            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 text-sm font-medium text-brand-secondary hover:border-brand-primary hover:text-brand-primary transition-all"
                        >
                            All articles
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((rp) => (
                            <Link
                                key={rp.slug}
                                href={`/company/blog/${rp.slug}`}
                                className="block group"
                            >
                                <article className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,213,99,0.1)] transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                    <div className="relative h-[200px] w-full overflow-hidden">
                                        {rp.image ? (
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                                style={{ backgroundImage: `url('${rp.image}')` }}
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-brand-green-50 via-white to-brand-green-100 flex items-center justify-center">
                                                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <ArrowRight className="w-5 h-5 text-brand-primary group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <span className="text-brand-primary text-[15px] font-bold uppercase tracking-wider">
                                            {rp.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-brand-secondary mt-2 mb-3 group-hover:text-brand-primary transition-colors leading-snug flex-grow">
                                            {rp.title}
                                        </h3>
                                        <p className="text-sm text-gray-400 mt-auto pt-3 border-t border-gray-50">
                                            {rp.date}
                                        </p>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </SectionWrapper>
            </section>
        </main>
    );
}
