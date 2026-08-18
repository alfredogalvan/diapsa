import Image from "next/image";
import React from "react";

interface StageCardProps {
    number: number;
    label: string;
    icon: React.ReactNode;
    title: string;
    content: string | string[];
    image: string;
    imageAlt?: string;
    quote?: string;
    featured?: boolean;
}

export default function StageCard({
    number,
    label,
    icon,
    title,
    content,
    image,
    imageAlt,
    quote,
    featured = false,
}: StageCardProps) {
    const borderClass = featured
        ? "border-2 border-secondary shadow-secondary/10"
        : "border border-white/10 hover:border-secondary/50";

    return (
        <div
            className={`group relative min-h-[300px] bg-black/45 ${borderClass} rounded-sm overflow-hidden shadow-lg shadow-black/20 hover:bg-black/60 hover:shadow-xl transition-all duration-300`}
        >
            <div className="grid h-full grid-cols-1 md:grid-cols-[240px_1fr]">
                <div className="relative min-h-48 md:min-h-full overflow-hidden bg-primary/70">
                    <Image
                        src={image}
                        alt={imageAlt ?? title}
                        fill
                        className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 240px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-primary/20 to-transparent md:bg-linear-to-r md:from-transparent md:via-primary/20 md:to-black/80" />
                </div>

                <div className="relative flex min-h-[300px] flex-col justify-center px-7 py-9 md:px-9">
                    <div className="mb-5 flex items-center gap-4">
                        {/* <div className="grid h-14 w-14 shrink-0 place-items-center rounded-sm bg-primary/80 border border-white/10">
                            {icon}
                        </div> */}
                        <p className="text-secondary font-bold">{label}</p>
                    </div>

                    <h3 className="relative z-10 text-2xl text-white font-bold">{title}</h3>

                    {quote && (
                        <p className="relative z-10 mt-4 font-bold text-white">&ldquo;{quote}&rdquo;</p>
                    )}

                    {Array.isArray(content) ? (
                        <ul className="relative z-10 mt-5 text-white/70 text-sm md:text-base space-y-1.5">
                            {content.map((item, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-secondary text-2xl leading-none mr-2">•</span>
                                    <p>{item}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="relative z-10 mt-5 text-white/70 text-base md:text-lg leading-relaxed">{content}</p>
                    )}

                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-secondary text-[11rem] md:text-[14rem] font-bold opacity-15 select-none pointer-events-none leading-none">
                        {number}
                    </div>
                </div>
            </div>
        </div>
    );
}
