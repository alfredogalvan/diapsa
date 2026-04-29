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
        bgColor: "bg-primary",
    },
    {
        slug: "monitoreo-redictivo-en-central-de-ciclo-combinado",
        industry: "Generación de energía",
        title: "Monitoreo predictivo en central de ciclo combinado",
        metric: "98.7%",
        metricLabel: "reducción de condiciones críticas",
        highlight: "$5.1M USD en pérdidas evitadas",
        service: "Monitoreo Integral de Condición",
        bgColor: "bg-primary",
    },
    {
        slug: "diapsa-start-en-planta-de-tratamiento-de-agua-residual",
        industry: "Tratamiento de agua residual",
        title: "De inspecciones aisladas a estrategia de confiabilidad",
        metric: "4 Etapas",
        metricLabel: "de transformación técnica",
        highlight: "3 disciplinas integradas en un programa",
        service: "DIAPSA START",
        bgColor: "bg-primary",
    },
];

export default function CasosExitoTeaser() {
    return (
        <section className="w-full bg-gray-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                        Casos de Éxito
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        RESULTADOS QUE <span className="text-secondary">HABLAN POR SÍ SOLOS</span>
                    </h2>
                    <p className="text-tertiary text-lg max-w-2xl mx-auto">
                        Empresas líderes confían en DIAPSA para proteger sus activos y maximizar su rentabilidad operativa.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {cases.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/casos-exito/${c.slug}`}
                            className="group flex flex-col bg-white rounded-xl border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300"
                        >
                            {/* Top accent bar + service badge */}
                            <div className="bg-primary px-6 py-4">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-secondary text-xs font-semibold uppercase tracking-wider">
                                        {c.service}
                                    </span>
                                    <span className="text-white/50 text-xs">{c.industry}</span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="flex flex-col flex-1 p-6 gap-4">
                                {/* Metric destacada */}
                                <div>
                                    <div className="text-4xl font-extrabold text-secondary leading-none">
                                        {c.metric}
                                    </div>
                                    <div className="text-tertiary text-xs uppercase tracking-wide mt-1">
                                        {c.metricLabel}
                                    </div>
                                </div>

                                {/* Título */}
                                <h3 className="font-semibold text-primary text-base leading-snug group-hover:text-secondary transition-colors">
                                    {c.title}
                                </h3>

                                {/* Highlight */}
                                <p className="text-sm text-tertiary border-l-2 border-secondary pl-3 italic">
                                    {c.highlight}
                                </p>
                            </div>

                            {/* Footer CTA */}
                            <div className="px-6 pb-5">
                                <span className="inline-flex items-center gap-1 text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
                                    Ver caso completo
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/casos-exito"
                        className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold px-8 py-3 rounded-xs hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        Ver todos los casos de éxito
                    </Link>
                </div>
            </div>
        </section>
    );
}
