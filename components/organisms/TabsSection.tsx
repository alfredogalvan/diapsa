"use client";

import { useState } from "react";
import Image from "next/image";

interface TabContent {
  id: string;
  title: string;
  content: {
    text: string[];
    image?: string;
  };
}

const tabs: TabContent[] = [
  {
    id: "problema",
    title: "EL PROBLEMA COMÚN EN LA INDUSTRIA",
    content: {
      text: [
        "En la operación industrial, cada máquina habla: ruidos, vibraciones, temperaturas inusuales: son señales que revelan el estado real de los equipos. Si estas señales no se interpretan a tiempo, pueden convertirse en fallas críticas, paros imprevistos y pérdidas millonarias.",
        "El reto no está solo en detectar anomalías, sino en darles sentido. Sin una interpretación adecuada, las empresas enfrentan altos costos de mantenimiento correctivo, paradas continuas de producción y falta de visibilidad sobre la condición de sus activos.",
      ],

    },
  },
  {
    id: "solucion",
    title: "SOLUCIÓN: DIAPSA 360",
    content: {
      text: [
        "Al igual que en la medicina, un diagnóstico certero no se obtiene con un solo estudio. Revisar únicamente vibraciones, termografía o ultrasonido de manera aislada ofrece una visión parcial del problema. En DIAPSA integramos estas disciplinas dentro de un mismo servicio para obtener una visión 360° del equipo, validar hallazgos entre técnicas y entender la causa real de las fallas."

      ],
    },
  },
  {
    id: "metodologia",
    title: "METODOLOGÍA",
    content: {
      text: [
        "Nuestro servicio ofrece una visión integral del estado y desempeño de los activos mediante un levantamiento técnico especializado. Este proceso permite identificar riesgos, condiciones críticas y áreas de oportunidad que no siempre son evidentes a simple vista. A partir de este entendimiento global, se establece un marco claro para orientar evaluaciones, definir prioridades y alinear las acciones técnicas con las necesidades reales de la operación, generando información confiable que respalda decisiones sólidas y una gestión operativa más efectiva."
      ],
    },
  },
  {
    id: "resultados",
    title: "RESULTADOS",
    content: {
      text: [
        "• 95 % de efectividad en la detección temprana de fallas críticas.",
        "• 150 % de retorno de inversión durante el primer año.",
        "• 90 % de reducción en paros no planificados.",
        "En conjunto, estos resultados demuestran un impacto económico significativo, reflejado en ahorros medibles en miles o incluso millones, gracias a la mejora en eficiencia operativa y prevención de fallas."
      ],
    },
  },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="relative w-full bg-white py-16 lg:py-24 pb-24 lg:pb-60 border-y-4 border-secondary">
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-50 pointer-events-none overflow-hidden">
        <Image
          src="/images/vision-image.jpg"
          alt="Fondo decorativo"
          fill
          className="object-cover"
        />
      </div>

      {/* Header de sección — fuera del contenedor gris */}
      <div className="relative max-w-7xl mx-auto px-6 text-center mb-10">
        <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
          DIAPSA 360
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
          CONOCE NUESTRO ROL <span className="text-secondary">EN LA INDUSTRIA</span>
        </h2>
        <p className="text-black text-lg max-w-2xl mx-auto">
          Entiende el problema industrial y cómo la metodología DIAPSA 360 transforma la forma de anticipar fallas.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-gray-300/90 relative shadow-2xl rounded-sm lg:min-h-112.5">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:py-8 h-full">
          {/* Tabs verticales - Izquierda */}
          <div className="lg:col-span-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative w-full text-center px-6 py-6 font-semibold text-sm lg:text-base
                  transition-all duration-300 group
                  ${activeTab === tab.id
                    ? "bg-white text-gray-900"
                    : "border-transparent hover:bg-white text-gray-900"
                  }
                `}
              >
                {/* Triángulo indicador */}
                <div
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0
                    transition-opacity duration-300
                    ${activeTab === tab.id
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                  style={{
                    borderTop: "32px solid transparent",
                    borderBottom: "32px solid transparent",
                    borderLeft: "25px solid #fc9f01",
                  }}
                />
                {tab.title}
              </button>
            ))}
          </div>

          {/* Contenido - Derecha */}
          <div className="lg:col-span-7 p-8 lg:p-16">
            <div className="grid grid-cols-1 gap-8 items-center">
              {/* Texto */}
              <div className="space-y-4">
                {currentTab.content.text.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-700 text-base lg:text-lg leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Imagen (si existe) */}
              {currentTab.content.image && (
                <div className="relative w-full h-64 lg:h-80">
                  <Image
                    src={currentTab.content.image}
                    alt={currentTab.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Motor superpuesto */}
        <div className="hidden lg:block lg:absolute -bottom-60 left-1/2 -translate-x-1/2 lg:w-96 lg:h-96 z-10">
          <Image src="/images/motor.png" alt="Motor" fill className="object-contain drop-shadow-2xl" />
        </div>
      </div>


    </section>
  );
}
