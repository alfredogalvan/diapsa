import Image from "next/image";
import Link from "next/link";

const reportTypes = [
    {
        id: "inmediatos",
        number: "01",
        title: "Reportes Inmediatos",
        description: "Alertas en tiempo real cuando detectamos anomalías críticas en sus equipos.",
        features: [
            "Detección de fallas emergentes",
            "Notificación instantánea al equipo",
            "Recomendación de acción inmediata",
            "Evita paros inesperados"
        ],
        image: "/images/monitoreo-condicion/inmediate-reports.avif"
        // TODO: Replace placeholder with photo of real-time monitoring dashboard
    },
    {
        id: "seguimiento",
        number: "02",
        title: "Reportes de Seguimiento",
        description: "Monitoreo continuo con análisis periódico del comportamiento de sus activos.",
        features: [
            "Tendencias de degradación",
            "Comparativa con línea base",
            "Frecuencia configurable",
            "Predicción de vida útil"
        ],
        image: "/images/monitoreo-condicion/reportes-seguimiento.avif"        // TODO: Replace placeholder with photo of trend analysis or performance metrics
    },
    {
        id: "historicos",
        number: "03",
        title: "Reportes Históricos",
        description: "Base de datos persistente de toda la historia de mantenimiento de sus equipos.",
        features: [
            "Análisis de patrones a largo plazo",
            "Historial completo de mediciones",
            "Correlación de eventos y fallas",
            "Trazabilidad total"
        ],
        image: "/images/monitoreo-condicion/historical-reports.jpg"
        // TODO: Replace placeholder with photo of historical data visualization or archive
    }
];

export default function MCReportTypes() {
    return (
        <section id="reportes" className="w-full bg-primary py-16 lg:py-24 relative overflow-hidden">
            {/* Glows decorativos */}
            <div className="absolute top-1/4 left-1/3 w-150 h-150 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase  mb-4">
                        Entregables
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                        TIPOS DE <span className="text-secondary">REPORTES</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Cada tipo de reporte está diseñado para un propósito específico. Juntos forman una estrategia integral de inteligencia predictiva.
                    </p>
                </div>

                {/* Grid de 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {reportTypes.map((report) => (
                        <div
                            key={report.id}
                            className="group flex flex-col bg-white/10 rounded-sm border border-white/15 hover:border-secondary/50 overflow-hidden transition-all duration-300 hover:shadow-xl relative"
                        >
                            {/* Imagen */}
                            <div className="relative w-full h-44 overflow-hidden">
                                <Image
                                    src={report.image}
                                    alt={report.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/30 transition-colors duration-300" />

                            </div>

                            {/* Header con número */}
                            <div className="px-6 py-4 border-b border-white/10">
                                <span className="text-5xl font-extrabold text-secondary/30 leading-none select-none block mb-2">
                                    {report.number}
                                </span>
                                <h3 className="font-bold text-white text-base leading-snug group-hover:text-secondary transition-colors">
                                    {report.title}
                                </h3>
                            </div>

                            {/* Body */}
                            <div className="flex flex-col flex-1 p-6 gap-4">
                                <p className="text-white/70 text-sm leading-relaxed">
                                    {report.description}
                                </p>

                                {/* Características */}
                                <div className="flex-1">
                                    <ul className="space-y-2">
                                        {report.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-white/70 leading-relaxed">
                                                <span className="text-secondary font-bold mt-0.5">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Borde inferior animado */}
                                <div className="h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-auto" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sección comparativa */}
                <div className="bg-white/5 rounded-sm border border-white/10 p-8 mb-12">
                    <h3 className="font-bold text-white text-lg mb-6 text-center">
                        Complementariedad de Reportes
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
                                Reacción
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Inmediatos responden a anomalías ahora mismo
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
                                Prevención
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Seguimiento detecta degradación antes de fallos
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
                                Optimización
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed">
                                Históricos mejoran futuras estrategias de mantenimiento
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-2 rounded-xs bg-secondary px-8 py-3 font-bold text-primary shadow-md transition-colors hover:bg-white"
                    >
                        Solicitar información
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
