# Auditoría de Impacto — Página Principal DIAPSA

> Fecha: 29 de abril de 2026  
> Archivo analizado: `app/page.tsx`  
> Objetivo: evaluar si la página comunica correctamente quién es DIAPSA, qué ofrece y genera conversiones.

---

## 1. Estructura actual

```
Hero (carrusel) → Offerings strip → AboutUs → TabsSection → IdapIntro → Clients → BlogSection → ContactForm
```

---

## 2. Lo que hace bien ✅

| Elemento | Por qué funciona |
|---|---|
| **Hero carrusel** | Cubre los 4 ejes principales (servicios, sensores IoT, cámaras, cursos). Primera impresión sólida. |
| **Offerings strip** | Acceso inmediato a las 4 secciones más importantes. Reduce fricción de navegación. |
| **Logos de clientes** | Genera credibilidad social. Animación infinita da sensación de volumen. |
| **Estadísticas en AboutUs** | `+50,000 fallas`, `+1,500 servicios`, `+20 años` son números poderosos. |
| **Anchor `#contacto`** | Los CTAs del hero ya enlazan directamente al formulario. |

---

## 3. Problemas identificados 🔴

### 3.1 Flujo narrativo roto

La página no sigue un embudo lógico de conversión. El visitante pasa de:  
`Hero` → (quiénes somos) → (metodología abstracta) → (plataforma técnica) → (logos) → (blog) → (contacto)

**Problema:** No hay un hilo conductor que lleve al visitante del **problema** → **solución** → **prueba social** → **acción**. La `TabsSection` habla del problema industrial de forma excelente pero aparece en el puesto 3 sin que el visitante haya visto aún las soluciones concretas.

---

### 3.2 Secciones importantes de DIAPSA ausentes en homepage

Los siguientes activos existen en el sitio pero **no tienen representación en la página principal**:

| Activo ausente | Datos disponibles | Carpeta de imágenes |
|---|---|---|
| **Casos de éxito** | `data/casos-exito.json` (casos reales con clientes y resultados) | `public/images/gallery/` |
| **Cursos** (teaser) | `data/cursos.json` + `data/cursos/new.json` | `public/images/cursos/` |
| **DIAPSA START** | Existe página `/servicios/diapsa-start` y datos | — |
| **Productos/Cámaras** | Existe página `/camaras` con imágenes | `public/images/deteccion-gas/` |
| **Galería de campo** | 18 fotos reales de trabajos en planta | `public/images/gallery/campo-img-*.jpg` |
| **Imágenes de capacitación** | 9 fotos de cursos presenciales | `public/images/gallery/capacitacion-img-*.jpg` |

La galería (`campo-img-1..9` + `capacitacion-img-1..9`) es prueba visual directa de la operación real de DIAPSA y **no se usa en ningún lugar de la homepage**.

---

### 3.3 Sección `TabsSection` (Problema/Solución/Metodología/Resultados)

- Texto 100% sin soporte visual (las imágenes de tab están vacías en el JSON).
- Los resultados cuantitativos (`95% efectividad`, `150% ROI`) son muy poderosos pero están enterrados en la pestaña 4 de un tab que mucha gente no llega a ver.
- No tiene ningún CTA al final. El usuario lee datos impresionantes y no sabe qué hacer.
- Se ubica en el puesto 4 de la página — demasiado abajo para generar impacto.

**Recomendación:** Mover los resultados cuantitativos a una sección visual independiente y corta, tipo "cifras que hablan por sí solas", con iconos grandes. Más arriba del pliegue.

---

### 3.4 Sección `IdapIntro` interrumpe el flujo comercial

- IDAP es una plataforma técnica propia de DIAPSA — valiosa pero de interés para audiencias ya convencidas.
- Aparece en el puesto 5, entre los clientes y el blog, rompiendo el ritmo.
- El gradiente naranja intenso rompe la paleta visual del resto de la página.
- No está claro si IDAP es un producto para vender, una herramienta interna o un diferenciador.

**Recomendación:** Mover `IdapIntro` después de la sección de servicios, como diferenciador tecnológico, no como protagonista central.

---

### 3.5 `AboutUs` no tiene CTA

El bloque `¿Por qué elegir a DIAPSA?` tiene buena copia y buenos números, pero **no hay ningún botón** que lleve al visitante al siguiente paso. El usuario que se convence ahí no sabe qué hacer.

---

### 3.6 `BlogSection` con datos ficticios

- El blog muestra posts del JSON estático `data/blog.json`.
- Si el blog no tiene contenido real actualizado, esta sección genera una **impresión negativa** (empresa con blog abandonado).
- Alternativa: reemplazar o acompañar con la sección de **Casos de Éxito**, que sí tiene datos reales y genera más credibilidad técnica.

---

### 3.7 Clase Tailwind potencialmente inválida

En la offerings strip (`page.tsx`):
```tsx
className="... bg-primary/8 ..."
```
La utilidad `bg-primary/8` con opacidad `8` no es un valor estándar de Tailwind (los valores van en múltiplos de 5 o 10). Puede no renderizar correctamente dependiendo de la versión y configuración. Usar `bg-primary/10`.

---

### 3.8 No hay sección de servicios con tarjetas visuales

Actualmente los servicios solo se mencionan en:
- El carrusel del hero (texto).
- El offerings strip (iconos pequeños).
- La página `/servicios` (fuera de homepage).

**Problema:** El visitante que llega a la homepage y no hace clic en el strip nunca ve un resumen visual de los servicios. Las disciplinas (termografía, vibraciones, ultrasonido, etc.) son el núcleo del negocio y merecen una sección dedicada con imágenes reales.

---

## 4. Propuesta de estructura mejorada

```
1. Hero carrusel (estado actual — correcto)
2. Offerings strip (estado actual — correcto, ajustar bg-primary/8 → bg-primary/10)
3. [NUEVA] Sección de cifras clave — 4 estadísticas visuales prominentes
4. AboutUs (mover stats a sección 3 o mantener, agregar CTA "Conoce nuestra historia")
5. [NUEVA] Servicios overview — cards con imagen real de cada disciplina
6. TabsSection — el problema industrial (mantener pero con imágenes en tabs)
7. [NUEVA] Casos de éxito — 2-3 cases en cards con resultado cuantificado
8. IdapIntro — como diferenciador tecnológico (mover aquí)
9. [NUEVA] Cursos destacados — 3 cards de cursos populares
10. Clients — logos (mantener)
11. [NUEVA] Galería — grid de fotos de campo + capacitación (prueba social visual)
12. BlogSection — OR sustituir por "Recursos" si el blog no está activo
13. ContactForm (mantener con anchor #contacto)
```

---

## 5. Mejoras prioritarias (ROI de implementación vs. impacto)

| Prioridad | Mejora | Impacto esperado |
|---|---|---|
| 🔴 Alta | Sección de cifras clave visual (antes de TabsSection) | Credibilidad inmediata, reduce rebote |
| 🔴 Alta | Cards de servicios con imágenes reales (disciplinas) | Claridad de oferta, mejora SEO on-page |
| 🔴 Alta | Sección de Casos de Éxito en homepage | Prueba social + confianza comercial |
| 🟡 Media | CTA en `AboutUs` | Conversión de visitantes ya convencidos |
| 🟡 Media | Imágenes en tabs de `TabsSection` (usar gallery/) | Retención visual, reduce bounce |
| 🟡 Media | Mover `IdapIntro` a posición 8 | Mejor flujo narrativo |
| 🟡 Media | Teaser de cursos (3 cards) | Audiencia de capacitación no captada |
| 🟢 Baja | Galería de campo con fotos reales | Humaniza la marca, prueba social visual |
| 🟢 Baja | Corrección `bg-primary/8` → `bg-primary/10` | Consistencia visual |
| 🟢 Baja | Evaluar si BlogSection tiene contenido vivo | Evita percepción de empresa inactiva |

---

## 6. Audiencias no cubiertas actualmente

| Audiencia | ¿Qué busca? | ¿Está en homepage? |
|---|---|---|
| Director de mantenimiento | Servicios de diagnóstico industrial | Parcialmente (strip) |
| Gerente de planta | ROI, resultados probados, casos de éxito | ❌ No |
| Estudiante / técnico | Cursos y certificaciones | Parcialmente (strip) |
| Jefe de compras | Cámaras, sensores, precios | ❌ No |
| Empresa nueva | DIAPSA START (onboarding) | ❌ No |

---

## 7. Observación de coherencia de marca

La paleta de color es consistente (`#002e46` azul, `#fc9f01` naranja). Sin embargo:
- La sección `IdapIntro` usa un gradiente naranja muy intenso que **domina visualmente** más que el hero.
- El footer y el header no están auditados aquí pero deben reforzar los mismos mensajes clave.
- El copy en `AboutUs` y `TabsSection` es de alta calidad — el problema es de **arquitectura de información**, no de redacción.

---

*Reporte generado para uso interno. Priorizar implementación según roadmap de producto.*
