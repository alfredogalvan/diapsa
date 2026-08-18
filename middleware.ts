import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js Middleware para limpiar URLs spam y forzar HTTPS con WWW
 * 
 * Funcionalidades:
 * 1. Redirect 301 de parámetros query spam a URL limpia
 * 2. Forzar https://www. (redirect si falta www o es http)
 * 3. Bloquear rutas spam con 404
 * 4. Preservar parámetros legítimos de Next.js
 */

// ============================================================================
// CONFIGURACIÓN: Parámetros spam y rutas bloqueadas
// ============================================================================

/**
 * Lista de parámetros query considerados spam
 * Estos serán removidos de la URL con redirect 301
 */
const SPAM_PARAMS = [
  'm',    // ?m= - parámetro spam común
  'r',    // ?r= - parámetro spam común
  'l',    // ?l= - parámetro spam común
  '_g',   // ?_g= - parámetro spam común
  'w',    // ?w= - parámetro spam común
  'fbclid', // ?fbclid= - Facebook click ID
  'gclid',  // ?gclid= - Google click ID (opcional, depende de si usas ads)
  'msclkid', // ?msclkid= - Microsoft click ID
  'utm_source', // UTM parameters (opcional, ajustar según necesidad)
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

/**
 * Patrones de rutas que deben ser bloqueadas con 404
 * Estas rutas son consideradas spam o maliciosas
 */
const SPAM_PATH_PATTERNS = [
  /^\/f\/special\//i,     // /f/special/*
  /^\/guide\//i,          // /guide/*
  /^\/politician/i,       // /politician*
  /^\/mandate/i,          // /mandate*
  /^\/sponsor/i,          // /sponsor*
  /^\/technical/i,        // /technical*
  /^\/e\/\d+\/?$/i,       // /e/[números]/ - URLs con números largos
  /^\/[a-z]\/\d{8,}\/?$/i, // Patrones como /x/12345678/ (letra + números largos)
];

/**
 * Dominio canónico para el sitio (AJUSTAR SEGÚN TU DOMINIO)
 * Todas las URLs serán redirigidas a este formato
 */
const CANONICAL_DOMAIN = 'www.grupodiapsa.com.mx';
const FORCE_HTTPS = true;
const FORCE_WWW = true;

// ============================================================================
// MIDDLEWARE PRINCIPAL
// ============================================================================

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // -------------------------------------------------------------------------
  // 1. BLOQUEAR RUTAS SPAM (404)
  // -------------------------------------------------------------------------
  
  /**
   * Verifica si la ruta coincide con patrones spam conocidos
   * Retorna 404 para evitar indexación
   */
  for (const pattern of SPAM_PATH_PATTERNS) {
    if (pattern.test(pathname)) {
      // Log para debugging (opcional, remover en producción)
      console.log(`[Middleware] Bloqueado ruta spam: ${pathname}`);
      
      // Retornar 404 - esto evita que Google indexe estas URLs
      return new NextResponse(null, { status: 404 });
    }
  }

  // -------------------------------------------------------------------------
  // 2. LIMPIAR PARÁMETROS QUERY SPAM
  // -------------------------------------------------------------------------
  
  /**
   * Analiza los parámetros query y remueve los spam
   * Preserva parámetros legítimos de la aplicación
   */
  const searchParams = new URLSearchParams(search);
  let hasSpamParams = false;

  // Crear lista de parámetros a eliminar
  const paramsToDelete: string[] = [];
  
  // Iterar sobre los parámetros de forma compatible
  searchParams.forEach((value, key) => {
    if (SPAM_PARAMS.includes(key.toLowerCase())) {
      paramsToDelete.push(key);
      hasSpamParams = true;
    }
  });

  // Eliminar parámetros spam
  if (hasSpamParams) {
    paramsToDelete.forEach(param => searchParams.delete(param));
    
    // Construir nueva URL sin parámetros spam
    const cleanSearch = searchParams.toString();
    url.search = cleanSearch ? `?${cleanSearch}` : '';
    
    // Log para debugging (opcional)
    console.log(`[Middleware] Limpiando params spam: ${pathname}${search} → ${url.pathname}${url.search}`);
    
    // Redirect 301 permanente a URL limpia
    return NextResponse.redirect(url, { status: 301 });
  }

  // -------------------------------------------------------------------------
  // 3. FORZAR HTTPS Y WWW
  // -------------------------------------------------------------------------
  
  /**
   * Verifica y fuerza el formato canónico: https://www.dominio.com
   * Solo aplica en producción (no en localhost)
   */
  const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1');
  
  if (!isLocalhost && CANONICAL_DOMAIN) {
    let needsRedirect = false;
    
    // Verificar si necesita HTTPS
    if (FORCE_HTTPS && url.protocol === 'http:') {
      url.protocol = 'https:';
      needsRedirect = true;
    }
    
    // Verificar si necesita WWW o si el hostname es incorrecto
    if (FORCE_WWW && hostname !== CANONICAL_DOMAIN) {
      // Casos a manejar:
      // - dominio.com → www.dominio.com
      // - http://dominio.com → https://www.dominio.com
      // - https://dominio.com → https://www.dominio.com
      
      const hostnameWithoutWww = hostname.replace(/^www\./, '');
      const canonicalWithoutWww = CANONICAL_DOMAIN.replace(/^www\./, '');
      
      // Solo redirigir si es el mismo dominio base pero sin www
      if (hostnameWithoutWww === canonicalWithoutWww) {
        url.hostname = CANONICAL_DOMAIN;
        needsRedirect = true;
      }
    }
    
    if (needsRedirect) {
      console.log(`[Middleware] Forzando HTTPS/WWW: ${request.url} → ${url.toString()}`);
      return NextResponse.redirect(url, { status: 301 });
    }
  }

  // -------------------------------------------------------------------------
  // 4. PERMITIR TRÁFICO LEGÍTIMO
  // -------------------------------------------------------------------------
  
  /**
   * Si llegamos aquí, la URL es legítima
   * Continuar con el procesamiento normal de Next.js
   */
  return NextResponse.next();
}

// ============================================================================
// CONFIGURACIÓN DEL MATCHER
// ============================================================================

/**
 * Configuración de rutas donde se aplicará el middleware
 * 
 * Excluye:
 * - /api/* - API routes
 * - /_next/* - Recursos internos de Next.js
 * - /favicon.ico, /robots.txt, etc. - Archivos estáticos
 * - /*.* - Archivos con extensión (imágenes, CSS, JS, etc.)
 */
export const config = {
  matcher: [
    /*
     * Aplica middleware a todas las rutas EXCEPTO:
     * - API routes (/api/*)
     * - Recursos de Next.js (/_next/*)
     * - Archivos estáticos (imágenes, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\..*$).*)',
  ],
};
