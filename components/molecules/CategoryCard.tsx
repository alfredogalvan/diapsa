/**
 * CategoryCard Component - Marketing Digital Optimized
 * 
 * Estrategia de Marketing:
 * ✓ Jerarquía visual clara para guiar el usuario
 * ✓ Indicadores de valor (productos, nivel)
 * ✓ Call-to-Action prominente
 * ✓ Hover effects que generan engagement
 * ✓ Social proof (cantidad de items)
 * ✓ Diseño responsivo orientado a conversión
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Category } from '@/types/category';

interface Props {
    category: Category;
    href?: string;
}

export default function CategoryCard({ category, href = '#' }: Props) {
    const [isHovered, setIsHovered] = useState(false);

    // Copywriting estratégico según cantidad de productos
    const getValueProposition = () => {
        const count = category.products_count || 0;
        if (count === 0) return 'Próximas opciones';
        if (count === 1) return '1 solución especializada';
        if (count < 5) return `${count} opciones disponibles`;
        return `${count}+ soluciones especializadas`;
    };

    return (
        <Link href={href}>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative h-96 md:h-80 lg:h-120 rounded-lg overflow-hidden mb-8 lg:mb-10 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
                {/* Background Image */}
                <div className="absolute inset-0">
                    {/* la imagen debe ser con las medidas 1200px x 800px */}
                    <Image
                        src={category.image ?? '/images/productos/categories-placeholder.svg'}
                        alt={category.name}
                        fill
                        className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'
                            }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>

                {/* Gradient Overlay - Dinámico según hover */}
                <div
                    className={`absolute inset-0 bg-linear-to-r from-primary/95 via-primary/85 to-primary/70 transition-opacity duration-300 ${isHovered ? 'opacity-85' : 'opacity-90'
                        }`}
                />

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 lg:p-10">
                    {/* Top Section - Badge */}
                    <div className="flex items-start justify-between">
                        <div className="inline-flex items-center bg-secondary text-primary font-bold px-4 py-2 rounded-lg shadow-md hover:bg-secondary/90 transition-colors">
                            <span className="mr-2">
                                {category.icon ? (
                                    category.icon
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                )}
                            </span>
                            <span className="text-xs md:text-sm uppercase tracking-wide">
                                Categoría
                            </span>
                        </div>

                        {/* Nivel Badge - Solo si existe */}
                        {category.level > 0 && (
                            <div className="text-white/80 text-xs md:text-sm font-semibold">
                                Nivel {category.level}
                            </div>
                        )}
                    </div>

                    {/* Middle Section - Main Copy */}
                    <div className="space-y-3">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-lg drop-shadow-lg">
                            {category.name}
                        </h2>
                        <p className="text-base md:text-lg text-white/95 max-w-xl leading-relaxed drop-shadow-md">
                            {category.description}
                        </p>
                    </div>

                    {/* Bottom Section - CTA & Metrics */}
                    <div className="flex items-end justify-between">
                        {/* Value Proposition */}
                        <div className="space-y-1">
                            <p className="text-xs md:text-sm text-white/70 uppercase tracking-widest font-semibold">
                                Lo que encontrarás
                            </p>
                            <p className="text-lg md:text-xl text-secondary font-bold">
                                {getValueProposition()}
                            </p>
                        </div>

                        {/* CTA Arrow */}
                        <div
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary text-primary flex items-center justify-center font-bold text-xl transition-all duration-300 shadow-lg ${isHovered
                                ? 'scale-110 translate-x-2'
                                : 'scale-100 translate-x-0'
                                }`}
                        >
                            →
                        </div>
                    </div>
                </div>

                {/* Hover Indicator Line */}
                <div
                    className={`absolute bottom-0 left-0 h-1 bg-secondary transition-all duration-300 ${isHovered ? 'w-full' : 'w-0'
                        }`}
                />
            </div>
        </Link>
    );
}