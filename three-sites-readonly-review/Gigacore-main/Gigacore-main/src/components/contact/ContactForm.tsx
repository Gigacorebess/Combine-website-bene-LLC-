"use client";
import React, { useState, useRef, useEffect } from "react";

const INDUSTRIES = [
    "Data Centers",
    "Energy Storage & Sector Coupling",
    "Green Ammonia",
    "Green Steel",
    "Industrial Corridors & Clusters",
    "Industrial Hydrogen Feedstock",
    "Marine & Heavy Transport",
    "Oil & Gas",
    "On-Site & Distributed Hydrogen",
    "Refining & Petrochemicals",
    "Utilities & Grid Support",
    "Other"
];

const COUNTRIES = [
    "United States",
    "India",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "Other"
];

// ── Custom Dropdown component ──────────────────────────────────────────────────
interface CustomDropdownProps {
    id: string;
    value: string;
    options: string[];
    placeholder?: string;
    required?: boolean;
    onChange: (val: string) => void;
}

function CustomDropdown({ id, value, options, placeholder = "Please Select", required, onChange }: CustomDropdownProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // Hidden native input for form validation
    return (
        <div ref={ref} className="relative w-full">
            {/* Hidden input for HTML5 form validation */}
            <input
                type="text"
                id={id}
                name={id}
                value={value}
                required={required}
                readOnly
                tabIndex={-1}
                aria-hidden="true"
                className="absolute inset-0 opacity-0 pointer-events-none w-0 h-0"
            />

            {/* Trigger button */}
            <button
                type="button"
                onClick={() => setOpen(prev => !prev)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={`w-full flex items-center justify-between px-4 py-3.5 bg-[#f8f9fa] border rounded-lg text-left focus:outline-none transition-all duration-300 ${open ? "bg-white border-gray-300 ring-4 ring-gray-50" : "border-transparent text-gray-900 hover:bg-gray-100"}`}
            >
                <span className={`truncate text-[15px] ${value ? "text-gray-900" : "text-gray-500"}`}>
                    {value || placeholder}
                </span>
                <svg
                    className={`ml-2 w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20" fill="currentColor"
                >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {/* Dropdown list */}
            {open && (
                <ul
                    role="listbox"
                    className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-xl max-h-64 overflow-y-auto py-1 left-0"
                    style={{ minWidth: 0 }}
                >
                    {options.map(opt => (
                        <li
                            key={opt}
                            role="option"
                            aria-selected={value === opt}
                            onClick={() => { onChange(opt); setOpen(false); }}
                            className={`px-4 py-2.5 text-[15px] cursor-pointer truncate transition-colors duration-150 ${value === opt
                                ? "bg-brand-primary text-white font-medium"
                                : "text-gray-800 hover:bg-gray-50"
                                }`}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// ── Main ContactForm ──────────────────────────────────────────────────────────
export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
        industry: "",
        country: "",
        message: "",
        agreePolicy: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    const handleDropdown = (name: string) => (val: string) => {
        setFormData(prev => ({ ...prev, [name]: val }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`New Web Enquiry from ${formData.firstName} ${formData.lastName}`);
        const body = encodeURIComponent(
            `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Job Title: ${formData.jobTitle}
Industry: ${formData.industry}
Country/Region: ${formData.country}

Message:
${formData.message}

Policy Agreed: ${formData.agreePolicy ? "Yes" : "No"}
`);
        window.location.href = `mailto:info@gigacore.energy?subject=${subject}&body=${body}`;
    };

    const inputClass = "w-full px-4 py-3.5 bg-[#f8f9fa] border border-transparent rounded-lg text-gray-900 focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-4 focus:ring-gray-50 transition-all duration-300 placeholder:text-gray-500";
    const labelTextClass = "text-[14px] md:text-[15px] font-bold text-[#1a1a1a]";
    const asteriskClass = "text-red-500 font-bold text-[15px] leading-none";

    const renderLabel = (text: string, required: boolean = false) => (
        <div className="flex flex-col gap-1 mb-2">
            <label className={labelTextClass}>{text}</label>
            {required && <span className={asteriskClass}>*</span>}
        </div>
    );

    return (
        <div className="w-full max-w-[95%] lg:max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm border border-gray-100">
            <div className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">

                    {/* Industry */}
                    <div className="w-full z-20 relative">
                        {renderLabel("Industry category", true)}
                        <CustomDropdown id="industry" value={formData.industry} options={INDUSTRIES} placeholder="Select an industry" required onChange={handleDropdown("industry")} />
                    </div>

                    {/* Company */}
                    <div className="w-full">
                        {renderLabel("Organization name", true)}
                        <input type="text" id="company" name="company" required value={formData.company} onChange={handleChange} className={inputClass} placeholder="Full legal or operating name" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                        <div>
                            {renderLabel("First name", true)}
                            <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} className={inputClass} placeholder="Your first name" />
                        </div>
                        <div>
                            {renderLabel("Last name", true)}
                            <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} className={inputClass} placeholder="Your last name" />
                        </div>
                        <div>
                            {renderLabel("Email address", true)}
                            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="your.email@organization.com" />
                        </div>
                        <div>
                            {renderLabel("Phone number", true)}
                            <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+1 (555) 000-0000" />
                        </div>
                        <div>
                            {renderLabel("Job Title", true)}
                            <input type="text" id="jobTitle" name="jobTitle" required value={formData.jobTitle} onChange={handleChange} className={inputClass} placeholder="Your current role" />
                        </div>
                        <div className="relative z-10">
                            {renderLabel("Geographic focus")}
                            <CustomDropdown id="country" value={formData.country} options={COUNTRIES} placeholder="Country, state, or specific site" required onChange={handleDropdown("country")} />
                        </div>
                    </div>

                    {/* Textarea */}
                    <div className="w-full">
                        {renderLabel("Project context or engagement objective", true)}
                        <textarea
                            id="message" name="message" required rows={4}
                            value={formData.message} onChange={handleChange}
                            className={`${inputClass} resize-y bg-[#f8f9fa] border border-transparent`}
                            placeholder="Please describe the scope, timeline, and decision-making context for this inquiry."
                        ></textarea>
                    </div>

                    {/* Confidentiality Block */}
                    <div className="w-full border-l-[3px] border-brand-primary bg-white py-1 pl-4 mt-8 mb-4">
                        <p className="text-[14px] text-[#4a4a4a] leading-relaxed">
                            <span className="font-bold text-[#1a1a1a]">Confidentiality:</span> All submissions are treated as confidential and reviewed internally before external distribution. We do not share contact details or project information without explicit consent.
                        </p>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start gap-3">
                        <div className="relative flex items-center h-5 mt-0.5 shrink-0">
                            <input
                                type="checkbox" id="agreePolicy" name="agreePolicy" required
                                checked={formData.agreePolicy} onChange={handleChange}
                                className="w-4 h-4 rounded border-gray-300 text-brand-primary focus:ring-brand-primary focus:ring-offset-1 cursor-pointer transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="agreePolicy" className="text-[14px] text-[#4a4a4a] leading-[1.6] cursor-pointer block">
                                By submitting the form, you agree to the <a href="/privacy-policy" className="text-brand-primary font-bold hover:underline">Privacy Policy</a>, authorize Gigacore to use your personal information to administer your account and to provide the products and services you requested from us.
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="bg-brand-primary hover:bg-[#468c37] text-white font-bold py-3.5 px-8 rounded-md transition-colors duration-300 text-[15px] focus:outline-none focus:ring-4 focus:ring-brand-primary/30 w-auto"
                        >
                            Submit Inquiry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
