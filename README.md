# CÓNDOR — Joyería & Relojería (landing page)

Landing en **Astro**, lista para desplegar en **Netlify** o **Vercel**.

## 1. Instalar y correr en local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## 2. Antes de publicar — reemplaza estos datos

Todo el contenido de ejemplo está marcado con comentarios `REEMPLAZAR` o
`⚠️` en el código. En resumen:

| Qué | Dónde |
|---|---|
| Número de WhatsApp (`51999999999`) | `Header.astro`, `Hero.astro`, `FeaturedProducts.astro`, `WatchmakingService.astro`, `FinalCta.astro`, `WhatsAppButton.astro` |
| Dirección, teléfono y horarios | `StoreLocation.astro`, `Footer.astro`, y el JSON-LD en `Layout.astro` |
| Redes sociales | `Footer.astro` y `sameAs` en `Layout.astro` |
| Dominio final (`condorjoyeria.pe`) | `astro.config.mjs` y `public/robots.txt` |
| Reseñas (son contenido de ejemplo) | `GoogleReviews.astro` — reemplázalas al conectar la API de Google |
| Fotografías | `public/images/` — ver `public/images/README.txt` con los nombres exactos esperados |
| Imagen para redes (Open Graph) | agrega `public/og-image.jpg` (1200×630px) |

El diseño está construido para que las fotografías reales sean protagonistas
(el brief lo pide explícitamente), así que el paso más importante antes de
publicar es reemplazar los placeholders de `public/images/`.

## 3. Desplegar en Netlify

1. Sube este proyecto a un repositorio de GitHub/GitLab.
2. En Netlify: **Add new site → Import an existing project**.
3. Build command: `npm run build` — Publish directory: `dist` (ya está en `netlify.toml`).
4. Netlify detecta Astro automáticamente.

## 4. Desplegar en Vercel

1. Sube el proyecto a un repositorio.
2. En Vercel: **Add New Project** → selecciona el repo.
3. Vercel detecta Astro automáticamente (framework preset "Astro").
   No necesitas configuración adicional para este sitio, ya que es 100% estático.

## 5. Estructura

```text
src/
  layouts/Layout.astro       Head, SEO, JSON-LD, variables CSS globales
  components/                Un componente .astro por sección
  pages/index.astro          Ensamblador principal
public/
  robots.txt, favicon.svg, images/
astro.config.mjs             Dominio + sitemap
netlify.toml                 Build + headers de seguridad/caché
```

## 6. SEO ya incluido

- Un solo `<h1>` (en el Hero), jerarquía `<h2>`/`<h3>` sin saltos.
- JSON-LD `JewelryStore` con dirección, horarios, teléfono y coordenadas.
- Meta title/description, canonical, Open Graph y Twitter Card.
- `sitemap.xml` autogenerado por `@astrojs/sitemap` (requiere que
  `site` en `astro.config.mjs` sea el dominio final).
- `robots.txt` apuntando al sitemap.

## 7. Notas de diseño

- Paleta: carbón `#14120F`, marfil `#EFEAE0`, dorado apagado `#A07C3B` como
  único acento (nunca como color dominante).
- Tipografía: **Fraunces** (serif editorial, titulares) + **Work Sans**
  (cuerpo/UI).
- El elemento de firma es el "índice de esfera": marcas tipo bisel de reloj
  usadas como separadores entre secciones (`.dial-divider`), y una esfera
  con manecilla animada muy sutilmente en el Hero (respeta
  `prefers-reduced-motion`).
- Cero glassmorphism, cero iconografía decorativa infantil, cards reducidas
  al mínimo: la composición se apoya en tipografía, espacio y fotografía.
