import Image from "next/image";
import Link from "next/link";
import disciplinasData from "@/data/disciplinas.json";

export default function ServicesOverview() {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                        Nuestras Disciplinas
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        SOLUCIONES DE MONITOREO <span className="text-secondary">PREDICTIVO</span>
                    </h2>
                    <p className="text-tertiary text-lg max-w-2xl mx-auto">
                        Integramos múltiples disciplinas técnicas para obtener una visión 360° del estado real de tus equipos.
                    </p>
                </div>

                {/* Grid de disciplinas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {disciplinasData.disciplines.map((discipline) => (
                        <div
                            key={discipline.title}
                            className="group relative overflow-hidden rounded-sm bg-gray-50 border border-gray-100 hover:border-secondary/40 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Imagen */}
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={discipline.image}
                                    alt={discipline.imageAlt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-300" />
                            </div>

                            {/* Contenido */}
                            <div className="p-5">
                                <h3 className="font-bold text-primary text-base mb-2 group-hover:text-secondary transition-colors">
                                    {discipline.title}
                                </h3>
                                <p className="text-tertiary text-sm leading-relaxed">
                                    {discipline.description}
                                </p>
                            </div>

                            {/* Borde inferior secondary en hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/servicios/monitoreo-condicion"
                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xs hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md"
                    >
                        Ver todos los servicios
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
