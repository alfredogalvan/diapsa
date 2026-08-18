## 📝 Instrucciones para Commit y Deploy

### 1️⃣ Verificar cambios
```bash
git status
git diff next.config.ts
```

### 2️⃣ Agregar archivos al stage
```bash
# Solo el archivo de configuración es necesario para producción
git add next.config.ts

# Opcional: agregar documentación y scripts de prueba
git add REDIRECTS_CURSOS_CONFIRMACION.md
git add RESUMEN_REDIRECTS_301.md
git add test-redirects.js
git add test-redirects-live.sh
```

### 3️⃣ Commit con mensaje descriptivo
```bash
git commit -m "feat(seo): add 301 redirects for 9 course URLs with -2 suffix

- Implement regex pattern to redirect /cursos/*-2 -> /cursos/*
- Covers 9 duplicate course URLs that were returning 404
- Preserves SEO juice from old URLs
- Includes both with and without trailing slash variants
- Add comprehensive documentation and validation scripts

Affected URLs:
- alineamiento-balanceo-proactivo-2
- incremento-de-la-confiabilidad-monitoreo-de-condicion-2
- termografia-infrarroja-curso-de-certificacion-2
- curso-de-inspeccion-termografica-en-plantas-fotovoltaicas-2
- inspeccion-termografica-en-plantas-fotovoltaicas-2
- curso-tecnico-especializado-termografia-2
- taller-de-aprendizaje-practico-de-vibraciones-2
- redaccion-de-informes-tecnicos-2
- talleres-de-aprendizaje-practico-de-ultrasonido-2

Status: 301 (permanent redirect)
Branch: seo/cursos-metadata-jsonld-redirects"
```

### 4️⃣ Push al repositorio
```bash
git push origin seo/cursos-metadata-jsonld-redirects
```

### 5️⃣ Reiniciar servidor para aplicar cambios

**Desarrollo:**
```bash
npm run dev
# o
yarn dev
```

**Producción:**
```bash
npm run build
npm start
# o si usas PM2
pm2 restart diapsa-frontend
```

### 6️⃣ Probar los redirects

**Opción 1: Script de validación lógica**
```bash
node test-redirects.js
```

**Opción 2: Prueba HTTP en vivo**
```bash
./test-redirects-live.sh http://localhost:3000
```

**Opción 3: Curl manual**
```bash
curl -I http://localhost:3000/cursos/alineamiento-balanceo-proactivo-2
# Debe devolver: HTTP/1.1 301 Moved Permanently
# Location: /cursos/alineamiento-balanceo-proactivo
```

**Opción 4: Navegador**
Abre cualquiera de las 9 URLs con sufijo `-2` y verifica que redirige automáticamente.

### 7️⃣ Verificar en producción (después del deploy)
```bash
curl -I https://grupodiapsa.com.mx/cursos/alineamiento-balanceo-proactivo-2
```

### 8️⃣ Actualizar Search Console (opcional)
Si estas URLs están indexadas en Google:
1. Ir a Google Search Console
2. Verificar que los redirects se detecten
3. Solicitar reindexación si es necesario

---

## 🎯 Checklist Final

- [ ] Código commiteado al branch `seo/cursos-metadata-jsonld-redirects`
- [ ] Servidor reiniciado
- [ ] Redirects probados localmente (9/9 funcionando)
- [ ] Pull request creado (si aplica)
- [ ] Merge a main/master aprobado
- [ ] Deploy a producción ejecutado
- [ ] Redirects verificados en producción
- [ ] Search Console actualizado

---

**Fecha de implementación:** 18 de agosto de 2026  
**Desarrollador:** Hermes Agent  
**Ticket/Issue:** Redirects 301 para URLs duplicadas de cursos
