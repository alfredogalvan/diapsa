const benefits = [
    {
        title: "Cero paros sorpresivos",
        description:
            "Detectamos fallas incipientes semanas o meses antes de que ocurran. Su producción no se detiene por emergencias.",
        metric: "Hasta 70% menos paros no programados",
    },
    {
        title: "Inversión en refacciones justificada",
        description:
            "Compre solo lo que necesita, cuando lo necesita. Eliminamos el inventario especulativo basado en miedo.",
        metric: "Reducción del 40% en inventario de repuestos",
    },
    {
        title: "Mantenimiento basado en condición real",
        description:
            "Intervenga sus equipos cuando lo requieren, no por calendario. Cada acción tiene respaldo técnico y datos.",
        metric: "30% menos intervenciones innecesarias",
    },
    {
        title: "Decisiones de gerencia con respaldo técnico",
        description:
            "Sus reportes tienen métricas, tendencias y evidencia visual. Justifique cualquier inversión en mantenimiento con datos.",
        metric: "Reportes técnicos en 48 h",
    },
    {
        title: "Extensión de vida útil de activos",
        description:
            "Un monitoreo constante permite intervenciones oportunas que alargan la vida útil de sus equipos más críticos.",
        metric: "Hasta 25% más vida útil en activos clave",
    },
    {
        title: "+20 años de experiencia en su industria",
        description:
            "Nuestro equipo ha diagnosticado maquinaria en manufactura, energía, petroquímica, agua y alimentos a lo largo de México.",
        metric: "Más de 500 plantas atendidas",
    },
];

export default function MCBenefits() {
    return (
        <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-12">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                        Beneficios
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        QUÉ <span className="text-secondary">CAMBIA</span> EN SU OPERACIÓN
                    </h2>
                    <p className="text-tertiary text-lg max-w-2xl mx-auto">
                        No vendemos reportes técnicos. Vendemos tranquilidad operativa, ahorro real y la certeza de que sus activos estarán disponibles cuando los necesite.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((b) => (
                        <div
                            key={b.title}
                            className="group flex flex-col bg-white rounded-sm border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300"
                        >
                            <div className="bg-primary px-6 py-4">
                                <h3 className="font-bold text-white text-base leading-snug group-hover:text-secondary transition-colors">
                                    {b.title}
                                </h3>
                            </div>
                            <div className="flex flex-col flex-1 p-6 gap-3">
                                <p className="text-tertiary text-sm leading-relaxed flex-1">{b.description}</p>
                                <div className="text-xs font-semibold text-secondary uppercase tracking-wider border-t border-gray-100 pt-3">
                                    {b.metric}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
