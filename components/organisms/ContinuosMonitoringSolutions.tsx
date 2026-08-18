import Image from "next/image";
import NumberedCard from "@/components/molecules/NumberedCard";

const solutions = [
    {
        number: "01",
        label: "Diagnóstico Situacional o Certificación de Continuidad Operativa",
        description:
            "Auditoría de la base instalada (qué sensores hay, dónde, en qué estado), revisión de criticidad, evaluación de calidad de instalación, análisis de la tasa de falsas alarmas y mapeo del flujo de trabajo actual (dato → decisión → acción).",
    },
    {
        number: "02",
        label: "Medición Técnica",
        description:
            "Corrección de instalaciones deficientes, reubicación de sensores en puntos correctos, retiro de instrumentación en activos que no la justifican, adición de sensores en activos críticos descubiertos, y nueva línea base donde sea necesario.",
    },
    {
        number: "03",
        label: "Reconfiguración",
        description:
            "Partimos del sistema existente con historial. Aprovechamos los datos históricos para calibrar umbrales con evidencia real y reducir de forma medible la tasa de falsas alarmas.",
    },
    {
        number: "04",
        label: "Análisis Remoto",
        description:
            "Analistas certificados operando el sistema con diagnósticos reales, seguimiento al cierre, ajuste continuo y capacitación progresiva al equipo interno.",
    },
];

export default function ContinuosMonitoringSolutions() {
    return (
        <section id="soluciones" className="bg-primary py-16 lg:py-24 relative overflow-hidden">
            {/* Glow principal */}
            <div className="absolute top-1/4 left-1/3 w-150 h-150 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
            {/* Glow secundario */}
            <div className="absolute bottom-0 right-0 w-100 h-100 bg-primary/40 rounded-full blur-2xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Encabezado */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                        Soluciones
                    </h2>
                </div>

                {/* Rescate y Optimización */}
                <div className="mb-20">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                        <div className="flex-1 bg-white/10 border-l-4 border-secondary rounded-r-sm px-6 py-4">
                            <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-1">
                                Para empresas con sensores instalados
                            </p>
                            <h3 className="text-xl font-bold text-white">
                                Rescate y Optimización de Programa de Monitoreo
                            </h3>
                        </div>
                    </div>
                    <p className="text-lg text-white/70 mb-10 max-w-3xl">
                        Si ya invertiste en sensorización pero el programa no está
                        entregando valor, el problema no fue la tecnología. Fue el
                        proceso. Diagnosticamos tu programa, lo remediamos y lo ponemos
                        a generar valor real.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {solutions.map((s) => (
                            <NumberedCard
                                key={s.number}
                                number={s.number}
                                label={s.label}
                                description={s.description}
                                variant="dark"
                            />
                        ))}
                    </div>
                </div>

                {/* Desde cero */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white/10 border border-white/15 rounded-sm p-10 lg:p-14">
                    <div className="space-y-6">
                        <div className="bg-white/10 border-l-4 border-secondary rounded-r-sm px-6 py-4">
                            <p className="text-xs font-semibold text-secondary tracking-widest uppercase mb-1">
                                Para empresas sin monitoreo
                            </p>
                            <h3 className="text-xl font-bold text-white">
                                Implementación desde cero
                            </h3>
                        </div>
                        <p className="text-lg text-white/70 leading-relaxed">
                            Si vas a dar el paso hacia el monitoreo continuo, hazlo bien
                            desde el inicio. Entregamos un programa completo —
                            ingeniería, instalación, configuración y operación — no solo
                            hardware.
                        </p>
                    </div>
                    {/* Imagen */}
                    <div className="relative aspect-4/3 rounded-sm overflow-hidden shadow-xl bg-gray-100 flex items-center justify-center">
                        <Image
                            src="/images/monitoreo-continuo/tecnico-laptop.jpeg"
                            alt="Especialistas en instalación de sensores. IA"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
