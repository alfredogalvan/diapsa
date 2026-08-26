import type { Metadata } from "next";
import PageHeader from "@/components/organisms/PageHeader";
import { MisionVisionSection } from "@/components/organisms/MisionVisionSection";
import { ValuesSection } from "@/components/organisms/ValuesSection";
// import { AITalkAboutUs } from "@/components/organisms/AITalkAboutUs";
import { WhoIsDiapsaSection } from "@/components/organisms/WhoIsDiapsaSection";
import { IdapAdvertisementSection } from "@/components/organisms/IdapAdvertisement";
import { GallerySection } from "@/components/organisms/GallerySection";


export const metadata: Metadata = {
  title: "Acerca de Nosotros",
  description:
    "Grupo DIAPSA es especialista en mantenimiento predictivo, monitoreo de condicion y servicios de mantenimiento para Mexico y Sudamerica.",
  keywords: [
    "Grupo DIAPSA",
    "empresa mantenimiento predictivo",
    "mantenimiento predictivo",
    "monitoreo de condicion",
    "servicios de mantenimiento",
    "mantenimiento predictivo Sudamerica",
    "historia DIAPSA",
    "expertos termografía México",
    "consultoría industrial",
  ],
  alternates: {
    canonical: "/acerca-de",
  },
  openGraph: {
    title: "Acerca de Grupo DIAPSA",
    description:
      "Especialistas en mantenimiento predictivo, monitoreo de condicion y servicios de mantenimiento para Mexico y Sudamerica.",
    url: "/acerca-de",
    type: "website",
  },
};
export default function AcercaDePage() {
  return (
    <main>
      <PageHeader
        title="Acerca de DIAPSA"
        subtitle="Mantenimiento predictivo y monitoreo de condicion para Mexico y Sudamerica"
      />

      <WhoIsDiapsaSection />
      <IdapAdvertisementSection />
      {/* Sección de Misión y Visión */}
      <MisionVisionSection />
      {/* {Valores} */}
      <ValuesSection />

      {/* <AITalkAboutUs /> */}

      <GallerySection />
      {/* Clientes, Servicios, Origen */}
    </main>
  );
}
