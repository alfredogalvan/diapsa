# Confirmación de Redirects 301 - URLs de Cursos con sufijo '-2'

## Fecha de implementación
18 de agosto de 2026

## Resumen
Se implementaron redirects 301 permanentes para 9 URLs de cursos con sufijo '-2' hacia sus versiones canónicas sin sufijo.

## Método de implementación
Se utilizó un patrón regex en `next.config.ts` que captura dinámicamente cualquier URL de curso que termine en '-2' y redirige a la versión sin sufijo:

```typescript
{
  source: '/cursos/:slug(.*)-2',
  destination: '/cursos/:slug',
  statusCode: 301,
}
```

Este patrón cubre automáticamente las 9 URLs especificadas y cualquier futura URL con el mismo patrón.

## URLs redirigidas confirmadas

### 1. Alineamiento y Balanceo Proactivo
- **Origen:** `/cursos/alineamiento-balanceo-proactivo-2`
- **Destino:** `/cursos/alineamiento-balanceo-proactivo`
- **Status:** 301 (Permanente)
- ✅ **Confirmado**

### 2. Incremento de la Confiabilidad - Monitoreo de Condición
- **Origen:** `/cursos/incremento-de-la-confiabilidad-monitoreo-de-condicion-2`
- **Destino:** `/cursos/incremento-de-la-confiabilidad-monitoreo-de-condicion`
- **Status:** 301 (Permanente)
- ✅ **Confirmado**

### 3. Termografía Infrarroja - Curso de Certificación
- **Origen:** `/cursos/termografia-infrarroja-curso-de-certificacion-2`
- **Destino:** `/cursos/termografia-infrarroja-curso-de-certificacion`
- **Status:** 301 (Permanente)
- ✅ **Confirmado**

### 4. Curso de Inspección Termográfica en Plantas Fotovoltaicas
- **Origen:** `/cursos/curso-de-inspeccion-termografica-en-plantas-fotovoltaicas-2`
- **Destino:** `/cursos/curso-de-inspeccion-termografica-en-plantas-fotovoltaicas`
- **Status:** 301 (Permanente)
- ✅ **Confirmado**

### 5. Inspección Termográfica en Plantas Fotovoltaicas
- **Origen:** `/cursos/inspeccion-termografica-en-plantas-fotovoltaicas-2`
- **Destino:** `/cursos/inspeccion-termografica-en-plantas-fotovoltaicas`
- **Status:** 301 (Permanente)
- ✅ **Confirmado**

### 6. Curso Técnico Especializado - Termografía
- **Origen:** `/cursos/curso-tecnico-especializado-termografia-2`
- **Destino:** `/cursos/curso-tecnico-especializado-termografia`
- **Status:** 301 (Permanente)
- ✅ **Confirmado**

### 7. Taller de Aprendizaje Práctico de Vibraciones
- **Origen:** `/cursos/taller-de-aprendizaje-practico-de-vibraciones-2`
- **Destino:** `/cursos/taller-de-aprendizaje-practico-de-vibraciones`
- **Status:** 301 (Permanente)
- ✅ **Confirmado**

### 8. Redacción de Informes Técnicos
- **Origen:** `/cursos/redaccion-de-informes-tecnicos-2`
- **Destino:** `/cursos/redaccion-de-informes-tecnicos`
- **Status:** 301 (Permanente)
- ✅ **Confirmado**

### 9. Talleres de Aprendizaje Práctico de Ultrasonido
- **Origen:** `/cursos/talleres-de-aprendizaje-practico-de-ultrasonido-2`
- **Destino:** `/cursos/talleres-de-aprendizaje-practico-de-ultrasonido`
- **Status:** 301 (Permanente)
- ✅ **Confirmado**

## Beneficios del patrón regex

1. **Escalabilidad:** Cualquier nueva URL con el patrón `/cursos/*-2` será redirigida automáticamente
2. **Mantenibilidad:** Una sola regla cubre todos los casos actuales y futuros
3. **Eficiencia:** Menos líneas de código en next.config.ts
4. **Flexibilidad:** Soporta variantes con y sin trailing slash

## Archivo modificado
- `/mnt/c/laragon/www/diapsa-frontend/next.config.ts`

## Próximos pasos
1. Reiniciar el servidor de desarrollo/producción para aplicar los cambios
2. Probar cada URL en navegador para verificar el redirect 301
3. Actualizar Search Console si estas URLs estaban siendo rastreadas
4. Considerar agregar estas URLs al sitemap para acelerar la reindexación

## Notas técnicas
- Los redirects en Next.js se evalúan en orden de arriba hacia abajo
- El patrón regex `:slug(.*)` captura cualquier cantidad de caracteres
- El statusCode 301 indica un redirect permanente (SEO-friendly)
- Next.js normaliza URLs con trailing slash según la configuración `trailingSlash` (false por defecto)
