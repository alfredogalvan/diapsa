import GasDetectionClientPage from "@/components/organisms/GasDetectionClientPage";
import { Metadata } from "next";

const OG_IMAGE = "/images/og-images/og-images-gas.jpg";

export const metadata: Metadata = {
    title: "Detecciones de Gas",
    description: "Cumplimiento regulatorio PPCIEM y mitigación de riesgos por emisiones de metano en el sector hidrocarburos.",
    keywords: [
        "detección de gas",
        "ppciem",
        'servicio diapsa',
        'camaras acusticas',
        'obligaciones regulatorias'
    ],
    alternates: {
        canonical: '/servicios/deteccion-gas',
    },
    openGraph: {
        title: 'Detección de gas | Grupo DIAPSA',
        description: 'Cumplimiento regulatorio PPCIEM y mitigación de riesgos por emisiones de metano en el sector hidrocarburos.',
        url: '/servicios/deteccion-gas',
        type: 'website',
        locale: 'es_MX',
        siteName: 'Grupo DIAPSA',
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                type: 'image/jpeg',
                alt: 'Detecciones de Gas Grupo DIAPSA'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: '@grupodiapsa',
        title: 'Detecciones de Gas | Grupo DIAPSA',
        description: 'Cumplimiento regulatorio PPCIEM y mitigación de riesgos por emisiones de metano en el sector hidrocarburos.',
        images: [OG_IMAGE]
    }
}

export default function GasPage() {
    return (
        <GasDetectionClientPage />
    )

}
