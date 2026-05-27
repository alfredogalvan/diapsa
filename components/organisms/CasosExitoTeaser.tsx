import Image from "next/image";
import Link from "next/link";

const cases = [
    {
        slug: "vision-predictiva-y-ahorros-millonarios-en-industria-alimenticia",
        industry: "Industria alimenticia",
        title: "Ahorros millonarios con termografía predictiva",
        metric: "$12.2M USD",
        metricLabel: "en ahorros evitados",
        highlight: "90% reducción del riesgo operativo",
        service: "Termografía Infrarroja",
    },
    {
        slug: "monitoreo-predictivo-en-central-de-ciclo-combinado",
        industry: "Generación de energía",
        title: "Monitoreo predictivo en central de ciclo combinado",
        metric: "98.7%",
        metricLabel: "reducción de condiciones críticas",
        highlight: "$5.1M USD en pérdidas evitadas",
        service: "Monitoreo Integral de Condición",
    },
    {
        slug: "diapsa-start-en-planta-de-tratamiento-de-agua-residual",
        industry: "Tratamiento de agua residual",
        title: "De inspecciones aisladas a estrategia de confiabilidad",
        metric: "4 Etapas",
        metricLabel: "de transformación técnica",
        highlight: "3 disciplinas integradas en un programa",
        service: "DIAPSA START",
    },
];

function CaseCard({ c }: { c: (typeof cases)[0] }) {
    return (
        <Link
            href={`/casos-exito/${c.slug}`}
            className="group flex flex-col bg-white/10 rounded-sm border border-white/15 hover:border-secondary/50 shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 h-full"
        >
            {/* Top accent */}
            <div className="px-4 py-3 border-b border-white/10">
                <div className="flex items-center justify-between gap-1">
                    <span className="text-secondary text-xs font-semibold uppercase tracking-wider leading-none">
                        {c.service}
                    </span>
                    <span className="text-white/40 text-xs truncate">{c.industry}</span>
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-4 gap-3">
                <div>
                    <div className="text-2xl font-extrabold text-secondary leading-none">
                        {c.metric}
                    </div>
                    <div className="text-white/50 text-xs uppercase tracking-wide mt-1">
                        {c.metricLabel}
                    </div>
                </div>
                <h3 className="font-semibold text-white text-sm leading-snug group-hover:text-secondary transition-colors">
                    {c.title}
                </h3>
                <p className="text-xs text-white/60 border-l-2 border-secondary pl-2 italic">
                    {c.highlight}
                </p>
            </div>

            {/* Footer */}
            <div className="px-4 pb-4">
                <span className="inline-flex items-center gap-1 text-secondary text-xs font-semibold group-hover:gap-2 transition-all">
                    Ver caso completo
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}

export default function CasosExitoTeaser() {
    return (
        <section className="w-full bg-primary py-16 lg:py-24 relative overflow-hidden">
            {/* Glows industriales difuminados */}
            <div className="absolute top-1/4 left-1/3 w-150 h-150 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-100 h-100 bg-primary/40 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* IZQUIERDA: Imagen del ingeniero */}
                    <div className="relative w-full h-80 lg:h-full min-h-120 overflow-hidden rounded-sm">
                        <Image
                            src="/images/engineer-without-bg.png"
                            alt="Especialista certificado DIAPSA"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Gradientes que fusionan la imagen con el fondo claro */}
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent" /> */}
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-l from-blue-50/30 to-transparent" /> */}
                    </div>

                    {/* DERECHA: Headlines + Cards en pirámide invertida */}
                    <div className="flex flex-col gap-6">
                        {/* Headlines */}
                        <div>
                            <span className="inline-block w-fit text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                                Casos de Éxito
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                                RESULTADOS QUE <span className="text-secondary">HABLAN POR SÍ SOLOS</span>
                            </h2>
                            <p className="text-white/70 text-base mb-5 max-w-md">
                                Empresas líderes confían en DIAPSA para proteger sus activos y maximizar su rentabilidad operativa.
                            </p>
                            <Link
                                href="/casos-exito"
                                className="inline-flex w-fit items-center gap-2 bg-secondary text-primary font-bold px-8 py-3 rounded-xs hover:bg-white hover:text-primary transition-all duration-300 shadow-md"
                            >
                                Ver todos los casos de éxito
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Cards en pirámide invertida */}
                        <div className="flex flex-col gap-4">
                            {/* Fila superior: 2 cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <CaseCard c={cases[0]} />
                                <CaseCard c={cases[1]} />
                            </div>
                            {/* Fila inferior: 1 card centrada → vértice de la pirámide */}
                            <div className="flex justify-center">
                                <div className="w-full sm:w-[calc(50%-8px)]">
                                    <CaseCard c={cases[2]} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
