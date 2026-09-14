import Image from "next/image";

export default function Logo({ className = "", isScrolled = false }: { className?: string, isScrolled?: boolean }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Logo Image - changes based on navbar background */}
            <div className="relative w-[180px] h-[60px] md:w-[260px] md:h-[100px] shrink-0">
                <Image
                    src={isScrolled ? "/black_logo.png" : "/white_logo.png"}
                    alt="Gigacore Energy Logo"
                    fill
                    className="object-contain object-left transition-opacity duration-300"
                />
            </div>
        </div>
    );
}
