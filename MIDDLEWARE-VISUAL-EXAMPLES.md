# 📊 Middleware - Ejemplos Visuales de Funcionamiento

## 🎯 Antes vs Después

### Escenario 1: URLs con Parámetros Spam

#### ❌ ANTES (Sin Middleware)

```
URL solicitada:
https://www.diapsa.com/cursos?m=1&r=abc

Comportamiento:
✓ 200 OK - Página se muestra
✗ Google indexa URL duplicada
✗ Link juice diluido
✗ 2,239 URLs spam en GSC
```

#### ✅ DESPUÉS (Con Middleware)

```
URL solicitada:
https://www.diapsa.com/cursos?m=1&r=abc

Comportamiento:
→ 301 Redirect a: https://www.diapsa.com/cursos
✓ SEO authority consolidado
✓ Google sigue redirect
✓ URLs spam eliminadas de índice
```

---

### Escenario 2: Rutas Spam Maliciosas

#### ❌ ANTES (Sin Middleware)

```
URL solicitada:
https://www.diapsa.com/f/special/test

Comportamiento:
✓ 404 Not Found (de Next.js)
✗ Google intenta indexar
✗ Crawl budget desperdiciado
✗ Aparece en GSC como "excluded"
```

#### ✅ DESPUÉS (Con Middleware)

```
URL solicitada:
https://www.diapsa.com/f/special/test

Comportamiento:
→ 404 Not Found (del Middleware)
✓ Google entiende que no existe
✓ No intenta re-crawlear
✓ No aparece en GSC
```

---

### Escenario 3: URLs sin WWW

#### ❌ ANTES (Sin Middleware)

```
URL solicitada:
https://diapsa.com/productos

Comportamiento:
✓ 200 OK - Funciona
✗ Contenido duplicado (con/sin www)
✗ PageRank dividido entre versiones
✗ Confusión para Google
```

#### ✅ DESPUÉS (Con Middleware)

```
URL solicitada:
https://diapsa.com/productos

Comportamiento:
→ 301 Redirect a: https://www.diapsa.com/productos
✓ URL canónica única
✓ PageRank consolidado
✓ Google indexa solo versión correcta
```

---

### Escenario 4: HTTP vs HTTPS

#### ❌ ANTES (Sin Middleware)

```
URL solicitada:
http://www.diapsa.com/contacto

Comportamiento:
? Depende de servidor
✗ Posible mixed content
✗ Advertencia de seguridad
✗ Penalización SEO
```

#### ✅ DESPUÉS (Con Middleware)

```
URL solicitada:
http://www.diapsa.com/contacto

Comportamiento:
→ 301 Redirect a: https://www.diapsa.com/contacto
✓ Forzar HTTPS
✓ Conexión segura
✓ Boost SEO
```

---

## 🔄 Flujo de Procesamiento del Middleware

```
┌─────────────────────────────────────┐
│  Request entrante                   │
│  https://www.diapsa.com/cursos?m=1  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  PASO 1: ¿Es recurso estático?      │
│  (/api/*, /_next/*, *.png, etc.)    │
└──────────────┬──────────────────────┘
               │
         ┌─────┴─────┐
         │           │
       NO│           │SÍ
         │           │
         ▼           ▼
    Continúa    Skip middleware
         │       (NextResponse.next)
         │
         ▼
┌─────────────────────────────────────┐
│  PASO 2: ¿Ruta bloqueada?           │
│  (/f/special/*, /guide/*, etc.)     │
└──────────────┬──────────────────────┘
               │
         ┌─────┴─────┐
         │           │
       NO│           │SÍ
         │           │
         ▼           ▼
    Continúa    Return 404
         │
         ▼
┌─────────────────────────────────────┐
│  PASO 3: ¿Parámetros spam?          │
│  (?m=, ?r=, ?l=, ?_g=, ?w=, etc.)  │
└──────────────┬──────────────────────┘
               │
         ┌─────┴─────┐
         │           │
       NO│           │SÍ
         │           │
         ▼           ▼
    Continúa    301 Redirect
         │       (URL limpia)
         │
         ▼
┌─────────────────────────────────────┐
│  PASO 4: ¿Hostname correcto?        │
│  (https://www.dominio.com)          │
└──────────────┬──────────────────────┘
               │
         ┌─────┴─────┐
         │           │
       SÍ│           │NO
         │           │
         ▼           ▼
    Continúa    301 Redirect
         │       (https://www.)
         │
         ▼
┌─────────────────────────────────────┐
│  PASO 5: Todo OK                    │
│  NextResponse.next()                │
│  → Procesa Next.js normalmente      │
└─────────────────────────────────────┘
```

---

## 📈 Impacto en Google Search Console

### 📊 Estadísticas ANTES del Middleware

```
┌─────────────────────────────────────┐
│  Google Search Console              │
├─────────────────────────────────────┤
│  Páginas indexadas:          342    │
│  Páginas excluidas:        2,239    │
│  Páginas con errores:          0    │
│                                     │
│  Motivos de exclusión:              │
│  • Duplicado (query params)  2,173  │
│  • Soft 404                     45  │
│  • Rastreado, no indexado       21  │
└─────────────────────────────────────┘

Problema:
❌ 97% de URLs excluidas son por params ?m= y ?r=
❌ Crawl budget desperdiciado
❌ Dilución de autoridad SEO
```

### 📊 Estadísticas DESPUÉS del Middleware (2-4 semanas)

```
┌─────────────────────────────────────┐
│  Google Search Console              │
├─────────────────────────────────────┤
│  Páginas indexadas:          342    │
│  Páginas excluidas:           ~50   │
│  Páginas con errores:          0    │
│                                     │
│  Motivos de exclusión:              │
│  • Duplicado (query params)     0   │
│  • Soft 404                     0   │
│  • Bloqueado por robots        50   │
└─────────────────────────────────────┘

Resultado:
✅ 2,173 URLs spam eliminadas
✅ Crawl budget optimizado
✅ Autoridad SEO consolidada
✅ Indexación limpia
```

---

## 🧪 Casos de Prueba Rápidos

### Test 1: Parámetro Spam Simple

```bash
# Input
curl -I "http://localhost:3000/cursos?m=1"

# Output esperado
HTTP/1.1 301 Moved Permanently
Location: http://localhost:3000/cursos
```

### Test 2: Múltiples Parámetros Spam

```bash
# Input
curl -I "http://localhost:3000/productos?m=1&r=abc&l=test"

# Output esperado
HTTP/1.1 301 Moved Permanently
Location: http://localhost:3000/productos
```

### Test 3: Mix Spam + Legítimo

```bash
# Input (asumiendo que 'page' es parámetro legítimo)
curl -I "http://localhost:3000/blog?page=2&m=1"

# Output esperado
HTTP/1.1 301 Moved Permanently
Location: http://localhost:3000/blog?page=2
```

### Test 4: Ruta Bloqueada

```bash
# Input
curl -I "http://localhost:3000/f/special/test"

# Output esperado
HTTP/1.1 404 Not Found
```

### Test 5: Ruta Válida

```bash
# Input
curl -I "http://localhost:3000/cursos"

# Output esperado
HTTP/1.1 200 OK
```

---

## 🎨 Diagrama de URLs (Antes vs Después)

### ANTES: Caos de URLs

```
┌─ Versión 1: https://www.diapsa.com/cursos
├─ Versión 2: https://diapsa.com/cursos
├─ Versión 3: http://www.diapsa.com/cursos
├─ Versión 4: http://diapsa.com/cursos
├─ Spam 1:    https://www.diapsa.com/cursos?m=1
├─ Spam 2:    https://www.diapsa.com/cursos?r=abc
├─ Spam 3:    https://www.diapsa.com/cursos?l=test
├─ Spam 4:    https://www.diapsa.com/cursos?_g=123
├─ Spam 5:    https://www.diapsa.com/cursos?w=xyz
├─ Spam 6:    https://www.diapsa.com/cursos?fbclid=...
└─ Spam N:    ... +2,200 URLs más

Problemas:
❌ PageRank dividido entre versiones
❌ Contenido duplicado
❌ Confusión para Google
❌ Crawl budget malgastado
```

### DESPUÉS: URL Canónica Única

```
┌─ https://www.diapsa.com/cursos
│
└─ TODAS las variantes redirigen aquí (301)
   ├─ https://diapsa.com/cursos        → 301
   ├─ http://www.diapsa.com/cursos     → 301
   ├─ http://diapsa.com/cursos         → 301
   ├─ .../cursos?m=1                   → 301
   ├─ .../cursos?r=abc                 → 301
   └─ ... (todas las spam)             → 301

Beneficios:
✅ PageRank consolidado
✅ Sin duplicados
✅ Google indexa solo la canónica
✅ Crawl budget optimizado
```

---

## 🚀 Timeline de Implementación

```
┌─────────────────────────────────────────────────────┐
│  DÍA 0: Deploy del Middleware                       │
├─────────────────────────────────────────────────────┤
│  • Middleware activo en producción                  │
│  • 301 redirects funcionando                        │
│  • 404 blocks activos                               │
└─────────────────────────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│  SEMANA 1: Google empieza a recrawlear              │
├─────────────────────────────────────────────────────┤
│  • Google sigue 301 redirects                       │
│  • Actualiza índice gradualmente                    │
│  • GSC muestra primeros cambios                     │
└─────────────────────────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│  SEMANA 2-4: Consolidación                          │
├─────────────────────────────────────────────────────┤
│  • URLs spam desaparecen de GSC                     │
│  • PageRank se consolida                            │
│  • Mejora en rankings                               │
└─────────────────────────────────────────────────────┘
                    ▼
┌─────────────────────────────────────────────────────┐
│  MES 2-3: Resultados visibles                       │
├─────────────────────────────────────────────────────┤
│  • Aumento en tráfico orgánico                      │
│  • Mejor CTR en SERPs                               │
│  • Crawl budget optimizado                          │
└─────────────────────────────────────────────────────┘
```

---

## 📋 Checklist Final

### Pre-Deploy

- [ ] **Revisar configuración en middleware.ts**
  - [ ] CANONICAL_DOMAIN actualizado
  - [ ] SPAM_PARAMS apropiados
  - [ ] SPAM_PATH_PATTERNS correctos
  
- [ ] **Probar localmente**
  ```bash
  npm run dev
  bash test-middleware.sh
  ```

- [ ] **Verificar rutas válidas no afectadas**
  - [ ] Homepage funciona
  - [ ] Rutas dinámicas funcionan
  - [ ] API routes no afectadas

### Deploy

- [ ] **Commit y push**
  ```bash
  git add middleware.ts MIDDLEWARE-*.md test-middleware.sh
  git commit -m "feat: Add spam URL cleanup middleware"
  git push origin seo/cursos-metadata-jsonld-redirects
  ```

- [ ] **Deploy a producción**
  - [ ] Build exitoso
  - [ ] Tests pasando
  - [ ] Sin errores en logs

### Post-Deploy

- [ ] **Verificar en producción** (día 1)
  - [ ] Redirects funcionando
  - [ ] Rutas válidas OK
  - [ ] Sin redirect loops

- [ ] **Monitorear GSC** (semana 1-4)
  - [ ] Reducción de URLs excluidas
  - [ ] No errores nuevos
  - [ ] Indexación correcta

- [ ] **Análisis de resultados** (mes 2-3)
  - [ ] Tráfico orgánico
  - [ ] Rankings
  - [ ] CTR

---

**✅ LISTO PARA IMPLEMENTAR**

**Archivos creados:**
- `middleware.ts` - Middleware principal
- `MIDDLEWARE-TEST-CASES.md` - Documentación de pruebas
- `MIDDLEWARE-IMPLEMENTATION.md` - Guía de implementación
- `MIDDLEWARE-VISUAL-EXAMPLES.md` - Este archivo (ejemplos visuales)
- `test-middleware.sh` - Script de tests automatizados

**Próximo paso:** Actualizar `CANONICAL_DOMAIN` y deployar 🚀
