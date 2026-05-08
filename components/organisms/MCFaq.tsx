const faqs = [
    {
        q: "¿Necesito detener la producción para las mediciones?",
        a: "No. La mayoría de las tecnologías de monitoreo de condición (termografía, vibraciones, ultrasonido) se realizan con los equipos en operación normal. Esto es precisamente una de sus grandes ventajas: no requiere paros programados para obtener datos reales.",
    },
    {
        q: "¿Cada cuánto tiempo debo hacer el monitoreo?",
        a: "Depende de la criticidad de sus activos y el sector. Para equipos críticos en manufactura continua, recomendamos mediciones mensuales o trimestrales. En industrias con equipos menos críticos, mediciones semestrales pueden ser suficientes. Definimos la frecuencia óptima en la estrategia inicial.",
    },
    {
        q: "¿Qué tan rápido veremos resultados?",
        a: "Las detecciones de anomalías comienzan desde la primera ronda de mediciones. Los beneficios económicos más tangibles (reducción de paros y refacciones) se observan típicamente entre 3 y 6 meses de monitoreo continuo.",
    },
    {
        q: "¿Es caro comparado con el mantenimiento correctivo?",
        a: "Un paro no programado en una línea de producción promedio cuesta entre 5 y 15 veces más que un ciclo completo de monitoreo predictivo. El ROI del monitoreo de condición en industria es consistentemente positivo en el primer año de implementación.",
    },
    {
        q: "¿Trabajan con maquinaria antigua o solo equipos nuevos?",
        a: "Trabajamos con cualquier maquinaria en operación, independientemente de su antigüedad. De hecho, los equipos más antiguos suelen ser los que más se benefician del monitoreo, ya que suelen estar fuera de garantía y tienen mayor riesgo de falla.",
    },
    {
        q: "¿Necesitamos personal técnico especializado para interpretar los reportes?",
        a: "No. Nuestros informes están diseñados para ser comprensibles tanto por el personal técnico de mantenimiento como por gerencia. Incluimos un resumen ejecutivo, hallazgos priorizados por severidad y recomendaciones en lenguaje claro y accionable.",
    },
    {
        q: "¿Tienen experiencia en nuestra industria?",
        a: "Con más de 20 años de trayectoria, hemos atendido plantas en manufactura automotriz, generación de energía, petroquímica, tratamiento de agua, industria alimenticia, farmacéutica y más. Conocemos los equipos típicos y los modos de falla más comunes en cada sector.",
    },
    {
        q: "¿Qué pasa si detectan una falla? ¿Ustedes la reparan?",
        a: "Nuestro servicio es de diagnóstico y monitoreo. Al detectar una anomalía, le entregamos el hallazgo con su contexto técnico, severidad y recomendación de intervención. Su equipo de mantenimiento o un taller especializado ejecuta la reparación con información precisa, evitando sobre-intervenciones.",
    },
];

export default function MCFaq() {
    return (
        <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-4xl mx-auto px-6 relative z-10">

                <div className="text-center mb-12">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                        Preguntas frecuentes
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        LO QUE <span className="text-secondary">TODOS PREGUNTAN</span>
                    </h2>
                    <p className="text-tertiary text-lg max-w-2xl mx-auto">
                        Respondemos con transparencia las dudas más comunes antes de iniciar.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <details
                            key={i}
                            className="group border border-gray-100 rounded-sm bg-white shadow-sm open:shadow-md transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none font-bold text-primary text-sm hover:text-secondary transition-colors">
                                {faq.q}
                                <svg
                                    className="w-4 h-4 shrink-0 text-secondary transition-transform duration-300 group-open:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-5 text-sm text-tertiary leading-relaxed border-t border-gray-100 pt-4">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
