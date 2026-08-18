"use client";

import { useEffect, useState } from "react";

export interface ArticleIndexItem {
    id: string;
    label: string;
}

export default function ArticleIndex({ items }: { items: ArticleIndexItem[] }) {
    const [activeId, setActiveId] = useState(items[0]?.id ?? "");

    useEffect(() => {
        const sections = items
            .map((item) => document.getElementById(item.id))
            .filter((section): section is HTMLElement => Boolean(section));

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleEntry?.target.id) {
                    setActiveId(visibleEntry.target.id);
                }
            },
            {
                rootMargin: "-25% 0px -55% 0px",
                threshold: [0.1, 0.25, 0.5, 0.75],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [items]);

    return (
        <nav aria-label="Indice del articulo" className="text-sm">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-tertiary">
                Indice
            </p>
            <ol className="flex gap-3 overflow-x-auto border-y border-gray-100 py-3 lg:block lg:space-y-2 lg:overflow-visible lg:border-y-0 lg:border-l lg:py-0 lg:pl-6">
                {items.map((item) => {
                    const isActive = activeId === item.id;

                    return (
                        <li key={item.id} className="shrink-0 lg:shrink">
                            <a
                                href={`#${item.id}`}
                                className={`block whitespace-nowrap font-semibold transition-colors hover:text-secondary lg:whitespace-normal ${isActive ? "text-secondary" : "text-tertiary"
                                    }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
