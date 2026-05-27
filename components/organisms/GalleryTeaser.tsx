import Image from "next/image";
import Link from "next/link";

const photos = [
    { src: "/images/gallery/campo-img-8.jpg", alt: "Técnico DIAPSA usando equipo termográfico en planta industrial" },
    { src: "/images/gallery/capacitacion-img-3.jpg", alt: "Egresados de curso de certificación DIAPSA" },
    { src: "/images/gallery/campo-img-3.jpg", alt: "Inspección de maquinaria en planta industrial" },
];

export default function GalleryTeaser() {
    return (
        <section className="w-full bg-primary py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
                    <div>
                        <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                            Galería
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                            EXPERIENCIA EN <span className="text-secondary">ACCIÓN</span>
                        </h2>
                        <p className="text-white/70 mt-2">
                            22 años de trabajo real en campo y capacitación técnica especializada.
                        </p>
                    </div>
                    <Link
                        href="/acerca-de#galeria"
                        className="self-start lg:self-auto inline-flex items-center gap-2 bg-secondary text-primary font-bold px-6 py-2.5 rounded-xs hover:bg-white hover:text-primary transition-all duration-300 shadow-md whitespace-nowrap"
                    >
                        Ver galería completa
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Grid de 3 fotos */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {photos.map((photo, i) => (
                        <Link
                            key={photo.src}
                            href="/acerca-de#galeria"
                            className="group relative aspect-4/3 overflow-hidden rounded-sm block"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                priority={i === 0}
                                sizes="(max-width: 640px) 100vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-300" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
