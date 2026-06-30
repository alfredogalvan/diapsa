import { notFound } from "next/navigation";
import PageHeader from "@/components/organisms/PageHeader";
import Image from "next/image";
import type { Servicio } from "@/types/servicio";
import JsonLd, {
    createServiceSchema,
    createBreadcrumbSchema,
} from "@/components/atoms/JsonLd";
import ContactForm from "@/components/organisms/ContactForm";
import CursosTeaser from "@/components/organisms/CursosTeaser";

const OG_IMAGE = "/images/og-images/og-image-monitoreo-condicion.jpg";

// Lista de slugs disponibles
const serviceSlugs = [
    "termografia-infrarroja",
    "vibraciones-mecanicas",
    "diagnostico-de-maquinaria",
    "analisis-de-ultrasonido",
    "estudios-electricos",
];

// Generar parámetros estáticos para pre-renderizado
export async function generateStaticParams() {
    return serviceSlugs.map((slug) => ({
        slug,
    }));
}

// Función para cargar datos del servicio
async function getServiceData(slug: string): Promise<Servicio | null> {
    try {
        const data = await import(`@/data/servicios/${slug}.json`);
        return data.default as Servicio;
    } catch {
        return null;
    }
}

// Generar metadata para SEO
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = await getServiceData(slug);

    if (!service) {
        return {
            title: "Servicio no encontrado",
        };
    }

    const keywords = [
        service.header.title.toLowerCase(),
        "mantenimiento predictivo",
        "diagnóstico industrial",
        "México",
        "DIAPSA",
    ];

    return {
        title: service.header.title,
        description: service.header.subtitle,
        keywords,
        alternates: {
            canonical: `/servicios/monitoreo-condicion/${slug}`,
        },
        openGraph: {
            title: `${service.header.title} | Grupo DIAPSA`,
            description: service.header.subtitle,
            url: `/servicios/monitoreo-condicion/${slug}`,
            type: "website",
            locale: "es_MX",
            siteName: "Grupo DIAPSA",
            images: [
                {
                    url: OG_IMAGE,
                    width: 1200,
                    height: 630,
                    type: "image/jpeg",
                    alt: `${service.header.title} Grupo DIAPSA`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            site: "@grupodiapsa",
            title: `${service.header.title} | Grupo DIAPSA`,
            description: service.header.subtitle,
            images: [OG_IMAGE],
        },
    };
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = await getServiceData(slug);

    if (!service) {
        notFound();
    }

    // Datos estructurados para el servicio
    const serviceJsonLd = createServiceSchema({
        name: service.header.title,
        description: service.header.subtitle,
        image: service.content?.image || undefined,
        serviceType: service.header.title,
    });

    // Breadcrumbs para datos estructurados
    const breadcrumbItems = [
        { name: "Inicio", url: "/" },
        { name: "Servicios", url: "" },
        { name: service.header.title, url: `/servicios/monitoreo-condicion/${slug}` },
    ];
    const breadcrumbJsonLd = createBreadcrumbSchema(breadcrumbItems);
    const overviewTitle =
        service.content.title || `Servicio especializado de ${service.header.title}`;
    const overviewSubtitle =
        service.content.subtitle || service.header.subtitle;
    const detailItems = service.content.items.slice(0, 3);

    return (
        <main>
            <JsonLd data={serviceJsonLd} />
            <JsonLd data={breadcrumbJsonLd} />
            {/* Page Header with Breadcrumb */}
            <PageHeader
                title={service.header.title}
                subtitle={service.header.subtitle}
                breadcrumbs={service.breadcrumbs}
            />
            {/* Content Section */}
            <section className="w-full bg-white py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4 leading-tight">
                                {overviewTitle}
                            </h2>

                            <p className="text-tertiary text-lg leading-relaxed max-w-2xl">
                                {overviewSubtitle}
                            </p>

                            <p className="text-tertiary text-base lg:text-lg leading-relaxed max-w-2xl mt-5">
                                Integramos levantamiento en campo, lectura tecnica de la condicion del activo
                                y recomendaciones accionables para que mantenimiento pueda priorizar
                                intervenciones con mejor criterio operativo.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                                <div className="border-l-2 border-secondary pl-4">
                                    <span className="block text-2xl font-extrabold text-secondary">
                                        01
                                    </span>
                                    <span className="block text-xs uppercase tracking-wider text-tertiary">
                                        Inspeccion en campo
                                    </span>
                                </div>
                                <div className="border-l-2 border-secondary pl-4">
                                    <span className="block text-2xl font-extrabold text-secondary">
                                        02
                                    </span>
                                    <span className="block text-xs uppercase tracking-wider text-tertiary">
                                        Analisis tecnico
                                    </span>
                                </div>
                                <div className="border-l-2 border-secondary pl-4">
                                    <span className="block text-2xl font-extrabold text-secondary">
                                        03
                                    </span>
                                    <span className="block text-xs uppercase tracking-wider text-tertiary">
                                        Acciones recomendadas
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            {service.content.image ? (
                                <div className="relative w-full h-86 sm:h-110 lg:h-130 rounded-sm overflow-hidden shadow-xl">
                                    <Image
                                        src={service.content.image}
                                        alt={service.header.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-primary/20" />
                                </div>
                            ) : (
                                <div className="hidden lg:block w-full h-124" />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full bg-gray-50 py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4 leading-tight">
                            Informacion tecnica <span className="text-secondary">visible y accionable</span>
                        </h2>

                        <p className="text-tertiary text-lg max-w-2xl leading-relaxed">
                            Estos son los puntos clave del servicio, organizados para entender donde se aplica,
                            que impacto tiene y bajo que criterio se ejecuta.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {detailItems.map((item, index) => (
                            <article
                                key={item.id}
                                className="bg-white rounded-sm border border-gray-100 p-6 lg:p-8 shadow-sm"
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    {/* <span className="flex w-11 h-11 bg-primary text-secondary rounded-sm items-center justify-center text-lg font-extrabold">
                                        {String(index + 1).padStart(2, "0")}
                                    </span> */}

                                    <h3 className="text-xl lg:text-2xl font-bold text-primary leading-snug">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-tertiary text-base leading-relaxed">
                                    {item.content}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full bg-primary py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                                Del dato al <span className="text-secondary">criterio de mantenimiento</span>
                            </h2>

                            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                                El objetivo no es solo medir: es interpretar la condicion real del equipo,
                                documentar hallazgos y convertirlos en decisiones claras para reducir riesgo
                                operativo.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="border-l-2 border-secondary pl-4">
                                <span className="block text-2xl font-extrabold text-secondary">
                                    Medir
                                </span>
                                <span className="block text-sm text-white/80 leading-relaxed mt-2">
                                    Recoleccion de informacion tecnica en equipos criticos.
                                </span>
                            </div>
                            <div className="border-l-2 border-secondary pl-4">
                                <span className="block text-2xl font-extrabold text-secondary">
                                    Evaluar
                                </span>
                                <span className="block text-sm text-white/80 leading-relaxed mt-2">
                                    Lectura de patrones, desviaciones y posibles modos de falla.
                                </span>
                            </div>
                            <div className="border-l-2 border-secondary pl-4">
                                <span className="block text-2xl font-extrabold text-secondary">
                                    Actuar
                                </span>
                                <span className="block text-sm text-white/80 leading-relaxed mt-2">
                                    Recomendaciones para priorizar intervenciones y reducir incertidumbre.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {/* <RelatedProducts
                title={service.relatedProducts.title}
                subtitle={service.relatedProducts.subtitle}
                items={service.relatedProducts.items}
            /> */}

            <CursosTeaser />

            {/* <CoursesPromo /> */}
            <ContactForm />
        </main>
    );
}
