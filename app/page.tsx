import type { Metadata } from "next";
import Hero from "@/components/organisms/Hero";
import AboutUs from "@/components/organisms/AboutUs";
import ServicesOverview from "@/components/organisms/ServicesOverview";
import TabsSection from "@/components/organisms/TabsSection";
import CasosExitoTeaser from "@/components/organisms/CasosExitoTeaser";
import IdapIntro from "@/components/organisms/IdapIntro";
import CursosTeaser from "@/components/organisms/CursosTeaser";
import { Clients } from "@/components/organisms/Clients";
import GalleryTeaser from "@/components/organisms/GalleryTeaser";
import ContactForm from "@/components/organisms/ContactForm";
import AdSection from "@/components/organisms/AdSection";
import ads from "@/data/ads.json";

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
      <Hero />
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
            Grupo DIAPSA brinda servicios de mantenimiento industrial, monitoreo de condición,
            diagnostico de maquinaria y confiabilidad de activos a plantas en Mexico y toda
            Sudamérica.
          </p>
        </div>
      </section>
      <AboutUs />
      <AdSection advertisements={ads} />
      <TabsSection />
      <CursosTeaser />
      <CasosExitoTeaser />
      <IdapIntro />
      <Clients />
      <GalleryTeaser />
      <section id="contacto">
        <ContactForm />
      </section>
    </main>
  );
}
