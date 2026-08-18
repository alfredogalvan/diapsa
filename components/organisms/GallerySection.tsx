'use client';
import { useState } from 'react';
import Image from 'next/image';
import images from '@/data/images-gallery.json';
import LightBoxImage from '../molecules/LightBoxImage';
export function GallerySection() {
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [showAll, setShowAll] = useState(false);
    const [openImage, setOpenImage] = useState<string | null>(null);

    const categories = ['Todos', 'Capacitaciones', 'Trabajo en campo'];

    const filteredImages = activeFilter === 'Todos'
        ? images
        : images.filter(img => img.category === activeFilter);

    const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 6);

    return (
        <>
            <section id='galeria' className="w-full py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-8">

                        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                            EXPERIENCIA EN <span className="text-secondary">ACCIÓN</span>
                        </h2>

                        <p className="max-w-2xl mx-auto text-tertiary text-lg">
                            Descubre cómo hemos ayudado a empresas industriales a optimizar
                            sus operaciones y mantener sus activos en óptimas condiciones
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                aria-pressed={activeFilter === category}
                                key={category}
                                onClick={() => {
                                    setActiveFilter(category);
                                    setShowAll(false); // 🔥 reset
                                }}
                                className={`
                                    px-6 py-3 rounded-full font-semibold transition-all duration-300
                                    ${activeFilter === category
                                        ? 'bg-secondary text-primary shadow-lg scale-105'
                                        : 'bg-gray-100 text-tertiary hover:bg-gray-200'
                                    }
                                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {displayedImages.map((image, index) => (
                            <div
                                key={image.src}
                                onClick={() => setOpenImage(image.src)}
                                className="group relative aspect-4/3 overflow-hidden rounded-sm cursor-pointer bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-300"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    priority={index < 3} // 🔥 primeras visibles
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="text-secondary font-bold text-sm mb-2">
                                        {image.category}
                                    </span>
                                </div>

                                {/* Zoom icon */}
                                <div
                                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Ver más */}
                    {filteredImages.length > 6 && (
                        <div className="text-center">
                            <button
                                onClick={() => !showAll ? setShowAll(true) : setShowAll(false)}
                                className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-white font-bold rounded-xs hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md"
                            >
                                {!showAll ? 'Ver más imágenes' : 'Ver menos imágenes'}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <LightBoxImage
                image={openImage ?? ''}
                isOpen={!!openImage}
                onClose={() => setOpenImage(null)}
            />
        </>
    );
}