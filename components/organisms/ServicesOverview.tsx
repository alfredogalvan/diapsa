import Image from "next/image";
import Link from "next/link";
import disciplinasData from "@/data/disciplinas.json";

export default function ServicesOverview() {
    return (
        <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
            {/* Glows industriales difuminados */}
            <div className="absolute -top-32 -left-32 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-100 h-100 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
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
                    <div className="inline-flex items-center gap-2 mt-6 bg-primary border border-primary/15 rounded-full px-5 py-2">
                        <svg className="w-4 h-4 text-secondary shrink-0" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 1l2.753 5.576 6.157.895-4.455 4.342 1.051 6.128L12 15l-5.506 2.941 1.051-6.128L3.09 7.471l6.157-.895L12 1z" />
                        </svg>
                        <span className="text-white text-lg font-semibold tracking-wide">
                            Especialistas certificados <span className="text-secondary">Categoría 3</span> en cada disciplina
                        </span>
                    </div>
                </div>

                {/* Grid de disciplinas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 shadow-2xl">
                    {disciplinasData.disciplines.map((discipline) => (
                        <div
                            key={discipline.title}
                            className="group relative overflow-hidden rounded-sm bg-primary border border-gray-100 hover:border-secondary/40 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Imagen */}
                            <div className="relative w-full h-72 overflow-hidden">
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
                                <h3 className="font-bold text-white text-base mb-2 group-hover:text-secondary transition-colors">
                                    {discipline.title}
                                </h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
                                    {discipline.description}
                                </p>
                            </div>

                            {/* Borde inferior secondary en hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center flex justify-center gap-10">
                    <Link
                        href="/servicios/monitoreo-condicion"
                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xs hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md"
                    >
                        Ver todos los servicios
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link href={'#contacto'}
                        className="inline-flex border-2 border-secondary items-center gap-2 bg-secondary text-white font-bold px-8 py-3 rounded-xs hover:bg-transparent  hover:text-secondary transition-all duration-300 shadow-md"
                    >Contáctanos</Link>
                </div>
            </div>
        </section>
    );
}
