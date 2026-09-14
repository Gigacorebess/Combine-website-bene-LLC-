import { ReactNode } from "react";
import clsx from "clsx";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
    return (
        <div id={id} className={clsx("w-full px-6 md:px-10 lg:px-16 mx-auto max-w-[1440px]", className)}>
            {children}
        </div>
    );
}
