import type { Metadata } from 'next';
import ProductsPageClient from '../../components/organisms/ProductsPageClient';

export const metadata: Metadata = {
  title: 'Productos para Mantenimiento Predictivo Industrial',
  description:
    'Catalogo de productos Grupo DIAPSA para mantenimiento predictivo, monitoreo de condición, termografía, vibraciones y soluciones industriales en Mexico.',
  keywords: [
    'productos mantenimiento predictivo',
    'equipos industriales',
    'monitoreo de condición',
    'cámaras de termografía',
    'analisis de vibraciones',
    'termografía industrial',
    'Grupo DIAPSA',
  ],
  alternates: {
    canonical: '/productos',
  },
  openGraph: {
    title: 'Productos para Mantenimiento Predictivo | Grupo DIAPSA',
    description:
      'Explora equipos y soluciones industriales para mantenimiento predictivo, monitoreo de condición y confiabilidad de activos.',
    url: '/productos',
    type: 'website',
  },
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
