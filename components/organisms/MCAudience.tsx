import Link from "next/link";

const isForYou = [
    "Tiene maquinaria crítica cuya falla detiene la producción.",
    "Ha experimentado paros no programados en los últimos 12 meses.",
    "Quiere reducir el gasto en refacciones y mantenimientos correctivos.",
    "Necesita datos técnicos para justificar inversiones en activos.",
    "Desea extender la vida útil de equipos sin reemplazarlos prematuramente.",
];

const isNotForYou = [
    "Busca una solución inmediata a una falla activa (eso es mantenimiento correctivo).",
    "Su operación no depende de maquinaria crítica o rotatoria.",
    "No cuenta con la disposición de generar un historial técnico continuo.",
];

export default function MCAudience() {
    return (
        <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-12">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                        Perfil ideal
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        ¿ESTE SERVICIO <span className="text-secondary">ES PARA USTED?</span>
                    </h2>
                    <p className="text-tertiary text-lg max-w-2xl mx-auto">
                        El Monitoreo de Condición no es para todos. Queremos asegurarnos de que sea la solución correcta para su empresa.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* ES para usted */}
                    <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-secondary/20 rounded-sm flex items-center justify-center">
                                <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-primary text-lg">Es para usted si…</h3>
                        </div>
                        <ul className="space-y-4">
                            {isForYou.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-tertiary leading-relaxed">
                                    <svg className="w-4 h-4 text-secondary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NO es para usted */}
                    <div className="bg-gray-50 rounded-sm border border-gray-100 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-primary/10 rounded-sm flex items-center justify-center">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-primary text-lg">No es para usted si…</h3>
                        </div>
                        <ul className="space-y-4">
                            {isNotForYou.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-sm text-tertiary leading-relaxed">
                                    <svg className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 p-4 bg-secondary/10 border-l-2 border-secondary rounded-sm">
                            <p className="text-xs text-primary leading-relaxed">
                                <strong>¿No está seguro?</strong> Una evaluación breve de su operación permite determinar si el Monitoreo de Condición es la herramienta correcta para su situación.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 rounded-xs bg-primary px-8 py-3 font-bold text-white shadow-md transition-colors hover:bg-secondary hover:text-primary"
                    >
                        ¿Aun tienes dudas? Contáctanos
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
