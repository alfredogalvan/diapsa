import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'diapsa-cms.test',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: 'cms-dipasa.test',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.grupodiapsa.com.mx',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'diapsa-storage.sfo3.cdn.digitaloceanspaces.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/storage/**',
      }
    ],
    // Desactivar optimización en desarrollo para permitir IPs privadas
    unoptimized: process.env.NEXT_IMAGE_UNOPTIMIZED === 'true',
  },

  /**
   * Redirecciones 301 (permanentes) del sitio anterior hacia las páginas
   * actuales. Cada URL se declara con y sin slash final.
   * NOTA: pronto llega el resto del mapa desde Search Console; agregar las
   * nuevas entradas dentro de este mismo bloque, ordenadas por sección.
   */
  async redirects() {
    return [
      // --- Cursos y certificaciones ---
      {
        source: '/cursos-y-certificaciones/curso-vibraciones-mecanicas',
        destination: '/cursos/vibraciones-mecanicas-curso-de-certificacion',
        permanent: true,
      },
      {
        source: '/cursos-y-certificaciones/curso-vibraciones-mecanicas/',
        destination: '/cursos/vibraciones-mecanicas-curso-de-certificacion',
        permanent: true,
      },

      // --- Servicios y soluciones ---
      {
        source: '/servicios-y-soluciones/termografia-infrarroja',
        destination: '/servicios/monitoreo-condicion/termografia-infrarroja',
        permanent: true,
      },
      {
        source: '/servicios-y-soluciones/termografia-infrarroja/',
        destination: '/servicios/monitoreo-condicion/termografia-infrarroja',
        permanent: true,
      },
      {
        source: '/servicios-y-soluciones/vibraciones-mecanicas',
        destination: '/servicios/monitoreo-condicion/vibraciones-mecanicas',
        permanent: true,
      },
      {
        source: '/servicios-y-soluciones/vibraciones-mecanicas/',
        destination: '/servicios/monitoreo-condicion/vibraciones-mecanicas',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
