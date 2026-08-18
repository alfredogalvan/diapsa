import Link from "next/link";

const deliverables = [
    "Levantamiento y registro de activos críticos",
    "Plan de monitoreo personalizado por planta",
    "Mediciones con equipos de última generación",
    "Informe técnico con hallazgos y severidad",
    "Mapa de calor termográfico (cuando aplica)",
    "Espectros de vibración y análisis de tendencias",
    "Recomendaciones de acción priorizadas",
    "Seguimiento de condiciones entre mediciones",
    "Historial técnico acumulado de sus equipos",
    "Acceso a especialistas para consultas técnicas",
    "Presentación ejecutiva para gerencia",
    "Soporte post-reporte de 30 días incluido",
];

export default function MCDeliverables() {
    return (
        <section className="w-full bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-12">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase  mb-4">
                        Entregables
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        ¿QUÉ <span className="text-secondary">INCLUYE</span> EL SERVICIO?
                    </h2>
                    <p className="text-tertiary text-lg max-w-2xl mx-auto">
                        Todo lo que necesita para tomar el control de la condición de sus activos, desde la primera medición hasta el soporte post-entrega.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
                    {deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-3 bg-white rounded-sm border border-gray-100 px-5 py-4 shadow-sm">
                            <svg className="w-5 h-5 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-primary leading-relaxed">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xs hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md"
                    >
                        Solicitar propuesta
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
