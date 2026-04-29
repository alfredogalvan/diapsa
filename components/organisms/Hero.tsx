"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/Button";

type Stat = { value: string; label: string };

type Slide = {
  id: number;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  cta: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  image: string;
  imageAlt: string;
  imageContain: boolean;
  bg: string;
  stats?: Stat[];
};

const slides: Slide[] = [
  {
    id: 0,
    badge: "22 años en la industria",
    title: "MONITOREO PREDICTIVO",
    titleHighlight: "INTEGRAL PARA LA INDUSTRIA",
    description:
      "Sensores, inteligencia artificial y experiencia humana para anticipar fallas y maximizar confiabilidad operativa.",
    cta: { label: "Nuestros servicios", href: "/servicios" },
    ctaSecondary: { label: "Contáctanos", href: "/#contacto" },
    image: "/images/ingeniero-predictivo-trascendente.png",
    imageAlt: "Ingeniero de mantenimiento predictivo DIAPSA",
    imageContain: true,
    bg: "/images/fondo-hero.webp",
  },
  {
    id: 1,
    badge: "Monitoreo Continuo · IoT Industrial",
    title: "SENSORES INTELIGENTES",
    titleHighlight: "24/7 EN TU MAQUINARIA",
    description:
      "Detecta vibración, temperatura y corriente en tiempo real. Anticipa paros no planeados con análisis basado en inteligencia artificial.",
    cta: { label: "Ver monitoreo continuo", href: "/servicios/monitoreo-continuo" },
    ctaSecondary: { label: "Solicitar demo", href: "/#contacto" },
    image: "/images/monitoreo-continuo/sensor-installation.jpg",
    imageAlt: "Sensor IoT de vibración instalado en maquinaria industrial",
    imageContain: false,
    bg: "/images/fondo-mantenimiento.webp",
    stats: [
      { value: "24/7", label: "Monitoreo" },
      { value: "IoT", label: "Conectado" },
      { value: "IA", label: "Analítica" },
    ],
  },
  {
    id: 2,
    badge: "Detección de Fugas · Termografía Industrial · Alianza con Hertzinno",
    title: "CÁMARAS ACÚSTICAS",
    titleHighlight: "Y TÉRMICAS INDUSTRIALES",
    description:
      "Visualiza fugas de gas, arcos eléctricos y anomalías térmicas invisibles al ojo humano. Tecnología de vanguardia para la seguridad de tus plantas.",
    cta: { label: "Explorar cámaras", href: "/camaras" },
    ctaSecondary: { label: "Cotizar", href: "/#contacto" },
    image: "/images/header-camaras.png",
    imageAlt: "Cámara acústica para detección de fugas de gas industrial",
    imageContain: true,
    bg: "/images/fondo-hero.webp",
    stats: [
      { value: "Gas", label: "Fugas" },
      { value: "IR", label: "Térmico" },
      { value: "UV", label: "Eléctrico" },
    ],
  },
  {
    id: 3,
    badge: "Capacitación · Certificaciones ISO",
    title: "CURSOS ESPECIALIZADOS",
    titleHighlight: "EN MANTENIMIENTO PREDICTIVO",
    description:
      "Forma a tu equipo con expertos certificados. Presencial, webinar y certificaciones internacionales para llevar tu planta al siguiente nivel.",
    cta: { label: "Ver todos los cursos", href: "/cursos" },
    ctaSecondary: { label: "Inscribirse ahora", href: "/cursos" },
    image: "/images/gold-coin.png",
    imageAlt: "Técnico industrial tomando curso de mantenimiento predictivo",
    imageContain: false,
    bg: "/images/fondo-mantenimiento.webp",
    stats: [
      { value: "+50", label: "Cursos" },
      { value: "ISO", label: "Certificados" },
      { value: "Online", label: "Webinars" },
    ],
  },
];

const AUTOPLAY_MS = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setCurrent(index);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Slides — todos en DOM, crossfade por opacidad */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          aria-hidden={i !== current}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            pointerEvents: i === current ? "auto" : "none",
          }}
        >
          {/* Background */}
          <Image
            src={slide.bg}
            alt=""
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-primary/65" />

          {/* Línea secondary al centro */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-secondary z-10" />

          {/* Contenido — grid 2 columnas */}
          <div className="relative z-20 h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
            {/* Columna izquierda — imagen del slide */}
            <div className="relative flex items-end justify-center order-2 lg:order-1">
              <div className="relative w-full h-[60vh] lg:h-[82vh]">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  className={
                    slide.imageContain
                      ? "object-contain object-bottom"
                      : "object-cover object-center"
                  }
                  priority={i === 0}
                />
              </div>
            </div>

            {/* Columna derecha — texto */}
            <div className="flex flex-col justify-center px-6 py-12 pt-28 order-1 lg:order-2">
              {/* Badge */}
              <span className="self-start text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-5">
                {slide.badge}
              </span>

              {/* Título */}
              <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {slide.title}
                <br />
                <span className="text-secondary">{slide.titleHighlight}</span>
              </h1>

              {/* Descripción */}
              <p className="text-base lg:text-lg text-white/85 mb-6 max-w-xl leading-relaxed">
                {slide.description}
              </p>

              {/* Stats */}
              {slide.stats && (
                <div className="flex gap-8 mb-8">
                  {slide.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-secondary font-bold text-xl lg:text-2xl">
                        {stat.value}
                      </div>
                      <div className="text-white/60 text-xs uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link href={slide.cta.href}>
                  <Button variant="secondary" className="text-sm lg:text-base px-6 py-2.5">
                    {slide.cta.label}
                  </Button>
                </Link>
                <Link href={slide.ctaSecondary.href}>
                  <Button variant="primary" ghost className="text-sm lg:text-base px-6 py-2.5">
                    {slide.ctaSecondary.label}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controles de navegación */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-center gap-3">
        {/* Anterior */}
        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          className="p-2 text-white/50 hover:text-secondary transition-colors"
          aria-label="Slide anterior"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current
              ? "w-7 h-2 bg-secondary"
              : "w-2 h-2 bg-white/35 hover:bg-white/60"
              }`}
          />
        ))}

        {/* Siguiente */}
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          className="p-2 text-white/50 hover:text-secondary transition-colors"
          aria-label="Siguiente slide"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Contador */}
      <div className="absolute bottom-8 right-6 z-30 text-white/40 text-xs font-mono tabular-nums">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}

