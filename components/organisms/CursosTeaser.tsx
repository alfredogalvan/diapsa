import Link from "next/link";
import cursosData from "@/data/cursos/new.json";

const FEATURED_IDS = [1, 2, 3];

const iconMap: Record<string, JSX.Element> = {
    thermometer: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M9 3v11.382A4 4 0 1015 14.382V3a3 3 0 00-6 0z" />
        </svg>
    ),
    vibration: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M9 19V6l2 4 2-7 2 4 2-4v13M3 12h2m14 0h2" />
        </svg>
    ),
    sound: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M15.536 8.464a5 5 0 010 7.072M12 6a7 7 0 010 12M9 9H6a1 1 0 00-1 1v4a1 1 0 001 1h3l4 4V5L9 9z" />
        </svg>
    ),
};

export default function CursosTeaser() {
    const featured = cursosData.courses.filter((c) => FEATURED_IDS.includes(c.id));

    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
                    <div>
                        <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                            Formación Profesional
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
                            CURSOS Y <span className="text-secondary">CERTIFICACIONES</span>
                        </h2>
                        <p className="text-tertiary mt-2 max-w-xl">
                            Certifica a tu equipo bajo estándares ISO 18436 con instructores con experiencia real en campo.
                        </p>
                    </div>
                    <Link
                        href="/cursos"
                        className="self-start lg:self-auto inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-2.5 rounded-xs hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md whitespace-nowrap"
                    >
                        Ver todos los cursos
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featured.map((course) => (
                        <Link
                            key={course.id}
                            href={`/cursos/${course.slug}`}
                            className="group flex flex-col bg-white rounded-sm border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300"
                        >
                            {/* Header de la card */}
                            <div className="relative bg-primary p-6 flex items-start gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                    {iconMap[course.icono] ?? iconMap.thermometer}
                                </div>
                                <div>
                                    <span className="text-secondary text-xs font-bold uppercase tracking-wider">
                                        {course.tipo_curso}
                                    </span>
                                    <h3 className="text-white font-bold text-sm mt-1 leading-snug">
                                        {course.name}
                                    </h3>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="flex flex-col flex-1 p-6 gap-3">
                                {/* Norma */}
                                {course.contenido.normativa_referencia && (
                                    <div className="flex items-center gap-2">
                                        <span className="bg-secondary/10 text-secondary text-xs font-semibold px-2.5 py-0.5 rounded-full border border-secondary/30">
                                            {course.contenido.normativa_referencia.trim()}
                                        </span>
                                    </div>
                                )}

                                {/* Descripción */}
                                <p className="text-tertiary text-sm leading-relaxed line-clamp-3">
                                    {course.contenido.descripcion_general}
                                </p>

                                {/* Modalidad */}
                                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                                    <svg className="w-4 h-4 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-xs text-tertiary">{course.contenido.modalidad}</span>
                                    <span className="ml-auto text-secondary text-sm font-semibold group-hover:gap-1 inline-flex items-center gap-0.5 transition-all">
                                        Ver curso
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
