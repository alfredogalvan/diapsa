import Image from "next/image";
import Link from "next/link";

const painPoints = [
    {
        id: 1,
        image: '/images/monitoreo-condicion/technician-worried.png',
        icon: (
            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
        ),
        title: "El paro llegó sin aviso",
        description:
            "Una falla inesperada detiene la línea de producción horas o días enteros. El costo no es solo la reparación, es cada minuto que la planta no produce.",
    },
    {
        id: 2,
        image: '/images/monitoreo-condicion/almacen-lleno.jpg',
        icon: (
            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
        ),
        title: "Almacén lleno de refacciones que nunca se usan",
        description:
            "Para evitar paros, mantienen inventario excesivo de repuestos. Capital inmovilizado que podría estar generando valor en otro lado.",
    },
    {
        id: 3,
        image: '/images/monitoreo-condicion/engineer-looking-at-gantt.png',
        icon: (
            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        title: "Mantenimientos por calendario, no por condición real",
        description:
            "Se cambian piezas que todavía funcionan perfectamente porque el manual lo indica. Gasto innecesario y paros programados que podrían evitarse.",
    },
    {
        id: 4,
        image: '/images/monitoreo-condicion/hombre-confuso.jpg',
        icon: (
            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Decisiones a ciegas sin datos reales",
        description:
            "No existe visibilidad del estado real de los equipos. Las decisiones de mantenimiento se toman por intuición, historial o urgencia, no por evidencia.",
    },
    {
        id: 5,
        image: '/images/monitoreo-condicion/grafica-aumentos-costos.jpg',
        icon: (
            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "El costo de emergencia es 5x mayor que el preventivo",
        description:
            "Cada reparación de emergencia cuesta en promedio cinco veces más que una intervención planificada a tiempo. La urgencia siempre sale cara.",
    },
    {
        id: 6,
        image: '/images/monitoreo-condicion/rodamiento-con-sobre-lubricacion.avif',
        icon: (
            <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3C11 4.5 5 11 5 15a7 7 0 0014 0C19 11 13 4.5 12 3z" />
            </svg>
        ),
        title: "La sobre-lubricación también mata rodamientos",
        description:
            "Más no siempre es mejor. Aplicar grasa por calendario —sin saber si el equipo la necesita— genera presión excesiva, calentamiento y falla prematura. El técnico hizo lo que el manual decía, pero el rodamiento no lo sabía.",
    },
];

export default function MCPainPoints() {
    return (
        <section className="w-full bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-12">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                        Lo que duele
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
                        ¿LE SUENA <span className="text-secondary">FAMILIAR?</span>
                    </h2>
                    <p className="text-tertiary text-lg max-w-2xl mx-auto">
                        Antes de hablar de soluciones, hablemos del problema real. Estas son las situaciones que enfrentan a diario las plantas industriales sin un programa de monitoreo predictivo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {painPoints.map((p) => (
                        <div
                            key={p.id}
                            className={`group flex flex-col sm:flex-row items-stretch bg-white rounded-sm border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl overflow-hidden transition-all md:h-60 duration-300 relative`}
                        >
                            {/* Texto */}
                            <div className="flex-1 flex flex-col gap-4 p-6">
                                <div className="flex items-center gap-3">
                                    <div className="shrink-0 w-12 h-12 bg-secondary/10 rounded-sm flex items-center justify-center">
                                        {p.icon}
                                    </div>
                                    <h3 className="font-bold text-primary text-base leading-snug group-hover:text-secondary transition-colors">
                                        {p.title}
                                    </h3>
                                </div>
                                <p className="text-tertiary text-sm leading-relaxed">{p.description}</p>
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                            {/* Imagen: ancho fijo en sm+, altura fija en mobile */}
                            <div className={`relative h-48 sm:h-auto sm:w-56 shrink-0`}>
                                <Image src={p.image} fill className="object-cover" alt={`Imagen de ${p.title}`} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-tertiary text-base lg:text-lg">
                        Si reconoce alguna de estas situaciones, <strong className="text-primary">no está solo</strong>. Y existe una solución que ya está funcionando en cientos de plantas.
                    </p>
                    <Link
                        href="/contacto"
                        className="mt-6 inline-flex items-center gap-2 rounded-xs bg-primary px-8 py-3 font-bold text-white shadow-md transition-colors hover:bg-secondary hover:text-primary"
                    >
                        Evaluar el estado de mis equipos
                        <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
