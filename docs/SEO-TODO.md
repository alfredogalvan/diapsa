# SEO To Do List

This checklist comes from the current project audit. It is grouped so we can start with any section first instead of forcing the highest-impact technical fixes as step one.

## Pick A Starting Section

- [x] Semantic HTML improvements
- [x] Product/category SEO
- [ ] Sitemap and crawler files
- [ ] Structured data
- [ ] OpenGraph and social previews
- [ ] Content and keyword opportunities
- [ ] Search Console and verification

## Semantic HTML Improvements

- [X] Update `components/organisms/PageHeader.tsx` to use a semantic `<header>` for page hero content.
- [x] Keep the page title as a single visible `<h1>` per page.
- [x] Wrap product cards in `<article>` elements in `components/molecules/ProductCard.tsx`.
- [x] Use a semantic heading inside each product card, ideally the product name.
- [x] Convert product specifications in `components/organisms/ProductDetails.tsx` to `<dl>`, `<dt>`, and `<dd>`.
- [x] Add ARIA tab semantics to the product detail tabs: `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, and `role="tabpanel"`.
- [x] Group sections in `components/organisms/ContactFormProduct.tsx` with `<fieldset>` and `<legend>`.
- [x] Review icon-only or visual controls for accessible names.

## Product And Category SEO

- [x] Add `metadata` or `generateMetadata` to `app/productos/page.tsx`.
- [x] Add `generateMetadata` to `app/productos/[categoria]/page.tsx`.
- [x] Move initial category data loading from client-only `useEffect` to server-side fetching where practical.
- [x] Move initial product list data loading for category pages to the server where practical.
- [x] Keep filtering, search, and pagination as client components after the initial crawlable content is rendered.
- [x] Fix product detail canonical URL in `app/productos/[categoria]/[producto]/page.tsx`.
- [x] Fix product detail OpenGraph URL in `app/productos/[categoria]/[producto]/page.tsx`.
- [x] Use the full route format for product pages: `/productos/[categoria]/[producto]`.
- [x] Add internal links from product details to related categories, related products, and relevant services.

## Sitemap And Crawler Files

- [ ] Add `/productos` to `app/sitemap.ts`.
- [ ] Add product category URLs to `app/sitemap.ts`.
- [ ] Add product detail URLs to `app/sitemap.ts` if the CMS API can provide them at build/runtime.
- [ ] Add `/contacto` to `app/sitemap.ts`.
- [ ] Add `/casos-exito` and case detail pages to `app/sitemap.ts`.
- [ ] Add missing service pages such as `/servicios/deteccion-gas`, `/servicios/diagnostico-situacional`, `/servicios/diapsa-start`, `/servicios/idap`, and `/servicios/monitoreo-continuo`.
- [ ] Remove `/blog/[slug]` sitemap entries until a matching blog route exists.
- [ ] Use stable `lastModified` values from content/API data instead of `new Date()` for every route when possible.
- [ ] Confirm `robots.ts` points to the production sitemap URL.

## Structured Data

- [x] Fix JSON-LD logo URLs to point to real public assets.
- [ ] Make `createProductSchema` handle absolute image URLs without prefixing the site domain twice.
- [ ] Add `BreadcrumbList` schema to category pages.
- [ ] Add `ItemList` schema to product listing and category pages.
- [ ] Add `Service` schema to individual service pages.
- [ ] Add `FAQPage` schema only where FAQ content is visible on the page.
- [ ] Add more accurate `LocalBusiness` data: real address, phone, service area, opening hours, social profiles, and coordinates.
- [ ] Validate JSON-LD in Google's Rich Results Test after implementation.

## OpenGraph And Social Previews

- [x] Create `public/images/og-image.jpg` at 1200x630.
- [ ] Confirm the global OpenGraph image path in `app/layout.tsx` resolves in production.
- [ ] Add product-specific OpenGraph images using the main product image.
- [ ] Add category-specific OpenGraph titles and descriptions.
- [ ] Confirm Twitter card image URLs are absolute or resolve correctly with `metadataBase`.

## Content And Keyword Opportunities

- [ ] Build or improve pages around high-intent queries:
  - [ ] cámaras termograficas industriales
  - [ ] mantenimiento predictivo industrial en Mexico
  - [ ] analisis de vibraciones para maquinaria
  - [ ] termografía infrarroja industrial
  - [ ] monitoreo de condición
  - [ ] detección de fugas de gas con camara acustica
- [ ] Add short, useful intro copy to product categories.
- [ ] Add comparison/use-case sections for important product families.
- [ ] Add FAQs to major service and product category pages.
- [ ] Link services to relevant products and products to relevant services.
- [ ] Review page titles to keep them specific, commercial, and under typical SERP truncation length.
- [ ] Review meta descriptions for clear value proposition and search intent.

## Search Console And Verification

- [ ] Verify `grupodiapsa.com` in Google Search Console.
- [ ] Add Google verification metadata in `app/layout.tsx`.
- [ ] Submit `https://grupodiapsa.com/sitemap.xml`.
- [ ] Monitor coverage issues for non-indexed product/category pages.
- [ ] Track queries and impressions for product/service pages after release.

## Suggested Implementation Order

1. Start with the section you prefer.
2. If starting from technical SEO, begin with product canonical URLs and missing metadata.
3. If starting from semantic HTML, begin with `PageHeader`, `ProductCard`, `ProductDetails`, and `ContactFormProduct`.
4. If starting from indexation, begin with `sitemap.ts` cleanup and missing routes.
5. If starting from content, begin with product category copy and service/product internal links.
