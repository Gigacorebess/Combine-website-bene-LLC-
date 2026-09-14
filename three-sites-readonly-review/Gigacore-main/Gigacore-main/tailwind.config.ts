import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    // Bloom Energy Logo Green (Exact Match)
                    primary: "#00D563", // Bloom Energy's bright logo green
                    secondary: "#001F1B", // Dark green - text, headers
                    accent: "#00BF56", // Slightly darker for hover
                    dark: "#001F1B", // Dark green for dark sections
                    light: "#F8FAFC", // Off-white for subtle backgrounds
                    green: {
                        50: "#E6FFF3",   // Lightest green tint
                        100: "#CCFFE7",  // Very light green
                        200: "#99FFCF",  // Light green
                        300: "#66FFB7",  // Soft green
                        400: "#33FF9F",  // Medium green
                        500: "#00D563",  // Primary green (Bloom Energy logo)
                        600: "#00BF56",  // Hover green
                        700: "#00A94A",  // Darker green
                        800: "#00933D",  // Very dark green
                        900: "#007D31",  // Darkest green
                        950: "#001F1B",  // Signature dark green
                    },
                    gray: {
                        50: "#F9FAFB",
                        100: "#F3F4F6",
                        200: "#E5E7EB",
                        300: "#D1D5DB",
                        400: "#9CA3AF",
                        500: "#6B7280",
                        600: "#4B5563",
                        700: "#374151",
                        800: "#3E3E3E",  // Secondary text
                        900: "#111827",
                        950: "#030712",
                    }
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-glow": "conic-gradient(from 90deg at 50% 50%, #0F172A 0%, #1e293b 50%, #0F172A 100%)",
            },
            boxShadow: {
                // Bloom Energy & Ceres patterns - refined shadow system
                'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'card': '0 4px 12px rgba(0, 0, 0, 0.08)', // Ceres pattern
                'card-hover': '0 8px 16px rgba(0, 0, 0, 0.12)', // Ceres hover
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                'glow': '0 0 20px rgba(5, 150, 105, 0.3)',
                'glow-lg': '0 0 40px rgba(5, 150, 105, 0.2)',
            },
            spacing: {
                // Extended spacing scale for Bloom/Ceres patterns
                '18': '4.5rem',   // 72px
                '22': '5.5rem',   // 88px
                '26': '6.5rem',   // 104px
                '30': '7.5rem',   // 120px - Bloom/Ceres section padding
                '34': '8.5rem',   // 136px
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slow-zoom': 'slowZoom 20s linear infinite alternate',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slowZoom: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(1.1)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(5, 150, 105, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(5, 150, 105, 0.5)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
