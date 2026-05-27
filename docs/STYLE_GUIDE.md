# Guía de Estilos — Grupo DIAPSA Frontend

> Referencia visual y de código para mantener coherencia en toda la aplicación.
> Aplica a nuevas páginas, secciones y componentes.

---

## 1. Colores de Marca

Definidos en `app/globals.css` y disponibles como clases Tailwind:

| Token | Valor | Clase Tailwind | Uso |
|---|---|---|---|
| `--primary` | `#002e46` | `bg-primary`, `text-primary`, `border-primary` | Azul oscuro — color principal de marca |
| `--secondary` | `#fc9f01` | `bg-secondary`, `text-secondary`, `border-secondary` | Naranja — acentos, highlights, CTAs |
| `--tertiary` | `#6b7280` | `text-tertiary` | Gris — texto secundario, subtítulos |

**Reglas:**
- Nunca usar `text-black` para headings — usar `text-primary`
- Nunca usar hex hardcoded en className cuando exista un token
- El `bg-black` está reservado **solo** para `ContactForm`

---

## 2. Tipografía

### Headings de sección (h2)
```tsx
<h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
  TÍTULO <span className="text-secondary">DESTACADO</span>
</h2>
```
- Siempre `font-extrabold`
- Escala: `text-3xl lg:text-4xl`
- Color base: `text-primary`; highlight con `text-secondary`
- Texto en **mayúsculas**

### Subtítulo / descripción de sección (p)
```tsx
<p className="text-tertiary text-lg max-w-2xl mx-auto">
  Descripción de la sección...
</p>
```
- `text-tertiary`, `text-lg`, `max-w-2xl` centrado

### Headings internos (h3 dentro de cards)
```tsx
<h3 className="font-bold text-primary text-base leading-snug group-hover:text-secondary transition-colors">
```
- `font-bold`, `text-base`, `text-primary`

### Texto de cuerpo
```tsx
<p className="text-tertiary text-sm leading-relaxed">
```
- `text-sm leading-relaxed` para textos dentro de cards
- `text-base lg:text-lg leading-relaxed` para textos de sección

---

## 3. Patrón de Header de Sección

**Todas las secciones** deben tener este patrón antes del contenido principal:

```tsx
{/* Sección sobre fondo claro */}
<div className="text-center mb-12">
  <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
    Etiqueta de sección
  </span>
  <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
    TÍTULO <span className="text-secondary">DESTACADO</span>
  </h2>
  <p className="text-tertiary text-lg max-w-2xl mx-auto">
    Descripción opcional de la sección.
  </p>
</div>
```

**Sección sobre fondo oscuro (`bg-primary`):**
```tsx
<div className="text-center mb-12">
  <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
    Etiqueta
  </span>
  <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
    TÍTULO <span className="text-secondary">DESTACADO</span>
  </h2>
  <p className="text-white/70 mt-2">
    Descripción opcional.
  </p>
</div>
```

---

## 4. Espaciado de Secciones

Padding vertical estándar **para todas las secciones**:

```tsx
<section className="... py-16 lg:py-24">
```

| Caso especial | Clase |
|---|---|
| Sección sin padding inferior (el contenido llega al borde) | `pt-16 lg:pt-24` |
| Sección que contiene elemento desbordado abajo (ej. motor) | `py-16 lg:py-24 pb-24 lg:pb-60` |

**Contenedor de contenido:**
```tsx
<div className="max-w-7xl mx-auto px-6">
```

---

## 5. CTAs y Botones de Sección

### Sobre fondo claro (`bg-white`, `bg-gray-50`, `bg-gray-100`)
```tsx
{/* CTA principal — sólido primary */}
<Link
  href="/ruta"
  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xs hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md"
>
  Texto del CTA
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
</Link>
```

### Sobre fondo oscuro (`bg-primary`, `bg-black`)
```tsx
{/* CTA sobre fondo oscuro — sólido secondary */}
<Link
  href="/ruta"
  className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-3 rounded-xs hover:bg-white hover:text-primary transition-all duration-300 shadow-md"
>
  Texto del CTA
</Link>
```

### Reglas generales
- `rounded-xs` en todos los CTAs de sección (no `rounded-lg`, no `rounded-xl`)
- `font-bold` siempre
- Transición: `transition-all duration-300`
- Ícono de flecha cuando hay navegación: `strokeWidth={2.5}`, `d="M9 5l7 7-7 7"`
- **No usar estilos outline/border** para CTAs de sección — solo sólidos

### Atom `Button` (para botones interactivos, no links de navegación)
```tsx
import Button from "@/components/atoms/Button";

// Sobre fondo claro
<Button variant="primary">Enviar</Button>

// Sobre fondo oscuro (navbar, hero)
<Button variant="primary" ghost>Contacto</Button>
<Button variant="primary" ghost ghostVariant="light">Outlined claro</Button>
```

---

## 6. Cards

### Estructura base de card
```tsx
<div className="group flex flex-col bg-white rounded-sm border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl overflow-hidden transition-all duration-300">
  {/* Header de card — fondo primary */}
  <div className="bg-primary px-6 py-4">
    ...
  </div>
  {/* Body */}
  <div className="flex flex-col flex-1 p-6 gap-4">
    ...
  </div>
</div>
```

**Reglas:**
- `rounded-sm` — en **todas** las cards (no `rounded-xl`, no `rounded-lg`)
- `border border-gray-100` en reposo, `hover:border-secondary/30` en hover
- `shadow-sm hover:shadow-xl` — sombra progresiva
- `transition-all duration-300` para suavizar todos los cambios
- `overflow-hidden` cuando hay imagen que debe recortarse

### Cards de imagen (disciplinas)
```tsx
<div className="group relative overflow-hidden rounded-sm bg-gray-50 border border-gray-100 hover:border-secondary/40 hover:shadow-xl transition-all duration-300">
  <div className="relative w-full h-48 overflow-hidden">
    <Image fill className="object-cover transition-transform duration-500 group-hover:scale-105" ... />
    <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors duration-300" />
  </div>
  <div className="p-5">
    <h3 className="font-bold text-primary text-base mb-2 group-hover:text-secondary transition-colors">...</h3>
    <p className="text-tertiary text-sm leading-relaxed">...</p>
  </div>
  {/* Borde inferior animado */}
  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
</div>
```

---

## 7. Ritmo de Fondos

El orden de alternancia de fondos en la homepage define el ritmo visual. Para nuevas secciones, seguir esta lógica:

```
bg-white → bg-gray-50/bg-gray-100 → bg-white → bg-primary → bg-white → bg-black
```

| Color de fondo | Cuándo usar |
|---|---|
| `bg-white` | Secciones de contenido principales |
| `bg-gray-50` | Secciones de listado/cards (contraste suave) |
| `bg-gray-100` | Secciones de eventos/anuncios |
| `bg-primary` | Secciones de impacto/galería/cierre visual |
| `bg-black` | **Solo ContactForm** |
| Naranja (`bg-[#fda101]`) | **Solo IdapIntro** — diferenciador de producto |
| `bg-tertiary` | **Solo `ContinuosMonitoringTechnology`** — excepción documentada (ver nota abajo) |

**Regla:** No poner dos secciones `bg-white` consecutivas sin separación visual. Agregar un fondo diferente entre ellas.

> **Excepción — `ContinuosMonitoringTechnology`:** Este componente usa `bg-tertiary` (`#6b7280`, gris medio) como fondo de sección. Es la única sección del sitio que usa este color de fondo. La decisión es intencional: al promocionar la tecnología de **KCF Technologies** (socio aliado), el gris neutro mantiene la identidad visual de la marca aliada sin imponer los colores de DIAPSA. Sobre este fondo se usan `text-white`/`text-white/80` para texto de sección (en lugar de `text-tertiary` que sería invisible), conservando `text-primary` y `text-secondary` para headings y acentos donde el contraste lo permite.

---

## 8. Badge / Eyebrow Pill

El mismo componente en todos lados:

```tsx
<span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
  Texto del badge
</span>
```

- Siempre en **mayúsculas**
- `text-xs tracking-widest`
- `rounded-full` (el único elemento con bordes completamente redondos)
- `mb-4` como separación hacia el h2

---

## 9. Imágenes

### Imagen de fondo de sección
```tsx
import BackgroundImage from "@/components/atoms/BackgroundImage";

<BackgroundImage
  src="/images/fondo-mantenimiento.webp"
  alt="Descripción"
  priority
  zIndex="-z-10"
/>
```

### Imagen con Next/Image
```tsx
{/* Fill — para contenedores con position relative */}
<div className="relative w-full h-48">
  <Image src="..." alt="..." fill className="object-cover" sizes="..." />
</div>

{/* Hero background */}
<Image src="..." alt="" fill className="object-cover" priority />
```

---

## 10. Grid Layout

### Grid de 2 columnas (sección con imagen + texto)
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
```

### Grid de 3 columnas (cards)
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
```

### Grid de 4 columnas (navegación rápida)
```tsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
```

---

## 11. Estructura de una Sección Nueva

Template completo para agregar una nueva sección:

```tsx
// components/organisms/NuevaSeccion.tsx
import Link from "next/link";

export default function NuevaSeccion() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
            Etiqueta
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
            TÍTULO <span className="text-secondary">DESTACADO</span>
          </h2>
          <p className="text-tertiary text-lg max-w-2xl mx-auto">
            Descripción de la sección.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* ... cards ... */}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/ruta"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xs hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md"
          >
            Ver más
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
```

---

## 12. Checklist para Revisión de Componentes

Antes de hacer merge de una nueva sección, verificar:

- [ ] ¿Tiene badge pill + h2 `font-extrabold text-3xl lg:text-4xl` + párrafo descripción?
- [ ] ¿El h2 usa `text-primary`? (no `text-black`)
- [ ] ¿El padding es `py-16 lg:py-24`?
- [ ] ¿El contenedor usa `max-w-7xl mx-auto px-6`?
- [ ] ¿Las cards usan `rounded-sm`? (no `rounded-xl`)
- [ ] ¿Los CTAs de navegación son sólidos (`bg-primary` o `bg-secondary`)? (no outline)
- [ ] ¿`rounded-xs` en todos los botones/CTAs?
- [ ] ¿El fondo alterna correctamente con las secciones adyacentes?
- [ ] ¿No hay dos secciones `bg-white` consecutivas sin separación?
- [ ] ¿Los colores usan tokens (`text-primary`, `bg-secondary`) en vez de hex?

---

## 13. Identidad de Diseño — Modern B2B/Industrial Web Design

Grupo DIAPSA sigue la corriente **Modern B2B/Industrial Web Design**. Todo componente nuevo debe respetar este lenguaje visual. Existen dos variantes de tema: **Dark** y **Light**, ambas con glows de fondo difuminados.

---

### Pilares del estilo

**Data Dashboard Aesthetic** (ambas variantes)
- Métricas KPI con `text-2xl font-extrabold text-secondary`
- Labels en `uppercase tracking-wider text-xs`
- Bordes de acento tipo cita: `border-l-2 border-secondary`

**Flat-sharp con micro-elevación** (ambas variantes)
- `rounded-sm` en cards y contenedores — nunca `rounded-xl` ni `rounded-2xl`
- `rounded-xs` en botones/CTAs
- `rounded-full` exclusivamente para badges/pills
- Sombras: `shadow-sm` en reposo → `shadow-xl` en hover
- Interacciones: color shift + gap transition (no ripple, no elevación física)

---

### Tema Dark — `bg-primary`

Para secciones de impacto, cierre visual o diferenciación fuerte.

**Fondo con glow:**
```tsx
<section className="w-full bg-primary py-16 lg:py-24 relative overflow-hidden">
  {/* Glow principal — esquina opuesta al contenido principal */}
  <div className="absolute top-1/4 left-1/3 w-150 h-150 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
  {/* Glow secundario sutil (opcional) */}
  <div className="absolute bottom-0 right-0 w-100 h-100 bg-primary/40 rounded-full blur-2xl pointer-events-none" />
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* contenido */}
  </div>
</section>
```

**Tokens sobre fondo oscuro:**
| Elemento | Clase |
|---|---|
| Heading h2 | `text-white` + `<span className="text-secondary">` |
| Descripción párrafo | `text-white/70` |
| Badge/pill | `text-secondary border-secondary/40 bg-secondary/10` |
| CTA principal | `bg-secondary text-primary hover:bg-white hover:text-primary` |
| Cards | `bg-white/10 border border-white/15 hover:border-secondary/50` |
| Card header interno | Solo `border-b border-white/10` (sin bg redundante) |

---

### Tema Light — `bg-white` / `bg-gray-50`

Para secciones de contenido principal, listados y disciplinas.

**Fondo con glow:**
```tsx
<section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
  {/* Glow primary difuminado — esquina superior */}
  <div className="absolute -top-32 -left-32 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
  {/* Glow secondary difuminado — esquina inferior opuesta */}
  <div className="absolute -bottom-24 -right-24 w-100 h-100 bg-secondary/6 rounded-full blur-3xl pointer-events-none" />
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* contenido */}
  </div>
</section>
```

**Tokens sobre fondo claro:**
| Elemento | Clase |
|---|---|
| Heading h2 | `text-primary` + `<span className="text-secondary">` |
| Descripción párrafo | `text-tertiary` |
| Badge/pill | `text-secondary border-secondary/40 bg-secondary/10` |
| CTA principal | `bg-primary text-white hover:bg-secondary hover:text-primary` |
| Cards (base blanca) | `bg-white border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl` |
| Cards (base oscura en sección light) | `bg-primary border border-primary/80 hover:border-secondary/40` |

---

### Qué NO hacer en ninguna variante
| Elemento | Prohibido |
|---|---|
| Bordes de card | `rounded-xl`, `rounded-3xl`, `rounded-lg` |
| Gradientes en botones | `bg-gradient-to-r ...` |
| Fondo placeholder | `bg-gray-500` como fondo de sección real |
| Gradiente mixto incoherente | `from-primary via-gray-100 to-primary` |
| Hex hardcoded en className | Usar siempre tokens `text-primary`, `bg-secondary` |
| Dos glows del mismo color | Un glow primary + uno secondary por sección |

---

## 14. Páginas con Alta Densidad de Imágenes

Las páginas de servicio deben ser **visualmente ricas**. Cada sección debe tener al menos un elemento visual (imagen, fondo fotográfico o imagen de card).

### Regla general
Toda sección de servicio debe incluir al menos **una imagen por sección**. No dejar secciones con solo texto y fondo plano.

### Placeholder mientras no existe la imagen final
Usar siempre `/images/servicios/placeholder.jpg` como `src` temporal. **Obligatorio** agregar un comentario `TODO` que describa qué imagen colocar:

```tsx
{/* TODO: Replace placeholder with a photo of [descripción específica de la escena] */}
<div className="relative w-full h-48 overflow-hidden">
  <Image
    src="/images/servicios/placeholder.jpg"
    alt="[Descripción accesible de lo que irá aquí]"
    fill
    className="object-cover"
    sizes="..."
  />
</div>
```

En arrays de datos, el campo `image` también lleva el comentario `TODO`:
```ts
const items = [
  {
    // TODO: Replace with [descripción de la imagen ideal]
    image: "/images/servicios/placeholder.jpg",
    title: "...",
  }
];
```

### Patrones de imagen por tipo de sección

#### Sección intro 2 columnas (texto + imagen)
La columna derecha es la imagen con KPIs superpuestos al fondo:
```tsx
<div className="relative rounded-sm overflow-hidden shadow-xl">
  <div className="relative w-full h-105">
    <Image src="..." alt="..." fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    <div className="absolute inset-0 bg-primary/30" />
  </div>
  {/* KPI strip superpuesto */}
  <div className="absolute bottom-0 left-0 right-0 bg-primary/80 backdrop-blur-sm p-5 flex gap-4 justify-around border-t-2 border-secondary">
    <div className="text-center">
      <span className="block text-2xl font-extrabold text-secondary">+20 años</span>
      <span className="block text-xs uppercase tracking-wider text-white/80">Experiencia</span>
    </div>
  </div>
</div>
```

#### Cards con imagen (pain points, servicios)
Usar el patrón de imagen de card con overlay y borde inferior animado:
```tsx
<div className="group relative flex flex-col bg-white rounded-sm border border-gray-100 hover:border-secondary/40 hover:shadow-xl overflow-hidden transition-all duration-300">
  <div className="relative w-full h-48 overflow-hidden">
    <Image src="..." alt="..." fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="..." />
    <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/30 transition-colors duration-300" />
    {/* Icono o badge superpuesto */}
    <span className="absolute top-4 left-4 text-3xl drop-shadow-lg">🔧</span>
  </div>
  <div className="flex-1 p-6">
    <h3 className="font-bold text-primary text-base leading-snug mb-2 group-hover:text-secondary transition-colors">Título</h3>
    <p className="text-tertiary text-sm leading-relaxed">Descripción</p>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
</div>
```

#### Cards de proceso con imagen (pasos numerados)
Número de etapa superpuesto como watermark:
```tsx
<div className="group relative flex flex-col bg-white rounded-sm border border-gray-100 hover:border-secondary/40 hover:shadow-xl overflow-hidden transition-all duration-300">
  <div className="relative w-full h-44 overflow-hidden">
    <Image src="..." alt="..." fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="..." />
    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-300" />
    <span className="absolute bottom-3 left-4 text-5xl font-extrabold text-white/30 leading-none select-none">01</span>
  </div>
  <div className="p-6">
    <h3 className="font-bold text-primary text-base leading-snug mb-2 group-hover:text-secondary transition-colors">Título etapa</h3>
    <p className="text-tertiary text-sm leading-relaxed">Descripción</p>
  </div>
  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
</div>
```

#### Imagen lateral con KPI cards (beneficios)
Imagen a la izquierda con quote/label superpuesto, KPI cards apilados a la derecha:
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
  {/* Imagen */}
  <div className="relative rounded-sm overflow-hidden shadow-xl min-h-85">
    <Image src="..." alt="..." fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    <div className="absolute inset-0 bg-primary/20" />
    <div className="absolute bottom-4 left-4 right-4 bg-primary/80 backdrop-blur-sm rounded-xs px-4 py-3 border-l-2 border-secondary">
      <p className="text-white text-sm font-semibold leading-snug">"Quote de impacto aquí."</p>
    </div>
  </div>
  {/* KPI cards */}
  <div className="flex flex-col gap-4">
    {/* ...benefit cards... */}
  </div>
</div>
```

#### CTA final con imagen de fondo
Usar `BackgroundImage` con `overlayOpacity` alto para mantener legibilidad:
```tsx
<section className="w-full bg-primary py-16 lg:py-24 relative overflow-hidden">
  {/* TODO: Replace placeholder with photo of industrial plant or field inspection */}
  <BackgroundImage
    src="/images/servicios/placeholder.jpg"
    alt="Descripción accesible"
    overlayOpacity={0.75}
  />
  {/* glow + contenido encima con relative z-10 */}
</section>
```

### Overlay de imagen — opacidades recomendadas
| Contexto | Clase de overlay |
|---|---|
| Card con texto debajo (solo decorativa) | `bg-primary/30` |
| Card con texto encima | `bg-primary/50` a `bg-primary/60` |
| Sección 2 columnas (imagen + texto aparte) | `bg-primary/20` a `bg-primary/30` |
| CTA final background (texto blanco encima) | `overlayOpacity={0.75}` en `BackgroundImage` |
| Hover → aligerar overlay | `group-hover:bg-primary/20` |

### Badge / label superpuesto en imagen
```tsx
<div className="absolute top-4 right-4 bg-secondary text-primary text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-xs shadow-md">
  Texto del badge
</div>
```
