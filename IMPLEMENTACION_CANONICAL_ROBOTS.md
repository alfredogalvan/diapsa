# ✅ IMPLEMENTACIÓN: Canonical Tags Dinámicos + robots.txt

## 📊 RESUMEN DE CAMBIOS

### 🎯 OBJETIVO
Resolver **2,239 URLs con parámetros spam** rastreadas sin indexar en Google Search Console.

### ✨ SOLUCIÓN IMPLEMENTADA

#### 1️⃣ CANONICAL TAGS DINÁMICOS (8 archivos modificados)

**Antes:**
```typescript
// ❌ URL relativa (puede duplicarse con query params)
alternates: {
  canonical: `/cursos/${slug}`
}
```

**Después:**
```typescript
// ✅ URL absoluta limpia (siempre canónica)
import { SITE_CONFIG } from "@/lib/constants";

alternates: {
  canonical: `${SITE_CONFIG.baseUrl}/cursos/${slug}`
}
```

**Archivos actualizados:**

| Archivo | Canonical implementado |
|---------|------------------------|
| `app/layout.tsx` | ✅ `https://www.grupodiapsa.com.mx` |
| `app/cursos/[slug]/page.tsx` | ✅ `https://www.grupodiapsa.com.mx/cursos/[slug]` |
| `app/blog/[slug]/page.tsx` | ✅ `https://www.grupodiapsa.com.mx/blog/[slug]` |
| `app/productos/[categoria]/page.tsx` | ✅ `https://www.grupodiapsa.com.mx/productos/[categoria]` |
| `app/productos/[categoria]/[producto]/page.tsx` | ✅ `https://www.grupodiapsa.com.mx/productos/[categoria]/[producto]` |
| `app/servicios/monitoreo-condicion/[slug]/page.tsx` | ✅ `https://www.grupodiapsa.com.mx/servicios/monitoreo-condicion/[slug]` |
| `app/camaras/[slug]/page.tsx` | ✅ `https://www.grupodiapsa.com.mx/camaras/[slug]` |
| `app/casos-exito/[slug]/page.tsx` | ✅ `https://www.grupodiapsa.com.mx/casos-exito/[slug]` |

---

#### 2️⃣ ROBOTS.TXT OPTIMIZADO

**Archivo:** `public/robots.txt`

```txt
User-agent: *
Allow: /

# Bloquear archivos estáticos
Disallow: /*.json$
Disallow: /*.ico$
Disallow: /manifest.json
Disallow: /favicon

# Bloquear directorio de imágenes
Disallow: /images/

# Bloquear URLs con query params comunes de spam
Disallow: /*?*fbclid=*
Disallow: /*?*utm_source=*
Disallow: /*?*gclid=*
Disallow: /*?*ref=*
Disallow: /*?*source=*
Disallow: /*?*campaign=*

# Bloquear rutas de subdominios incorrectas
Disallow: /mail.grupodiapsa

# Sitemap
Sitemap: https://www.grupodiapsa.com.mx/sitemap.xml
```

**Bloqueos implementados:**
- ✅ Archivos estáticos (`.json`, `.ico`, `manifest.json`)
- ✅ Directorio `/images/` (recursos no indexables)
- ✅ Query params spam (`fbclid`, `utm_source`, `gclid`, etc.)
- ✅ Rutas incorrectas (`/mail.grupodiapsa`)

---

#### 3️⃣ SITEMAP.XML

**Archivo:** `app/sitemap.ts`

**Estado:** ✅ YA ESTABA OPTIMIZADO

El sitemap ya usaba `SITE_CONFIG.baseUrl` correctamente y solo incluye rutas válidas:
- Páginas estáticas principales
- Servicios
- Categorías de productos
- Productos individuales
- Blog posts
- Cursos

**Exclusiones automáticas:**
- ✅ Sin archivos estáticos
- ✅ Sin query params
- ✅ Sin subdominios incorrectos
- ✅ Solo rutas del App Router

---

## 🔍 VERIFICACIÓN

### ✅ Canonical Tags en HTML

Verifica que cada página genere el tag correcto:

```html
<!-- Homepage -->
<link rel="canonical" href="https://www.grupodiapsa.com.mx" />

<!-- Curso ejemplo -->
<link rel="canonical" href="https://www.grupodiapsa.com.mx/cursos/termografia-nivel-1" />

<!-- Producto ejemplo -->
<link rel="canonical" href="https://www.grupodiapsa.com.mx/productos/camaras-termograficas/hikmikro-b20" />
```

### ✅ robots.txt accesible

```bash
curl https://www.grupodiapsa.com.mx/robots.txt
```

Debe devolver:
```
User-agent: *
Allow: /
...
Sitemap: https://www.grupodiapsa.com.mx/sitemap.xml
```

### ✅ sitemap.xml generado

```bash
curl https://www.grupodiapsa.com.mx/sitemap.xml
```

Debe mostrar URLs limpias:
```xml
<url>
  <loc>https://www.grupodiapsa.com.mx</loc>
  <lastmod>2024-...</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1</priority>
</url>
```

---

## 📈 IMPACTO ESPERADO

### Google Search Console
- **Antes:** 2,239 URLs rastreadas sin indexar
- **Después:** URLs consolidadas por canonical, query params bloqueados

### URLs de ejemplo que se consolidarán:

**Antes (múltiples variaciones):**
```
/cursos/termografia-nivel-1
/cursos/termografia-nivel-1?fbclid=12345
/cursos/termografia-nivel-1?utm_source=facebook
/cursos/termografia-nivel-1?ref=twitter
```

**Después (canonical único):**
```
https://www.grupodiapsa.com.mx/cursos/termografia-nivel-1
```

### Bloqueos de robots.txt

**URLs bloqueadas automáticamente:**
```
❌ /manifest.json
❌ /favicon.ico
❌ /images/cualquier-imagen.jpg
❌ /cursos/algo?fbclid=123
❌ /productos/algo?utm_source=ads
```

---

## 🚀 DEPLOYMENT

### Checklist de Deploy

- [x] Canonical tags implementados en todas las páginas dinámicas
- [x] `public/robots.txt` creado
- [x] `app/sitemap.ts` validado (ya estaba correcto)
- [x] TypeScript sin errores
- [x] Commit realizado en branch `seo/cursos-metadata-jsonld-redirects`

### Post-Deploy

1. **Verificar robots.txt en producción:**
   ```bash
   curl https://www.grupodiapsa.com.mx/robots.txt
   ```

2. **Verificar canonical en homepage:**
   ```bash
   curl -s https://www.grupodiapsa.com.mx | grep canonical
   ```

3. **Verificar sitemap.xml:**
   ```bash
   curl https://www.grupodiapsa.com.mx/sitemap.xml
   ```

4. **Reenviar robots.txt a Google Search Console:**
   - Ir a GSC → Configuración → robots.txt
   - Verificar que se cargue correctamente

5. **Reenviar sitemap.xml:**
   - Ir a GSC → Sitemaps
   - Enviar: `https://www.grupodiapsa.com.mx/sitemap.xml`

6. **Monitorear "Páginas no indexadas":**
   - Esperar 2-4 semanas
   - Verificar reducción de URLs duplicadas

---

## 📝 NOTAS TÉCNICAS

### ¿Por qué SITE_CONFIG.baseUrl?

**Centralización:**
```typescript
// lib/constants.ts
export const SITE_CONFIG = {
  baseUrl: "https://www.grupodiapsa.com.mx",
  // ...
}
```

- ✅ Single source of truth
- ✅ Fácil cambiar dominio en un solo lugar
- ✅ Consistencia entre sitemap, canonical y JSON-LD

### ¿Por qué URLs absolutas en canonical?

Google recomienda URLs absolutas para evitar ambigüedades:

**Relativa (puede causar problemas):**
```html
<link rel="canonical" href="/cursos/curso-1" />
<!-- ¿http o https? ¿www o no? -->
```

**Absoluta (clara y definitiva):**
```html
<link rel="canonical" href="https://www.grupodiapsa.com.mx/cursos/curso-1" />
```

### ¿Por qué bloquear query params en robots.txt?

Los parámetros de tracking no aportan contenido único:

```
/cursos/termografia?fbclid=123   → Mismo contenido
/cursos/termografia?utm_source=fb → Mismo contenido
/cursos/termografia               → ESTE es el canonical
```

Bloqueando estos patrones en robots.txt, evitamos que Google los rastree.

---

## 🎯 RESULTADO FINAL

### ✅ Canonical Tags
- 8 archivos con canonical dinámico absoluto
- Siempre apuntan a URL limpia sin query params
- Usan SITE_CONFIG.baseUrl como fuente única

### ✅ robots.txt
- Bloquea archivos estáticos
- Bloquea query params spam
- Declara sitemap.xml

### ✅ sitemap.xml
- Solo URLs canónicas válidas
- Sin duplicados
- Sin archivos estáticos

---

**Implementado por:** Hermes Agent  
**Fecha:** 2024  
**Branch:** `seo/cursos-metadata-jsonld-redirects`  
**Commit:** `4045db5`
