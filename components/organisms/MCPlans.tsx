import Link from "next/link";

const plans = [
    {
        tier: "Básico",
        name: "Diagnóstico Inicial",
        tagline: "Para plantas que inician su programa predictivo",
        featured: false,
        items: [
            "Hasta 20 activos monitorizados",
            "1 ronda de mediciones (termografía + vibraciones)",
            "Informe técnico con hallazgos y recomendaciones",
            "Clasificación por severidad",
            "Soporte técnico por 15 días",
        ],
        ctaLabel: "Cotizar plan básico",
        ctaClass:
            "inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-bold px-6 py-2.5 rounded-xs hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300 text-sm",
    },
    {
        tier: "Profesional",
        name: "Monitoreo Integral",
        tagline: "Para plantas con activos críticos y operación continua",
        featured: true,
        items: [
            "Hasta 60 activos monitorizados",
            "2 rondas de medición trimestrales",
            "Termografía + Vibraciones + Ultrasonido",
            "Análisis de tendencias y comparativa histórica",
            "Presentación ejecutiva para gerencia",
            "Soporte técnico por 30 días",
        ],
        ctaLabel: "Cotizar plan profesional",
        ctaClass:
            "inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-2.5 rounded-xs hover:bg-white hover:text-primary transition-all duration-300 text-sm",
    },
    {
        tier: "Premium",
        name: "Confiabilidad 360°",
        tagline: "Para plantas de gran escala o con múltiples sitios",
        featured: false,
        items: [
            "Activos ilimitados en su planta",
            "Monitoreo mensual o bajo demanda",
            "Las 5 disciplinas: vibraciones, termografía, ultrasonido, aceites y diagnóstico",
            "Dashboard de condición y KPIs en tiempo real",
            "Plan de mantenimiento basado en condición",
            "Soporte técnico ilimitado incluido",
        ],
        ctaLabel: "Cotizar plan premium",
        ctaClass:
            "inline-flex items-center justify-center gap-2 bg-secondary text-primary font-bold px-6 py-2.5 rounded-xs hover:bg-white hover:text-primary transition-all duration-300 text-sm",
    },
];

export default function MCPlans() {
    return (
        <section className="w-full bg-primary py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-125 h-125 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-12">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                        Planes
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                        INVERSIÓN Y <span className="text-secondary">PAQUETES</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Adaptamos el alcance del monitoreo al tamaño de su planta y la criticidad de sus activos. Todos los planes incluyen reporte técnico y soporte post-entrega.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.tier}
                            className={`group flex flex-col rounded-sm p-8 gap-5 transition-all duration-300 relative ${plan.featured
                                ? "bg-secondary shadow-2xl"
                                : "bg-white/10 border border-white/15 hover:border-secondary/50"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="bg-white text-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow">
                                        Más popular
                                    </span>
                                </div>
                            )}
                            <div>
                                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.featured ? "text-primary/70" : "text-secondary"}`}>
                                    {plan.tier}
                                </p>
                                <h3 className={`text-2xl font-extrabold ${plan.featured ? "text-primary" : "text-white"}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm mt-1 ${plan.featured ? "text-primary/70" : "text-white/60"}`}>
                                    {plan.tagline}
                                </p>
                            </div>
                            <ul className="space-y-3 flex-1">
                                {plan.items.map((item) => (
                                    <li key={item} className={`flex items-start gap-2 text-sm ${plan.featured ? "text-primary/90" : "text-white/80"}`}>
                                        <svg
                                            className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-primary" : "text-secondary"}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contacto" className={plan.ctaClass}>
                                {plan.ctaLabel}
                            </Link>
                        </div>
                    ))}
                </div>

                <p className="text-center text-white/50 text-xs mt-8">
                    Todos los precios se cotizan según número de activos, ubicación geográfica y frecuencia de servicio. Solicite una propuesta personalizada sin compromiso.
                </p>
            </div>
        </section>
    );
}
