# Sujal Bolke - Portfolio

Premium personal portfolio for **Sujal Namdev Bolke** - MERN Stack Developer & AI/ML Engineer training toward DevOps.

Built with **Vite + React**, **Framer Motion**, and a restrained **React Three Fiber** hero lattice.

---

## Features

- Brand-first hero with full-bleed 3D circuit lattice (disabled on mobile / reduced motion)
- Handcrafted micro-interactions: magnetic CTAs, scroll reveals, project glow follow, nav progress
- **Precision Ink** theme - cool ink base, refined teal, champagne accents (Syne + Source Sans 3 + IBM Plex Mono)
- Content centralized in `src/data/content.js`
- Accessible defaults: focus states, semantic sections, `prefers-reduced-motion`

---

## Sections

| # | Section | Content |
|---|---------|---------|
| 00 | Hero | Brand, headline, CTAs, terminal, 3D lattice |
| 01 | About | Bio + quiet stat rows |
| 02 | Skills | Languages / web / tools |
| 03 | Projects | Rice Guard AI, Custom Hotel Website |
| 04 | Experience | ORELSE internship |
| 05 | Achievements & Certifications | Competition wins + Sarathi diploma |
| 06 | Education | B.Sc. CS, H.S.C, S.S.C |
| 07 | Contact | Email, phone, GitHub |

---

## Design tokens

Defined in `src/styles/tokens.css`:

| Token | Value | Use |
|---|---|---|
| `--bg` | `#06090f` | Ink page background |
| `--surface` | `#101720` | Interactive surfaces |
| `--green` | `#3dbaa4` | Teal signal accent |
| `--amber` | `#c4a574` | Champagne secondary |
| `--font-display` | Syne | Brand / headings |
| `--font-body` | Source Sans 3 | Body copy |
| `--font-mono` | IBM Plex Mono | Labels, terminal |

---

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

---

## Deploying (GitHub Pages)

Repo name is `PortfolioWesite`, so Vite `base` is set to `/PortfolioWesite/` in `vite.config.js`.

1. Push to GitHub.
2. Run the **Portfolio** workflow (`.github/workflows/portfolio-deploy.yml`) via **Actions → Run workflow**, or enable the commented `push` trigger.
3. Site publishes from the `dist/` artifact.

Also works on Netlify / Vercel - set build command `npm run build` and output directory `dist`. If deploying to a custom domain or root, change `base` in `vite.config.js` to `'/'`.

---

## Customizing

- **Copy / resume facts** - edit `src/data/content.js`
- **Colors / type** - edit `src/styles/tokens.css`
- **Sections** - `src/sections/*`
- **3D hero** - `src/three/CircuitLattice.jsx`

---

## Tech stack

- React 19 + Vite 6 (JS + TS mix; `allowJs`)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion + lucide-react
- Three.js + React Three Fiber + Drei
- shadcn-style UI path: `src/components/ui` (alias `@/components/ui`)

### UI components (`src/components/ui`)

- **CardStack** (`card-stack.tsx`) - Skills fan carousel
- **Parallax** (`parallax-scrolling.tsx`) - Hero GSAP + Lenis layered scroll (Osmo-style layers, brand title `SUJAL`)

Vite-adapted (no Next.js). Path alias: `@/components/ui`.

---

## License

Personal project - free to reuse and adapt for your own portfolio.
