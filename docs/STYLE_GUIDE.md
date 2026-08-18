# Guía de Estilos — Grupo DIAPSA Frontend

> Referencia visual y de código para mantener coherencia en páginas, secciones y componentes del sitio.

---

## 1. Colores de Marca

Los colores base están definidos en `app/globals.css` como tokens reutilizables.

| Token         |     Valor | Clase Tailwind                                       | Uso                                            |
| ------------- | --------: | ---------------------------------------------------- | ---------------------------------------------- |
| `--primary`   | `#002e46` | `bg-primary`, `text-primary`, `border-primary`       | Azul oscuro institucional                      |
| `--secondary` | `#fc9f01` | `bg-secondary`, `text-secondary`, `border-secondary` | Naranja de acento y CTAs                       |
| `--tertiary`  | `#6b7280` | `text-tertiary`, `bg-tertiary`                       | Gris para texto secundario o fondos especiales |

### Reglas de color

* Usar `text-primary` para títulos sobre fondo claro.
* Usar `text-white` para títulos sobre fondo oscuro.
* Usar `text-secondary` solo para acentos, palabras destacadas, CTAs o elementos de énfasis.
* Evitar `text-black`.
* Evitar hexadecimales hardcoded en `className` cuando exista un token.
* Reservar `bg-black` únicamente para `ContactForm`.
* Usar `bg-secondary` como color sólido solo en CTAs o secciones especiales justificadas.

---

## 2. Tipografía

La tipografía debe transmitir una imagen industrial, técnica y confiable. Evitar estilos demasiado decorativos o genéricos.

### Jerarquía recomendada

#### Hero principal

```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
  Título principal
</h1>
```

#### Título de sección principal

```tsx
<h2 className="text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
  Monitoreo de condición <span className="text-secondary">industrial</span>
</h2>
```

#### Título de sección sobre fondo oscuro

```tsx
<h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
  Tecnología aplicada al <span className="text-secondary">mantenimiento predictivo</span>
</h2>
```

#### Título interno o de bloque

```tsx
<h3 className="text-xl lg:text-2xl font-bold text-primary leading-snug">
  Diagnóstico técnico especializado
</h3>
```

#### Título dentro de card

```tsx
<h3 className="font-bold text-primary text-base leading-snug">
  Título de la card
</h3>
```

### Reglas tipográficas

* No forzar títulos en mayúsculas.
* Usar mayúsculas solo en labels técnicos pequeños, KPIs o datos breves.
* Evitar que todas las secciones tengan el mismo peso visual.
* Usar `font-extrabold` para títulos principales.
* Usar `font-bold` para títulos internos.
* Usar `leading-tight` en títulos grandes.
* Usar `leading-relaxed` en párrafos.

### Texto de cuerpo

```tsx
<p className="text-tertiary text-base lg:text-lg leading-relaxed">
  Texto descriptivo de sección.
</p>
```

Para cards:

```tsx
<p className="text-tertiary text-sm leading-relaxed">
  Texto breve de apoyo.
</p>
```

---

## 3. Header de Sección

No usar badges, pills o eyebrows como patrón obligatorio.

### Header estándar sobre fondo claro

```tsx
<div className="text-center mb-12">
  <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4 leading-tight">
    Título de la sección <span className="text-secondary">destacado</span>
  </h2>

  <p className="text-tertiary text-lg max-w-2xl mx-auto leading-relaxed">
    Descripción breve que explique el valor de la sección.
  </p>
</div>
```

### Header estándar sobre fondo oscuro

```tsx
<div className="text-center mb-12">
  <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
    Título de la sección <span className="text-secondary">destacado</span>
  </h2>

  <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
    Descripción breve que explique el valor de la sección.
  </p>
</div>
```

### Variación alineada a la izquierda

Usar cuando la sección tenga layout de dos columnas o contenido más técnico.

```tsx
<div className="mb-10">
  <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4 leading-tight">
    Título de la sección <span className="text-secondary">destacado</span>
  </h2>

  <p className="text-tertiary text-lg max-w-2xl leading-relaxed">
    Descripción de apoyo.
  </p>
</div>
```

---

## 4. Espaciado y Contenedores

### Padding estándar

```tsx
<section className="w-full py-16 lg:py-24">
```

### Contenedor principal

```tsx
<div className="max-w-7xl mx-auto px-6">
```

### Casos especiales

| Caso                            | Clase                           |
| ------------------------------- | ------------------------------- |
| Sección compacta                | `py-12 lg:py-16`                |
| Sección estándar                | `py-16 lg:py-24`                |
| Sección de alto impacto         | `py-20 lg:py-28`                |
| Sección con elemento desbordado | `pt-16 lg:pt-24 pb-24 lg:pb-40` |

### Reglas de espaciado

* Mantener aire visual entre bloques.
* Evitar secciones demasiado densas.
* No usar padding excesivo solo para alargar la página.
* Si una sección tiene poco contenido, usar `py-12 lg:py-16`.

---

## 5. Botones y CTAs

Los CTAs deben ser claros, sólidos y consistentes.

### CTA principal sobre fondo claro

```tsx
<Link
  href="/ruta"
  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3 rounded-xs hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md"
>
  Solicitar diagnóstico
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
  </svg>
</Link>
```

### CTA principal sobre fondo oscuro

```tsx
<Link
  href="/ruta"
  className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-3 rounded-xs hover:bg-white hover:text-primary transition-all duration-300 shadow-md"
>
  Contactar especialista
</Link>
```

### CTA secundario / ghost

Permitido únicamente en:

* Navbar
* Hero
* Acciones secundarias
* Grupos con dos botones

```tsx
<Link
  href="/ruta"
  className="inline-flex items-center gap-2 border border-white/30 text-white font-bold px-8 py-3 rounded-xs hover:bg-white hover:text-primary transition-all duration-300"
>
  Ver servicios
</Link>
```

### Reglas de botones

* Usar `rounded-xs` en CTAs.
* Usar `font-bold`.
* Usar `transition-all duration-300`.
* Usar botones sólidos para acciones principales.
* No usar gradientes en botones.
* No abusar de múltiples CTAs en una misma sección.
* La flecha se usa solo cuando el CTA navega a otra página o sección.

---

## 6. Cards

### Card base

```tsx
<div className="group flex flex-col bg-white rounded-sm border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl transition-all duration-300">
  <div className="flex flex-col flex-1 p-6 gap-4">
    <h3 className="font-bold text-primary text-base leading-snug">
      Título de card
    </h3>

    <p className="text-tertiary text-sm leading-relaxed">
      Descripción breve.
    </p>
  </div>
</div>
```

### Reglas de cards

* Usar `rounded-sm`.
* Evitar `rounded-lg`, `rounded-xl` y `rounded-2xl`.
* Usar `border border-gray-100`.
* Hover permitido: sombra + cambio sutil de borde.
* Evitar demasiados efectos al mismo tiempo.
* No combinar en la misma card: scale, overlay, cambio de color, sombra, línea animada y movimiento.

### Card con imagen

```tsx
<div className="group relative flex flex-col bg-white rounded-sm border border-gray-100 hover:border-secondary/40 hover:shadow-xl overflow-hidden transition-all duration-300">
  <div className="relative w-full h-48 overflow-hidden">
    <Image
      src="..."
      alt="..."
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
    <div className="absolute inset-0 bg-primary/30" />
  </div>

  <div className="flex-1 p-6">
    <h3 className="font-bold text-primary text-base leading-snug mb-2">
      Título
    </h3>

    <p className="text-tertiary text-sm leading-relaxed">
      Descripción.
    </p>
  </div>
</div>
```

---

## 7. Ritmo Visual de Fondos

No es obligatorio alternar fondos en cada sección.

### Fondos permitidos

| Fondo          | Uso                                              |
| -------------- | ------------------------------------------------ |
| `bg-white`     | Contenido principal                              |
| `bg-gray-50`   | Listados, cards o separación suave               |
| `bg-gray-100`  | Bloques secundarios o contexto informativo       |
| `bg-primary`   | Secciones de impacto, tecnología o cierre        |
| `bg-black`     | Solo `ContactForm`                               |
| `bg-tertiary`  | Excepción documentada para secciones específicas |
| `bg-secondary` | Solo secciones especiales justificadas           |

### Reglas

* Cambiar fondo solo si ayuda a separar contexto.
* Se permiten dos secciones blancas consecutivas si hay buena separación visual.
* No alternar fondos de forma mecánica.
* Evitar que todas las secciones parezcan módulos independientes sin relación.
* Usar `bg-primary` con moderación para que mantenga impacto.

---

## 8. Imágenes y Recursos Visuales

Las páginas de servicio deben ser visualmente ricas, pero no todas las secciones necesitan una fotografía.

### Regla general

Cada sección debe tener al menos un apoyo visual relevante cuando aporte valor.

Puede ser:

* Imagen
* Diagrama
* KPI
* Ícono técnico
* Gráfico
* Timeline
* Captura del sistema
* Ilustración funcional

No usar imágenes decorativas solo para cumplir una regla visual.

### Imagen con Next/Image

```tsx
<div className="relative w-full h-48">
  <Image
    src="/images/servicios/ejemplo.webp"
    alt="Descripción clara de la imagen"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

### Imagen placeholder

Usar placeholder solo mientras se consigue la imagen final.

```tsx
{/* TODO: Replace placeholder with photo of technician performing vibration analysis on industrial equipment */}
<div className="relative w-full h-48 overflow-hidden">
  <Image
    src="/images/servicios/placeholder.jpg"
    alt="Técnico realizando análisis de vibraciones en equipo industrial"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

### Overlays recomendados

| Contexto                          | Overlay                           |
| --------------------------------- | --------------------------------- |
| Imagen decorativa con texto fuera | `bg-primary/20`                   |
| Card con imagen                   | `bg-primary/30`                   |
| Texto encima de imagen            | `bg-primary/50` a `bg-primary/60` |
| CTA final con imagen de fondo     | `overlayOpacity={0.70}` a `0.80`  |

---

## 9. Glows y Decoraciones de Fondo

Los glows no deben usarse en todas las secciones.

### Uso recomendado

Permitidos en:

* Hero
* CTA final
* Sección de tecnología
* Secciones de alto impacto

Evitar en:

* Listados simples
* Cards repetitivas
* Secciones informativas
* Bloques donde distraigan del contenido

### Glow sobre fondo claro

```tsx
<section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
  <div className="absolute -top-32 -left-32 w-125 h-125 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* contenido */}
  </div>
</section>
```

### Glow sobre fondo oscuro

```tsx
<section className="w-full bg-primary py-16 lg:py-24 relative overflow-hidden">
  <div className="absolute top-1/4 left-1/3 w-150 h-150 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* contenido */}
  </div>
</section>
```

### Reglas

* Máximo uno o dos glows por sección.
* No usar glows en cada bloque.
* No usar glows que afecten la legibilidad.
* El glow debe sentirse ambiental, no protagonista.

---

## 10. Grid Layout

### Dos columnas

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
```

### Tres columnas

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
```

### Cuatro columnas

```tsx
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
```

### Cards responsivas

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Reglas

* Usar `gap-6` para grids de cards.
* Usar `gap-10` o `gap-12` para layouts de imagen + texto.
* Evitar columnas demasiado estrechas con mucho texto.
* En móvil, priorizar lectura antes que densidad visual.

---

## 11. KPIs y Datos Técnicos

Los KPIs deben reforzar confianza y experiencia.

```tsx
<div className="border-l-2 border-secondary pl-4">
  <span className="block text-2xl font-extrabold text-secondary">
    +20 años
  </span>
  <span className="block text-xs uppercase tracking-wider text-tertiary">
    Experiencia
  </span>
</div>
```

### Sobre fondo oscuro

```tsx
<div className="border-l-2 border-secondary pl-4">
  <span className="block text-2xl font-extrabold text-secondary">
    24/7
  </span>
  <span className="block text-xs uppercase tracking-wider text-white/80">
    Monitoreo continuo
  </span>
</div>
```

### Reglas

* Usar KPIs solo si el dato es real o defendible.
* No inventar métricas.
* Evitar saturar una sección con demasiados números.
* Máximo 3 o 4 KPIs por bloque.

---

## 12. Accesibilidad

### Contraste

* Sobre `bg-primary`, usar `text-white` o `text-white/80`.
* Evitar `text-white/60` para párrafos.
* Evitar texto naranja pequeño sobre fondo blanco si no tiene suficiente contraste.
* No usar texto gris claro sobre fondos claros.

### Imágenes

* Toda imagen informativa debe tener `alt` descriptivo.
* Imágenes decorativas pueden usar `alt=""`.
* No usar imágenes de fondo como único medio para transmitir información importante.

### Interacción

* Los botones deben tener área clickeable cómoda.
* No depender solo del hover para comunicar información.
* Los estados hover no sustituyen estados focus.
* Mantener navegación clara en teclado.

---

## 13. Animaciones e Interacciones

Las animaciones deben ser sutiles y funcionales.

### Permitido

* `transition-all duration-300`
* Cambio de color en hover
* Sombra progresiva
* Ligero scale en imagen
* Movimiento sutil de ícono

### Evitar

* Animaciones excesivas en todas las cards.
* Efectos tipo ripple.
* Parallax pesado.
* Animaciones que retrasen la lectura.
* Múltiples efectos simultáneos en el mismo elemento.

### Regla práctica

Una card puede tener máximo dos efectos principales:

* sombra + borde
* imagen scale + sombra
* color de título + borde

No usar todos al mismo tiempo.

---

## 14. Estructura Recomendada de una Sección Nueva

```tsx
import Link from "next/link";

export default function NuevaSeccion() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4 leading-tight">
            Título de la sección <span className="text-secondary">destacado</span>
          </h2>

          <p className="text-tertiary text-lg max-w-2xl mx-auto leading-relaxed">
            Descripción breve y clara de la sección.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Cards o contenido principal */}
        </div>

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

## 15. Checklist de Revisión

Antes de hacer merge de una nueva sección, revisar:

* [ ] ¿La sección tiene una intención clara?
* [ ] ¿El contenido aporta algo nuevo?
* [ ] ¿El título comunica valor sin depender de frases genéricas?
* [ ] ¿No usa badges, pills o eyebrows innecesarios?
* [ ] ¿El h2 usa `text-primary` sobre fondo claro o `text-white` sobre fondo oscuro?
* [ ] ¿El texto secundario tiene contraste suficiente?
* [ ] ¿El padding es coherente con la importancia de la sección?
* [ ] ¿El contenedor usa `max-w-7xl mx-auto px-6`?
* [ ] ¿Las cards usan `rounded-sm`?
* [ ] ¿Los CTAs principales son sólidos?
* [ ] ¿Los botones usan `rounded-xs`?
* [ ] ¿Los colores usan tokens?
* [ ] ¿Las imágenes tienen `alt` correcto?
* [ ] ¿Las animaciones son sutiles?
* [ ] ¿El fondo cambia solo cuando aporta separación o contexto?
* [ ] ¿La sección se ve profesional y no como plantilla genérica?

---

## 16. Qué Evitar

| Elemento                          | Evitar                                            |
| --------------------------------- | ------------------------------------------------- |
| Badges / eyebrows                 | No usarlos como patrón obligatorio                |
| Títulos en mayúsculas             | No forzar uppercase en headings                   |
| Bordes redondos grandes           | Evitar `rounded-xl`, `rounded-2xl`, `rounded-3xl` |
| Gradientes en botones             | Usar sólidos                                      |
| Glows en todas las secciones      | Solo en bloques de impacto                        |
| Imágenes decorativas irrelevantes | Usar visuales que aporten contexto                |
| Fondos alternados mecánicamente   | Cambiar fondo solo con intención                  |
| Textos largos centrados           | Usar texto centrado solo en headers breves        |
| Exceso de hover effects           | Máximo dos efectos principales                    |
| Hex hardcoded                     | Usar tokens de marca                              |

---

## 17. Identidad Visual

El sitio debe sentirse:

* Industrial
* Técnico
* Confiable
* Moderno
* Limpio
* Corporativo
* Orientado a diagnóstico y mantenimiento predictivo

No debe sentirse:

* Genérico
* Excesivamente SaaS
* Como plantilla generada por IA
* Demasiado decorativo
* Saturado de efectos visuales

La prioridad visual es comunicar experiencia técnica, claridad y confianza.
