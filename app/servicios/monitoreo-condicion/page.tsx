import type { Metadata } from "next";

import PageHeader from "@/components/organisms/PageHeader";
import SuccessCases from "@/components/organisms/SuccessCases";
import MCPainPoints from "@/components/organisms/MCPainPoints";
import MCSolution from "@/components/organisms/MCSolution";
import MCProcess from "@/components/organisms/MCProcess";
import MCBenefits from "@/components/organisms/MCBenefits";
import MCAudience from "@/components/organisms/MCAudience";
import MCDeliverables from "@/components/organisms/MCDeliverables";
import MCFaq from "@/components/organisms/MCFaq";
import MCCtaFinal from "@/components/organisms/MCCtaFinal";
import MCReportTypes from "@/components/organisms/MCReportTypes";

export const metadata: Metadata = {
    title: "Monitoreo de Condición | Grupo DIAPSA",
    description:
        "Consigue operación continua sin paros repentinos ni gastos innecesarios. Más de 20 años protegiendo activos industriales con termografía, vibraciones, ultrasonido y diagnóstico de maquinaria.",
    keywords: [
        "monitoreo de condición industrial",
        "mantenimiento predictivo México",
        "termografía­ infrarroja industrial",
        "anÃ¡lisis de vibraciones",
        "ultrasonido industrial",
        "diagnóstico de maquinaria",
        "estudios eléctricos industriales",
        "prevención paros de producción",
    ],
    alternates: {
        canonical: "/servicios/monitoreo-condicion",
    },
    openGraph: {
        title: "Monitoreo de Condición | Grupo DIAPSA",
        description:
            "Consigue operación continua sin paros repentinos ni gastos innecesarios. Más de 20 años protegiendo activos industriales.",
        url: "/servicios/monitoreo-condicion",
        type: "website",
    },
};

export default function MonitoreoConditionPage() {
    return (
        <main>
            {/* 1. Headline magnético */}
            <PageHeader
                title="Monitoreo de Condición"
                subtitle="Consigue operación continua sin paros repentinos ni gastos innecesarios. Conoce el estado actual de tus equipos"
                breadcrumbs={[
                    { label: "Inicio", link: "/" },
                    { label: "Servicios", link: "/servicios" },
                    { label: "Monitoreo de Condición", link: "/servicios/monitoreo-condicion" },
                ]}
            />

            {/* 2. El problema */}
            <MCPainPoints />

            {/* 3. La solucion */}
            <MCSolution />

            {/* 4. Como funciona */}
            <MCProcess />

            {/* 5. Beneficios transformacionales */}
            <MCBenefits />

            {/* 6. Prueba social de Casos de exito */}
            <SuccessCases />

            <MCReportTypes />
            {/* 7. Para quien es */}
            <MCAudience />

            {/* 8. Que incluye */}
            <MCDeliverables />

            {/* 9. Planes / Inversion */}
            {/* <MCPlans /> */}

            {/* 10. FAQ */}
            <MCFaq />

            {/* 11. CTA Final */}
            <MCCtaFinal />
        </main>
    );
}

