/**
 * Products Listing Page - Marketing Optimized
 * Página de categorías de productos con diseño orientado a conversión
 * Sigue STYLE_GUIDE.md - Modern B2B/Industrial Web Design
 */

'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useCategories } from '@/lib/hooks/useCategories';
import PageHeader from '@/components/organisms/PageHeader';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';
import BackgroundImage from '@/components/atoms/BackgroundImage';
import CategoryProductSection from '@/components/organisms/CategoryProductSection';

export default function ProductsPage() {
  const { categories, loading } = useCategories();

  // Filtrar solo categorías raíz para la vista principal
  const rootCategories = useMemo(() => {
    return categories.filter(cat => cat.level === 0);
  }, [categories]);

  // Calcular métricas totales
  const totalProducts = useMemo(() => {
    return categories.reduce((sum, cat) => sum + (cat.products_count || 0), 0);
  }, [categories]);

  return (
    <main className="min-h-screen bg-gray-50">
      <PageHeader
        title="Productos"
        subtitle="Encuentra el equipo perfecto para tus necesidades de mantenimiento predictivo"
      />

      {/* Intro Section - Tema Light con glows */}
      <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
        {/* Glow primary difuminado */}
        <div className="absolute -top-32 -left-32 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        {/* Glow secondary difuminado */}
        <div className="absolute -bottom-24 -right-24 w-100 h-100 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
              Nuestro Catálogo
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
              EQUIPOS Y SOLUCIONES <span className="text-secondary">ESPECIALIZADAS</span>
            </h2>
            <p className="text-tertiary text-lg max-w-2xl mx-auto">
              Explora nuestras categorías de productos para mantenimiento predictivo e industrial.
              Tecnología de vanguardia respaldada por marcas líderes internacionales.
            </p>
          </div>


          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-sm border border-gray-100">
              <div className="shrink-0">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-primary text-base mb-1">
                  Equipos Certificados
                </h3>
                <p className="text-tertiary text-sm leading-relaxed">
                  Todos nuestros productos cumplen con estándares internacionales
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-sm border border-gray-100">
              <div className="shrink-0">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-primary text-base mb-1">
                  Entrega Nacional
                </h3>
                <p className="text-tertiary text-sm leading-relaxed">
                  Cobertura en toda la República Mexicana
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-sm border border-gray-100">
              <div className="shrink-0">
                <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-primary text-base mb-1">
                  Asesoría Técnica
                </h3>
                <p className="text-tertiary text-sm leading-relaxed">
                  Soporte especializado para elegir el equipo ideal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías Section - Tema Gray con glows */}
      <section className="w-full bg-gray-50 py-16 lg:py-24 relative overflow-hidden">
        {/* Glow difuminado */}
        <div className="absolute top-1/3 right-1/4 w-125 h-125 bg-primary/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
              Explora
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
              NUESTRAS <span className="text-secondary">CATEGORÍAS</span>
            </h2>
            <p className="text-tertiary text-lg max-w-2xl mx-auto">
              Selecciona una categoría para ver todos los productos y soluciones disponibles
            </p>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <LoadingSpinner size="large" />
            </div>
          ) : (
            <>
              {/* Categorías Grid */}
              {rootCategories.length > 0 ? (
                <div className="space-y-8">
                  {rootCategories.map((category) => (
                    <CategoryProductSection key={category.id} category={category} />

                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-tertiary text-lg">
                    No hay categorías disponibles en este momento.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section - Tema Dark con glows */}
      <section className="w-full bg-primary py-16 lg:py-24 relative overflow-hidden">
        {/* TODO: Replace placeholder with photo of industrial warehouse or equipment showcase */}
        <BackgroundImage
          src="/images/servicios/placeholder.jpg"
          alt="Almacén de equipos industriales"
          overlayOpacity={0.75}
        />

        {/* Glow principal */}
        <div className="absolute top-1/4 left-1/3 w-150 h-150 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-6">
            ¿Tienes dudas?
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            ¿NO ENCUENTRAS LO QUE <span className="text-secondary">BUSCAS?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para asesorarte y encontrar
            la solución perfecta para tus necesidades específicas.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-3 rounded-xs hover:bg-white hover:text-primary transition-all duration-300 shadow-md"
            >
              Solicitar Cotización
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3 rounded-xs border-2 border-white/30 hover:border-secondary hover:text-secondary transition-all duration-300"
            >
              Ver Nuestros Servicios
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm mb-3">O contáctenos directamente:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/90">
              <a
                href="tel:+528183489300"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">+52 (81) 4590-3792</span>
              </a>
              <span className="hidden sm:block text-white/40">|</span>
              <a
                href="mailto:ventas@grupodiapsa.com"
                className="flex items-center gap-2 hover:text-secondary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold">info@grupodiapsa.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
