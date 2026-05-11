import Image from "next/image";

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
    const left = benefits.slice(0, 3);
    const right = benefits.slice(3);

    return (
        <section className="w-full bg-gray-50 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">

                {/* Headline arriba */}
                <div className="flex flex-col items-center text-center gap-3">
                    <span className="inline-block w-fit text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10">
                        Beneficios
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
                        QUÉ <span className="text-secondary">CAMBIA</span> EN SU OPERACIÓN
                    </h2>
                    <p className="text-tertiary text-base max-w-xl">
                        No vendemos reportes técnicos. Vendemos tranquilidad operativa, ahorro real y la certeza de que sus activos estarán disponibles cuando los necesite.
                    </p>
                </div>

                {/* 3 columnas: cards | imagen | cards */}
                <div className="flex flex-col lg:flex-row gap-6 items-stretch">

                    {/* Cards izquierda */}
                    <div className="flex flex-col gap-4 flex-1">
                        {left.map((b) => (
                            <div
                                key={b.title}
                                className="group flex flex-col bg-white rounded-sm border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
                            >
                                <div className="bg-primary px-4 py-3">
                                    <h3 className="font-bold text-white text-sm leading-snug group-hover:text-secondary transition-colors">
                                        {b.title}
                                    </h3>
                                </div>
                                <div className="flex flex-col flex-1 px-4 py-3 gap-2">
                                    <p className="text-tertiary text-xs leading-relaxed flex-1">{b.description}</p>
                                    <div className="text-xs font-semibold text-secondary uppercase tracking-wider border-t border-gray-100 pt-2">
                                        {b.metric}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Imagen central */}
                    <div className="relative h-72 lg:h-auto lg:w-80 shrink-0 rounded-sm overflow-hidden">
                        <Image
                            src="/images/monitoreo-condicion/successful-engineer.png"
                            alt="Ingeniero de mantenimiento predictivo"
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 320px"
                        />
                    </div>

                    {/* Cards derecha */}
                    <div className="flex flex-col gap-4 flex-1">
                        {right.map((b) => (
                            <div
                                key={b.title}
                                className="group flex flex-col bg-white rounded-sm border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
                            >
                                <div className="bg-primary px-4 py-3">
                                    <h3 className="font-bold text-white text-sm leading-snug group-hover:text-secondary transition-colors">
                                        {b.title}
                                    </h3>
                                </div>
                                <div className="flex flex-col flex-1 px-4 py-3 gap-2">
                                    <p className="text-tertiary text-xs leading-relaxed flex-1">{b.description}</p>
                                    <div className="text-xs font-semibold text-secondary uppercase tracking-wider border-t border-gray-100 pt-2">
                                        {b.metric}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
