import React from "react";

interface StageCardProps {
    number: number;
    label: string;
    icon: React.ReactNode;
    title: string;
    content: string | string[];
    quote?: string;
    featured?: boolean;
}

export default function StageCard({
    number,
    label,
    icon,
    title,
    content,
    quote,
    featured = false,
}: StageCardProps) {
    const borderClass = featured
        ? "border-4 border-secondary"
        : "border border-primary/80 hover:border-secondary/50";

    return (
        <div
            className={`relative px-8 py-16 space-y-6 bg-primary ${borderClass} rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}
        >
            {icon}
            <p className="text-secondary font-bold">{label}</p>
            <h3 className="text-xl text-white font-bold">{title}</h3>

            {quote && (
                <p className="font-bold text-white">&ldquo;{quote}&rdquo;</p>
            )}

            {Array.isArray(content) ? (
                <ul className="text-white/70 text-sm md:text-base lg:text-lg space-y-1">
                    {content.map((item, i) => (
                        <li key={i} className="flex items-center">
                            <span className="text-secondary text-3xl mr-2">•</span>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-white/70 text-lg">{content}</p>
            )}

            <div className="absolute -bottom-16 md:-bottom-20 lg:-bottom-24 -right-4 md:-right-6 lg:-right-8 text-secondary text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold opacity-40 select-none pointer-events-none leading-none">
                {number}
            </div>
        </div>
    );
}
