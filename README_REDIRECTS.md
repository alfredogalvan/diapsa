# 📚 Índice de Documentación - Redirects 301 Cursos

> Implementación de redirects permanentes para 9 URLs de cursos con sufijo '-2'  
> **Fecha:** 18 de agosto de 2026  
> **Branch:** `seo/cursos-metadata-jsonld-redirects`

---

## 📄 Documentos Generados

### 1. **RESUMEN_REDIRECTS_301.md** (3.2K)
**Descripción:** Resumen ejecutivo con tabla de las 9 URLs confirmadas  
**Para quién:** Product Owners, Project Managers, SEO Team  
**Contiene:**
- Tabla de URLs origen → destino
- Características técnicas
- Impacto SEO
- Próximos pasos

### 2. **REDIRECTS_CURSOS_CONFIRMACION.md** (3.9K)
**Descripción:** Documentación detallada técnica  
**Para quién:** Desarrolladores, DevOps  
**Contiene:**
- Descripción completa de cada redirect (9 entradas)
- Patrón regex explicado
- Beneficios del enfoque utilizado
- Notas técnicas sobre Next.js

### 3. **INSTRUCCIONES_COMMIT.md** (3.1K)
**Descripción:** Guía paso a paso para commit y deploy  
**Para quién:** Desarrolladores  
**Contiene:**
- Comandos git completos
- Mensaje de commit pre-escrito
- Instrucciones de testing
- Checklist final

### 4. **test-redirects.js** (3.1K)
**Descripción:** Script de validación de lógica de redirects  
**Para quién:** Desarrolladores, QA  
**Uso:**
```bash
node test-redirects.js
```
**Output:** Resultado de 9 tests con indicadores ✅/❌

### 5. **test-redirects-live.sh** (1.9K)
**Descripción:** Script bash para probar redirects HTTP en servidor vivo  
**Para quién:** DevOps, QA  
**Uso:**
```bash
./test-redirects-live.sh http://localhost:3000
```
**Output:** Verificación HTTP de cada URL con códigos de estado

---

## 🔧 Archivo Principal Modificado

### **next.config.ts**
**Líneas modificadas:** 50-102  
**Cambios:**
- ✅ Agregadas 2 reglas de redirect con patrón regex
- ✅ Comentarios explicativos
- ✅ Mantiene redirects anteriores intactos

**Patrón implementado:**
```typescript
{
  source: '/cursos/:slug(.*)-2',
  destination: '/cursos/:slug',
  statusCode: 301,
}
```

---

## 🎯 Flujo de Uso Recomendado

### Para Desarrolladores:
1. Lee **RESUMEN_REDIRECTS_301.md** para contexto
2. Revisa cambios en **next.config.ts**
3. Ejecuta `node test-redirects.js` para validar
4. Sigue **INSTRUCCIONES_COMMIT.md** para commit
5. Ejecuta `./test-redirects-live.sh` después de reiniciar servidor

### Para QA:
1. Lee **RESUMEN_REDIRECTS_301.md** 
2. Ejecuta ambos scripts de testing
3. Verifica las 9 URLs manualmente en navegador
4. Confirma código HTTP 301 con DevTools

### Para SEO/Product:
1. Lee **RESUMEN_REDIRECTS_301.md**
2. Verifica tabla de URLs confirmadas
3. Revisa impacto SEO
4. Actualiza Search Console si necesario

---

## ✅ Validación Completada

**Test de lógica:** ✅ 9/9 aprobados  
**Sintaxis TypeScript:** ✅ Sin errores en next.config.ts  
**Documentación:** ✅ 5 archivos generados  

---

## 📊 URLs Cubiertas (Quick Reference)

| # | Slug |
|---|------|
| 1 | alineamiento-balanceo-proactivo |
| 2 | incremento-de-la-confiabilidad-monitoreo-de-condicion |
| 3 | termografia-infrarroja-curso-de-certificacion |
| 4 | curso-de-inspeccion-termografica-en-plantas-fotovoltaicas |
| 5 | inspeccion-termografica-en-plantas-fotovoltaicas |
| 6 | curso-tecnico-especializado-termografia |
| 7 | taller-de-aprendizaje-practico-de-vibraciones |
| 8 | redaccion-de-informes-tecnicos |
| 9 | talleres-de-aprendizaje-practico-de-ultrasonido |

**Patrón:** Todas con sufijo `-2` redirigen a versión sin sufijo

---

## 🚀 Estado del Proyecto

- ✅ **Código:** Implementado y validado
- ⏳ **Commit:** Pendiente
- ⏳ **Deploy:** Pendiente
- ⏳ **Verificación en producción:** Pendiente

---

**Directorio:** `/mnt/c/laragon/www/diapsa-frontend`  
**Proyecto:** DIAPSA Frontend (Next.js 16.1)  
**Contacto:** [Tu información de contacto]
