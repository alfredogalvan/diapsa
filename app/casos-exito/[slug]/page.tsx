import { notFound } from "next/navigation";
import type { CasoExito } from "@/types/caso-exito";
import JsonLd, { createBreadcrumbSchema } from "@/components/atoms/JsonLd";
import casosExitoData from "@/data/casos-exito.json";
import Link from "next/link";
import Image from "next/image";

// Componente reutilizable para etiquetas de capítulo
function ChapterLabel({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-4">
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.2em] shrink-0">
                {label}
            </span>
            <div className="flex-1 h-px bg-secondary/25" />
        </div>
    );
}

const casosExito = casosExitoData as unknown as CasoExito[];

export async function generateStaticParams() {
    return casosExito.map((caso) => ({ slug: caso.slug }));
}

function getCasoExitoData(slug: string): CasoExito | null {
    return casosExito.find((c) => c.slug === slug) ?? null;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const caso = getCasoExitoData(slug);

    if (!caso) return { title: "Caso de Éxito no encontrado" };

    const keywords = [
        ...(caso.client ? [caso.client] : []),
        caso.industry,
        "caso de éxito",
        "mantenimiento predictivo",
        "DIAPSA",
        "resultados",
    ];

    return {
        title: caso.seo.title,
        description: caso.seo.description,
        keywords,
        alternates: { canonical: `/casos-exito/${slug}` },
        openGraph: {
            title: caso.seo.title,
            description: caso.seo.description,
            url: `/casos-exito/${slug}`,
            type: "article",
        },
    };
}

export default async function CasoExitoDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const caso = getCasoExitoData(slug);

    if (!caso) notFound();

    const breadcrumbItems = [
        { name: "Inicio", url: "/" },
        { name: "Casos de Éxito", url: "/casos-exito" },
        { name: caso.client ?? caso.title, url: `/casos-exito/${slug}` },
    ];
    const breadcrumbJsonLd = createBreadcrumbSchema(breadcrumbItems);

    return (
        <main className="bg-white">
            <JsonLd data={breadcrumbJsonLd} />

            {/* ── APERTURA: Hero editorial ─────────────────────────────────── */}
            <section className="bg-primary relative overflow-hidden">
                {/* Acentos decorativos */}
                <div className="absolute top-0 right-0 w-lg h-128 rounded-full bg-secondary/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
                <div className="absolute bottom-0 left-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

                <div className="relative max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
                    {/* Navegación de regreso */}
                    <Link
                        href="/casos-exito"
                        className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold text-sm mb-8 transition-colors group"
                    >
                        <svg
                            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Casos de Éxito
                    </Link>

                    {/* Etiquetas de categoría */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className="bg-secondary/15 text-secondary font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">
                            {caso.industry}
                        </span>
                        <span className="bg-white/10 text-white/70 font-medium px-4 py-1.5 rounded-full text-xs">
                            {caso.service}
                        </span>
                    </div>

                    {/* Titular principal */}
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-8 max-w-4xl">
                        {caso.title}
                    </h1>

                    {/* Acento visual */}
                    <div className="w-16 h-1.5 bg-secondary rounded-full mb-8" />

                    {/* Párrafo gancho — la apertura de la historia */}
                    <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl">
                        {caso.introduction}
                    </p>

                    {/* Atribución al cliente */}
                    {caso.client && (
                        <p className="mt-8 text-white/40 text-sm font-medium uppercase tracking-widest">
                            Cliente: <span className="text-white/70">{caso.client}</span>
                        </p>
                    )}
                </div>
            </section>

            {/* ── CUERPO DEL ARTÍCULO ──────────────────────────────────────── */}
            <article>

                {/* ── Capítulo I: El Reto ── */}
                <section className="bg-gray-50 py-16 lg:py-24 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <ChapterLabel label="El Reto" />
                        {/* Pull quote que establece la tensión narrativa */}
                        <blockquote className="relative mt-10">
                            <span
                                aria-hidden="true"
                                className="absolute -top-6 -left-2 text-8xl leading-none text-secondary/20 font-serif select-none"
                            >
                                &ldquo;
                            </span>
                            <p className="text-2xl lg:text-3xl font-semibold text-primary leading-relaxed pl-8 lg:pl-12 italic">
                                {caso.challenge}
                            </p>
                            <div className="mt-8 pl-8 lg:pl-12">
                                <div className="w-12 h-1 bg-secondary rounded-full" />
                            </div>
                        </blockquote>
                    </div>
                </section>

                {/* ── Capítulo II: La Estrategia ── */}
                <section className="py-16 lg:py-24 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <ChapterLabel label="La Estrategia" />
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mt-4 mb-12">
                            {caso.methodology.name}
                        </h2>

                        {/* Línea de tiempo vertical — el viaje */}
                        <div className="relative">
                            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200" aria-hidden="true" />
                            <div className="space-y-10">
                                {caso.methodology.stages.map((stage, index) => (
                                    <div key={index} className="relative flex gap-8 items-start">
                                        <div className="shrink-0 w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm z-10 shadow-md">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 pt-1 pb-6">
                                            <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-1.5">
                                                {stage.stage}
                                            </p>
                                            <h3 className="text-xl font-bold text-primary mb-3">
                                                {stage.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {stage.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Capítulo III: Los Resultados ── */}
                <section className="bg-gray-50 py-16 lg:py-24 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <ChapterLabel label="Los Resultados" />
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mt-4 mb-6">
                            Una transformación medible
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {caso.results}
                        </p>

                        {/* Narrativa extendida con evidencia visual (si existe) */}
                        {caso.content && caso.content.length > 0 && (
                            <div className="mt-12 space-y-10">
                                {caso.content.map((c) => (
                                    <div key={c.id} className="space-y-6">
                                        <p className="text-lg text-gray-700 leading-relaxed">
                                            {c.text}
                                        </p>
                                        {c.image && (
                                            <figure className="my-6">
                                                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                                                    <Image
                                                        src={c.image}
                                                        alt="Evidencia visual del caso de éxito"
                                                        width={900}
                                                        height={500}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            </figure>
                                        )}
                                        {c.note && (
                                            <aside className="bg-white border-l-4 border-primary rounded-r-xl p-6 shadow-sm">
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    <span className="font-bold text-primary block mb-1">Nota:</span>
                                                    {c.note}
                                                </p>
                                            </aside>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Métricas clave — estilo revista */}
                        {caso.metrics && Object.keys(caso.metrics).length > 0 && (
                            <div className="mt-12">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                                    Métricas clave
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {Object.entries(caso.metrics).map(([key, value]) => {
                                        const metricName = key
                                            .replace(/([A-Z])/g, " $1")
                                            .replace(/^./, (s) => s.toUpperCase())
                                            .replace("Percent", "%")
                                            .replace("USD", "(USD)");

                                        let formattedValue: string | number = value;
                                        if (typeof value === "number") {
                                            if (key.includes("Percent")) {
                                                formattedValue = `${value}%`;
                                            } else if (key.includes("USD")) {
                                                formattedValue = `$${value.toLocaleString("en-US")}`;
                                            } else {
                                                formattedValue = value.toLocaleString("en-US");
                                            }
                                        }

                                        return (
                                            <div
                                                key={key}
                                                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow"
                                            >
                                                <p className="text-4xl lg:text-5xl font-extrabold text-secondary leading-none mb-3">
                                                    {formattedValue}
                                                </p>
                                                <p className="text-gray-500 text-sm leading-snug">
                                                    {metricName}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* ── Capítulo IV: Impacto Económico ── */}
                <section className="py-16 lg:py-24 border-b border-gray-100">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <ChapterLabel label="Impacto Económico" />
                        <div className="mt-10 bg-primary rounded-2xl p-8 lg:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-secondary/10 -translate-y-1/3 translate-x-1/4 pointer-events-none" />
                            <svg
                                className="w-8 h-8 text-secondary/60 mb-6 relative z-10"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <p className="text-xl lg:text-2xl text-white/85 leading-relaxed relative z-10">
                                {caso.economicImpact}
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Capítulo V: La Conclusión ── */}
                <section className="bg-gray-50 py-16 lg:py-24">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <ChapterLabel label="La Conclusión" />
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mt-4 mb-6">
                            La lección detrás del éxito
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                            {caso.conclusion}
                        </p>
                    </div>
                </section>
            </article>

            {/* ── CTA: La invitación al siguiente capítulo ── */}
            <section className="bg-primary py-16 lg:py-24">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">
                        ¿Listo para escribir tu propia historia?
                    </p>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
                        Tu industria también puede lograr resultados así
                    </h2>
                    <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
                        Nuestras soluciones de mantenimiento predictivo han transformado operaciones en múltiples industrias.
                        {caso.client
                            ? ` Como ${caso.client}, tu empresa puede dar el siguiente paso hacia una operación más confiable.`
                            : " Da el siguiente paso hacia una operación más confiable con DIAPSA."}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/casos-exito"
                            className="inline-block bg-white hover:bg-gray-100 text-primary font-bold px-8 py-3.5 rounded-xl transition-all"
                        >
                            Ver más casos
                        </Link>
                        <Link
                            href="/contacto"
                            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-3.5 rounded-xl transition-all"
                        >
                            Hablar con un experto →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
