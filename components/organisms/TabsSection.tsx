"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TabContent {
  id: string;
  number: string;
  title: string;
  content: {
    text: string[];
    image?: string;
    stats?: { value: string; label: string }[];
  };
}

const tabs: TabContent[] = [
  {
    id: "problema",
    number: "01",
    title: "EL PROBLEMA",
    content: {
      text: [
        "El reto no está solo en detectar anomalías, sino en darles sentido. Sin una interpretación adecuada, las empresas enfrentan altos costos de mantenimiento correctivo, paradas continuas de producción y falta de visibilidad sobre la condición de sus activos.",
      ],
      image: '/images/monitoreo-condicion/hombre-confuso.jpg'
    },
  },
  {
    id: "solucion",
    number: "02",
    title: "SOLUCIÓN: DIAPSA 360",
    content: {
      text: [
        "Al igual que en la medicina, un diagnóstico certero no se obtiene con un solo estudio. Revisar únicamente vibraciones, termografía o ultrasonido de manera aislada ofrece una visión parcial del problema. En DIAPSA integramos estas disciplinas dentro de un mismo servicio para obtener una visión 360° del equipo, validar hallazgos entre técnicas y entender la causa real de las fallas.",
      ],
      image: "/images/monitoreo-continuo/tecnico-revision.jpeg"
    },
  },
  {
    id: "metodologia",
    number: "03",
    title: "METODOLOGÍA",
    content: {
      text: [
        "Obtén una visión clara y completa del estado de tus activos. Identificamos riesgos, condiciones críticas y oportunidades de mejora para ayudarte a priorizar acciones, optimizar recursos y tomar decisiones basadas en información confiable."
      ],
      image: "/images/metodologia/metodologia-1.jpg"
    },
  },
  {
    id: "resultados",
    number: "04",
    title: "RESULTADOS",
    content: {
      text: [
        "Estos resultados demuestran un impacto económico significativo, reflejado en ahorros medibles gracias a la mejora en eficiencia operativa y la prevención de fallas antes de que ocurran.",
      ],
      image: "/images/monitoreo-continuo/tecnico-laptop.jpeg",
      stats: [
        { value: "95%", label: "Efectividad en detección temprana de fallas críticas" },
        { value: "150%", label: "Retorno de inversión durante el primer año" },
        { value: "90%", label: "Reducción en paros no planificados" },
      ],
    },
  },
];

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="relative w-full bg-primary py-16 lg:py-24 pb-24  border-y-4 border-secondary">
      <div className="absolute inset-0 opacity-50 pointer-events-none overflow-hidden">
        <Image
          src={currentTab.content.image ?? "/images/vision-image.jpg"}
          alt="Fondo decorativo"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Conoce Nuestro Rol <span className="text-secondary">en la Industria</span>
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto">
          Entiende el problema industrial y cómo la metodología DIAPSA 360 transforma la forma de anticipar fallas.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white/90 relative shadow-2xl rounded-sm lg:min-h-80">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
          {/* Tabs verticales - Izquierda */}
          <div className="lg:col-span-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative w-full text-left px-8 py-5 font-semibold text-sm lg:text-base
                  transition-all duration-300 group
                  ${activeTab === tab.id
                    ? "bg-gray-300/90 text-gray-900"
                    : "border-transparent hover:bg-white/60 text-gray-900"
                  }
                `}
              >
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
                <div className="flex items-center gap-4 pl-4">
                  <span className={`text-2xl font-extrabold tabular-nums leading-none transition-colors ${activeTab === tab.id ? "text-secondary" : "text-gray-300 group-hover:text-secondary/60"}`}>
                    {tab.number}
                  </span>
                  <span className="leading-snug">{tab.title}</span>
                </div>
              </button>
            ))}
            <div className="flex justify-center py-2">

              <Link href="#contacto"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xs hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md"

              >
                Pongámonos en contacto
              </Link>
            </div>
          </div>

          {/* Contenido - Derecha */}
          <div className="lg:col-span-7 p-8 lg:p-10">
            <div key={activeTab} className="grid grid-cols-1 gap-8 items-center animate-in">

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

              {/* Stat cards (tab Resultados) */}
              {currentTab.content.stats && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentTab.content.stats.map((stat) => (
                    <div key={stat.label} className="bg-primary rounded-xl p-5 text-center space-y-2">
                      <p className="text-4xl font-extrabold text-secondary">{stat.value}</p>
                      <p className="text-xs text-white/70 leading-snug">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Imagen (si existe) */}
              {/* {currentTab.content.image && (
                <div className="relative w-full h-64 lg:h-80">
                  <Image
                    src={currentTab.content.image}
                    alt={currentTab.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
