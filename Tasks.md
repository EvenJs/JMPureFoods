# JM Purefoods Website — Task List

> **Stack:** Vite + React 19 · React Router v6 · Tailwind CSS v4 · vite-ssg · react-helmet-async · Framer Motion · Formspree · Netlify
> **Branches:** `main` → `dev` → `feature/*`

---

## Phase 1 — Project Setup

### 1.1 Initialise project

- [x] `npm create vite@latest jm-purefoods -- --template react`
- [x] `cd jm-purefoods && npm install`
- [x] `npm run dev` — confirm blank app runs

### 1.2 Install dependencies

- [x] `npm install tailwindcss @tailwindcss/vite`
- [x] `npm install react-router-dom`
- [x] `npm install vite-ssg`
- [x] `npm install react-helmet-async`
- [x] `npm install framer-motion`
- [x] `npm install react-hook-form zod @hookform/resolvers`

### 1.3 Configure Tailwind CSS v4

- [x] Add `tailwindcss()` plugin to `vite.config.js`
- [x] Replace `src/index.css` content with:

  ```css
  @import "tailwindcss";

  @theme {
    --color-brand: #2a5c3f;
    --color-brand-mid: #3a7a52;
    --color-dark-section: #1e4028;
    --color-footer: #1a3525;
    --color-gold: #c8960c;
    --color-gold-light: #e8b830;
    --color-gold-bg: #fdf6e3;
    --color-off-white: #f8f9f7;
    --color-text-dark: #1a2e1f;
    --color-text-muted: #5a7060;
  }
  ```

- [x] Import `src/index.css` in `src/main.jsx`
- [x] Smoke test: add `className="bg-gold text-white"` to a div, confirm gold background

### 1.4 Configure vite-ssg

- [x] Create `src/routes.jsx` with 5 routes:
  - `/` → `pages/Home.jsx`
  - `/about` → `pages/About.jsx`
  - `/services` → `pages/Services.jsx`
  - `/food-service` → `pages/FoodService.jsx`
  - `/contact` → `pages/ContactUs.jsx`
- [x] Update `src/main.jsx` to use `ViteSSG`
- [x] Wrap app root with `HelmetProvider`

### 1.5 Set up GitHub repo

- [x] `git init` + initial commit
- [x] Create GitHub repo, push
- [x] Create `dev` branch, set as default working branch
- [x] Add `.gitignore` (node_modules, dist, .env)

### 1.6 Create folder structure

```
src/
  assets/
    images/          ← hero, facility, industry photos
    icons/           ← SVG icon files
    logo.svg         ← placeholder
    oil-drop.svg     ← golden oil drop SVG illustration
  components/
    layout/
      Navbar.jsx
      NavDrawer.jsx
      Footer.jsx
      WaveDivider.jsx
    ui/
      Button.jsx
      SectionHeader.jsx
      AnimatedSection.jsx
      Stagger.jsx
      OilDropSVG.jsx
    sections/
      Hero.jsx
      WhyChoose.jsx
      Specialists.jsx
      Capabilities.jsx
      BuiltForQuality.jsx
      StatsStrip.jsx
      TrustedBrands.jsx
      CTABanner.jsx
  data/
    siteData.json
  lib/
    animations.js
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    FoodService.jsx
    ContactUs.jsx
  routes.jsx
  App.jsx
  main.jsx
  index.css
public/
  favicon.ico
  robots.txt
  sitemap.xml
```

- [ ] Create all folders and placeholder `.jsx` files

### 1.7 Seed data file

- [x] Copy `siteData.json` into `src/data/`
- [x] Update colour tokens, nav links, page routes to match new design
- [x] Update home page sections to match: hero, whyChoose, specialists, capabilities, stats, trustedBrands, ctaBanner

---

## Phase 2 — Shared Components

### 2.1 Navbar (`src/components/layout/Navbar.jsx`)

- [ ] Desktop: JMP logo left · uppercase nav links centre · gold "Get a Quote" button right
- [ ] Mobile: JMP logo left · hamburger (≡) icon right
- [ ] Sticky `position: sticky; top: 0` with white background
- [ ] Add subtle shadow on scroll (`window.scrollY > 0`)
- [ ] Active link highlight using `useLocation()`
- [ ] Nav links: Home · About Us · Services · Capabilities · Quality · Contact

### 2.2 Mobile nav drawer (`src/components/layout/NavDrawer.jsx`)

- [ ] Full-screen dark green overlay (`#1e4028`)
- [ ] Framer Motion: `x: "100%" → 0` slide from right, `AnimatePresence`
- [ ] Close (×) button top right
- [ ] Nav items (direct links, no accordion needed for this simpler nav)
- [ ] Gold "Get a Quote" outlined button at bottom
- [ ] Oil drop / leaf SVG decoration bottom-right corner
- [ ] Lock body scroll when open (`document.body.style.overflow = 'hidden'`)
- [ ] Close on route change (`useEffect` on `location`)

### 2.3 Footer (`src/components/layout/Footer.jsx`)

- [ ] Background: `#1a3525`
- [ ] Desktop: 3-column — brand info · page links · contact details
- [ ] Mobile: stacked sections
- [ ] Bottom bar: copyright + location (`#112a1a` bg)
- [ ] Content: company name, ABN, ACN, address, phone, email, nav links

### 2.4 Button (`src/components/ui/Button.jsx`)

- [ ] `variant` prop: `gold` (fill `#c8960c`) | `outline-gold` | `outline-white` | `ghost`
- [ ] `size` prop: `sm` | `md` | `lg`
- [ ] Framer Motion `whileHover={{ scale: 1.03 }}`
- [ ] Forward `onClick`, `type`, `className`, `children`

### 2.5 SectionHeader (`src/components/ui/SectionHeader.jsx`)

- [ ] `title` + optional `subtitle` props
- [ ] Green underline bar accent (3px × 24px, `#2a5c3f`)
- [ ] `align` prop: `left` | `center`
- [ ] Framer Motion fade-up on scroll

### 2.6 WaveDivider (`src/components/layout/WaveDivider.jsx`)

- [ ] SVG wave, `preserveAspectRatio="none"`, full width
- [ ] Props: `fill` (colour of shape), `height` (default 60), `flip` (boolean)
- [ ] Used at bottom of Specialists dark green section (white wave)
- [ ] `lineHeight: 0` wrapper

### 2.7 OilDropSVG (`src/components/ui/OilDropSVG.jsx`)

- [ ] Large golden oil drop SVG with splash droplets at base
- [ ] Gold gradient fill (`#e8b830` top → `#c8960c` bottom)
- [ ] Framer Motion: scale-in on mount + subtle float loop (`y: [0, -10, 0]`, repeat infinity)
- [ ] Props: `size`, `className`

### 2.8 AnimatedSection (`src/components/ui/AnimatedSection.jsx`)

- [ ] Wraps children with `fadeUp` variant on scroll
- [ ] `useInView({ once: true, margin: "-80px" })`
- [ ] `delay` prop for offset control

### 2.9 Stagger components (`src/components/ui/Stagger.jsx`)

- [ ] `StaggerContainer`: `staggerChildren: 0.1`
- [ ] `StaggerItem`: fade-up child variant

### 2.10 Page transition wrapper

- [ ] `AnimatePresence mode="wait"` in `App.jsx` around `<Routes>`
- [ ] Each page: `opacity: 0 → 1`, duration 0.25s

---

## Phase 3 — Page Builds

### 3.1 Home page (`src/pages/Home.jsx`)

#### 3.1.1 Hero section (`src/components/sections/Hero.jsx`)

- [ ] Desktop: white bg, text left (max-w ~50%), `OilDropSVG` right
- [ ] Mobile: text stacked, oil drop below, full-width gold CTA
- [ ] Heading: "Your Trusted Toll Packing Partner"
- [ ] Subheading: "Premium liquid packing solutions with quality, safety and integrity."
- [ ] Gold "Our Services" button → `/services`
- [ ] Framer Motion: stagger — heading → subheading → button (fade up)
- [ ] Oil drop: scale-in + float loop

#### 3.1.2 Why Choose JM Purefoods (`src/components/sections/WhyChoose.jsx`)

- [ ] White / off-white background
- [ ] Centred `SectionHeader`: "Why Choose JM Purefoods"
- [ ] Desktop: 5-column grid · Mobile: 1-col stacked list
- [ ] Each item: circle icon (green outline SVG) + bold title + small desc
- [ ] 5 items: Premium Quality · Food Safety · Advanced Technology · Flexible Solutions · Reliable Partnership
- [ ] `StaggerContainer` + `StaggerItem` fade-up

#### 3.1.3 Specialists section (`src/components/sections/Specialists.jsx`)

- [ ] Background: `#1e4028` (dark green)
- [ ] White heading: "Specialists in Liquid Toll Packing"
- [ ] White subheading copy
- [ ] 6 product icons (gold outline): Edible Oils · Sauces · Honey · Dressings · Beverages · and more
- [ ] Desktop: icon row · Mobile: vertical list with gold icons
- [ ] Gold "View Capabilities" button → `/services`
- [ ] `WaveDivider` at bottom (fill white, so it flows into next section)
- [ ] `StaggerContainer` on icons

#### 3.1.4 Capabilities strip (`src/components/sections/Capabilities.jsx`)

- [ ] White / off-white background
- [ ] Centred `SectionHeader`: "Our Capabilities"
- [ ] Desktop: 5-col icon row · Mobile: 2-col grid
- [ ] Each item: green outline icon + 2-line title
- [ ] 5 items: Product Handling & Storage · Filling & Capping · Labelling & Coding · Quality Control & Testing · Packaging & Palletising
- [ ] `StaggerContainer` + `StaggerItem`

#### 3.1.5 Built for Quality split (`src/components/sections/BuiltForQuality.jsx`)

- [ ] Desktop: 50/50 split — facility photo left, text right
- [ ] Mobile: image top, text below
- [ ] Right/bottom: heading "Built for Quality. Focused on You." + desc + gold "About Our Facility" button → `/about`
- [ ] Image: placeholder, `object-cover`, rounded corners
- [ ] Framer Motion: image fade-in left, text fade-in right on scroll

#### 3.1.6 Stats strip (`src/components/sections/StatsStrip.jsx`)

- [ ] Light gold bg (`#fdf6e3`) or white
- [ ] Desktop: 4-col row · Mobile: 2×2 grid
- [ ] Each stat: large gold number + dark green label below
- [ ] 4 stats: 10+ Years of Experience · 100+ Satisfied Clients · 5000+ Products Packed Daily · 100% Commitment to Quality
- [ ] Count-up animation on scroll into view (Framer Motion `useInView` + JS counter)

#### 3.1.7 Trusted by Leading Brands (`src/components/sections/TrustedBrands.jsx`)

- [ ] Centred `SectionHeader`: "Trusted by Leading Brands"
- [ ] 5 greyscale brand logo placeholders (circle outlines)
- [ ] Desktop: single row · Mobile: horizontal scroll
- [ ] `StaggerContainer` fade-in

#### 3.1.8 CTA banner (`src/components/sections/CTABanner.jsx`)

- [ ] Background: `#1e4028`
- [ ] Desktop: text left + `OilDropSVG` right (smaller, decorative)
- [ ] Mobile: stacked — text + full-width gold button
- [ ] White heading: "Let's Build Something Great Together"
- [ ] White subheading: "Ready to take your product to the next level? We're here to help."
- [ ] Gold "Contact Us" button → `/contact`
- [ ] Fade-up on scroll

---

### 3.2 About Us page (`src/pages/About.jsx`)

- [ ] Hero banner: facility image + "About JM Purefoods" heading
- [ ] `AnimatedSection`: company intro paragraph
- [ ] 3-column pillars desktop / stacked mobile:
  - Our Story
  - Our Mission
  - Our Values
- [ ] `WhyChoose` section (reuse component from Home)
- [ ] `BuiltForQuality` section (reuse from Home)
- [ ] `CTABanner` (reuse from Home)

---

### 3.3 Services page (`src/pages/Services.jsx`)

- [ ] Hero: full-width machinery image + "End-to-End Toll Packing Solutions" overlay
- [ ] `Capabilities` section (reuse component, with extended descriptions)
- [ ] Process steps: 4-step horizontal (desktop) / vertical dashed (mobile):
  1. Get in Touch
  2. Plan & Confirm
  3. Fill & Pack
  4. Ready to Deliver
- [ ] Packaging formats: 4-tile grid
  - Bottles (250ml–5L)
  - Jerry Cans (5L–25L)
  - Drums (20L–200L)
  - IBC Totes (1000L)
- [ ] Private label section: heading + 4 features
- [ ] `CTABanner` (reuse)

---

### 3.4 Food Service page (`src/pages/FoodService.jsx`)

- [ ] Hero banner: food service image + "Reliable Bulk Edible Oil Supply" heading
- [ ] Intro paragraph + target customers callout
- [ ] Supply capabilities list (5 items with green icons)
- [ ] Food service formats: 3-tile grid (10L · 20L · Bag-in-box)
- [ ] `StatsStrip` (reuse)
- [ ] `CTABanner` (reuse)

---

### 3.5 Contact Us page (`src/pages/ContactUs.jsx`)

- [ ] Hero banner: "Get in Touch"
- [ ] Desktop: 2-col — form left, contact details right
- [ ] Mobile: contact details top, form below
- [ ] **Form fields** (React Hook Form + Zod):
  - Full name (required)
  - Email (required, valid email format)
  - Phone (optional)
  - Message (required, min 10 chars)
  - Submit: gold "Send Enquiry" button
- [ ] Form success: slide-down green success message
- [ ] Form error: slide-down red message + fallback mailto link
- [ ] **Contact details block**:
  - Phone: +61 428 254 866
  - Email: info@jmpurefoods.com.au
  - Address: 2 Exchange Dr, Pakenham VIC 3810
  - ABN: 91 690 274 901 · ACN: 690 274 901
- [ ] Google Maps embed placeholder

---

## Phase 4 — SEO

- [ ] Add `<HelmetProvider>` wrapper in `main.jsx`
- [ ] Add `<Helmet>` to each page with title, description, OG tags, canonical URL

| Page         | Title                                   |
| ------------ | --------------------------------------- |
| Home         | JM Purefoods Pty Ltd                    |
| About        | About Us \| JM Purefoods                |
| Services     | Services & Capabilities \| JM Purefoods |
| Food Service | Food Service Supply \| JM Purefoods     |
| Contact      | Contact Us \| JM Purefoods              |

- [ ] Create `public/robots.txt`
- [ ] Create `public/sitemap.xml` (5 URLs)
- [ ] Add `public/favicon.ico` placeholder
- [ ] Run `npx vite-ssg build` — verify `/dist` HTML has real content per page
- [ ] Submit sitemap to Google Search Console after deploy

---

## Phase 5 — Animation

- [ ] Create `src/lib/animations.js` with shared variants:
  - `fadeUp` — opacity 0→1, y 30→0
  - `staggerContainer` — staggerChildren 0.1
  - `staggerItem` — fadeUp child
  - `springPop` — scale 0.85→1, spring
  - `floatLoop` — y [0, -10, 0], repeat infinity, duration 3s
- [ ] Apply `AnimatePresence` page transition in `App.jsx`
- [ ] Hero: stagger fade-up sequence
- [ ] `OilDropSVG`: scale-in + float loop
- [ ] `WhyChoose` items: stagger fade-up
- [ ] Specialists product icons: stagger pop-in
- [ ] `Capabilities` icons: stagger fade-up
- [ ] Stats: count-up on `useInView`
- [ ] Brand logos: stagger fade-in
- [ ] `CTABanner`: fade-up on scroll
- [ ] All gold CTA buttons: `whileHover={{ scale: 1.03 }}`
- [ ] All icon/feature cards: `whileHover={{ y: -4 }}`
- [ ] Mobile nav drawer: `x: "100%" → 0` slide

---

## Phase 6 — Form & Email Integration

- [ ] Create Formspree account at formspree.io
- [ ] Create new form → copy endpoint ID
- [ ] Update `siteData.json` `formspreeEndpoint` with real ID
- [ ] Implement Zod schema for all 4 fields
- [ ] Wire `handleSubmit` to Formspree POST
- [ ] Show inline field validation errors
- [ ] Show animated success / error message on submit
- [ ] End-to-end test: submit → email received at info@jmpurefoods.com.au

---

## Phase 7 — Responsive QA

### Mobile (375px)

- [ ] Navbar: hamburger visible, desktop links hidden
- [ ] Drawer: opens on tap, closes on × tap and route change
- [ ] Hero: text stacked, oil drop below, full-width CTA
- [ ] Why Choose: 1-col stacked list
- [ ] Specialists: vertical product list, full-width gold CTA
- [ ] Capabilities: 2-col grid
- [ ] Built for Quality: image top, text below
- [ ] Stats: 2×2 grid
- [ ] Trusted Brands: horizontal scroll
- [ ] CTA banner: stacked, full-width button
- [ ] Contact form: full-width fields, tappable
- [ ] Footer: stacked

### Tablet (768px)

- [ ] Navbar switches to desktop layout at `md:`
- [ ] Grids expand correctly
- [ ] Split sections switch to side-by-side

### Desktop (1024px+)

- [ ] Hero: text left, oil drop right
- [ ] Why Choose: 5-col grid
- [ ] Specialists: icon row with wave
- [ ] Capabilities: 5-col row
- [ ] Built for Quality: 50/50 split
- [ ] Stats: 4-col row
- [ ] CTA banner: text + oil drop side by side

### Cross-browser

- [ ] Chrome · Safari · Firefox · Edge

### Real devices

- [ ] iOS Safari (iPhone)
- [ ] Android Chrome

### Lighthouse

- [ ] Mobile: target 90+ Performance + Accessibility
- [ ] Desktop: target 95+ Performance

---

## Phase 8 — Performance & Accessibility

- [ ] Add descriptive `alt` text to all images
- [ ] Add `aria-label` to icon-only buttons (hamburger, close)
- [ ] Keyboard navigation: all interactive elements reachable by Tab + Enter
- [ ] Check colour contrast (WCAG AA — gold on white needs verification)
- [ ] Add `loading="lazy"` to all below-fold images
- [ ] Convert all images to WebP, compress to < 200KB each
- [ ] Set explicit `width` + `height` on all `<img>` to prevent layout shift
- [ ] Verify oil drop SVG has `aria-hidden="true"` (decorative)

---

## Phase 9 — Content Finalisation

- [ ] Swap logo placeholder with real JMP SVG logo
- [ ] Update favicon with logo mark
- [ ] Add hero oil drop SVG (final version from designer or hand-code)
- [ ] Add facility/building photo (Built for Quality section)
- [ ] Add full-width machinery photo (Services hero)
- [ ] Add 3 industry photos (Food Manufacturers, Food Service, Export)
- [ ] Add 5 brand logo placeholders (Trusted by section)
- [ ] Optimise all images (WebP, < 200KB)
- [ ] Review all copy with client
- [ ] Confirm ABN, ACN, phone, email, address correct in `siteData.json`

---

## Phase 10 — Deploy

- [ ] `npx vite-ssg build` — verify `/dist` output
- [ ] Confirm all 5 pages have pre-rendered HTML
- [ ] Connect GitHub repo to Netlify
- [ ] Set build command: `npx vite-ssg build`
- [ ] Set publish directory: `dist`
- [ ] Trigger first deploy — verify success
- [ ] Test all 5 pages on Netlify preview URL
- [ ] Register domain `jmpurefoods.com.au`
- [ ] Connect custom domain in Netlify DNS
- [ ] Verify HTTPS / SSL auto-provisioned
- [ ] Set up redirect: `www` → apex domain
- [ ] Test live site on all breakpoints
- [ ] Submit sitemap to Google Search Console

---

## Dependency Install Reference

```bash
npm create vite@latest jm-purefoods -- --template react
cd jm-purefoods
npm install
npm install tailwindcss @tailwindcss/vite
npm install react-router-dom
npm install vite-ssg
npm install react-helmet-async
npm install framer-motion
npm install react-hook-form zod @hookform/resolvers
```

---

## Reusable Component Map

| Component         | Used on pages                       |
| ----------------- | ----------------------------------- |
| `Navbar`          | All pages                           |
| `NavDrawer`       | All pages (mobile)                  |
| `Footer`          | All pages                           |
| `Button`          | All pages                           |
| `SectionHeader`   | All pages                           |
| `WaveDivider`     | Home (Specialists section)          |
| `OilDropSVG`      | Home hero, CTA banner, Nav drawer   |
| `AnimatedSection` | All pages                           |
| `Stagger`         | All pages                           |
| `WhyChoose`       | Home, About                         |
| `Capabilities`    | Home, Services                      |
| `BuiltForQuality` | Home, About                         |
| `StatsStrip`      | Home, Food Service                  |
| `TrustedBrands`   | Home                                |
| `CTABanner`       | Home, Services, Food Service, About |

---

_Task file generated: April 2026 · Based on JM_Purefoods_Website_PRD.md_
