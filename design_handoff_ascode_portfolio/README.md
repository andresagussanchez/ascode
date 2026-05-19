# Handoff · AsCode Portfolio

Portfolio personal de **Andrés Agustín Sánchez** ("AsCode"). Sitio one-page,
oscuro, con estética dev/hacker minimalista. Logo confirmado: `<AS/>`
(estilo JSX tag). Dirección de UI confirmada: **B · Editorial dark**.

---

## Acerca de los archivos de diseño

Los archivos en `reference/` son **mocks de diseño escritos en HTML/JSX**
(prototipos para mostrar look & feel y comportamiento). **No son código de
producción** y no deben copiarse tal cual.

La tarea es **recrear estos diseños en el entorno objetivo** (Next.js,
Astro, SvelteKit, etc.) usando las librerías y patrones ya establecidos en
ese codebase. Si no hay codebase aún, elegí el framework más apropiado —
para un portfolio one-page recomiendo **Next.js (App Router) + Tailwind** o
**Astro + Tailwind** (más liviano, ideal para portfolio estático).

## Fidelidad

**Hi-fi.** Colores finales, tipografía final, espaciados e interacciones
definidos. Recrear pixel-perfect respetando los tokens y el comportamiento
listados abajo.

---

## Estructura del sitio (one-page)

1. **Nav** sticky (logo + 3 anchors + status pill)
2. **Hero** (display type + intro + CTA)
3. **Selected work** (lista tipo tabla, 4 proyectos)
4. **Stack** (grilla 4 columnas de skills)
5. **Footer / Contacto** (email grande + canales + ubicación + bottom strip)

Archivo de referencia: `reference/portfolio.jsx` → componente
`PortfolioEditorial`. El componente `PortfolioIDE` del mismo archivo es la
dirección descartada — ignorar.

Logo de referencia: `reference/logos.jsx` → componente `Logo1` (el resto se
descartó).

---

## Design tokens

### Colores

| Token | Hex | Uso |
|---|---|---|
| `--bg` | `#0a0a0a` | Fondo global |
| `--bg-panel` | `#111113` | Footer / paneles |
| `--border` | `#1a1a1c` | Separadores, bordes sutiles |
| `--fg` | `#f5f5f5` | Texto principal |
| `--fg-soft` | `#bcbcbc` | Texto secundario / descripciones |
| `--dim` | `#7a7a7a` | Labels, metadatos, mono helpers |
| `--accent` | `#00ff88` | Verde neón. Acentos, hovers, status dot, cursor |
| `--accent-glow` | `rgba(0,255,136,0.15)` | Halos, hover bg |
| `--accent-bg` | `rgba(0,255,136,0.04)` | Bg de fila en hover |

Selección de texto: bg `--accent`, color `#0a0a0a`.

### Tipografía

- **Sans** (display + body): **Space Grotesk** — pesos 400/500/600/700
- **Mono** (labels, meta, código): **JetBrains Mono** — pesos 400/500/600/700
- Cursiva opcional para énfasis en hero: estilo italic regular de Space Grotesk

Escala:

| Rol | Tamaño | Peso | Letter-spacing | Line-height |
|---|---|---|---|---|
| Hero display | 132px | 500 | -5 | 0.95 |
| H2 sección (mono uppercase) | 14px | 500 | 4 | 1.4 |
| Proyecto · nombre | 30px | 500 | -0.5 | 1.2 |
| Proyecto · descripción | 15px | 400 | 0 | 1.5 |
| Skill (stack) | 22px | 500 | -0.3 | 1.3 |
| Footer headline | 44px | 500 | -1.5 | 1.05 |
| Email contacto | 18px (mono) | 400 | 0 | 1.3 |
| Body intro (hero) | 14px (mono) | 400 | 0 | 1.7 |
| Meta / labels | 11–12px (mono) | 500 | 1–3 | — |
| Stack heading (mono uppercase) | 11px | 500 | 3 | — |
| Chip tech | 10px (mono) | 400 | 0.5 | — |

### Espaciado / layout

- Padding horizontal de página: **56px** (1.5rem en mobile, escalar)
- Hero padding: `80px 56px 60px`
- Sección work padding: `80px 56px 40px`
- Sección stack padding: `60px 56px 80px`
- Footer padding: `64px 56px 48px`
- Gap entre filas de proyecto: borde inferior 1px de `--border`, padding vertical `32px`
- Grid del stack: 4 columnas iguales, gap `1px` (sobre `--border`), cada celda `28px 24px`, min-height `240px`

### Borde / radii

- Sin radius en cards (estética editorial, líneas duras)
- Chips: rectangulares, sin radius
- Status dot: `border-radius: 50%`, 6px, con `box-shadow: 0 0 10px var(--accent)`

---

## Pantalla por pantalla

### 1 · Nav (sticky)

- `position: sticky; top: 0; z-index: 10`
- `backdrop-filter: blur(12px)`
- Bg: `rgba(10,10,10,0.78)`
- Border-bottom: 1px `--border`
- Padding: `18px 56px`
- Layout: flex space-between en 3 grupos
- **Izquierda** — logo `<AS/>` (ver sección Logo) + separador `·` + `ASCODE` mono 11px tracking 3
- **Centro** — 3 anchors mono 12px tracking 1, color `--dim`:
  `01 · trabajo` · `02 · stack` · `03 · contacto`
  - Hover: color → `--fg`, underline animado (línea 1px `--accent` que crece desde la izquierda con `transform: scaleX(0→1)`, transición `.3s cubic-bezier(.2,.8,.2,1)`)
- **Derecha** — status pill: dot 6px `--accent` con glow + texto `DISPONIBLE` mono 11px

### 2 · Hero

- Eyebrow mono `PORTFOLIO · 2020 — 2026` 12px tracking 3 color `--dim`
- Headline display 132px Space Grotesk 500:
  ```
  Construyo
  productos que          ← "productos" en italic, weight 400, color --dim
  la gente usa.          ← "usa" en --accent, punto seguido de cursor parpadeante
  ```
- Cursor: span con `animation: blink 1s steps(1) infinite` (50% opacity 0)
- Bloque inferior grid 2 columnas `1fr 380px`:
  - Izquierda: párrafo mono 14px color `--dim` line-height 1.7, máx 480px:
    > "Andrés Agustín Sánchez. Desarrollador full-stack y diseñador de producto. Trabajo con startups y empresas que tratan el software como su oficio principal."
  - Derecha: CTA button:
    - Bg transparente, border 1px `--fg`, padding `18px 28px`
    - Mono 12px tracking 3 uppercase weight 600
    - Layout flex space-between (texto + flecha `→`)
    - Texto: `Iniciar un proyecto`
    - Hover: bg `--accent`, color `#0a0a0a`, transición `.25s`

Sutil: líneas verticales de fondo opcionales — `linear-gradient(90deg, --border 1px, transparent 1px)` con `background-size: 12.5% 100%` y `opacity: 0.4`, `position: absolute inset 0; pointer-events: none`.

Divider después del hero: borde superior 1px `--border` con márgenes laterales 56px.

### 3 · Selected work

- Header de sección flex space-between:
  - H2 mono uppercase: `01  Trabajo selecto` (el `01` en `--accent`)
  - Meta a la derecha: `{N} proyectos · 2024—2025`
- Tabla: borde superior `--border`. Cada fila tiene borde inferior `--border`.
- Cada fila grid `60px 1fr 1.2fr 220px 50px` con gap 32px, padding vertical 32px:
  - **Col 1** — id mono 12px color `--dim` (ej. `001`)
  - **Col 2** — nombre del proyecto 30px + meta mono 11px uppercase debajo
  - **Col 3** — descripción 15px color `--fg-soft` (#bcbcbc), max 360px
  - **Col 4** — chips del stack: mono 10px, border 1px `--border`, padding `3px 8px`, sin radius
  - **Col 5** — flecha `→` 28px color `--dim` peso 300, alineado derecha

**Hover de fila** (interacción clave, transición `.3s cubic-bezier(.2,.8,.2,1)`):
- Bg: `rgba(0,255,136,0.04)`
- `padding-left: 36px` (la fila se desplaza)
- Pseudo `::before` izquierdo: barra 3px de altura completa color `--accent` (width animado de 0 → 3px en `.25s`)
- Flecha: `translateX(4px)` y color → `--accent`

### Proyectos (datos)

```js
[
  { id: '001', name: 'Velocity Dashboard', client: 'Fintech LATAM', year: '2025',
    stack: ['React','D3','Postgres'],
    desc: 'Panel de métricas en tiempo real para mesa de trading.',
    metric: '+340% engagement' },
  { id: '002', name: 'Nimbus Commerce',  client: 'Retail B2B',     year: '2025',
    stack: ['Next.js','Stripe','Sanity'],
    desc: 'Plataforma e-commerce headless para distribuidores.',
    metric: '2.1M GMV/mes' },
  { id: '003', name: 'Atlas CRM',         client: 'SaaS startup',   year: '2024',
    stack: ['Vue','Node','Redis'],
    desc: 'Reescritura completa del CRM interno, 0 a 1.',
    metric: '−68% tiempo de carga' },
  { id: '004', name: 'Helix Booking',     client: 'Hospitality',    year: '2024',
    stack: ['Svelte','Supabase'],
    desc: 'Reservas con calendario en vivo para hoteles boutique.',
    metric: '12K reservas/sem' },
]
```

> Reemplazar por proyectos reales antes de publicar. La estructura es la guía;
> texto e iconos finales los aporta Andrés.

### 4 · Stack

- H2 mono uppercase: `02  Stack · Herramientas` (el `02` en `--accent`)
- Grid 4 columnas iguales, gap 1px sobre fondo `--border` (efecto de líneas internas):
  ```
  Frontend | Backend | Diseño | Cloud
  ```
- Cada celda:
  - Bg `--bg`, padding `28px 24px`, min-height 240px
  - Heading mono 11px tracking 3 uppercase color `--accent`
  - Lista vertical gap 14px de skills en sans 22px peso 500 letter-spacing -0.3
  - **Hover skill**: `color: --accent` + `translateY(-2px)` transición `.2s`

Datos:

```js
[
  { cat: 'Frontend', items: ['React','Next.js','TypeScript','Tailwind','Svelte'] },
  { cat: 'Backend',  items: ['Node.js','Python','PostgreSQL','Redis','GraphQL'] },
  { cat: 'Diseño',   items: ['Figma','Framer','Motion','Webflow'] },
  { cat: 'Cloud',    items: ['Vercel','AWS','Supabase','Cloudflare'] },
]
```

### 5 · Footer / Contacto

- Bg `--bg-panel`, border-top 1px `--border`, padding `64px 56px 48px`
- Grid 3 columnas `1.4fr 1fr 1fr` gap 48px align-items start:

**Columna 1 (CONTACTO):**
- Eyebrow mono `· CONTACTO` 11px tracking 3 color `--dim`
- Headline sans 44px peso 500 letter-spacing -1.5 line-height 1.05:
  > "¿Tenemos algo que construir?"
  > (`?` final en `--accent`)
- Email mono 18px color `--accent`, underline offset 4px → `hola@ascode.dev`

**Columna 2 (CANALES):**
- Eyebrow `· CANALES`
- Lista mono 13px gap 10px:
  - `→ github / @andressanchez`
  - `→ linkedin / andres-sanchez`
  - `→ x / @ascode_dev`
  - `→ read.cv / asanchez`
- Hover: underline animado igual que la nav

**Columna 3 (UBICACIÓN):**
- Eyebrow `· UBICACIÓN`
- Sans 18px: `Buenos Aires, AR`
- Línea sub mono 14px color `--dim`: `GMT−3 · trabajo remoto global`

**Bottom strip:**
- Margin-top 64px, border-top 1px `--border`, padding-top 24px
- Flex space-between mono 11px color `--dim`:
  - Izquierda: `© 2026 · Andrés Agustín Sánchez · AsCode`
  - Derecha: `v2026.05 · ● build #284` (el bullet en `--accent`)

---

## Logo `<AS/>` (Logo 1)

Componente tipo "JSX tag". Mono JetBrains, weight 700.

```
<AS/>     →   símbolo: < + AS + />
              < y /> en --accent (opacity 0.85 idle, 1 en hover)
              AS en --fg (color principal)
              font-size 56px en hero/standalone, 18px en nav
              letter-spacing -2 a -1 según tamaño
```

Wordmark opcional al lado (cuando hay espacio):
- `ascode` mono 22px weight 500 letter-spacing 6 uppercase color `--fg`
- Separador izquierdo: border-left 1px `--dim`, padding-left 14px

**Hover (versión grande):** todo el logo `translateY(-2px)` en `.25s`,
los corchetes pasan a opacity 1.

Variantes de uso:
- **Solo símbolo `<AS/>`** — favicon, nav, footer
- **Símbolo + wordmark** — hero opcional, splash
- **Stacked** (símbolo arriba, "ASCODE" mono debajo con tracking 2) — sidebar/menú

Implementar como SVG inline o como texto con `<span>` (más editable, mejor accesibilidad). Recomiendo texto.

---

## Interacciones globales

| Elemento | Trigger | Efecto | Timing |
|---|---|---|---|
| Nav anchor | hover | Underline animado (scaleX 0→1) | .3s cubic-bezier(.2,.8,.2,1) |
| Logo grande | hover | translateY(-2px) + corchetes opacity 1 | .25s ease |
| Fila proyecto | hover | bg verde 4% + pad-left 36px + barra 3px verde izq + arrow translateX 4px y color verde | .3s cubic-bezier(.2,.8,.2,1) |
| Skill | hover | color verde + translateY(-2px) | .2s |
| CTA button | hover | bg verde + color negro | .25s |
| Status dot | always | glow `0 0 10px --accent` (sin animación obligatoria; opcionalmente pulse) | — |
| Cursor del hero | always | blink 1s steps(1) infinite (50% opacity 0) | — |
| Email contacto | hover | underline más prominente / color shift sutil | .15s |

**Smooth scroll** entre secciones (los anchors de la nav apuntan a `#trabajo`, `#stack`, `#contacto`).

---

## Comportamiento responsive (no especificado en el mock, recomendación)

| Breakpoint | Cambios |
|---|---|
| `< 1024px` | Hero 88–96px. Tabla de proyectos colapsa a 2 columnas (id+nombre arriba, descripción debajo, chips abajo, flecha al final). Stack grid → 2 columnas. |
| `< 768px` | Hero 64–72px. Nav center oculto, menú hamburguesa. Tabla de proyectos a 1 columna stackeada. Footer a 1 columna. Padding lateral 24px. |
| `< 480px` | Hero 48–56px. CTA full width. |

Mantener mono JetBrains para todos los labels en todos los breakpoints.

---

## State / data

El portfolio es estático. Estado local solo para:
- `hoverIdx` de la tabla de proyectos (si necesitás controlar JS; con CSS `:hover` alcanza)
- `mobileNavOpen` para el menú en mobile

Sin fetching. Si en el futuro se agrega blog/CMS, sumar Sanity o Notion como source.

---

## SEO / meta

- `<title>`: `AsCode · Andrés Agustín Sánchez · Full-stack developer & product designer`
- `meta description`: variante de la línea del hero
- `og:image`: capture del hero o tarjeta 1200×630 con logo `<AS/>` sobre `#0a0a0a`
- Locale `es-AR`

---

## Accesibilidad

- Contraste: `--fg` sobre `--bg` = 17:1 ✓; `--dim` sobre `--bg` = 4.7:1 ✓ (limita su uso a texto pequeño no esencial)
- `--accent` (#00ff88) sobre `--bg`: alto contraste pero **no usar para bloques grandes de texto** — sí para labels y acentos cortos
- Focus visible: outline 2px `--accent` con offset 2px en links/buttons
- Cursor blink: respetar `prefers-reduced-motion` y pausar la animación
- Skip link al main para teclado

---

## Assets

- Fuentes: **Google Fonts** (Space Grotesk + JetBrains Mono) — self-host recomendado para producción
- No hay imágenes en el mock. Cuando se agreguen capturas de proyectos, pensar en una grilla con `aspect-ratio: 16/10` y borde `--border`
- Favicon: SVG con `<AS/>` en verde sobre negro

---

## Archivos de referencia incluidos

```
reference/
├── canvas.html        ← entry point del prototipo (design canvas)
├── design-canvas.jsx  ← shell del canvas (ignorar, infraestructura)
├── portfolio.jsx      ← TODA la pantalla está acá en PortfolioEditorial
└── logos.jsx          ← logo en Logo1 (el resto se descartó)
```

Para ver los prototipos en vivo: abrir `reference/canvas.html` (necesita
servirse vía http porque carga JSX vía Babel). La sección "B · Editorial dark"
es la dirección aprobada; la "A · IDE / Terminal" es la descartada — sirve
solo como referencia de cosas que NO se eligieron.

---

## Checklist de implementación sugerido

- [ ] Setup proyecto (Next.js o Astro + Tailwind)
- [ ] Configurar tokens (colores, tipografía, escalas) en Tailwind config o CSS vars
- [ ] Cargar fuentes (preconnect + display=swap o self-host)
- [ ] Componente `<Logo />` con prop `size`
- [ ] Nav sticky con underline animado
- [ ] Hero con cursor parpadeante y CTA
- [ ] `<ProjectRow />` con hover transition
- [ ] Sección Stack
- [ ] Footer
- [ ] Smooth scroll entre anchors
- [ ] Responsive (móvil → desktop)
- [ ] Reemplazar mock data por proyectos reales
- [ ] Meta + OG image + favicon
- [ ] Deploy (Vercel / Netlify / Cloudflare Pages)
