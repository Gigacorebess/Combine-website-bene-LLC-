"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { GraduationCap, FlaskConical, Users, Lock, ChevronRight, Globe, TrendingUp, Award, Briefcase } from "lucide-react";

// ─── Leadership Data ──────────────────────────────────────────────────────────
const leaders = [
    {
        name: "Manish Kothary",
        initials: "MK",
        title: "Chief Executive Officer",
        bio: "Entrepreneur and technology founder developing scalable hydrogen and plasma-based energy systems for industrial decarbonisation. Brings 25+ years of experience building and scaling ventures across technology, financial platforms and industrial infrastructure.",
        background:
            "Previously senior roles at Barclays Global Investors, Wells Fargo and Pacific Gas & Electric.",
        education: [
            "M.Sc Computer Science, University of South Carolina",
            "BE Electrical Engineering, IIT Roorkee",
        ],
        tags: ["Capital Markets", "Energy Systems", "Startup Scaling"],
        credentials: [
            { label: "Prior MNCs", value: "3" },
            { label: "Founded", value: "1 Co." },
            { label: "Alma Mater", value: "IIT" },
            { label: "Expertise", value: "20+ yrs" },
        ],
    },
    {
        name: "Vandit Verma",
        initials: "VV",
        title: "President, Infrastructure & Energy Platforms",
        bio: "Leads global infrastructure development and commercialization of advanced energy platforms. Brings cross-border project structuring expertise and strategic capital partnerships experience.",
        background:
            "Background includes hydrogen and low-carbon fuel systems, rare earth extraction, and waste-to-energy infrastructure across North America, Europe, and emerging markets.",
        education: ["B.Eng Mechanical Engineering - Ryerson University, Canada"],
        tags: ["Cross-Border Projects", "Hydrogen Systems", "Infrastructure"],
        credentials: [
            { label: "Continents", value: "3" },
            { label: "Sectors", value: "4+" },
            { label: "Focus", value: "H₂ Infra" },
            { label: "Markets", value: "Global" },
        ],
    },
    {
        name: "Igor Kuntevitsky",
        initials: "IK",
        title: "Chief Technology Officer",
        bio: "Leads reactor architecture, hydrogen systems engineering, and IP development. Expertise spans matrix reactor systems, controlled partial oxidation, and integrated hydrogen purification.",
        background:
            "Inventor of multiple granted U.S. patents covering hydrogen production and critical mineral recovery systems (including hydrocarbon gas pathways and red mud processing). GigaCore's next gen hydrogen method and reactor architecture are subject to a patent application currently in preparation.",
        education: [],
        tags: ["Reactor Architecture", "U.S. Patents", "IP Development"],
        credentials: [
            { label: "US Patents", value: "4+" },
            { label: "Domain", value: "H₂ + Minerals" },
            { label: "IP Status", value: "Active" },
            { label: "Reactor", value: "Design Lead" },
        ],
    },
    {
        name: "Ajeet Saran",
        initials: "AS",
        title: "EPC Director & Government Relations, India",
        bio: "Leads project execution, regulatory interface, and industrial deployment in India.",
        background:
            "Industry leader with nearly 25 years of experience at Tata Steel across mining, power, sales, logistics, and EPC project execution. Brings deep techno-commercial expertise and strong government liaison capability.",
        education: [
            "BE Electrical Engineering - IIT-BHU",
            "PG Supply Chain - XLRI",
        ],
        tags: ["EPC Execution", "Tata Steel (25 yrs)", "Gov. Relations"],
        credentials: [
            { label: "Tata Steel", value: "25 yrs" },
            { label: "Alma Mater", value: "IIT" },
            { label: "PG", value: "XLRI" },
            { label: "Depts.", value: "5+" },
        ],
    },
    {
        name: "Gautam Ghosh",
        initials: "GG",
        title: "Director, Finance, Tax & Compliance",
        bio: "Oversees financial governance, cross-border structuring, and regulatory compliance.",
        background:
            "Former Head of Taxation (South West Asia & Middle East) at Motorola Solutions India. Previously served as Head of Treasury at Coca-Cola India (North & North East), following distinguished senior leadership tenures at Nestlé India and Price Waterhouse.",
        education: [
            "Chartered Accountant",
            "B.Com (Hons) - SRCC, Delhi University",
        ],
        tags: ["Taxation", "Treasury", "Compliance"],
        credentials: [
            { label: "MNCs", value: "4" },
            { label: "Qualification", value: "CA" },
            { label: "Alma Mater", value: "SRCC" },
            { label: "Regions", value: "India + ME" },
        ],
    },
    {
        name: "Prashanth Shetty",
        initials: "PS",
        title: "Business Development",
        bio: "Leads business development across GigaCore’s hydrogen and energy infrastructure platform, driving institutional investor engagement, commercialisation strategy and strategic partnerships.",
        background:
            "Former executive leader at Verdigris, EMC and SAP with experience spanning global go-to-market strategy and enterprise technology platforms.",
        education: [
            "MBA - The Wharton School",
            "MS Engineering - Stanford University",
        ],
        tags: ["Business Development", "Commercialisation", "Partnerships"],
        credentials: [
            { label: "Prior MNCs", value: "3" },
            { label: "Focus", value: "GTM Strategy" },
            { label: "Alma Mater", value: "Stanford" },
            { label: "MBA", value: "Wharton" },
        ],
    },
];

const advisors = [
    {
        name: "Upal Basu",
        initials: "UB",
        title: "General Partner, NGP Capital",
        description:
            "Upal Basu is a General Partner and Managing Member at NGP Capital, a global venture capital firm managing over $2 billion across the U.S., Europe, China, and India. He leads the North America office and global software investments under a 'Convergence' thesis focused on robotics, industrial systems, applied AI, space, and dual-use technologies. With more than 25 years of experience, he has led over 20 investments with 10 successful exits and previously co-founded and exited a global mobile security platform exceeding $50M in revenue. A Stanford M.S. in Engineering and Harvard MBA, he brings deep capital markets expertise and global scale-up insight to GigaCore's advanced industrial technology strategy and institutional investor positioning.",
        credentials: [
            { label: "AUM", value: "$2B+" },
            { label: "Investments Led", value: "20+" },
            { label: "Exits", value: "10" },
            { label: "Experience", value: "25 yrs" },
        ],
        education: ["M.S. Engineering — Stanford University", "MBA — Harvard Business School"],
    },
    {
        name: "Pranay Kothari",
        initials: "PK",
        title: "Strategic Advisor",
        description:
            "Pranay Kothari, senior executive at Polyplex Corporation, joins Gigacore as a Strategic Advisor, bringing deep global industrial experience across large-scale manufacturing and supply chains. Through Polyplex’s operations spanning Europe, the United States, and Asia, he has developed strong relationships across international industrial ecosystems, customers, and partners. His exposure to cross-border operations, capital-intensive plant development, and global market dynamics provides Gigacore with valuable strategic insight as it scales. He offers guidance on international expansion, plant execution, and supply chain structuring. His network supports access to potential partners, customers, and investors across key geographies. With board-level perspective and operational discipline, he strengthens Gigacore’s positioning with institutional stakeholders. His involvement enhances both credibility and execution capability as the company moves toward commercial deployment.",
        credentials: [
            { label: "Regions", value: "3" },
            { label: "Experience", value: "Global Ind." },
            { label: "Role", value: "Exec. Polyplex" },
            { label: "Focus", value: "Scale-up" },
        ],
        education: [],
    },
    {
        name: "Neeraj Agarwal",
        initials: "NA",
        title: "Senior Project & Operations Leader",
        description:
            "Neeraj Agarwal is a senior project and operations leader bringing deep execution and infrastructure expertise to GigaCore’s industrial deployment strategy. He has over 25 years of experience across energy, oil & gas, and infrastructure projects in India and the Middle East. He held leadership roles at Engineers India Limited, including Chief Operating Officer (UAE) and Chief General Manager, and worked with Worley. He has led large-scale projects ranging from $200M to over $1B and served as Lender’s Independent Engineer on projects of approximately $10B, working with international banking consortiums.",
        credentials: [
            { label: "Experience", value: "25+ yrs" },
            { label: "Projects Led", value: "$1B+" },
            { label: "Lender’s Eng", value: "$10B" },
            { label: "Alma Mater", value: "IIT" },
        ],
        education: [
            "B.Tech - IIT Roorkee",
            "Certified Independent Director (IICA)",
        ],
    },
    {
        name: "Ranju Mehta",
        initials: "RM",
        title: "Director (North), I Create India",
        description:
            "Ranju Mehta is the Director (North) at I Create India, where she drives entrepreneurship-led ecosystem development across youth, marginalized communities, and Indian Army veterans. She has led the establishment of eight Business Incubation Centres across Army locations, enabling venture creation and supporting first-generation entrepreneurs. She brings over three and a half decades of experience in education and institutional leadership, including her tenure as Vice-Principal at Kanoria Girls College, with a focus on capacity building and talent development. Her work contributes to building a future-ready workforce by aligning entrepreneurship with emerging sectors such as clean energy, sustainable technologies, and industrial decarbonisation. She has mentored entrepreneurs to transition into enterprise and participate in evolving energy and infrastructure ecosystems. She has been recognized internationally by NFTE USA as a Best Entrepreneurship Educator (twice).",
        credentials: [
            { label: "Experience", value: "35+ yrs" },
            { label: "Incubation Ctrs", value: "8" },
            { label: "NFTE USA", value: "2× Award" },
            { label: "Focus", value: "Edu + Entrep." },
        ],
        education: [],
    },
];

const techExpertise = [
    "Electrochemical Reactor Design",
    "Materials Science",
    "Nanostructured Media",
    "Industrial Reactor Engineering",
];

const teamStats = [
    { icon: Users, value: "6", label: "Executive Leaders" },
    { icon: Briefcase, value: "14", label: "Technical Specialists" },
    { icon: Globe, value: "3", label: "Continents" },
    { icon: Award, value: "25+", label: "Avg. Yrs Experience" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TeamPage() {
    return (
        <main className="bg-white min-h-screen selection:bg-brand-primary/20 selection:text-brand-secondary">

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gray-50 border-b border-gray-100">
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between"
                    >
                        {/* Text Col */}
                        <motion.div variants={fadeUp} className="max-w-2xl w-full">
                            <div className="flex items-center mb-6">
                                <span className="text-sm font-bold tracking-widest uppercase text-brand-primary whitespace-nowrap">
                                    The People Behind the Platform
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-[1.05]">
                                Leadership <br />
                                <span className="text-gray-400">&amp; Team</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mb-8">
                                A team of operators, engineers, and scientists united by a single mission - making green hydrogen industrially deployable and economically viable.
                            </p>

                            <div className="relative pl-6 border-l-4 border-brand-primary/30 max-w-lg">
                                <p className="text-gray-700 italic font-medium leading-relaxed">
                                    "Execution at scale requires more than just breakthrough science. It requires a discipline forged in industry, complex operations, and capital markets."
                                </p>
                            </div>
                        </motion.div>

                        {/* Image Col */}
                        <motion.div variants={fadeUp} className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 group">
                            <Image
                                src="/our team/our team hero section.png"
                                alt="GigaCore Team Hero"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 2. Team Stats Bar */}
            <section className="bg-[#0b1320] border-b border-white/5">
                <SectionWrapper>
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10"
                    >
                        {teamStats.map((stat, i) => (
                            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center justify-center py-8 px-4 text-center gap-2">
                                <stat.icon size={20} className="text-brand-primary mb-1" />
                                <div className="text-3xl font-black text-white tracking-tight">{stat.value}</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 3. Intro Statement + Competencies */}
            <section className="relative py-20 bg-white overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start"
                    >
                        {/* Quote */}
                        <motion.div variants={fadeUp} className="lg:col-span-3 pl-6 md:pl-10 border-l-4 border-brand-primary">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-normal md:leading-relaxed text-gray-800">
                                Our leadership brings decades of experience across energy, finance, engineering, and government - combined with deep technical expertise in advanced reactor design and electrochemical systems. We are building the infrastructure for the next industrial era.
                            </h2>
                        </motion.div>

                        {/* Side Info */}
                        <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-5">
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">Core Disciplines</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Energy Finance", "EPC Execution", "Reactor Engineering", "Industrial Policy", "Capital Markets", "Tax & Compliance"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-[12px] font-semibold rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-brand-primary/5 rounded-2xl p-6 border border-brand-primary/15">
                                <TrendingUp size={22} className="text-brand-primary mb-3" />
                                <p className="text-[13px] text-gray-700 font-medium leading-relaxed">
                                    Backed by advisors with $2B+ AUM and global technology commercialization track records across the U.S., Europe, and Asia.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 4. Leadership Cards */}
            <section className="py-[var(--spacing-section)] bg-slate-50 border-y border-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/[0.05] rounded-full blur-3xl pointer-events-none" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mb-14"
                    >
                        <motion.div variants={fadeUp} className="flex items-end justify-between gap-4 flex-wrap">
                            <div>
                                <span className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-3 block">Leadership</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                    Executive Team
                                </h2>
                            </div>
                            <div className="h-px flex-1 bg-gray-200 mb-2 min-w-[40px] hidden md:block" />
                            <span className="text-sm text-gray-400 font-medium mb-2">{leaders.length} members</span>
                        </motion.div>
                        <motion.div variants={fadeUp} className="h-[3px] w-16 bg-brand-primary mt-5 rounded-full" />
                    </motion.div>

                    {/* Cards Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
                    >
                        {leaders.map((person, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="group relative bg-white border border-gray-200 rounded-2xl p-8 md:p-10 flex flex-col gap-6 hover:border-brand-primary/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
                            >
                                {/* Top row */}
                                <div className="flex items-center gap-5">
                                    <div className="w-16 h-16 rounded-2xl bg-brand-primary/8 border border-brand-primary/15 flex items-center justify-center text-brand-primary font-black text-xl group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shrink-0">
                                        {person.initials}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-gray-900 font-bold text-xl mb-1 truncate">
                                            {person.name}
                                        </h3>
                                        <p className="text-brand-primary font-semibold text-[12px] tracking-wide uppercase leading-snug">
                                            {person.title}
                                        </p>
                                    </div>
                                </div>

                                {/* Credential Chips */}
                                <div className="flex flex-wrap gap-2">
                                    {person.credentials.map((c, j) => (
                                        <div key={j} className="bg-white border border-gray-200 rounded-xl px-3 py-2 text-center min-w-[64px]">
                                            <div className="text-[16px] font-black text-brand-primary leading-none">{c.value}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">{c.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {person.tags.map((tag, j) => (
                                        <span key={j} className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-[11px] font-semibold rounded-md tracking-wide">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="h-px bg-gray-100" />

                                {/* Bio */}
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    {person.bio}
                                </p>

                                {/* Background / Experience */}
                                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-2">Background</p>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {person.background}
                                    </p>
                                </div>

                                {/* Education */}
                                {person.education.length > 0 && (
                                    <div className="flex flex-col gap-2 mt-auto pt-2 border-t border-gray-100">
                                        <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-1">
                                            <GraduationCap size={13} />
                                            <span>Education</span>
                                        </div>
                                        <ul className="space-y-1.5">
                                            {person.education.map((edu, j) => (
                                                <li key={j} className="text-gray-600 text-[13px] flex items-start gap-2">
                                                    <ChevronRight size={13} className="text-brand-primary mt-0.5 shrink-0 opacity-70" />
                                                    {edu}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </motion.div>
                        ))}


                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 5. Board of Advisors — Featured Layout */}
            <section className="py-[var(--spacing-section)] bg-white border-b border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="mb-14"
                    >
                        <motion.div variants={fadeUp} className="flex items-end justify-between gap-4 flex-wrap">
                            <div>
                                <span className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-3 block">Advisors</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                                    Board of Advisors
                                </h2>
                            </div>
                        </motion.div>
                        <motion.div variants={fadeUp} className="h-[3px] w-16 bg-brand-primary mt-5 rounded-full" />
                    </motion.div>

                    {advisors.map((advisor, i) => (
                        <motion.div
                            key={advisor.name}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-brand-primary/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300"
                        >
                            {/* Top header bar */}
                            <div className="bg-gray-50 border-b border-gray-100 px-8 md:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary font-black text-xl shrink-0">
                                    {advisor.initials}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-gray-900 font-bold text-2xl mb-1">{advisor.name}</h3>
                                    <p className="text-brand-primary font-semibold text-[12px] tracking-widest uppercase">{advisor.title}</p>
                                </div>
                                {/* Credential chips */}
                                <div className="flex flex-wrap gap-2 sm:justify-end">
                                    {advisor.credentials.map((c, j) => (
                                        <div key={j} className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-center min-w-[70px]">
                                            <div className="text-[18px] font-black text-brand-primary leading-none">{c.value}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">{c.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Body */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                                {/* Bio - takes 2/3 */}
                                <div className="lg:col-span-2 px-8 md:px-10 py-8 border-b lg:border-b-0 lg:border-r border-gray-100">
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">About</p>
                                    <p className="text-gray-600 text-[15px] leading-relaxed">{advisor.description}</p>
                                </div>

                                {/* Sidebar - 1/3 */}
                                <div className="px-8 md:px-10 py-8 flex flex-col gap-6 bg-gray-50/50">
                                    {advisor.education.length > 0 && (
                                        <>
                                            <div>
                                                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-4">Education</p>
                                                <ul className="space-y-2">
                                                    {advisor.education.map((edu, j) => (
                                                        <li key={j} className="text-gray-700 text-[13px] font-medium flex items-start gap-2">
                                                            <GraduationCap size={13} className="text-brand-primary mt-0.5 shrink-0" />
                                                            {edu}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="h-px bg-gray-100" />
                                        </>
                                    )}
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">Focus Areas</p>
                                        <div className="flex flex-wrap gap-2">
                                            {["Robotics & AI", "Industrial Systems", "Dual-Use Tech", "Space", "Venture Capital"].map((tag, j) => (
                                                <span key={j} className="px-2.5 py-1 bg-white border border-gray-200 text-gray-600 text-[11px] font-semibold rounded-md">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-px bg-gray-100" />
                                    <div className="bg-brand-primary/5 border border-brand-primary/15 rounded-xl p-4">
                                        <p className="text-[12px] text-gray-700 leading-relaxed font-medium">
                                            Provides GigaCore with deep institutional investor networks and scale-up expertise across North America, Europe, and Asia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </SectionWrapper>
            </section>

            {/* 6. Core Technical Team */}
            <section className="relative py-[var(--spacing-section)] bg-slate-50 border-b border-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.04]" />
                <div className="absolute -bottom-40 -left-60 w-[800px] h-[800px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
                <SectionWrapper className="relative z-10">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                    >
                        {/* Content */}
                        <motion.div variants={fadeUp} className="order-2 lg:order-1">
                            <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-primary mb-4">
                                Research &amp; Engineering
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                                Core Technical Team
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Our bench of engineers and scientists forms the backbone of GigaCore's reactor development, rigorous testing, and expanding IP portfolio.
                            </p>

                            <div className="flex items-center gap-5 mb-10 pb-10 border-b border-gray-200">
                                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/15 flex items-center justify-center shrink-0">
                                    <Users size={28} className="text-brand-primary" />
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-gray-900 tracking-tight leading-none">14</div>
                                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1.5">Full-time Specialists</div>
                                </div>
                            </div>

                            <div className="mb-10">
                                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">Core Competencies</p>
                                <div className="flex flex-wrap gap-2">
                                    {techExpertise.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-semibold text-sm rounded-xl flex items-center gap-2 hover:border-brand-primary/30 transition-colors"
                                        >
                                            <FlaskConical size={13} className="text-brand-primary" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white border border-amber-200 rounded-xl p-5">
                                <div className="flex items-start gap-3">
                                    <Lock size={16} className="text-amber-500 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-[12px] font-bold uppercase tracking-widest text-amber-600 mb-1.5">Confidentiality Notice</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Individual CVs and detailed credentials for core technical team members are available upon execution of a Non-Disclosure Agreement (NDA).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div variants={fadeUp} className="order-1 lg:order-2 relative w-full aspect-square md:aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 group">
                            <Image
                                src="/our team/Untitled design.png"
                                alt="GigaCore Technical Engineering"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-brand-secondary/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                            <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
                        </motion.div>
                    </motion.div>
                </SectionWrapper>
            </section>

            {/* 7. CTA — Dark */}
            <section className="relative py-24 md:py-32 bg-[#0b1320] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
                <SectionWrapper className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <span className="text-[11px] font-bold tracking-widest uppercase text-brand-primary mb-6 block">Join the Mission</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Build the Infrastructure<br className="hidden sm:block" /> of Tomorrow
                        </h2>
                        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                            We are always looking for driven engineers, scientists, and operators who share our conviction that industrial decarbonization is both necessary and achievable.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="md" className="min-w-[220px] shadow-glow">
                                Get in Touch
                            </Button>
                        </Link>
                    </motion.div>
                </SectionWrapper>
            </section>
        </main>
    );
}
