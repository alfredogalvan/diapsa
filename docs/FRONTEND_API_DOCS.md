# API Documentation - Frontend Team

> Documentación para consumir la API pública de Grupo Diapsa desde aplicaciones frontend.

## 📋 Índice

- [Información General](#información-general)
- [API de Productos](#api-de-productos)
- [API de Categorías](#api-de-categorías)
- [API de Marcas](#api-de-marcas)
- [API de Series](#api-de-series)
- [API de Cursos](#api-de-cursos)
- [API de Publicaciones](#api-de-publicaciones)
- [API de Contactos](#api-de-contactos)
- [Manejo de Errores](#manejo-de-errores)
- [Ejemplos de Uso](#ejemplos-de-uso)

---

## Información General

### Base URL

```
http://cms.grupodiapsa.com.mx/api/v1
```

### Formato de Respuesta

Todas las respuestas de la API están en formato JSON y siguen el estándar de Laravel API Resources.

### Autenticación

Las rutas de esta API son **públicas** y no requieren autenticación.

### Rate Limiting

- **Productos**: Sin límite
- **Contactos**: 5 requests por minuto por IP

---

## API de Productos

### 1. Listar Productos

Lista todos los productos activos con paginación.

**Endpoint:**
```
GET /api/v1/products
```

**Query Parameters:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `category` | string | No | Filtrar por slug de categoría |
| `brand` | string | No | Filtrar por slug de marca |
| `series` | string | No | Filtrar por slug de serie |
| `per_page` | integer | No | Resultados por página (default: 15) |
| `page` | integer | No | Número de página (default: 1) |

**Ejemplo de Request:**
```bash
GET /api/v1/products?category=compresores&brand=atlas-copco&per_page=20&page=1
```

**Ejemplo de Response:**
```json
{
  "data": [
    {
      "id": 1,
      "slug": "compresor-ga-30",
      "model": "GA 30",
      "name": "Compresor GA 30 Atlas Copco",
      "short_description": "Compresor de tornillo rotativo de 30 HP",
      "availability_status": "Disponible",
      "featured": true,
      "is_new": false,
      "main_image": "https://cms.grupodiapsa.com.mx/storage/products/ga-30-main.jpg",
      "category": {
        "id": 5,
        "slug": "compresores",
        "name": "Compresores"
      },
      "brand": {
        "id": 2,
        "slug": "atlas-copco",
        "name": "Atlas Copco"
      },
      "featured_specs": [
        {
          "label": "Potencia",
          "value": "30",
          "unit": "HP"
        },
        {
          "label": "Presión máxima",
          "value": "145",
          "unit": "PSI"
        }
      ]
    }
  ],
  "links": {
    "first": "http://cms.grupodiapsa.com.mx/api/v1/products?page=1",
    "last": "http://cms.grupodiapsa.com.mx/api/v1/products?page=5",
    "prev": null,
    "next": "http://cms.grupodiapsa.com.mx/api/v1/products?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 5,
    "per_page": 15,
    "to": 15,
    "total": 73
  }
}
```

### 2. Detalle de Producto

Obtiene información completa de un producto específico.

**Endpoint:**
```
GET /api/v1/products/{slug}
```

**Parámetros de URL:**

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slug` | string | Slug único del producto |

**Ejemplo de Request:**
```bash
GET /api/v1/products/compresor-ga-30
```

**Ejemplo de Response:**
```json
{
  "data": {
    "id": 1,
    "slug": "compresor-ga-30",
    "model": "GA 30",
    "name": "Compresor GA 30 Atlas Copco",
    "short_description": "Compresor de tornillo rotativo de 30 HP",
    "description": "El compresor GA 30 es una solución eficiente...",
    "availability_status": "Disponible",
    "featured": true,
    "is_new": false,
    "category": {
      "id": 5,
      "slug": "compresores",
      "name": "Compresores"
    },
    "subcategory": {
      "id": 12,
      "slug": "compresores-tornillo",
      "name": "Compresores de Tornillo"
    },
    "brand": {
      "id": 2,
      "slug": "atlas-copco",
      "name": "Atlas Copco",
      "logo": "https://cms.grupodiapsa.com.mx/storage/brands/atlas-copco.png"
    },
    "series": {
      "id": 8,
      "slug": "ga-series",
      "name": "GA Series"
    },
    "images": [
      {
        "id": 1,
        "url": "https://cms.grupodiapsa.com.mx/storage/products/ga-30-1.jpg",
        "alt": "Compresor GA 30 - Vista frontal",
        "type": "main"
      },
      {
        "id": 2,
        "url": "https://cms.grupodiapsa.com.mx/storage/products/ga-30-2.jpg",
        "alt": "Compresor GA 30 - Vista lateral",
        "type": "gallery"
      }
    ],
    "specifications": [
      {
        "group": "Características Técnicas",
        "items": [
          {
            "label": "Potencia",
            "value": "30",
            "unit": "HP",
            "featured": true
          },
          {
            "label": "Presión máxima",
            "value": "145",
            "unit": "PSI",
            "featured": true
          },
          {
            "label": "Capacidad",
            "value": "120",
            "unit": "CFM",
            "featured": false
          }
        ]
      },
      {
        "group": "Dimensiones",
        "items": [
          {
            "label": "Largo",
            "value": "1800",
            "unit": "mm",
            "featured": false
          },
          {
            "label": "Ancho",
            "value": "900",
            "unit": "mm",
            "featured": false
          }
        ]
      }
    ],
    "documents": [
      {
        "id": 1,
        "type": "manual",
        "name": "Manual de Usuario GA 30",
        "url": "https://cms.grupodiapsa.com.mx/storage/documents/ga-30-manual.pdf",
        "language": "es"
      },
      {
        "id": 2,
        "type": "datasheet",
        "name": "Ficha Técnica GA 30",
        "url": "https://cms.grupodiapsa.com.mx/storage/documents/ga-30-datasheet.pdf",
        "language": "es"
      }
    ],
    "related_products": [
      {
        "id": 2,
        "slug": "compresor-ga-37",
        "model": "GA 37",
        "name": "Compresor GA 37 Atlas Copco",
        "short_description": "Compresor de tornillo rotativo de 37 HP",
        "main_image": "https://cms.grupodiapsa.com.mx/storage/products/ga-37.jpg",
        "brand": {
          "id": 2,
          "slug": "atlas-copco",
          "name": "Atlas Copco"
        }
      }
    ],
    "seo": {
      "title": "Compresor GA 30 Atlas Copco - Grupo Diapsa",
      "description": "Compresor de tornillo rotativo GA 30 de Atlas Copco. Eficiencia energética y confiabilidad para tu industria."
    }
  }
}
```

### 3. Buscar Productos

Busca productos por nombre, modelo o descripción.

**Endpoint:**
```
GET /api/v1/products/search
```

**Query Parameters:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `q` | string | Sí | Término de búsqueda (mín: 2, máx: 100 caracteres) |
| `per_page` | integer | No | Resultados por página (default: 15) |
| `page` | integer | No | Número de página (default: 1) |

**Ejemplo de Request:**
```bash
GET /api/v1/products/search?q=compresor%20atlas
```

**Response:** Mismo formato que "Listar Productos"

### 4. Productos Destacados

Obtiene hasta 12 productos marcados como destacados.

**Endpoint:**
```
GET /api/v1/products/featured
```

**Parámetros:** Ninguno

**Ejemplo de Request:**
```bash
GET /api/v1/products/featured
```

**Response:** Mismo formato que "Listar Productos" pero sin paginación

---

## API de Categorías

### 1. Listar Categorías

Lista todas las categorías raíz activas con sus subcategorías (estructura jerárquica).

**Endpoint:**
```
GET /api/v1/categories
```

**Parámetros:** Ninguno

**Ejemplo de Request:**
```bash
GET /api/v1/categories
```

**Ejemplo de Response:**
```json
{
  "data": [
    {
      "id": 5,
      "slug": "compresores",
      "name": "Compresores",
      "description": "Soluciones completas en aire comprimido",
      "icon": "compressor-icon.svg",
      "image": "https://cms.grupodiapsa.com.mx/storage/categories/compresores.jpg",
      "level": 0,
      "products_count": 45,
      "children": [
        {
          "id": 12,
          "slug": "compresores-tornillo",
          "name": "Compresores de Tornillo",
          "description": "Compresores de tornillo rotativo",
          "icon": null,
          "image": null,
          "level": 1,
          "products_count": 23
        },
        {
          "id": 13,
          "slug": "compresores-piston",
          "name": "Compresores de Pistón",
          "description": "Compresores alternativos de pistón",
          "icon": null,
          "image": null,
          "level": 1,
          "products_count": 15
        }
      ],
      "seo": {
        "title": "Compresores de Aire - Grupo Diapsa",
        "description": "Encuentra la mejor solución en compresores de aire para tu industria"
      }
    },
    {
      "id": 8,
      "slug": "generadores",
      "name": "Generadores",
      "description": "Energía confiable cuando más la necesitas",
      "icon": "generator-icon.svg",
      "image": "https://cms.grupodiapsa.com.mx/storage/categories/generadores.jpg",
      "level": 0,
      "products_count": 28,
      "children": [],
      "seo": {
        "title": "Generadores de Energía - Grupo Diapsa",
        "description": "Generadores industriales y residenciales de alta calidad"
      }
    }
  ]
}
```

### 2. Detalle de Categoría

Obtiene información completa de una categoría específica, incluyendo su padre (si existe) y sus subcategorías.

**Endpoint:**
```
GET /api/v1/categories/{slug}
```

**Parámetros de URL:**

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slug` | string | Slug único de la categoría |

**Ejemplo de Request:**
```bash
GET /api/v1/categories/compresores
```

**Ejemplo de Response:**
```json
{
  "data": {
    "id": 5,
    "slug": "compresores",
    "name": "Compresores",
    "description": "Soluciones completas en aire comprimido para aplicaciones industriales. Ofrecemos compresores de tornillo, pistón y otros tipos para satisfacer todas tus necesidades.",
    "icon": "compressor-icon.svg",
    "image": "https://cms.grupodiapsa.com.mx/storage/categories/compresores.jpg",
    "level": 0,
    "parent": null,
    "products_count": 45,
    "children": [
      {
        "id": 12,
        "slug": "compresores-tornillo",
        "name": "Compresores de Tornillo",
        "description": "Compresores de tornillo rotativo para alta eficiencia",
        "icon": null,
        "image": null,
        "level": 1,
        "products_count": 23
      },
      {
        "id": 13,
        "slug": "compresores-piston",
        "name": "Compresores de Pistón",
        "description": "Compresores alternativos de pistón",
        "icon": null,
        "image": null,
        "level": 1,
        "products_count": 15
      },
      {
        "id": 14,
        "slug": "compresores-libres-aceite",
        "name": "Compresores Libres de Aceite",
        "description": "Aire 100% libre de aceite para industrias críticas",
        "icon": null,
        "image": null,
        "level": 1,
        "products_count": 7
      }
    ],
    "seo": {
      "title": "Compresores de Aire Industriales - Grupo Diapsa",
      "description": "Encuentra la mejor solución en compresores de aire para tu industria. Tornillo, pistón y libres de aceite."
    }
  }
}
```

**Ejemplo de Response (Subcategoría con Padre):**
```json
{
  "data": {
    "id": 12,
    "slug": "compresores-tornillo",
    "name": "Compresores de Tornillo",
    "description": "Compresores de tornillo rotativo de alta eficiencia energética",
    "icon": null,
    "image": "https://cms.grupodiapsa.com.mx/storage/categories/compresores-tornillo.jpg",
    "level": 1,
    "parent": {
      "id": 5,
      "slug": "compresores",
      "name": "Compresores"
    },
    "products_count": 23,
    "children": [],
    "seo": {
      "title": "Compresores de Tornillo Rotativo - Grupo Diapsa",
      "description": "Compresores de tornillo de las mejores marcas. Eficiencia energética y confiabilidad garantizada."
    }
  }
}
```

---

## API de Marcas

### 1. Listar Marcas

Lista todas las marcas activas ordenadas por orden de visualización.

**Endpoint:**
```
GET /api/v1/brands
```

**Parámetros:** Ninguno

**Ejemplo de Request:**
```bash
GET /api/v1/brands
```

**Ejemplo de Response:**
```json
{
  "data": [
    {
      "id": 2,
      "slug": "atlas-copco",
      "name": "Atlas Copco",
      "logo": "https://cms.grupodiapsa.com.mx/storage/brands/atlas-copco.png",
      "website": "https://www.atlascopco.com",
      "products_count": 67
    },
    {
      "id": 5,
      "slug": "sullair",
      "name": "Sullair",
      "logo": "https://cms.grupodiapsa.com.mx/storage/brands/sullair.png",
      "website": "https://www.sullair.com",
      "products_count": 34
    },
    {
      "id": 8,
      "slug": "kohler",
      "name": "Kohler",
      "logo": "https://cms.grupodiapsa.com.mx/storage/brands/kohler.png",
      "website": "https://www.kohlerpower.com",
      "products_count": 28
    }
  ]
}
```

### 2. Detalle de Marca

Obtiene información completa de una marca específica, incluyendo sus series activas.

**Endpoint:**
```
GET /api/v1/brands/{slug}
```

**Parámetros de URL:**

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slug` | string | Slug único de la marca |

**Ejemplo de Request:**
```bash
GET /api/v1/brands/atlas-copco
```

**Ejemplo de Response:**
```json
{
  "data": {
    "id": 2,
    "slug": "atlas-copco",
    "name": "Atlas Copco",
    "logo": "https://cms.grupodiapsa.com.mx/storage/brands/atlas-copco.png",
    "website": "https://www.atlascopco.com",
    "products_count": 67,
    "series": [
      {
        "id": 8,
        "slug": "ga-series",
        "name": "GA Series",
        "description": "Compresores de tornillo rotativo de velocidad fija",
        "image": "https://cms.grupodiapsa.com.mx/storage/series/ga-series.jpg",
        "brand": {
          "id": 2,
          "slug": "atlas-copco",
          "name": "Atlas Copco"
        },
        "category": {
          "id": 12,
          "slug": "compresores-tornillo",
          "name": "Compresores de Tornillo"
        },
        "products_count": 15
      },
      {
        "id": 9,
        "slug": "vsd-plus-series",
        "name": "VSD⁺ Series",
        "description": "Compresores de velocidad variable con tecnología VSD⁺",
        "image": "https://cms.grupodiapsa.com.mx/storage/series/vsd-plus.jpg",
        "brand": {
          "id": 2,
          "slug": "atlas-copco",
          "name": "Atlas Copco"
        },
        "category": {
          "id": 12,
          "slug": "compresores-tornillo",
          "name": "Compresores de Tornillo"
        },
        "products_count": 12
      }
    ]
  }
}
```

---

## API de Series

### 1. Listar Series

Lista todas las series activas con sus marcas y categorías asociadas.

**Endpoint:**
```
GET /api/v1/series
```

**Query Parameters:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `brand` | string | No | Filtrar por slug de marca |
| `category` | string | No | Filtrar por slug de categoría |

**Ejemplo de Request (Sin Filtros):**
```bash
GET /api/v1/series
```

**Ejemplo de Request (Con Filtros):**
```bash
GET /api/v1/series?brand=atlas-copco&category=compresores-tornillo
```

**Ejemplo de Response:**
```json
{
  "data": [
    {
      "id": 8,
      "slug": "ga-series",
      "name": "GA Series",
      "description": "Compresores de tornillo rotativo de velocidad fija para aplicaciones industriales",
      "image": "https://cms.grupodiapsa.com.mx/storage/series/ga-series.jpg",
      "brand": {
        "id": 2,
        "slug": "atlas-copco",
        "name": "Atlas Copco"
      },
      "category": {
        "id": 12,
        "slug": "compresores-tornillo",
        "name": "Compresores de Tornillo"
      },
      "products_count": 15
    },
    {
      "id": 9,
      "slug": "vsd-plus-series",
      "name": "VSD⁺ Series",
      "description": "Compresores de velocidad variable con tecnología VSD⁺ para máximo ahorro energético",
      "image": "https://cms.grupodiapsa.com.mx/storage/series/vsd-plus.jpg",
      "brand": {
        "id": 2,
        "slug": "atlas-copco",
        "name": "Atlas Copco"
      },
      "category": {
        "id": 12,
        "slug": "compresores-tornillo",
        "name": "Compresores de Tornillo"
      },
      "products_count": 12
    }
  ]
}
```

### 2. Detalle de Serie

Obtiene información completa de una serie específica.

**Endpoint:**
```
GET /api/v1/series/{slug}
```

**Parámetros de URL:**

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slug` | string | Slug único de la serie |

**Ejemplo de Request:**
```bash
GET /api/v1/series/ga-series
```

**Ejemplo de Response:**
```json
{
  "data": {
    "id": 8,
    "slug": "ga-series",
    "name": "GA Series",
    "description": "Los compresores GA Series son compresores de tornillo rotativo de velocidad fija diseñados para ofrecer confiabilidad y eficiencia en aplicaciones industriales. Con un diseño robusto y tecnología probada, son la elección ideal para operaciones continuas.",
    "image": "https://cms.grupodiapsa.com.mx/storage/series/ga-series.jpg",
    "brand": {
      "id": 2,
      "slug": "atlas-copco",
      "name": "Atlas Copco"
    },
    "category": {
      "id": 12,
      "slug": "compresores-tornillo",
      "name": "Compresores de Tornillo"
    },
    "products_count": 15
  }
}
```

---

## API de Cursos

### 1. Listar Cursos

Lista todos los cursos disponibles con paginación.

**Endpoint:**
```
GET /api/v1/courses
```

**Query Parameters:**

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `courseType` | string | No | Filtrar por tipo de curso (slug) |
| `per_page` | integer | No | Resultados por página (default: 15) |
| `page` | integer | No | Número de página (default: 1) |

**Ejemplo de Request:**
```bash
GET /api/v1/courses?courseType=certificates&per_page=20&page=1
```

**Ejemplo de Response:**
```json
{
  "data": [
    {
      "id": "1",
      "name": "Análisis de Vibraciones Nivel I",
      "slug": "analisis-vibraciones-nivel-1",
      "description": "Curso de introducción al análisis de vibraciones mecánicas según norma ISO 18436-2.",
      "provider": "Grupo DIAPSA",
      "next_date": "2024-06-15",
      "duration": 40,
      "modality": "Presencial",
      "icon": "vibration",
      "reference_norm": "ISO 18436-2",
      "alt_img": "Curso de análisis de vibraciones",
      "url_img": "https://cms.grupodiapsa.com.mx/storage/courses/vibraciones-nivel-1.jpg",
      "category": {
        "id": "1",
        "name": "Certificaciones",
        "slug": "certificates"
      }
    }
  ],
  "links": {
    "first": "http://cms.grupodiapsa.com.mx/api/v1/courses?page=1",
    "last": "http://cms.grupodiapsa.com.mx/api/v1/courses?page=3",
    "prev": null,
    "next": "http://cms.grupodiapsa.com.mx/api/v1/courses?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 3,
    "per_page": 15,
    "to": 15,
    "total": 42
  }
}
```

### 2. Detalle de Curso

Obtiene información completa de un curso específico.

**Endpoint:**
```
GET /api/v1/courses/{slug}
```

**Parámetros de URL:**

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slug` | string | Slug único del curso |

**Ejemplo de Request:**
```bash
GET /api/v1/courses/analisis-vibraciones-nivel-1
```

**Ejemplo de Response:**
```json
{
  "data": {
    "id": "1",
    "name": "Análisis de Vibraciones Nivel I",
    "slug": "analisis-vibraciones-nivel-1",
    "description": "Curso de introducción al análisis de vibraciones mecánicas.",
    "objective": "Formar técnicos capacitados en el análisis básico de vibraciones mecánicas.",
    "specific_objectives": [
      "Comprender los fundamentos de las vibraciones mecánicas",
      "Identificar problemas comunes en maquinaria rotativa",
      "Utilizar analizadores de vibraciones"
    ],
    "methodology": "Curso teórico-práctico con sesiones en laboratorio.",
    "syllabus": "1. Fundamentos de vibraciones\n2. Instrumentación\n3. Análisis de señales\n4. Diagnóstico",
    "duration": 40,
    "modality": "Presencial",
    "requirements": [
      "Conocimientos básicos de mecánica",
      "Estudios mínimos de preparatoria o equivalente"
    ],
    "certification": "Certificado de participación emitido por Grupo DIAPSA",
    "graduate_profile": "Técnico capaz de realizar análisis de vibraciones nivel I según ISO 18436-2",
    "technical_specification": "Incluye manual, material de laboratorio y equipo de medición",
    "provider": "Grupo DIAPSA",
    "next_date": "2024-06-15",
    "icon": "vibration",
    "reference_norm": "ISO 18436-2",
    "alt_img": "Curso de análisis de vibraciones",
    "url_img": "https://cms.grupodiapsa.com.mx/storage/courses/vibraciones-nivel-1.jpg",
    "category": {
      "id": "1",
      "name": "Certificaciones",
      "slug": "certificates"
    }
  }
}
```

### 3. Próximo Curso

Obtiene el próximo curso disponible (con fecha más cercana).

**Endpoint:**
```
GET /api/v1/courses/next
```

**Ejemplo de Request:**
```bash
GET /api/v1/courses/next
```

**Response:** Mismo formato que "Detalle de Curso"

### 4. Categorías de Cursos

Lista todas las categorías de cursos disponibles.

**Endpoint:**
```
GET /api/v1/course-categories
```

**Ejemplo de Response:**
```json
{
  "data": [
    {
      "id": "1",
      "name": "Certificaciones",
      "slug": "certificates"
    },
    {
      "id": "2",
      "name": "Talleres",
      "slug": "workshops"
    },
    {
      "id": "3",
      "name": "Cursos Estratégicos",
      "slug": "strategics"
    }
  ]
}
```

### 5. Detalle de Categoría de Curso

Obtiene información de una categoría específica.

**Endpoint:**
```
GET /api/v1/course-categories/{slug}
```

**Parámetros de URL:**

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| `slug` | string | Slug único de la categoría |

**Ejemplo de Request:**
```bash
GET /api/v1/course-categories/certificates
```

**Ejemplo de Response:**
```json
{
  "data": {
    "id": "1",
    "name": "Certificaciones",
    "slug": "certificates"
  }
}
```

---

## API de Publicaciones

La tabla `posts` se consume publicamente por tipo de contenido. No existe un endpoint publico generico `/posts`; cada superficie debe usar su endpoint especifico.

**Implementacion frontend:**

| Archivo | Descripcion |
|---------|-------------|
| `lib/api/posts.ts` | Funciones para consumir anuncios, casos de exito y blogs destacados |
| `types/post.ts` | Tipos `Post`, `Announcement`, `SuccessCase` y `Blog` |

### 1. Listar Anuncios

Lista anuncios publicados y vigentes. Un anuncio vigente es aquel cuyo `end_date` esta vacio o es mayor/igual a la fecha actual del servidor.

**Endpoint:**
```
GET /api/v1/announcements
```

**Query Parameters:**

| Parametro | Tipo | Requerido | Descripcion |
|-----------|------|-----------|-------------|
| `limit` | integer | No | Limita la cantidad de anuncios devueltos |

**Funcion API:**
```typescript
import { getAnnouncements } from '@/lib/api/posts';

const announcements = await getAnnouncements({ limit: 3 });
```

**Hook disponible:**
```typescript
import { useAnnouncements } from '@/lib/hooks/useAnnouncements';

const { announcements, loading, error, refetch } = useAnnouncements({ limit: 3 });
```

**Ejemplo de Request:**
```bash
GET /api/v1/announcements?limit=3
```

**Ejemplo de Response:**
```json
{
  "data": [
    {
      "id": 1,
      "slug": "webinar-mantenimiento-predictivo",
      "title": "Webinar de Mantenimiento Predictivo",
      "excerpt": "Aprende como reducir fallas no planeadas con monitoreo de condicion.",
      "content": "Contenido del anuncio...",
      "cover_image": "announcements/webinar-mantenimiento.jpg",
      "featured": true,
      "published_at": "2026-06-01T10:00:00.000000Z",
      "announcement": {
        "badge": "Webinar",
        "start_date": "2026-06-10",
        "end_date": "2026-07-10",
        "url": "https://grupodiapsa.com.mx/webinar",
        "button_text": "Registrarme"
      },
      "seo": {
        "title": "Webinar de Mantenimiento Predictivo - Grupo Diapsa",
        "description": "Webinar para equipos de mantenimiento industrial."
      }
    }
  ]
}
```

### 2. Anuncios Destacados

Obtiene anuncios destacados para home, heroes, carruseles o bloques promocionales.

**Endpoint:**
```
GET /api/v1/announcements/featured
```

**Parametros:** Ninguno

**Funcion API:**
```typescript
import { getFeaturedAnnouncements } from '@/lib/api/posts';

const announcements = await getFeaturedAnnouncements();
```

**Hook disponible:**
```typescript
import { useFeaturedAnnouncements } from '@/lib/hooks/useFeaturedAnnouncements';

const { announcements, loading, error, refetch } = useFeaturedAnnouncements();
```

**Ejemplo de Request:**
```bash
GET /api/v1/announcements/featured
```

**Response:** Mismo formato que "Listar Anuncios" sin paginacion.

### 3. Detalle de Anuncio

Obtiene el detalle de un anuncio por `slug`.

**Endpoint:**
```
GET /api/v1/announcements/{slug}
```

**Parametros de URL:**

| Parametro | Tipo | Descripcion |
|-----------|------|-------------|
| `slug` | string | Slug unico del anuncio |

**Funcion API:**
```typescript
import { getAnnouncementBySlug } from '@/lib/api/posts';

const announcement = await getAnnouncementBySlug('webinar-mantenimiento-predictivo');
```

**Hook disponible:**
```typescript
import { useAnnouncementDetail } from '@/lib/hooks/useAnnouncementDetail';

const { announcement, loading, error, notFound, refetch } =
  useAnnouncementDetail('webinar-mantenimiento-predictivo');
```

**Ejemplo de Request:**
```bash
GET /api/v1/announcements/webinar-mantenimiento-predictivo
```

**Response:** Mismo objeto individual de "Listar Anuncios".

### 4. Listar Casos de Exito

Lista casos de exito publicados.

**Endpoint:**
```
GET /api/v1/success-cases
```

**Query Parameters:**

| Parametro | Tipo | Requerido | Descripcion |
|-----------|------|-----------|-------------|
| `limit` | integer | No | Limita la cantidad de casos devueltos |

**Funcion API:**
```typescript
import { getSuccessCases } from '@/lib/api/posts';

const successCases = await getSuccessCases({ limit: 6 });
```

**Hook disponible:**
```typescript
import { useSuccessCases } from '@/lib/hooks/useSuccessCases';

const { successCases, loading, error, refetch } = useSuccessCases({ limit: 6 });
```

**Ejemplo de Request:**
```bash
GET /api/v1/success-cases?limit=6
```

**Ejemplo de Response:**
```json
{
  "data": [
    {
      "id": 1,
      "slug": "monitoreo-predictivo-generacion-energia",
      "title": "Monitoreo predictivo en generacion de energia",
      "excerpt": "Caso de exito sobre reduccion de paros no planeados.",
      "content": "Contenido del caso de exito...",
      "cover_image": "success-cases/generacion-energia.jpg",
      "featured": true,
      "published_at": "2026-06-01T10:00:00.000000Z",
      "success_case": {
        "industry": "Generacion de energia",
        "service": "Monitoreo de condicion",
        "introduction": "Contexto inicial del proyecto.",
        "challenge": "Reto operativo del cliente.",
        "results": "Resultados obtenidos.",
        "economic_impact": "Impacto economico estimado.",
        "conclusion": "Conclusion del caso.",
        "stages": [
          {
            "id": 1,
            "stage_label": "Etapa 1",
            "title": "Diagnostico",
            "description": "Levantamiento inicial de informacion.",
            "sort_order": 1
          }
        ]
      },
      "seo": {
        "title": "Monitoreo predictivo en generacion de energia - Grupo Diapsa",
        "description": "Caso de exito de monitoreo predictivo industrial."
      }
    }
  ]
}
```

**Nota sobre etapas:**
- Si la vista necesita garantizar el orden visual de las etapas, ordenar `success_case.stages` por `sort_order`.

### 5. Casos de Exito Destacados

Obtiene casos de exito destacados para home o secciones de prueba social.

**Endpoint:**
```
GET /api/v1/success-cases/featured
```

**Parametros:** Ninguno

**Funcion API:**
```typescript
import { getFeaturedSuccessCases } from '@/lib/api/posts';

const successCases = await getFeaturedSuccessCases();
```

**Hook disponible:**
```typescript
import { useFeaturedSuccessCases } from '@/lib/hooks/useFeaturedSuccessCases';

const { successCases, loading, error, refetch } = useFeaturedSuccessCases();
```

**Ejemplo de Request:**
```bash
GET /api/v1/success-cases/featured
```

**Response:** Mismo formato que "Listar Casos de Exito" sin paginacion.

### 6. Detalle de Caso de Exito

Obtiene el detalle de un caso de exito por `slug`.

**Endpoint:**
```
GET /api/v1/success-cases/{slug}
```

**Parametros de URL:**

| Parametro | Tipo | Descripcion |
|-----------|------|-------------|
| `slug` | string | Slug unico del caso de exito |

**Funcion API:**
```typescript
import { getSuccessCaseBySlug } from '@/lib/api/posts';

const successCase = await getSuccessCaseBySlug(
  'monitoreo-predictivo-generacion-energia'
);
```

**Hook disponible:**
```typescript
import { useSuccessCaseDetail } from '@/lib/hooks/useSuccessCaseDetail';

const { successCase, loading, error, notFound, refetch } =
  useSuccessCaseDetail('monitoreo-predictivo-generacion-energia');
```

**Ejemplo de Request:**
```bash
GET /api/v1/success-cases/monitoreo-predictivo-generacion-energia
```

**Response:** Mismo objeto individual de "Listar Casos de Exito".

### 7. Blogs Destacados

Actualmente la API publica expone solo entradas destacadas de blog. Usar este endpoint para home o secciones editoriales.

**Endpoint:**
```
GET /api/v1/blogs/featured
```

**Parametros:** Ninguno

**Funcion API:**
```typescript
import { getFeaturedBlogs } from '@/lib/api/posts';

const blogs = await getFeaturedBlogs();
```

**Hook disponible:**
```typescript
import { useFeaturedBlogs } from '@/lib/hooks/useFeaturedBlogs';

const { blogs, loading, error, refetch } = useFeaturedBlogs();
```

**Ejemplo de Request:**
```bash
GET /api/v1/blogs/featured
```

**Ejemplo de Response:**
```json
{
  "data": [
    {
      "id": 1,
      "slug": "guia-mantenimiento-predictivo",
      "title": "Guia de mantenimiento predictivo",
      "excerpt": "Conceptos clave para empezar con mantenimiento predictivo.",
      "content": {
        "type": "doc",
        "content": []
      },
      "cover_image": "blogs/guia-mantenimiento-predictivo.jpg",
      "featured": true,
      "published_at": "2026-06-01T10:00:00.000000Z",
      "seo": {
        "title": "Guia de mantenimiento predictivo - Grupo Diapsa",
        "description": "Articulo destacado sobre mantenimiento predictivo."
      }
    }
  ]
}
```

**Notas de consumo:**
- El campo `content` de blog puede venir como documento JSON, no siempre como texto plano.
- El campo `cover_image` puede ser una ruta relativa. Resolverla con `getStorageUrl` desde `lib/api/config.ts` cuando se necesite una URL absoluta.
- Los hooks de contenido destacado usan cache en memoria por 5 minutos, siguiendo el patron de `useFeaturedProducts`.
- Los hooks de detalle exponen `notFound` para manejar respuestas `404`.

---

## API de Contactos

### Crear Contacto

Crea un nuevo registro de contacto desde formularios públicos (contacto general, expo, webinar).

**Endpoint:**
```
POST /api/v1/contacts
```

**Headers:**
```
Content-Type: application/json
Accept: application/json
```

**Rate Limit:** 5 requests por minuto por IP

**Body Parameters:**

| Parámetro | Tipo | Requerido | Descripción | Validación |
|-----------|------|-----------|-------------|------------|
| `name` | string | Sí | Nombre completo | Max: 255. Solo letras, espacios, guiones y puntos |
| `email` | string | Sí | Email | Max: 255. Formato RFC válido |
| `phone` | string | No | Teléfono | Max: 50. Solo números, +, -, espacios, paréntesis |
| `company` | string | No | Empresa | Max: 255 |
| `country` | string | No | País | Max: 100 |
| `form_type` | string | Sí | Tipo de formulario | Valores: `general`, `expo`, `webinar`, `gas`, `products` |
| `utm_source` | string | No | UTM Source | Max: 100 |
| `utm_medium` | string | No | UTM Medium | Max: 100 |
| `utm_campaign` | string | No | UTM Campaign | Max: 255 |
| `custom_fields` | object | No | Campos personalizados | Max: 10 campos. Cada valor max: 500 caracteres |
| `website` | string | No | **Honeypot** - debe estar vacío | Si tiene valor, la request falla |

**Tipos de Formulario (form_type):**

|   Valor   | Descripción | Custom Fields Sugeridos |
|-----------|-------------|-------------------------|
| `general` | Contacto general | Ninguno específico |
| `expo`    | Registro de exposición | `booth_number`, `event_name`, `event_date` |
| `webinar` | Registro de webinar | `webinar_title`, `webinar_date`, `attendance_confirmed` |
| `gas`     | Informacion Servicio gas | `subject`,`message` |
| `products` | Solicitud de información de producto | `sector`, `sector_otro`, `problem_to_resolve`, `purchase_stage`, `job_title`, `product`, `brand`, `category` |

**Ejemplo de Request (Contacto General):**
```bash
POST /api/v1/contacts
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan.perez@example.com",
  "phone": "+52 55 1234 5678",
  "company": "Industrias ABC S.A.",
  "country": "México",
  "form_type": "general",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "compresores-2025",
  "custom_fields": {
    "message": "Me interesa conocer más sobre compresores de aire",
    "preferred_contact": "email"
  },
  "website": ""
}
```

**Ejemplo de Request (Expo):**
```json
{
  "name": "María González",
  "email": "maria.gonzalez@empresa.com",
  "phone": "+52 81 9876 5432",
  "company": "Tech Solutions",
  "country": "México",
  "form_type": "expo",
  "custom_fields": {
    "booth_number": "A-123",
    "event_name": "Expo Industrial 2025",
    "event_date": "2025-03-15"
  },
  "website": ""
}
```

**Ejemplo de Request (Webinar):**
```json
{
  "name": "Carlos Ramírez",
  "email": "carlos.ramirez@correo.com",
  "phone": "+52 33 5555 1234",
  "form_type": "webinar",
  "custom_fields": {
    "webinar_title": "Eficiencia Energética en Compresores",
    "webinar_date": "2025-02-20",
    "attendance_confirmed": "yes"
  },
  "website": ""
}
```

**Ejemplo de Request (Producto):**
```json
{
  "name": "Ana López",
  "email": "ana.lopez@industrias.com",
  "phone": "+52 55 8765 4321",
  "company": "Industrias Manufactureras del Norte",
  "form_type": "products",
  "custom_fields": {
    "sector": "Manufactura",
    "problem_to_resolve": "Necesitamos optimizar nuestro sistema de aire comprimido para reducir costos de energía",
    "purchase_stage": "Evaluando Proveedores",
    "job_title": "Gerente de Mantenimiento",
    "product": "Compresor GA 30 Atlas Copco",
    "brand": "Atlas Copco",
    "category": "Compresores"
  },
  "website": ""
}
```

**Nota sobre el formulario de productos:**
- Los campos `phone` y `company` son **obligatorios** para el formulario de productos.
- El campo `sector` es obligatorio. Si el valor es "Otro", se debe incluir `sector_otro` con la especificación.
- Los campos `problem_to_resolve`, `purchase_stage` y `job_title` son obligatorios.
- Los campos `product`, `brand` y `category` son opcionales y se utilizan cuando el usuario solicita información de un producto específico.

**Ejemplo de Response (Success - 201):**
```json
{
  "data": {
    "id": 42,
    "name": "Juan Pérez",
    "email": "juan.perez@example.com",
    "phone": "+52 55 1234 5678",
    "company": "Industrias ABC S.A.",
    "country": "México",
    "form_type": "general",
    "status": "new",
    "custom_fields": {
      "message": "Me interesa conocer más sobre compresores de aire",
      "preferred_contact": "email"
    },
    "created_at": "2025-01-29T10:30:00.000000Z"
  }
}
```

---

## Manejo de Errores

### Códigos de Estado HTTP

| Código | Significado | Cuándo ocurre |
|--------|-------------|---------------|
| 200 | OK | Request exitoso (GET) |
| 201 | Created | Recurso creado exitosamente (POST) |
| 400 | Bad Request | Datos inválidos o faltantes |
| 404 | Not Found | Recurso no encontrado |
| 422 | Unprocessable Entity | Errores de validación |
| 429 | Too Many Requests | Rate limit excedido |
| 500 | Internal Server Error | Error del servidor |

### Formato de Error de Validación (422)

```json
{
  "message": "El correo electrónico es obligatorio. (and 1 more error)",
  "errors": {
    "email": [
      "El correo electrónico es obligatorio."
    ],
    "phone": [
      "El teléfono solo puede contener números, espacios y caracteres +, -, (), ()."
    ]
  }
}
```

### Error de Rate Limit (429)

```json
{
  "message": "Too Many Requests"
}
```

**Headers de respuesta:**
```
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 0
Retry-After: 60
```

---

## Ejemplos de Uso

### JavaScript (Fetch API)

#### Listar Productos con Filtros
```javascript
async function fetchProducts(filters = {}) {
  const params = new URLSearchParams(filters);
  
  try {
    const response = await fetch(
      `http://cms.grupodiapsa.com.mx/api/v1/products?${params}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

// Uso
fetchProducts({ 
  category: 'compresores', 
  brand: 'atlas-copco',
  per_page: 20 
})
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### Obtener Detalle de Producto
```javascript
async function fetchProductDetail(slug) {
  try {
    const response = await fetch(
      `http://cms.grupodiapsa.com.mx/api/v1/products/${slug}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Producto no encontrado');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data; // Devolver solo el producto
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
}

// Uso
fetchProductDetail('compresor-ga-30')
  .then(product => console.log(product))
  .catch(error => console.error(error));
```

#### Buscar Productos
```javascript
async function searchProducts(query, page = 1) {
  try {
    const response = await fetch(
      `http://cms.grupodiapsa.com.mx/api/v1/products/search?q=${encodeURIComponent(query)}&page=${page}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
}

// Uso
searchProducts('compresor atlas')
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### Enviar Formulario de Contacto
```javascript
async function submitContactForm(formData) {
  try {
    const response = await fetch(
      'http://cms.grupodiapsa.com.mx/api/v1/contacts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Manejar errores de validación (422)
      if (response.status === 422) {
        throw new ValidationError(data.message, data.errors);
      }
      // Manejar rate limit (429)
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After');
        throw new RateLimitError(`Rate limit excedido. Reintentar en ${retryAfter} segundos.`);
      }
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data.data; // Devolver el contacto creado
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw error;
  }
}

// Clases de error personalizadas
class ValidationError extends Error {
  constructor(message, errors) {
    super(message);
    this.name = 'ValidationError';
    this.errors = errors;
  }
}

class RateLimitError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RateLimitError';
  }
}

// Uso
const contactData = {
  name: 'Juan Pérez',
  email: 'juan.perez@example.com',
  phone: '+52 55 1234 5678',
  company: 'Industrias ABC',
  country: 'México',
  form_type: 'general',
  custom_fields: {
    message: 'Me interesa conocer más sobre sus productos'
  },
  website: '' // Honeypot - siempre vacío
};

submitContactForm(contactData)
  .then(contact => {
    console.log('Contacto creado:', contact);
    // Mostrar mensaje de éxito al usuario
  })
  .catch(error => {
    if (error instanceof ValidationError) {
      // Mostrar errores de validación en el formulario
      console.log('Errores de validación:', error.errors);
    } else if (error instanceof RateLimitError) {
      // Mostrar mensaje de rate limit
      console.log('Rate limit excedido');
    } else {
      // Error genérico
      console.log('Error al enviar formulario');
    }
  });
```

### React + TypeScript

#### Hook para Productos
```typescript
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  slug: string;
  model: string;
  name: string;
  short_description: string;
  availability_status: string;
  featured: boolean;
  is_new: boolean;
  main_image: string | null;
  category: {
    id: number;
    slug: string;
    name: string;
  };
  brand: {
    id: number;
    slug: string;
    name: string;
  };
}

interface ProductsResponse {
  data: Product[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
}

function useProducts(filters: Record<string, any> = {}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [meta, setMeta] = useState<ProductsResponse['meta'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams(filters);
        const response = await fetch(
          `http://cms.grupodiapsa.com.mx/api/v1/products?${params}`,
          {
            headers: { 'Accept': 'application/json' },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ProductsResponse = await response.json();
        setProducts(data.data);
        setMeta(data.meta);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error desconocido'));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [JSON.stringify(filters)]);

  return { products, meta, loading, error };
}

export default useProducts;
```

#### Hook para Formulario de Contacto
```typescript
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  form_type: 'general' | 'expo' | 'webinar';
  custom_fields?: Record<string, string>;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  website?: string; // Honeypot
}

interface ValidationErrors {
  [key: string]: string[];
}

function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);

  const submitContact = async (formData: ContactFormData) => {
    setLoading(true);
    setSuccess(false);
    setErrors({});
    setRateLimitExceeded(false);

    try {
      const response = await fetch('http://cms.grupodiapsa.com.mx/api/v1/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          website: '', // Asegurar honeypot vacío
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 422) {
          // Errores de validación
          setErrors(data.errors || {});
          return { success: false, errors: data.errors };
        }

        if (response.status === 429) {
          // Rate limit excedido
          setRateLimitExceeded(true);
          return { success: false, rateLimited: true };
        }

        throw new Error(data.message || 'Error al enviar formulario');
      }

      setSuccess(true);
      return { success: true, data: data.data };
    } catch (error) {
      console.error('Error submitting contact:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setErrors({});
    setRateLimitExceeded(false);
  };

  return {
    submitContact,
    loading,
    success,
    errors,
    rateLimitExceeded,
    resetForm,
  };
}

export default useContactForm;
```

#### Componente de Formulario de Contacto
```typescript
import React, { useState } from 'react';
import useContactForm from './useContactForm';

function ContactForm() {
  const { submitContact, loading, success, errors, rateLimitExceeded } = useContactForm();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    form_type: 'general' as const,
    custom_fields: {
      message: ''
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await submitContact(formData);
      
      if (result.success) {
        // Limpiar formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          country: '',
          form_type: 'general',
          custom_fields: { message: '' }
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'message') {
      setFormData(prev => ({
        ...prev,
        custom_fields: { ...prev.custom_fields, message: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  if (success) {
    return (
      <div className="success-message">
        ¡Gracias por contactarnos! Nos comunicaremos contigo pronto.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <span className="error">{errors.name[0]}</span>}
      </div>

      <div>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email[0]}</span>}
      </div>

      <div>
        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span className="error">{errors.phone[0]}</span>}
      </div>

      <div>
        <label htmlFor="company">Empresa</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.custom_fields.message}
          onChange={handleChange}
          rows={4}
        />
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="website"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {rateLimitExceeded && (
        <div className="error-message">
          Has excedido el límite de envíos. Por favor, espera un minuto antes de intentar nuevamente.
        </div>
      )}

      <button type="submit" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}

export default ContactForm;
```

---

## Notas Importantes

### Seguridad

1. **Honeypot Field**: Siempre incluye el campo `website` vacío en los formularios de contacto. Es una medida anti-spam.

2. **Rate Limiting**: Los formularios de contacto tienen límite de 5 envíos por minuto por IP. Implementa mensajes claros cuando se exceda.

3. **Validación Client-Side**: Aunque la API valida, implementa validación en el frontend para mejor UX.

### Performance

1. **Paginación**: Usa `per_page` apropiado para tu UI (default: 15). No excedas 100.

2. **Caché**: Considera cachear respuestas de productos destacados y categorías en el frontend.

3. **Eager Loading**: La API ya incluye relaciones cargadas. No hagas múltiples requests para obtener datos relacionados.

### SEO

1. Los campos `seo.title` y `seo.description` del detalle de producto deben usarse para meta tags.

2. Las URLs usan slugs amigables - úsalos en tu routing.

### UTM Tracking

Captura parámetros UTM de la URL y envíalos en formularios de contacto:
```javascript
const params = new URLSearchParams(window.location.search);
const utmParams = {
  utm_source: params.get('utm_source'),
  utm_medium: params.get('utm_medium'),
  utm_campaign: params.get('utm_campaign'),
};
```

---

## Soporte

Para preguntas o problemas con la API, contacta al equipo de backend.

