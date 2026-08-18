# 🔍 GUÍA DE VERIFICACIÓN MANUAL

## Cómo verificar que canonical tags y robots.txt funcionan correctamente

---

## 📋 CHECKLIST POST-DEPLOY

### ✅ 1. Verificar robots.txt

**URL:** https://www.grupodiapsa.com.mx/robots.txt

**Debe contener:**
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

# Sitemap
Sitemap: https://www.grupodiapsa.com.mx/sitemap.xml
```

**Verificar:**
- [ ] robots.txt es accesible
- [ ] Contiene bloqueos de query params spam
- [ ] Declara el sitemap correcto
- [ ] Bloquea /images/

---

### ✅ 2. Verificar Canonical Tags en HTML

#### Homepage
**URL:** https://www.grupodiapsa.com.mx

**Inspeccionar código fuente (Ctrl+U):**
```html
<link rel="canonical" href="https://www.grupodiapsa.com.mx"/>
```

#### Página de Curso (ejemplo)
**URL:** https://www.grupodiapsa.com.mx/cursos/[cualquier-slug]

**Debe tener:**
```html
<link rel="canonical" href="https://www.grupodiapsa.com.mx/cursos/[slug]"/>
```

#### Página de Producto (ejemplo)
**URL:** https://www.grupodiapsa.com.mx/productos/camaras-termograficas/hikmikro-b20

**Debe tener:**
```html
<link rel="canonical" href="https://www.grupodiapsa.com.mx/productos/camaras-termograficas/hikmikro-b20"/>
```

**Verificar:**
- [ ] Canonical siempre usa https://www.grupodiapsa.com.mx
- [ ] No hay query params en canonical (ej: ?fbclid, ?utm_source)
- [ ] URL es absoluta (no relativa como /cursos/slug)

---

### ✅ 3. Verificar Open Graph URLs

**En cualquier página, buscar en código fuente:**
```html
<meta property="og:url" content="https://www.grupodiapsa.com.mx/[ruta]"/>
```

**Verificar:**
- [ ] og:url usa dominio completo con https
- [ ] og:url coincide con canonical
- [ ] No hay query params

---

### ✅ 4. Verificar Sitemap XML

**URL:** https://www.grupodiapsa.com.mx/sitemap.xml

**Debe mostrar:**
```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.grupodiapsa.com.mx</loc>
    <lastModified>2024-...</lastModified>
    <changeFrequency>weekly</changeFrequency>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://www.grupodiapsa.com.mx/cursos</loc>
    ...
  </url>
  ...
</urlset>
```

**Verificar:**
- [ ] Sitemap es XML válido
- [ ] Todas las URLs usan https://www.grupodiapsa.com.mx
- [ ] NO hay URLs con query params (?fbclid, ?utm_source, etc.)
- [ ] NO hay archivos estáticos (manifest.json, favicon.ico)
- [ ] NO hay rutas de subdominios (mail.grupodiapsa)

---

### ✅ 5. Probar URLs con Query Params

**Visitar:**
```
https://www.grupodiapsa.com.mx/cursos?fbclid=12345
```

**Inspeccionar canonical:**
```html
<!-- Debe seguir apuntando a URL limpia -->
<link rel="canonical" href="https://www.grupodiapsa.com.mx/cursos"/>
```

**Verificar:**
- [ ] Canonical ignora query params
- [ ] Página carga normalmente
- [ ] robots.txt impedirá rastreo de estas URLs

---

## 🛠️ HERRAMIENTAS DE VERIFICACIÓN

### Chrome DevTools

1. **Abrir página** (ej: homepage)
2. **F12** → Pestaña "Elements"
3. **Ctrl+F** → Buscar "canonical"
4. Verificar que tag sea correcto

### View Page Source

1. **Abrir página**
2. **Ctrl+U** (ver código fuente)
3. **Buscar** "canonical" o "og:url"
4. Verificar URLs

### Google Search Console - robots.txt Tester

1. Ir a: https://search.google.com/search-console
2. Configuración → robots.txt
3. Verificar que se cargue correctamente
4. Probar URLs específicas:
   - ✅ `/cursos` → Allow
   - ❌ `/manifest.json` → Disallow
   - ❌ `/images/logo.png` → Disallow
   - ❌ `/cursos?fbclid=123` → Disallow

### Google Search Console - Sitemap

1. Ir a: Sitemaps
2. Añadir sitemap: `https://www.grupodiapsa.com.mx/sitemap.xml`
3. Verificar que Google lo lea correctamente
4. Esperar procesamiento (puede tardar días)

---

## 📊 VERIFICACIÓN CON CURL (Desarrolladores)

### robots.txt
```bash
curl https://www.grupodiapsa.com.mx/robots.txt
```

### Canonical en homepage
```bash
curl -s https://www.grupodiapsa.com.mx | grep canonical
```

### Sitemap XML
```bash
curl https://www.grupodiapsa.com.mx/sitemap.xml | head -50
```

### Canonical en página específica
```bash
curl -s https://www.grupodiapsa.com.mx/cursos | grep canonical
```

---

## 🚨 PROBLEMAS COMUNES

### ❌ robots.txt devuelve 404
**Causa:** archivo no existe en public/robots.txt  
**Solución:** Verificar que archivo existe y hacer deploy

### ❌ Canonical es relativo (/cursos/slug)
**Causa:** no se importó SITE_CONFIG  
**Solución:** Verificar import en componente

### ❌ Canonical tiene query params
**Causa:** se usó URL incorrecta  
**Solución:** Verificar que se use pathname sin search params

### ❌ Sitemap contiene URLs duplicadas
**Causa:** lógica de generación incorrecta  
**Solución:** Revisar app/sitemap.ts

---

## ✅ CONFIRMACIÓN FINAL

**Todas las verificaciones completadas:**
- [ ] robots.txt accesible y correcto
- [ ] Canonical tags presentes en todas las páginas
- [ ] Canonical siempre usa URL absoluta con SITE_CONFIG.baseUrl
- [ ] Open Graph URLs coinciden con canonical
- [ ] Sitemap.xml generado correctamente
- [ ] Sitemap enviado a Google Search Console
- [ ] robots.txt enviado a Google Search Console

---

## 📈 MONITOREO POST-DEPLOY

### Semana 1-2
- Verificar que Google recrawlee robots.txt
- Monitorear Google Search Console → Cobertura

### Semana 2-4
- Verificar reducción de "URLs rastreadas sin indexar"
- Confirmar que query params spam se bloquean
- Verificar consolidación de URLs duplicadas

### Mensual
- Revisar tendencia de URLs indexadas
- Ajustar robots.txt si aparecen nuevos patrones spam

---

**Fecha de implementación:** 2024  
**Branch:** `seo/cursos-metadata-jsonld-redirects`  
**Commit:** `4045db5`
