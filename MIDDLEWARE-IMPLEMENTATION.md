# 🎯 Resumen de Implementación - Middleware URLs Spam

## ✅ IMPLEMENTADO

### Archivos Creados

1. **`middleware.ts`** - Middleware principal de Next.js
   - ✅ Limpieza de parámetros query spam (301 redirect)
   - ✅ Bloqueo de rutas spam (404)
   - ✅ Forzar HTTPS y WWW (301 redirect)
   - ✅ Preservar parámetros legítimos
   - ✅ Excluir recursos estáticos y API routes

2. **`MIDDLEWARE-TEST-CASES.md`** - Documentación completa
   - ✅ Lista exhaustiva de casos de prueba
   - ✅ Instrucciones de personalización
   - ✅ Checklist de deployment
   - ✅ Troubleshooting

3. **`test-middleware.sh`** - Script de pruebas automatizado
   - ✅ Tests de parámetros spam
   - ✅ Tests de rutas bloqueadas
   - ✅ Tests de rutas válidas
   - ✅ Reportes de resultados

---

## 🔧 Configuración Requerida

**⚠️ ANTES DE DEPLOY A PRODUCCIÓN:**

Editar en `middleware.ts` línea ~43:

```typescript
const CANONICAL_DOMAIN = 'www.diapsa.com'; // ⚠️ CAMBIAR por dominio real
```

---

## 🛡️ Protecciones Implementadas

### 1. Parámetros Query Spam → 301 Redirect

Parámetros que serán **removidos automáticamente**:

```
✅ ?m=          → Spam común (97% del problema)
✅ ?r=          → Spam común  
✅ ?l=          → Spam común
✅ ?_g=         → Spam común
✅ ?w=          → Spam común
✅ ?fbclid=     → Facebook Click ID
✅ ?gclid=      → Google Click ID
✅ ?msclkid=    → Microsoft Click ID
✅ ?utm_*       → UTM parameters (opcional, ajustar si necesitas)
```

**Ejemplo:**
```
https://www.diapsa.com/cursos?m=1&r=abc
   ↓ 301 Redirect
https://www.diapsa.com/cursos
```

---

### 2. Rutas Spam → 404 Block

Rutas que serán **bloqueadas** (404):

```
🚫 /f/special/*         → Patrón spam detectado
🚫 /guide/*             → Patrón spam detectado
🚫 /politician*         → Patrón spam detectado
🚫 /mandate*            → Patrón spam detectado
🚫 /sponsor*            → Patrón spam detectado
🚫 /technical*          → Patrón spam detectado
🚫 /e/[números]/        → URLs con números random
🚫 /[letra]/12345678/   → Patrón letra + 8+ dígitos
```

**Ejemplo:**
```
https://www.diapsa.com/f/special/test
   ↓ 404 Not Found
(No se indexa en Google)
```

---

### 3. Forzar HTTPS y WWW → 301 Redirect

Todas las variantes redirigen a formato canónico:

```
http://diapsa.com           → https://www.diapsa.com  (301)
http://www.diapsa.com       → https://www.diapsa.com  (301)
https://diapsa.com          → https://www.diapsa.com  (301)
https://www.diapsa.com      → ✅ OK (canónico)
```

**⚠️ NOTA:** En `localhost` estas reglas NO aplican (para desarrollo).

---

## 🎯 Rutas Válidas Protegidas

El middleware **NO afecta** estas rutas legítimas:

### Rutas de Contenido (200 OK)
```
✅ /                                    → Homepage
✅ /cursos                              → Lista cursos
✅ /cursos/[slug]                       → Curso individual
✅ /productos                           → Catálogo
✅ /productos/[categoria]               → Categoría
✅ /productos/[categoria]/[producto]    → Producto
✅ /blog                                → Blog
✅ /blog/[slug]                         → Post
✅ /contacto                            → Contacto
✅ /acerca-de                           → Nosotros
✅ /servicios/*                         → Servicios
✅ /camaras/*                           → Cámaras
✅ /casos-exito/*                       → Casos de éxito
✅ /metodologia                         → Metodología
✅ /expo-manufactura                    → Expo
✅ /folletodigital                      → Folleto
```

### Recursos Excluidos del Middleware
```
✅ /api/*                → API routes (excluido)
✅ /_next/static/*       → Assets de Next.js (excluido)
✅ /_next/image/*        → Optimización de imágenes (excluido)
✅ /favicon.ico          → Favicon (excluido)
✅ /robots.txt           → Robots (excluido)
✅ /sitemap.xml          → Sitemap (excluido)
✅ /*.png, *.jpg, etc.   → Archivos estáticos (excluido)
```

---

## 🧪 Cómo Probar

### Opción 1: Script Automatizado

```bash
cd /mnt/c/laragon/www/diapsa-frontend

# Iniciar servidor de desarrollo
npm run dev

# En otra terminal, ejecutar tests
bash test-middleware.sh
```

### Opción 2: Manual en Browser

1. Iniciar dev server: `npm run dev`
2. Abrir DevTools (F12) → Network tab
3. Visitar URLs de prueba:

```
Test Spam Params:
http://localhost:3000/cursos?m=1
→ Debe redirigir a: http://localhost:3000/cursos

Test Spam Route:
http://localhost:3000/f/special/test
→ Debe mostrar: 404

Test Valid Route:
http://localhost:3000/cursos
→ Debe mostrar: 200
```

### Opción 3: Production Build

```bash
npm run build
npm run start

# Probar en http://localhost:3000
```

---

## 📊 Impacto Esperado

**Problema Actual:**
- ❌ 2,239 URLs spam sin indexar en Google Search Console
- ❌ 97% son parámetros `?m=` y `?r=`
- ❌ URLs duplicadas diluyen autoridad SEO

**Después del Middleware:**
- ✅ **301 Redirects** a URLs canónicas (pasa link juice)
- ✅ **404 Blocks** para rutas spam (no indexables)
- ✅ **HTTPS/WWW forzado** (consolidación SEO)
- ✅ Google Search Console limpio en 2-4 semanas

---

## 🚀 Deployment Checklist

- [ ] **1. Actualizar `CANONICAL_DOMAIN`** en middleware.ts
  ```typescript
  const CANONICAL_DOMAIN = 'www.diapsa.com'; // ⚠️ TU DOMINIO
  ```

- [ ] **2. Revisar parámetros spam**
  - ¿Hay parámetros adicionales que eliminar?
  - ¿Alguno de los listados es legítimo? (remover de lista)

- [ ] **3. Revisar rutas bloqueadas**
  - ¿Todas son realmente spam?
  - ¿Falta algún patrón spam detectado en GSC?

- [ ] **4. Probar en staging**
  ```bash
  npm run build
  npm run start
  bash test-middleware.sh
  ```

- [ ] **5. Deploy a producción**
  ```bash
  git add middleware.ts
  git commit -m "feat: Implement spam URL cleanup middleware"
  git push origin seo/cursos-metadata-jsonld-redirects
  ```

- [ ] **6. Verificar en producción**
  - Rutas válidas funcionan ✅
  - Spam params → 301 ✅
  - Spam routes → 404 ✅
  - HTTPS/WWW OK ✅

- [ ] **7. Monitorear GSC (2-4 semanas)**
  - Reducción de URLs excluidas
  - URLs canónicas indexadas correctamente

---

## 🎓 Personalización Avanzada

### Agregar Parámetros Spam Adicionales

En `middleware.ts`:

```typescript
const SPAM_PARAMS = [
  'm', 'r', 'l', '_g', 'w',
  'fbclid', 'gclid', 'msclkid',
  'utm_source', 'utm_medium', 'utm_campaign', // UTMs
  // ⬇️ AGREGAR MÁS AQUÍ
  'ref', 'source', 'campaign_id', // Ejemplos
];
```

### Agregar Rutas Spam Adicionales

```typescript
const SPAM_PATH_PATTERNS = [
  /^\/f\/special\//i,
  /^\/guide\//i,
  /^\/politician/i,
  // ⬇️ AGREGAR MÁS AQUÍ
  /^\/admin\//i,        // Bloquear /admin/*
  /^\/wp-admin\//i,     // Intentos WordPress
  /^\/test\//i,         // Rutas de test
];
```

### Preservar Parámetros Legítimos

Si tu app usa parámetros query válidos (ej: `?page=2`, `?q=search`), el middleware **ya los preserva automáticamente**.

Solo se eliminan los listados en `SPAM_PARAMS`.

**Ejemplo Mix:**
```
URL: https://www.diapsa.com/productos?categoria=tornillos&m=1

Resultado:
https://www.diapsa.com/productos?categoria=tornillos
                                  ↑
                        (preservado porque es legítimo)
```

---

## 🐛 Troubleshooting

### ❌ Redirect Loop Infinito

**Síntoma:** Browser dice "too many redirects"

**Causa:** Dominio mal configurado

**Solución:**
```typescript
// Verificar que coincida exactamente con tu dominio
const CANONICAL_DOMAIN = 'www.tudominio.com';
// ❌ MAL: 'https://www.tudominio.com' (no incluir protocolo)
// ❌ MAL: 'www.tudominio.com/' (no incluir trailing slash)
// ✅ BIEN: 'www.tudominio.com'
```

### ❌ Rutas Válidas Bloqueadas

**Síntoma:** Rutas legítimas dan 404

**Causa:** Regex demasiado amplio

**Solución:** Revisar `SPAM_PATH_PATTERNS`, usar regex más específicos:

```typescript
// ❌ MAL: /^\/guide/i  → Bloquea /guide, /guidelines, /guided, etc.
// ✅ BIEN: /^\/guide\//i → Solo bloquea /guide/* (con slash)
```

### ❌ Parámetros Legítimos Eliminados

**Síntoma:** Parámetros necesarios desaparecen

**Causa:** Parámetro añadido por error en `SPAM_PARAMS`

**Solución:** Removerlo de la lista:

```typescript
const SPAM_PARAMS = [
  'm', 'r', 'l', '_g', 'w',
  // 'page', // ❌ NO incluir parámetros legítimos
];
```

---

## 📝 Logs y Debugging

El middleware incluye `console.log()` para debugging.

**Ver logs en desarrollo:**

```bash
npm run dev

# Terminal mostrará:
[Middleware] Bloqueado ruta spam: /f/special/test
[Middleware] Limpiando params spam: /cursos?m=1 → /cursos
[Middleware] Forzando HTTPS/WWW: http://diapsa.com → https://www.diapsa.com
```

**En producción:** Considera remover logs o usar sistema de logging apropiado (Sentry, Datadog, etc.)

---

## ✅ ¡LISTO PARA IMPLEMENTAR!

**Próximos pasos:**

1. ✅ Actualizar `CANONICAL_DOMAIN` en middleware.ts
2. ✅ Ejecutar `bash test-middleware.sh` localmente
3. ✅ Commit y push a repo
4. ✅ Deploy a producción
5. ✅ Monitorear Google Search Console

**¿Dudas o problemas?** Revisar `MIDDLEWARE-TEST-CASES.md` para más detalles.

---

**Creado:** 2026-08-18  
**Proyecto:** DIAPSA Frontend - Next.js 16.1  
**Branch:** seo/cursos-metadata-jsonld-redirects
