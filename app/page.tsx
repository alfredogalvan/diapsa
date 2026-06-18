import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/organisms/Hero";
import AboutUs from "@/components/organisms/AboutUs";
import ServicesOverview from "@/components/organisms/ServicesOverview";
import TabsSection from "@/components/organisms/TabsSection";
import CasosExitoTeaser from "@/components/organisms/CasosExitoTeaser";
import IdapIntro from "@/components/organisms/IdapIntro";
import CursosTeaser from "@/components/organisms/CursosTeaser";
import { Clients } from "@/components/organisms/Clients";
import GalleryTeaser from "@/components/organisms/GalleryTeaser";
// import BlogSection from "@/components/organisms/BlogSection";
import ContactForm from "@/components/organisms/ContactForm";
import AdSection from "@/components/organisms/AdSection";
import ads from "@/data/ads.json";
const offerings = [
  {
    href: "/servicios/monitoreo-condicion",
    title: "Monitoreo de Condición",
    desc: "Termografía, vibraciones, ultrasonido y estudios eléctricos",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    href: "/servicios/monitoreo-continuo",
    title: "Monitoreo Continuo",
    desc: "Sensores IoT · Detección de anomalías 24/7",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    href: "/camaras",
    title: "Cámaras y Equipos",
    desc: "Acústicas, térmicas y de detección de gas",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M15 10l4.553-2.069A1 1 0 0121 8.882v6.236a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: "/cursos",
    title: "Cursos y Certificaciones",
    desc: "Formación ISO · Presencial y webinar",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
];

// const OG_IMAGE = `/api/og?title=${encodeURIComponent(
//   "Mantenimiento Predictivo Industrial"
// )}&subtitle=${encodeURIComponent(
//   "Monitoreo de condicion, diagnostico y confiabilidad de activos"
// )}`;

const OG_IMAGE = "/images/og-images/og-image.jpg";


export const metadata: Metadata = {
  title: "Inicio | Mantenimiento Predictivo Industrial",
  description:
    "Grupo DIAPSA ofrece mantenimiento predictivo, monitoreo de condición y servicios de mantenimiento industrial para Mexico y Sudamerica.",
  keywords: [
    "mantenimiento predictivo México",
    "mantenimiento predictivo Sudamérica",
    "mantenimiento predictivo",
    "monitoreo de condición",
    "servicios de mantenimiento",
    "termografía infrarroja industrial",
    "análisis de vibraciones",
    "ultrasonido industrial",
    "diagnóstico de maquinaria",
    "confiabilidad de equipos",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grupo DIAPSA | Mantenimiento Predictivo Industrial",
    description:
      "Mantenimiento predictivo, monitoreo de condición y servicios de mantenimiento industrial para Mexico y Sudamerica.",
    url: "/",
    type: "website",
    locale: "es_MX",
    siteName: "Grupo DIAPSA",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Grupo DIAPSA - Mantenimiento Predictivo Industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@grupodiapsa",
    creator: "@grupodiapsa",
    title: "Grupo DIAPSA | Mantenimiento Predictivo Industrial",
    description:
      "Mantenimiento predictivo, monitoreo de condición y servicios de mantenimiento industrial para Mexico y Sudamérica.",
    images: [OG_IMAGE],
  },
};

export default function Home() {
  return (
    <main>
      {/* 1. Hero carrusel — primera impresión, 4 slides */}
      <Hero />

      {/* 2. Navegación rápida a las 4 áreas clave */}
      {/* <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {offerings.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center text-center gap-3 px-4 py-5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-secondary/15 group-hover:text-secondary transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm leading-tight mb-1">
                    {item.title}
                  </p>
                  <p className="text-tertiary text-xs leading-snug hidden sm:block">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      <ServicesOverview />

      <section className="bg-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">
            Cobertura regional
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
            Mantenimiento predictivo y monitoreo de condición para Sudamérica
          </h2>
          <p className="text-tertiary text-lg leading-relaxed max-w-3xl mx-auto">
            Grupo DIAPSA brinda servicios de mantenimiento industrial, monitoreo de condicion,
            diagnostico de maquinaria y confiabilidad de activos a plantas en Mexico y toda
            Sudamérica.
          </p>
        </div>
      </section>

      {/* 3. ¿Por qué DIAPSA? */}
      <AboutUs />

      {/* 5. Disciplinas de monitoreo con imágenes reales */}

      {/* 6. El problema industrial → solución DIAPSA 360 */}
      <AdSection advertisements={ads} />
      <TabsSection />

      <CursosTeaser />
      {/* 7. Casos de éxito con resultados cuantificados */}
      <CasosExitoTeaser />

      {/* 8. IDAP — diferenciador tecnológico */}
      <IdapIntro />

      {/* 9. Cursos y certificaciones ISO */}

      {/* 10. Clientes */}
      <Clients />

      {/* 11. Galería teaser → /acerca-de */}
      <GalleryTeaser />

      {/* 12. Blog */}
      {/* <BlogSection /> */}

      {/* 13. Contacto */}
      <section id="contacto">
        <ContactForm />
      </section>
    </main>
  );
}
