# 🛡️ Middleware de Limpieza de URLs Spam - DIAPSA

## 📦 Archivos Incluidos

Este paquete contiene todos los archivos necesarios para implementar el middleware de limpieza de URLs spam en el proyecto DIAPSA.

### 1. **middleware.ts** (6.8 KB)
   - ✅ Middleware principal de Next.js
   - ✅ Limpieza de parámetros spam con redirect 301
   - ✅ Bloqueo de rutas spam con 404
   - ✅ Forzar HTTPS y WWW
   - ✅ Preservar parámetros legítimos
   - ✅ Comentarios explicativos completos

### 2. **test-middleware.sh** (4.9 KB)
   - ✅ Script de pruebas automatizado
   - ✅ Tests de parámetros spam
   - ✅ Tests de rutas bloqueadas
   - ✅ Tests de rutas válidas
   - ✅ Reportes con colores

### 3. **CONFIGURACION-DIAPSA.md** (8.9 KB)
   - ✅ **EMPEZAR AQUÍ** - Guía paso a paso específica para DIAPSA
   - ✅ Instrucciones de configuración
   - ✅ Tests de verificación
   - ✅ Checklist de deployment

### 4. **MIDDLEWARE-IMPLEMENTATION.md** (9.3 KB)
   - ✅ Resumen de implementación
   - ✅ Configuración detallada
   - ✅ Checklist de deployment
   - ✅ Troubleshooting

### 5. **MIDDLEWARE-TEST-CASES.md** (7.4 KB)
   - ✅ Casos de prueba exhaustivos
   - ✅ Instrucciones de personalización
   - ✅ Guía de testing manual

### 6. **MIDDLEWARE-VISUAL-EXAMPLES.md** (14 KB)
   - ✅ Ejemplos visuales antes/después
   - ✅ Diagramas de flujo
   - ✅ Impacto en Google Search Console
   - ✅ Timeline de resultados

---

## 🚀 Quick Start

### Paso 1: Configurar Dominio

Editar `middleware.ts` línea ~54:

```typescript
const CANONICAL_DOMAIN = 'www.diapsa.com'; // ⚠️ CAMBIAR por tu dominio real
```

### Paso 2: Probar Localmente

```bash
# Terminal 1: Iniciar servidor
npm run dev

# Terminal 2: Ejecutar tests
bash test-middleware.sh
```

### Paso 3: Deploy

```bash
git add middleware.ts MIDDLEWARE-*.md CONFIGURACION-DIAPSA.md test-middleware.sh
git commit -m "feat: Add spam URL cleanup middleware"
git push origin seo/cursos-metadata-jsonld-redirects
```

---

## 📊 Problema que Soluciona

### Situación Actual
- ❌ **2,239 URLs spam** sin indexar en Google Search Console
- ❌ **97% son parámetros** `?m=` y `?r=`
- ❌ Dilución de autoridad SEO
- ❌ Crawl budget desperdiciado

### Solución Implementada
- ✅ **Redirect 301** de URLs spam a versiones limpias
- ✅ **Bloqueo 404** de rutas maliciosas
- ✅ **HTTPS/WWW forzado** para consolidación
- ✅ **Preservación** de parámetros legítimos

---

## 🎯 Funcionalidades Implementadas

### 1. Limpieza de Parámetros Query Spam

**Parámetros que se eliminan automáticamente:**

```
✅ ?m=          → Spam común (97% del problema)
✅ ?r=          → Spam común
✅ ?l=          → Spam común
✅ ?_g=         → Spam común
✅ ?w=          → Spam común
✅ ?fbclid=     → Facebook Click ID
✅ ?gclid=      → Google Click ID
✅ ?msclkid=    → Microsoft Click ID
✅ ?utm_*       → UTM parameters (opcional)
```

**Ejemplo:**
```
https://www.diapsa.com/cursos?m=1&r=abc
   ↓ 301 Redirect
https://www.diapsa.com/cursos
```

### 2. Bloqueo de Rutas Spam

**Rutas que se bloquean con 404:**

```
🚫 /f/special/*         → Patrón spam
🚫 /guide/*             → Patrón spam
🚫 /politician*         → Patrón spam
🚫 /mandate*            → Patrón spam
🚫 /sponsor*            → Patrón spam
🚫 /technical*          → Patrón spam
🚫 /e/[números]/        → URLs con números random
```

### 3. Forzar HTTPS y WWW

**Todas las variantes redirigen a formato canónico:**

```
http://diapsa.com           → https://www.diapsa.com  (301)
http://www.diapsa.com       → https://www.diapsa.com  (301)
https://diapsa.com          → https://www.diapsa.com  (301)
https://www.diapsa.com      → ✅ OK (canónico)
```

### 4. Rutas Válidas Protegidas

**NO afecta estas rutas legítimas:**

```
✅ /                                    → Homepage
✅ /cursos, /cursos/[slug]              → Cursos
✅ /productos/[categoria]/[producto]     → Productos
✅ /blog, /blog/[slug]                   → Blog
✅ /contacto                             → Contacto
✅ /servicios/*                          → Servicios
✅ /api/*                                → API (excluido)
✅ /_next/*                              → Assets (excluido)
```

---

## 🧪 Testing

### Tests Automatizados

```bash
bash test-middleware.sh
```

Ejecuta:
- ✅ Tests de parámetros spam (6 tests)
- ✅ Tests de rutas bloqueadas (7 tests)
- ✅ Tests de rutas válidas (3 tests)
- ✅ Tests de recursos estáticos (2 tests)

### Tests Manuales

```bash
# Test 1: Parámetro spam
curl -I "http://localhost:3000/cursos?m=1"
# Esperar: 301 → /cursos

# Test 2: Ruta bloqueada
curl -I "http://localhost:3000/f/special/test"
# Esperar: 404

# Test 3: Ruta válida
curl -I "http://localhost:3000/cursos"
# Esperar: 200
```

---

## 📈 Impacto Esperado

### Timeline

```
DÍA 0:      Deploy del middleware
SEMANA 1:   Google empieza a recrawlear
SEMANA 2-4: URLs spam desaparecen de GSC
MES 2-3:    Resultados visibles en tráfico
```

### Google Search Console

**Antes:**
- ❌ 2,239 páginas excluidas
- ❌ Duplicados por query params

**Después (2-4 semanas):**
- ✅ ~50 páginas excluidas (legítimas)
- ✅ 0 duplicados por query params
- ✅ Crawl budget optimizado
- ✅ Autoridad SEO consolidada

---

## 📚 Documentación

### Para Implementadores

1. **CONFIGURACION-DIAPSA.md** - **EMPEZAR AQUÍ**
   - Paso a paso específico para DIAPSA
   - Configuración de dominio
   - Tests y verificación
   - Deployment

2. **MIDDLEWARE-IMPLEMENTATION.md**
   - Resumen técnico
   - Configuración avanzada
   - Checklist completo

### Para Testers

3. **MIDDLEWARE-TEST-CASES.md**
   - Lista completa de casos de prueba
   - Instrucciones de testing manual
   - Personalización

### Para Managers/SEO

4. **MIDDLEWARE-VISUAL-EXAMPLES.md**
   - Ejemplos visuales antes/después
   - Diagramas de impacto
   - Timeline de resultados
   - Estadísticas GSC

---

## 🔧 Personalización

### Agregar Parámetros Spam

En `middleware.ts`:

```typescript
const SPAM_PARAMS = [
  'm', 'r', 'l', '_g', 'w',
  // Agregar más aquí:
  'ref', 'source', 'campaign_id',
];
```

### Agregar Rutas Bloqueadas

```typescript
const SPAM_PATH_PATTERNS = [
  /^\/f\/special\//i,
  /^\/guide\//i,
  // Agregar más aquí:
  /^\/admin\//i,
  /^\/test\//i,
];
```

---

## ✅ Checklist de Deployment

### Pre-Deploy

- [ ] Actualizar `CANONICAL_DOMAIN` en middleware.ts
- [ ] Probar localmente: `bash test-middleware.sh`
- [ ] Verificar rutas válidas no afectadas

### Deploy

- [ ] Commit y push a repo
- [ ] Deploy a producción
- [ ] Build exitoso sin errores

### Post-Deploy

- [ ] Verificar redirects funcionando
- [ ] Verificar rutas válidas OK
- [ ] Monitorear GSC (semana 1-4)
- [ ] Analizar resultados (mes 2-3)

---

## 🐛 Soporte

### Problemas Comunes

1. **Redirect loop infinito**
   - Verificar `CANONICAL_DOMAIN` sin protocolo ni slash

2. **Rutas válidas bloqueadas**
   - Revisar `SPAM_PATH_PATTERNS`, usar regex específicos

3. **Parámetros legítimos eliminados**
   - Remover de `SPAM_PARAMS`

### Documentación Adicional

- Ver `CONFIGURACION-DIAPSA.md` → Troubleshooting
- Ver `MIDDLEWARE-IMPLEMENTATION.md` → Debugging
- Ver logs del servidor para detalles

---

## 📊 Resumen de Archivos

| Archivo | Tamaño | Propósito |
|---------|--------|-----------|
| `middleware.ts` | 6.8 KB | Middleware principal |
| `test-middleware.sh` | 4.9 KB | Tests automatizados |
| `CONFIGURACION-DIAPSA.md` | 8.9 KB | **Guía de inicio** |
| `MIDDLEWARE-IMPLEMENTATION.md` | 9.3 KB | Implementación técnica |
| `MIDDLEWARE-TEST-CASES.md` | 7.4 KB | Casos de prueba |
| `MIDDLEWARE-VISUAL-EXAMPLES.md` | 14 KB | Ejemplos visuales |
| `README-MIDDLEWARE.md` | Este archivo | Índice general |

---

## 🚀 Próximos Pasos

1. ✅ **Leer:** `CONFIGURACION-DIAPSA.md` (empezar aquí)
2. ✅ **Actualizar:** `CANONICAL_DOMAIN` en middleware.ts
3. ✅ **Probar:** `bash test-middleware.sh`
4. ✅ **Deploy:** Git commit + push
5. ✅ **Verificar:** Tests en producción
6. ✅ **Monitorear:** Google Search Console

---

**✅ TODO LISTO PARA IMPLEMENTAR**

**Proyecto:** DIAPSA Frontend - Next.js 16.1  
**Branch:** seo/cursos-metadata-jsonld-redirects  
**Fecha:** 2026-08-18  
**Problema:** 2,239 URLs spam (97% params ?m= y ?r=)  
**Solución:** Middleware con 301 redirects + 404 blocks
