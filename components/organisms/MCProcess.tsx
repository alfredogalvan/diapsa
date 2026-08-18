import Link from "next/link";

const processSteps = [
    {
        step: "01",
        title: "Diagnostico",
        subtle: 'Evaluación inicial',
        description:
            "Levantamos el inventario de activos críticos, historial de fallas y condición operativa actual. Identificamos los equipos de mayor riesgo para su operación.",
        time: "1–2 semanas",
        cta: "/servicios/diagnostico-situacional",
        ctaLabel: "Ver diagnóstico situacional",
    },
    {
        step: "02",
        title: "Diseño",
        subtle: 'Estrategia personalizada',
        description:
            "Diseñamos un plan de monitoreo a la medida: frecuencia de medición, tecnologías a aplicar y criterios de criticidad según la industria y los activos.",
        time: "1 semana",
    },
    {
        step: "03",
        title: "Detección",
        subtle: 'Mediciones en campo',
        description:
            "Nuestros especialistas aplican termografía, análisis de vibraciones, ultrasonido y diagnóstico de maquinaria directamente en su planta, sin detener la operación.",
        time: "Continuo",
    },
    {
        step: "04",
        title: "Decisión",
        subtle: 'Reporte y Acción',
        description: "Entregamos informes técnicos de diferente categoría según su necesidad",
        list: ['Reportes inmediatos', 'Reportes de Seguimiento', 'Reportes Históricos'],
        time: "48–72 h post-medición",
        cta: '#reportes',
        ctaLabel: 'Comparar reportes',
    },
    {
        step: "05",
        title: "Data",
        subtle: 'IDAP',
        description:
            "Entregamos informes técnicos con hallazgos, severidad y recomendaciones priorizadas. Usted sabe exactamente qué intervenir, cuándo y por qué.",
        time: "Persistencia Ilimitada ",
        cta: "/servicios/idap",
        ctaLabel: "Conocer IDAP",
    },
];

export default function MCProcess() {
    return (
        <section id="proceso" className="w-full bg-primary py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-150 h-150 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-12">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase mb-4">
                        Las 5D de DIAPSA
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                        ¿CÓMO <span className="text-secondary">FUNCIONA?</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Un proceso claro, probado y orientado a resultados. Así es como transformamos datos técnicos en decisiones de mantenimiento rentables.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {processSteps.map((step, i) => (
                        <div
                            key={step.step}
                            className="group flex flex-col bg-white/10 border border-white/15 hover:border-secondary/50 rounded-sm p-6 gap-4 transition-all duration-300 hover:shadow-xl relative"
                        >
                            <span className="text-5xl font-extrabold text-secondary/30 leading-none select-none">
                                {step.step}
                            </span>
                            <h3 className="font-bold text-white text-base leading-snug group-hover:text-secondary transition-colors">
                                {step.title}
                            </h3>
                            {step.subtle && (
                                <span className="text-secondary text-xs font-semibold tracking-wider uppercase">
                                    {step.subtle}
                                </span>
                            )}
                            <p className="text-white/70 text-sm leading-relaxed flex-1">{step.description}</p>
                            {step.list && (
                                <ul className="text-white/70 text-sm space-y-1">
                                    {step.list.map((l, idx) => (
                                        <li key={idx}>• {l}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                <div className="flex items-center gap-2 text-xs text-secondary font-semibold uppercase tracking-wider mt-auto">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {step.time}
                                </div>
                                {step.cta && step.ctaLabel && (
                                    <Link href={step.cta} className="text-sm text-secondary ms-auto border-b-2 border-secondary hover:text-white hover:border-white transition-all duration-300 ease-in-out">
                                        {step.ctaLabel}
                                    </Link>
                                )}
                            </div>
                            {i < processSteps.length - 1 && (
                                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-secondary rounded-full items-center justify-center">
                                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-3 rounded-xs hover:bg-white hover:text-primary transition-all duration-300 shadow-md"
                    >
                        Contáctanos para iniciar tu diagnóstico
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
