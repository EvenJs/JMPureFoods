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

- [x] Desktop: JMP logo left · uppercase nav links centre · gold "Get a Quote" button right
- [x] Mobile: JMP logo left · hamburger (≡) icon right
- [x] Sticky `position: sticky; top: 0` with white background
- [x] Add subtle shadow on scroll (`window.scrollY > 0`)
- [x] Active link highlight using `useLocation()`
- [x] Nav links: Home · About Us · Services · Capabilities · Quality · Contact

### 2.2 Mobile nav drawer (`src/components/layout/NavDrawer.jsx`)

- [x] Full-screen dark green overlay (`#1e4028`)
- [x] Framer Motion: `x: "100%" → 0` slide from right, `AnimatePresence`
- [x] Close (×) button top right
- [x] Nav items (direct links, no accordion needed for this simpler nav)
- [x] Gold "Get a Quote" outlined button at bottom
- [x] Oil drop / leaf SVG decoration bottom-right corner
- [x] Lock body scroll when open (`document.body.style.overflow = 'hidden'`)
- [x] Close on route change (`useEffect` on `location`)

### 2.3 Footer (`src/components/layout/Footer.jsx`)

- [x] Background: `#1a3525`
- [x] Desktop: 3-column — brand info · page links · contact details
- [x] Mobile: stacked sections
- [x] Bottom bar: copyright + location (`#112a1a` bg)
- [x] Content: company name, ABN, ACN, address, phone, email, nav links

### 2.4 Button (`src/components/ui/Button.jsx`)

- [x] `variant` prop: `gold` (fill `#c8960c`) | `outline-gold` | `outline-white` | `ghost`
- [x] `size` prop: `sm` | `md` | `lg`
- [x] Framer Motion `whileHover={{ scale: 1.03 }}`
- [x] Forward `onClick`, `type`, `className`, `children`

### 2.5 SectionHeader (`src/components/ui/SectionHeader.jsx`)

- [x] `title` + optional `subtitle` props
- [x] Green underline bar accent (3px × 24px, `#2a5c3f`)
- [x] `align` prop: `left` | `center`
- [x] Framer Motion fade-up on scroll

### 2.6 WaveDivider (`src/components/layout/WaveDivider.jsx`)

- [x] SVG wave, `preserveAspectRatio="none"`, full width
- [x] Props: `fill` (colour of shape), `height` (default 60), `flip` (boolean)
- [x] Used at bottom of Specialists dark green section (white wave)
- [x] `lineHeight: 0` wrapper

### 2.7 OilDropSVG (`src/components/ui/OilDropSVG.jsx`)

- [ ] Large golden oil drop SVG with splash droplets at base
- [ ] Gold gradient fill (`#e8b830` top → `#c8960c` bottom)
- [ ] Framer Motion: scale-in on mount + subtle float loop (`y: [0, -10, 0]`, repeat infinity)
- [ ] Props: `size`, `className`

### 2.8 AnimatedSection (`src/components/ui/AnimatedSection.jsx`)

- [x] Wraps children with `fadeUp` variant on scroll
- [x] `useInView({ once: true, margin: "-80px" })`
- [x] `delay` prop for offset control

### 2.9 Stagger components (`src/components/ui/Stagger.jsx`)

- [x] `StaggerContainer`: `staggerChildren: 0.1`
- [x] `StaggerItem`: fade-up child variant

### 2.10 Page transition wrapper

- [x] `AnimatePresence mode="wait"` in `App.jsx` around `<Routes>`
- [x] Each page: `opacity: 0 → 1`, duration 0.25s

---

## Phase 3 — Page Builds

### 3.1 Home page (`src/pages/Home.jsx`)

#### 3.1.1 Hero section (`src/components/sections/Hero.jsx`)

- [x] Desktop: white bg, text left (max-w ~50%), `OilDropSVG` right
- [x] Mobile: text stacked, oil drop below, full-width gold CTA
- [x] Heading: "Your Trusted Toll Packing Partner"
- [x] Subheading: "Premium liquid packing solutions with quality, safety and integrity."
- [x] Gold "Our Services" button → `/services`
- [x] Framer Motion: stagger — heading → subheading → button (fade up)
- [x] Oil drop: scale-in + float loop

#### 3.1.2 Our Solutions section (`src/components/sections/OurSolutions.tsx`)

- [x] White / off-white background
- [x] Centred `SectionHeader`: "Our Solutions" + subtitle "Two solutions. One commitment to quality and reliability."
- [x] Desktop: 2-column card grid · Mobile: stacked
- [x] **Card 1 — Contract Packaging:**
  - Product image (bottles) on left inside card
  - Gold icon top left
  - Heading: "CONTRACT PACKAGING"
  - Description: "End-to-end toll packing solutions for edible oils. From filling to finished product — we bring your brand to life."
  - "Learn More →" ghost link → `/services`
- [x] **Card 2 — Food Service:**
  - Product image (bottles) on right inside card
  - Gold icon top left
  - Heading: "FOOD SERVICE"
  - Description: "Reliable bulk edible oil supply solutions for restaurants, catering, and food service businesses."
  - "Learn More →" ghost link → `/food-service`
- [x] Cards have border, rounded corners, subtle shadow
- [x] `StaggerContainer` + `StaggerItem` fade-up on scroll

#### 3.1.3 Packaging Capability Overview (`src/components/sections/PackagingCapability.tsx`)

- [x] White background
- [x] Centred `SectionHeader`: "Packaging Capability Overview" + subtitle "From retail sizes to bulk supply — we deliver the right packaging solution for your market."
- [x] Desktop: 5-col image row · Mobile: horizontal scroll or 2-col grid
- [x] 5 items — each: product image top + label below + size/type caption:
  - 250ml–5L · Retail Bottles
  - 10L–20L · Commercial Packs
  - 200L Drums
  - IBC Containers
  - Bulk Supply
- [x] Images: placeholder photos (white background product shots style)
- [x] `StaggerContainer` + `StaggerItem` pop-in on scroll

#### 3.1.4 Why Partner with JM Purefoods (`src/components/sections/WhyPartner.tsx`)

- [x] White / off-white background
- [x] Centred `SectionHeader`: "Why Partner with JM Purefoods"
- [x] Desktop: 5-column icon grid · Mobile: stacked list
- [x] Each item: green outline circle icon + bold title + small desc
- [x] 5 items:
  - Premium Quality — Strict quality control at every step
  - Food Safety — Certified systems you can trust
  - Advanced Technology — Modern equipment, efficient & reliable
  - Flexible Solutions — Tailored to your business needs
  - Reliable Partnership — Committed to your long-term success
- [x] `StaggerContainer` + `StaggerItem` fade-up on scroll

#### 3.1.5 CTA Banner (`src/components/sections/CTABanner.tsx`)

- [x] Background: `#1e4028` (dark green)
- [x] Desktop: text left + oil drop image right
- [x] Mobile: stacked — text + full-width gold button
- [x] White heading: "Let's build the right solution for your business."
- [x] Gold "Get a Quote" button → `/contact`
- [x] Oil drop image: `src/assets/images/oil-drop.png` positioned bottom-right
- [x] `AnimatedSection` fade-up on scroll

---

### 3.2 About Us page (`src/pages/About.jsx`)

- [x] Hero banner: facility image + "About JM Purefoods" heading
- [x] `AnimatedSection`: company intro paragraph
- [x] 3-column pillars desktop / stacked mobile:
  - Our Story
  - Our Mission
  - Our Values
- [x] `WhyPartner` section (reuse component from Home)
- [x] `CTABanner` (reuse from Home)

---

### 3.3 Services page (`src/pages/Services.jsx`)

- [ ] Hero: full-width machinery image + "End-to-End Toll Packing Solutions" overlay
- [ ] Process steps: 4-step horizontal (desktop) / vertical dashed (mobile):
  1. Get in Touch
  2. Plan & Confirm
  3. Fill & Pack
  4. Ready to Deliver
- [ ] `PackagingCapability` section (reuse from Home)
- [ ] Private label section: heading + 4 features
- [ ] `CTABanner` (reuse)

---

### 3.4 Food Service page (`src/pages/FoodService.jsx`)

- [ ] Hero banner: food service image + "Reliable Bulk Edible Oil Supply" heading
- [ ] Intro paragraph + target customers callout
- [ ] Supply capabilities list (5 items with green icons)
- [ ] Food service formats: 3-tile grid (10L · 20L · Bag-in-box)
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
