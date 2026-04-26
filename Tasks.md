# JM Purefoods Website — Task List

> **Stack:** Vite + React 19 · React Router v6 · Tailwind CSS v4 · vite-ssg · react-helmet-async · Framer Motion · Formspree · Netlify
> **Repo branches:** `main` → `dev` → `feature/*`

---

## Phase 1 — Project Setup

### 1.1 Initialise project

- [ ] Run `npm create vite@latest jm-purefoods -- --template react`
- [ ] `cd jm-purefoods && npm install`
- [ ] Run dev server to confirm it works: `npm run dev`

### 1.2 Install dependencies

- [ ] `npm install tailwindcss @tailwindcss/vite` — Tailwind CSS v4
- [ ] `npm install react-router-dom` — React Router v6
- [ ] `npm install vite-ssg` — static pre-rendering
- [ ] `npm install react-helmet-async` — per-page SEO meta tags
- [ ] `npm install framer-motion` — animations
- [ ] `npm install react-hook-form zod @hookform/resolvers` — form validation

### 1.3 Configure Tailwind CSS v4

- [ ] Add Tailwind plugin to `vite.config.js`
- [ ] Create `src/index.css` with `@import "tailwindcss"`
- [ ] Define custom CSS variables in `src/index.css`:
  ```css
  :root {
    --color-brand: #2d6a3f;
    --color-dark-green: #1e4a2c;
    --color-footer: #1a3d25;
    --color-footer-dark: #112a1a;
    --color-hero-bg: #f0ede0;
    --color-cream: #f5f2e8;
    --color-sage: #e8edcc;
    --color-cta-bg: #f0f4e0;
    --color-leaf: #7ab84a;
  }
  ```
- [ ] Extend Tailwind config with custom colour tokens

### 1.4 Configure vite-ssg

- [ ] Create `src/routes.js` with all 5 route definitions
- [ ] Update `src/main.jsx` to use `ViteSSG` instead of `ReactDOM.createRoot`
- [ ] Wrap app with `HelmetProvider` from `react-helmet-async`
- [ ] Update `vite.config.js` build command to use `vite-ssg`

### 1.5 Set up GitHub repo

- [ ] `git init` + initial commit
- [ ] Create GitHub repo and push
- [ ] Create `dev` branch from `main`
- [ ] Set `dev` as the default working branch
- [ ] Add `.gitignore` (node_modules, dist, .env)

### 1.6 Folder structure

- [ ] Create `src/pages/` — one file per page
- [ ] Create `src/components/` — shared components
- [ ] Create `src/components/layout/` — Navbar, Footer, WaveDivider, LeafDecoration
- [ ] Create `src/components/ui/` — Button, SectionHeader, Card
- [ ] Create `src/components/sections/` — page-specific section components
- [ ] Create `src/assets/` — images, SVGs, logo placeholder
- [ ] Create `src/data/` — `siteData.json`
- [ ] Create `public/` — robots.txt, sitemap.xml, favicon

### 1.7 Assets & data

- [ ] Add logo placeholder PNG to `src/assets/logo-placeholder.png`
- [ ] Add `src/data/siteData.json` (already created — copy to project)
- [ ] Add placeholder images for hero, industries, contract packaging, food service

---

## Phase 2 — Shared Components

### 2.1 Navbar

- [ ] Desktop layout: logo left · nav links centre · "Get a Quote" button right
- [ ] Mobile layout: logo left · hamburger icon (≡) right
- [ ] Active link highlighting based on current route (`useLocation`)
- [ ] Sticky positioning (`position: sticky; top: 0`) with white background + shadow on scroll

### 2.2 Mobile nav drawer

- [ ] Full-screen dark green overlay (`#1a3d25`) slides in from right
- [ ] Framer Motion `AnimatePresence` slide-in animation (`x: "100%" → x: 0`)
- [ ] Close (×) button top right
- [ ] Nav items:
  - [ ] Home (direct link)
  - [ ] About Us (direct link)
  - [ ] Our Services (accordion toggle → sub-items: Toll Packing, Contract Filling, Custom Packaging)
  - [ ] Packaging Solutions (accordion toggle → sub-items: Bottles, Jerry Cans, Drums, IBC Totes)
  - [ ] Industries (direct link)
  - [ ] Quality (direct link)
  - [ ] Contact Us (direct link)
- [ ] "Get a Quote" outlined button at bottom of drawer
- [ ] `LeafDecoration` SVG positioned bottom-right of drawer
- [ ] Close drawer on route change (`useEffect` listening to location)
- [ ] Prevent body scroll when drawer is open (`overflow: hidden` on `<body>`)

### 2.3 Footer

- [ ] 3-column layout on desktop, stacked on mobile
- [ ] Column 1: logo, company tagline, ABN, ACN, address
- [ ] Column 2: page links (Home, About, Contract Packaging, Food Service, Contact Us)
- [ ] Column 3: contact details (phone, email, address)
- [ ] Bottom bar: copyright + location text
- [ ] Background: `#1a3d25`; bottom bar: `#112a1a`

### 2.4 Button component (`src/components/ui/Button.jsx`)

- [ ] `variant` prop: `primary` | `outline` | `ghost`
- [ ] `size` prop: `sm` | `md` | `lg`
- [ ] Framer Motion `whileHover` scale pulse
- [ ] Forward `onClick`, `type`, `className`, `children` props

### 2.5 SectionHeader component (`src/components/ui/SectionHeader.jsx`)

- [ ] Accepts `title` and optional `subtitle` props
- [ ] Green bar accent (`#2d6a3f`, 3px height, 24px width) below title
- [ ] `align` prop: `left` | `center`
- [ ] Framer Motion fade-up on scroll (`useInView`)

### 2.6 WaveDivider component (`src/components/layout/WaveDivider.jsx`)

- [ ] Props: `fill` (colour of next section), `height` (default 70), `flip` (boolean, default false)
- [ ] `preserveAspectRatio="none"` for full-width stretch
- [ ] `lineHeight: 0` wrapper to remove gap
- [ ] 4 wave path variants: `gentle`, `steep`, `double`, `blob`
- [ ] `flip` applies `scaleY(-1)` for top-edge use

### 2.7 LeafDecoration component (`src/components/layout/LeafDecoration.jsx`)

- [ ] Inline SVG olive branch illustration
- [ ] Props: `side` (`left` | `right`), `opacity` (default 0.6), `className`
- [ ] Absolutely positioned, `pointer-events: none`
- [ ] Hidden on mobile (`hidden md:block`) if it interferes with content

### 2.8 AnimatedSection wrapper (`src/components/ui/AnimatedSection.jsx`)

- [ ] Wraps children with Framer Motion `fadeUp` on scroll
- [ ] Uses `useInView` with `once: true` and `margin: "-80px"`
- [ ] `delay` prop for stagger control

### 2.9 StaggerContainer + StaggerItem (`src/components/ui/Stagger.jsx`)

- [ ] `StaggerContainer`: sets `staggerChildren: 0.1` on `variants`
- [ ] `StaggerItem`: individual fade-up item variant

### 2.10 Page transition wrapper

- [ ] Wrap `<Routes>` with `AnimatePresence mode="wait"` in `App.jsx`
- [ ] Each page fades in/out on route change (`opacity: 0 → 1`, duration 0.25s)

---

## Phase 3 — Page Builds

### 3.1 Home page (`src/pages/Home.jsx`)

#### Hero section

- [ ] Full-width background image (machinery + canola field)
- [ ] Linear gradient overlay for text legibility on mobile
- [ ] Heading: "Contract Packaging Solutions You Can Trust"
- [ ] Subheading: "Professional toll packing and contract packaging services to help your business grow."
- [ ] Buttons: "Get a Quote" (primary) + "Learn More →" (ghost)
- [ ] `LeafDecoration` on left side
- [ ] Framer Motion entrance: badge → heading → subheading → buttons (staggered fade-up)
- [ ] Desktop: text left, machinery image right (split layout)
- [ ] Mobile: full-width image bg, text overlaid

#### What We Do section

- [ ] `WaveDivider` above (fill: `#f5f2e8`)
- [ ] `SectionHeader` centred: "What We Do"
- [ ] Desktop: 3-column icon card grid
- [ ] Mobile: vertical list — icon circle left + title/desc right
- [ ] 3 items with icons (SVG):
  - Toll Packing
  - Contract Filling
  - Custom Packaging
- [ ] `StaggerContainer` + `StaggerItem` fade-up animation
- [ ] Card `whileHover` lift effect on desktop

#### Our Process section

- [ ] `WaveDivider` above (fill: `#ffffff`)
- [ ] `SectionHeader` centred: "Our Process"
- [ ] Desktop: 4-column horizontal row with arrow connectors between steps
- [ ] Mobile: vertical list with dashed SVG line connecting icon circles
- [ ] 4 steps:
  1. Get in Touch — Tell us about your product and packaging needs
  2. Plan & Confirm — We propose the best solution and confirm your requirements
  3. Fill & Pack — Our team fills, packs and checks every detail
  4. Ready to Deliver — Your products are ready for dispatch, on time
- [ ] `StaggerContainer` stagger fade-up animation

#### Packaging Formats section

- [ ] `WaveDivider` above (fill: `#e8edcc`)
- [ ] `SectionHeader`: "Packaging Formats That Fit Your Needs"
- [ ] Desktop: copy left + 4-column format grid right
- [ ] Mobile: stacked heading/desc + vertical list (image left, name/size right)
- [ ] 4 formats with SVG illustrations: Bottles (100ml–5L), Jerry Cans (5L–25L), Drums (20L–200L), IBC Totes (1000L)
- [ ] "View All Options" outline button (links to Contract Packaging page)
- [ ] Spring pop-in animation on format items

#### Industries We Serve section

- [ ] `WaveDivider` above (fill: `#f5f2e8`)
- [ ] `SectionHeader` centred: "Industries We Serve"
- [ ] Desktop: 3-column image card grid
- [ ] Mobile: stacked full-width image cards
- [ ] 3 industry cards (image top + icon + title + desc):
  - Food Manufacturers — image placeholder
  - Food Service & Hospitality — image placeholder
  - Export & International Brands — image placeholder
- [ ] `StaggerContainer` stagger fade-up animation

#### Why Choose JMP + Let's Work Together section

- [ ] `WaveDivider` above (fill: split — dark green left, `#f0f4e0` right)
- [ ] Desktop: 2-column split — dark green left panel + cream right panel
- [ ] Mobile: stacked — dark green card first, cream CTA below
- [ ] **Why Choose JMP** (dark green `#1e4a2c`):
  - `SectionHeader` white: "Why Choose JMP?"
  - Desktop: 2×2 icon grid
  - Mobile: vertical list — icon left + label + desc right
  - 4 items: Australian Based · Flexible MOQ · High Quality · Fast Turnaround
- [ ] **Let's Work Together** (cream `#f0f4e0`):
  - Heading: "Let's Work Together"
  - Desc: "Contact us today to discuss your project and get a competitive quote."
  - "Get a Quote" primary button (links to Contact Us)
  - "Contact Us →" ghost link
  - `LeafDecoration` bottom-right

---

### 3.2 About page (`src/pages/About.jsx`)

- [ ] Hero banner: "Committed to Quality, Flexibility, and Reliable Supply" + subheading + image
- [ ] `WaveDivider`
- [ ] Company intro paragraph (full text from PRD)
- [ ] `WaveDivider`
- [ ] 3-column pillars (desktop) / stacked (mobile):
  - Our Story
  - Our Mission
  - Our Values
- [ ] `WaveDivider`
- [ ] Why Choose Us: 4 differentiators with icons
  - Flexible packaging formats
  - Private label support
  - Local & export capability
  - Reliable supply chain
- [ ] CTA strip → Contact Us

---

### 3.3 Contract Packaging page (`src/pages/ContractPackaging.jsx`)

- [ ] Hero banner: "End-to-end packaging for edible oil products" + image + "Enquire Now" CTA
- [ ] `WaveDivider`
- [ ] Intro paragraph
- [ ] `WaveDivider`
- [ ] Core capabilities grid (3-col desktop / 2-col mobile / list on small mobile):
  - Edible oil filling & packing
  - Flexible packaging formats
  - Private label manufacturing support
  - Label application & compliance support
  - Small to bulk production capability
  - Export-ready packaging solutions
- [ ] `WaveDivider`
- [ ] Flexible packaging formats: 6-tile grid (250ml glass, 500ml glass, 2L PET, 4L PET, 4L Tin, 5L PET)
- [ ] `WaveDivider`
- [ ] Private label section: heading + intro + 4 feature list items
- [ ] `WaveDivider`
- [ ] CTA: "Enquire Now" → Contact Us page

---

### 3.4 Food Service page (`src/pages/FoodService.jsx`)

- [ ] Hero banner: "Reliable bulk edible oil supply for food service operations" + image + "Enquire Now" CTA
- [ ] `WaveDivider`
- [ ] Intro paragraph
- [ ] `WaveDivider`
- [ ] Target customers callout: Restaurants · Catering businesses · Commercial kitchens
- [ ] Supply capabilities list (5 items with icons):
  - Bulk edible oil supply
  - Large format packaging (drums / containers / IBC)
  - Consistent commercial supply
  - Custom order volumes
  - Long-term supply partnerships
- [ ] `WaveDivider`
- [ ] Food service packaging formats: 3-tile grid (10L Container, 20L Container, Bag-in-box)
- [ ] `WaveDivider`
- [ ] CTA: "Enquire Now" → Contact Us page

---

### 3.5 Contact Us page (`src/pages/ContactUs.jsx`)

- [ ] Hero banner: "Get in Touch" + subheading
- [ ] `WaveDivider`
- [ ] Desktop: 2-column layout — form left, contact details right
- [ ] Mobile: stacked — contact details first, form below
- [ ] **Enquiry form** (React Hook Form + Zod validation):
  - Full name (required)
  - Email address (required, valid email)
  - Phone (optional)
  - Message (required)
  - Submit button: "Send Enquiry"
  - Success state: slide-down green success message
  - Error state: slide-down red error message with fallback email link
- [ ] **Contact details block**:
  - Phone: +61 428 254 866
  - Email: info@jmpurefoods.com.au
  - Address: 2 Exchange Dr, Pakenham VIC 3810
  - ABN: 91 690 274 901 · ACN: 690 274 901
- [ ] Google Maps embed placeholder (iframe or static map image)
- [ ] Formspree endpoint wired to `info@jmpurefoods.com.au`

---

## Phase 4 — SEO

- [ ] Wrap `App.jsx` with `<HelmetProvider>`
- [ ] Add `<Helmet>` to each page with:
  - `<title>`
  - `<meta name="description">`
  - `<meta property="og:title">`
  - `<meta property="og:description">`
  - `<meta property="og:type" content="website">`
  - `<meta property="og:url">`
  - `<link rel="canonical">`

| Page               | Title                               |
| ------------------ | ----------------------------------- |
| Home               | JM Purefoods Pty Ltd                |
| About              | About Us \| JM Purefoods            |
| Contract Packaging | Contract Packaging \| JM Purefoods  |
| Food Service       | Food Service Supply \| JM Purefoods |
| Contact Us         | Contact Us \| JM Purefoods          |

- [ ] Create `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://jmpurefoods.com.au/sitemap.xml
  ```
- [ ] Create `public/sitemap.xml` with all 5 page URLs
- [ ] Add `public/favicon.ico` (placeholder until logo is ready)
- [ ] Run `npx vite-ssg build` and verify each page has real HTML content in `/dist`
- [ ] Submit sitemap to Google Search Console after deploy

---

## Phase 5 — Animation (Framer Motion)

- [ ] Create `src/lib/animations.js` — shared animation variants:
  ```js
  export const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  export const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };
  export const springPop = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };
  ```
- [ ] Apply page transition: `AnimatePresence mode="wait"` in `App.jsx`
- [ ] Hero: stagger fade-up (badge → heading → subheading → buttons)
- [ ] What We Do items: `StaggerContainer` + `StaggerItem`
- [ ] Our Process steps: `StaggerContainer` + `StaggerItem`
- [ ] Packaging format tiles: `springPop` on scroll
- [ ] Industry cards: `StaggerContainer` + `StaggerItem`
- [ ] Why Choose JMP items: `StaggerContainer` + `StaggerItem`
- [ ] All service/feature cards: `whileHover={{ y: -6 }}` lift
- [ ] All CTA buttons: `whileHover={{ scale: 1.03 }}` pulse
- [ ] Mobile nav drawer: `AnimatePresence` + `x: "100%" → 0` slide-in
- [ ] Contact form success/error: `AnimatePresence` + `y: -10 → 0` slide-down

---

## Phase 6 — Form & Email Integration

- [ ] Create Formspree account at formspree.io
- [ ] Create new form → copy endpoint URL (e.g. `https://formspree.io/f/xyzabcde`)
- [ ] Update `siteData.json` `formspreeEndpoint` field with real ID
- [ ] Wire contact form `handleSubmit` to Formspree endpoint
- [ ] Implement React Hook Form + Zod schema:
  ```js
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Enter a valid email"),
    phone: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
  });
  ```
- [ ] Show inline field validation errors
- [ ] Show success message on 200 response
- [ ] Show error message with fallback email link on failure
- [ ] End-to-end test: submit form → email received at info@jmpurefoods.com.au

---

## Phase 7 — Responsive QA

### Mobile (375px)

- [ ] Navbar: hamburger icon visible, links hidden
- [ ] Mobile drawer: opens on hamburger tap, closes on × tap and route change
- [ ] Accordion sub-menus expand/collapse correctly in drawer
- [ ] Hero: image fills full width, text readable, buttons stack vertically
- [ ] What We Do: renders as vertical icon list (not grid)
- [ ] Our Process: renders as vertical steps with dashed connector line
- [ ] Packaging Formats: renders as vertical list with image left + text right
- [ ] Industries: full-width stacked image cards
- [ ] Why Choose JMP: dark green card, vertical icon list
- [ ] Wave dividers: render edge-to-edge with no gaps
- [ ] Leaf decorations: hidden or scaled without overlapping text
- [ ] Contact form: fields full-width, easy to tap
- [ ] Footer: sections stacked vertically

### Tablet (768px)

- [ ] Navbar transitions to desktop layout at `md:` breakpoint
- [ ] What We Do switches to 3-col grid
- [ ] Industry cards switch to 3-col grid
- [ ] Contact form switches to 2-col layout

### Desktop (1280px)

- [ ] All grids and split layouts render correctly
- [ ] Hero split layout: text left, image right
- [ ] Process: 4-col horizontal row with arrows
- [ ] Packaging Formats: copy left + grid right
- [ ] Why Choose JMP + Let's Work Together: side-by-side split

### Lighthouse audits

- [ ] Run Lighthouse mobile audit — target 90+ Performance, Accessibility
- [ ] Run Lighthouse desktop audit — target 95+ Performance
- [ ] Fix any flagged issues (image sizes, contrast, missing alt text)

### Cross-browser

- [ ] Chrome
- [ ] Safari (macOS + iOS)
- [ ] Firefox
- [ ] Edge

### Real device testing

- [ ] iOS (Safari) — iPhone
- [ ] Android (Chrome) — phone

---

## Phase 8 — Performance & Accessibility

- [ ] Add `alt` text to all images (descriptive, not "image")
- [ ] Add `aria-label` to icon-only buttons (hamburger, close, social icons)
- [ ] Ensure all interactive elements are keyboard navigable (Tab + Enter)
- [ ] Check colour contrast ratios (WCAG AA minimum 4.5:1 for text)
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Convert all images to WebP format before upload
- [ ] Compress images (target < 200KB per image)
- [ ] Use Next.js `<Image>`-equivalent lazy loading via Vite
- [ ] Set explicit `width` and `height` on all `<img>` tags to prevent layout shift

---

## Phase 9 — Content Finalisation

- [ ] Swap logo placeholder with real JMP logo file (SVG preferred)
- [ ] Update favicon with real logo
- [ ] Add hero background image (machinery + oil filling line)
- [ ] Add 3 industry images (Food Manufacturers, Food Service, Export)
- [ ] Add contract packaging product photo
- [ ] Add food service bulk container photo
- [ ] Add About page team/facility photo (optional)
- [ ] Optimise all final images (WebP, < 200KB)
- [ ] Review all page copy with client
- [ ] Confirm phone, email, address, ABN, ACN are correct
- [ ] Update `siteData.json` with any copy changes

---

## Phase 10 — Deploy

- [ ] Run `npx vite-ssg build` — verify `/dist` output
- [ ] Check all 5 pages have pre-rendered HTML in `/dist`
- [ ] Connect GitHub repo to Netlify
- [ ] Set build command: `npx vite-ssg build`
- [ ] Set publish directory: `dist`
- [ ] Trigger first deploy and verify it succeeds
- [ ] Test all 5 pages on Netlify preview URL
- [ ] Register domain `jmpurefoods.com.au` (if not already done)
- [ ] Connect custom domain in Netlify DNS settings
- [ ] Verify SSL certificate is auto-provisioned (HTTPS)
- [ ] Set up Netlify redirect: `www.jmpurefoods.com.au` → `jmpurefoods.com.au`
- [ ] Test final live site on all breakpoints
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google can crawl all 5 pages

---

## Dependency Reference

```bash
# Core
npm create vite@latest jm-purefoods -- --template react
npm install react-router-dom
npm install tailwindcss @tailwindcss/vite

# SEO & pre-rendering
npm install vite-ssg react-helmet-async

# Animation
npm install framer-motion

# Form validation
npm install react-hook-form zod @hookform/resolvers
```

---

## File Structure Reference

```
jm-purefoods/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── logo-placeholder.png
│   │   ├── hero-bg.jpg
│   │   └── ...images
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NavDrawer.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── WaveDivider.jsx
│   │   │   └── LeafDecoration.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionHeader.jsx
│   │   │   ├── AnimatedSection.jsx
│   │   │   └── Stagger.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── WhatWeDo.jsx
│   │       ├── OurProcess.jsx
│   │       ├── PackagingFormats.jsx
│   │       ├── Industries.jsx
│   │       ├── WhyChooseJMP.jsx
│   │       └── LetsTalkCTA.jsx
│   ├── data/
│   │   └── siteData.json
│   ├── lib/
│   │   └── animations.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── ContractPackaging.jsx
│   │   ├── FoodService.jsx
│   │   └── ContactUs.jsx
│   ├── routes.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── .gitignore
```

---

_Task file generated: April 2026 · Based on JM_Purefoods_Website_PRD.md_
