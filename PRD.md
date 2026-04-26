# JM Purefoods Pty Ltd — Website PRD

## Project Overview

A 5-page responsive static marketing website for JM Purefoods Pty Ltd. Primary goals: present company credentials, showcase contract packaging and food service capabilities, and capture enquiries via email.

---

## Company Details

| Field        | Value                                                               |
| ------------ | ------------------------------------------------------------------- |
| Company Name | JM PUREFOODS PTY LTD                                                |
| ABN          | 91 690 274 901                                                      |
| ACN          | 690 274 901                                                         |
| Address      | 2 Exchange Dr, Pakenham VIC 3810                                    |
| Phone        | +61 428 254 866                                                     |
| Email        | info@jmpurefoods.com.au                                             |
| Logo         | JM + leaf icon, "JM PUREFOODS PTY LTD" text lockup — to be provided |

---

## Reference Websites

- https://refreshoil.com.au/about-us/
- https://www.shermanfoods.com.au/contract-packaging

---

## UI Design References

### Visual style (confirmed from latest client design)

- **Background**: white / very light grey — clean, minimal
- **Primary colour**: dark forest green (`#2a5c3f`) — headings, navbar, dark section backgrounds
- **Accent colour**: gold/amber (`#c8960c`) — CTA buttons, icons, oil drop illustration, stat numbers
- **Logo**: "JMP" bold + green leaf icon, "JM PUREFOODS PTY LTD" subtitle
- **Nav links**: uppercase, small letter-spacing, lightweight font
- **CTA button style**: gold/amber fill (`#c8960c`) with white text
- **Section headings**: large, bold, dark green
- **Oil drop illustration**: large golden SVG oil drop with splash — hero centrepiece on desktop and mobile
- **SVG wave**: used only at bottom of dark green "Specialists" section
- **Hexagonal image frames**: used on hero variant C
- **No canola field background** — previous design fully replaced

### Desktop hero variants (3 observed)

**Variant A — "Your Trusted Toll Packing Partner"** _(primary)_

- White background
- Left: large heading + subheading + gold "Our Services" CTA button
- Right: large golden oil drop SVG illustration with splash

**Variant B — "End-to-End Toll Packing Solutions"**

- Full-width machinery image top
- 5-icon capabilities strip below
- Split: facility photo left + copy + gold CTA right

**Variant C — "Packed with Care. Delivered with Confidence."**

- Left: heading + subheading + gold "Get a Quote" button
- Right: hexagonal image collage (honey, oil, golden liquid)
- "Trusted by Leading Brands" greyscale logo strip below

### Mobile layout (confirmed from client screens)

- Navbar: JMP logo left + hamburger (≡) right
- Hero: text stacked, oil drop below, full-width gold CTA button
- Why Choose: stacked icon list
- Specialists section: dark green card, vertical product list with gold icons, gold CTA button
- Capabilities: 2-col icon grid
- Facility split: image top, text below
- Stats: 2×2 grid
- Trusted by brands: horizontal scrollable row
- CTA banner: stacked, full-width button

### Mobile nav drawer

- Full-screen dark green overlay slides in from right
- Close (×) top right
- Nav items: Home · About Us · Services · Capabilities · Quality · Contact
- Gold "Get a Quote" outlined button at bottom
- Oil drop / leaf SVG decoration bottom-right corner

---

## Tech Stack

| Layer               | Choice             | Reason                                                 |
| ------------------- | ------------------ | ------------------------------------------------------ |
| Framework           | Vite + React 19    | Familiar stack, fast setup, sufficient for static site |
| Routing             | React Router v6    | Client-side routing across 5 pages                     |
| Styling             | Tailwind CSS v4    | Mobile-first, CSS-only config via `@theme`             |
| Pre-rendering (SEO) | vite-ssg           | Static HTML per route at build time                    |
| Per-page meta tags  | react-helmet-async | Title, description, OG tags per page                   |
| Animation           | Framer Motion      | Scroll animations, page transitions, hover effects     |
| Contact form        | Formspree          | Zero backend — submissions to email                    |
| Deployment          | Netlify            | Free tier, auto SSL, GitHub push deploy                |

---

## Colour Palette

| Token                  | Hex       | Usage                                      |
| ---------------------- | --------- | ------------------------------------------ |
| `--color-brand`        | `#2a5c3f` | Headings, navbar, borders, icon strokes    |
| `--color-brand-mid`    | `#3a7a52` | Hover states, secondary green              |
| `--color-dark-section` | `#1e4028` | Specialists bg, CTA banner bg              |
| `--color-footer`       | `#1a3525` | Footer background                          |
| `--color-gold`         | `#c8960c` | CTA buttons, icons, oil drop, stat numbers |
| `--color-gold-light`   | `#e8b830` | Icon hover, decorative highlights          |
| `--color-gold-bg`      | `#fdf6e3` | Light gold tint on alternate sections      |
| `--color-white`        | `#ffffff` | Page background, cards                     |
| `--color-off-white`    | `#f8f9f7` | Alternate section backgrounds              |
| `--color-text-dark`    | `#1a2e1f` | Headings                                   |
| `--color-text-muted`   | `#5a7060` | Body copy, subtitles                       |

---

## Pages (5 total)

### 1. Home

Sections in order:

1. **Hero** — heading + subheading + gold CTA + large oil drop SVG
2. **Why Choose JM Purefoods** — 5-col icon grid (white bg)
3. **Specialists in Liquid Toll Packing** — dark green section + product icons + gold CTA + SVG wave
4. **Capabilities** — 5-icon strip (Product Handling, Filling & Capping, Labelling, QC & Testing, Packaging)
5. **Built for Quality** — split: facility photo left + heading + desc + gold CTA right
6. **Stats strip** — 10+ · 100+ · 5000+ · 100%
7. **Trusted by Leading Brands** — greyscale brand logo row
8. **Let's Build Something Great Together** — dark green CTA banner + gold button + oil drop deco

**Hero copy:**

- Heading: "Your Trusted Toll Packing Partner"
- Subheading: "Premium liquid packing solutions with quality, safety and integrity."
- CTA: "Our Services" (gold button)

**Why Choose JM Purefoods (5 items):**

- Premium Quality — Strict quality control at every step
- Food Safety — Certified systems you can trust
- Advanced Technology — Modern equipment, efficient & reliable
- Flexible Solutions — Tailored to your business needs
- Reliable Partnership — Committed to your long-term success

**Specialists section products:**

- Edible Oils · Sauces · Honey · Dressings · Beverages · and more

**Capabilities (5 items):**

- Product Handling & Storage
- Filling & Capping
- Labelling & Coding
- Quality Control & Testing
- Packaging & Palletising

**Stats:**

- 10+ Years of Experience
- 100+ Satisfied Clients
- 5000+ Products Packed Daily
- 100% Commitment to Quality

### 2. About Us

- Hero banner with facility image
- Company introduction paragraph
- Our Story / Our Mission / Our Values (3-column desktop, stacked mobile)
- Why Choose Us (5 differentiators)
- Facility overview + "About Our Facility" gold CTA

**Company intro copy:**

> JM Purefoods Pty Ltd is an Australia-based food company focused on edible oil production, packaging, and supply chain solutions. We operate across both local and international markets, offering flexible toll packing services tailored to different customer requirements. Our capabilities include a wide range of packaging formats and sizes, enabling our partners to efficiently bring products to market under their own brands or supply channels. We are committed to delivering consistent quality, operational flexibility, and reliable service across the entire supply chain.

### 3. Services / Capabilities

- Hero: "End-to-End Toll Packing Solutions" + full-width machinery image
- 5 capabilities with icon + title + description
- Process: 4 steps — Get in Touch → Plan & Confirm → Fill & Pack → Ready to Deliver
- Packaging formats: Bottles (250ml–5L), Jerry Cans (5L–25L), Drums (20L–200L), IBC Totes (1000L)
- Private label section
- CTA → Contact Us

### 4. Food Service

- Hero: "Reliable bulk edible oil supply"
- Target customers: restaurants, catering, commercial kitchens
- Supply capabilities (5 items)
- Formats: 10L containers, 20L containers, bag-in-box
- CTA → Contact Us

### 5. Contact Us

- Hero: "Get in Touch"
- Enquiry form: Name, Email, Phone (optional), Message, Submit
- Company details: phone, email, address, ABN, ACN
- Google Maps embed (placeholder)

---

## Responsive Design

Mobile-first using Tailwind breakpoints (`md:` = 768px, `lg:` = 1024px).

### Breakpoints

| Breakpoint | Width          | Target                     |
| ---------- | -------------- | -------------------------- |
| Mobile     | 375px – 767px  | iPhone SE, standard phones |
| Tablet     | 768px – 1023px | iPad, small laptops        |
| Desktop    | 1024px+        | Laptops, wide screens      |

### Section-by-section layout

| Section                 | Mobile                                                        | Desktop                                                           |
| ----------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------- |
| Navbar                  | Logo left + hamburger (≡) right                               | Logo left + uppercase nav links + gold "Get a Quote" button right |
| Mobile nav drawer       | Full-screen dark green, slides from right, gold CTA at bottom | N/A                                                               |
| Hero                    | Stacked — text top, oil drop SVG below, full-width gold CTA   | Split — text left (50%), oil drop right (50%)                     |
| Why Choose JM Purefoods | Stacked list (1-col)                                          | 5-column icon grid                                                |
| Specialists section     | Dark green card, vertical product list, full-width gold CTA   | Dark green band, product icons row, SVG wave bottom               |
| Capabilities            | 2-col icon grid                                               | 5-col icon row                                                    |
| Built for Quality split | Image top, text + CTA below                                   | 50/50 — image left, text right                                    |
| Stats strip             | 2×2 grid                                                      | 4-column horizontal row                                           |
| Trusted by Brands       | Horizontal scroll                                             | Full-width centred row                                            |
| CTA banner              | Stacked text + full-width button                              | Split — text left, oil drop deco right                            |
| Contact form            | Full width, stacked                                           | 2-column (form left, details right)                               |
| Footer                  | Stacked sections                                              | 3-column layout                                                   |

---

## Animation Plan (Framer Motion)

| Element              | Animation                                             |
| -------------------- | ----------------------------------------------------- |
| Page transition      | Fade in/out `AnimatePresence` on route change (0.25s) |
| Hero heading         | Fade up on load                                       |
| Hero subheading      | Fade up, 0.15s delay                                  |
| Hero CTA button      | Fade up, 0.3s delay                                   |
| Oil drop SVG         | Scale in + subtle float loop (y oscillation)          |
| Why Choose items     | Stagger fade up on scroll                             |
| Specialists products | Stagger pop-in on scroll                              |
| Capabilities icons   | Stagger fade up on scroll                             |
| Stats numbers        | Count-up on scroll into view                          |
| Brand logos          | Stagger fade in on scroll                             |
| CTA banner           | Fade up on scroll                                     |
| Gold CTA buttons     | `whileHover` scale 1.03                               |
| Cards / icons        | `whileHover` y: -4 lift                               |
| Mobile nav drawer    | `x: "100%" → 0` slide from right                      |
| Form success/error   | `y: -10 → 0` slide down                               |

---

## SEO Setup

### Build output structure

```
/dist
  index.html                ← Home
  about/index.html          ← About Us
  services/index.html       ← Services / Capabilities
  food-service/index.html   ← Food Service
  contact/index.html        ← Contact Us
```

### Per-page meta tags

| Page         | Title                                   | Description                                                                                              |
| ------------ | --------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Home         | JM Purefoods Pty Ltd                    | Premium liquid toll packing in Australia. Edible oils, sauces, honey, dressings and more. Pakenham, VIC. |
| About        | About Us \| JM Purefoods                | Australian toll packing specialists focused on quality, food safety and flexible solutions.              |
| Services     | Services & Capabilities \| JM Purefoods | End-to-end toll packing — filling, capping, labelling, QC and packaging.                                 |
| Food Service | Food Service Supply \| JM Purefoods     | Bulk edible oil supply for restaurants, catering, and commercial kitchens across Australia.              |
| Contact      | Contact Us \| JM Purefoods              | Get in touch with JM Purefoods Pty Ltd. Pakenham VIC. ABN 91 690 274 901.                                |

### Additional SEO files

- `public/robots.txt` — allow all, reference sitemap
- `public/sitemap.xml` — all 5 page URLs
- Submit sitemap to Google Search Console after deploy

---

## Formspree Integration

```jsx
const handleSubmit = async (data) => {
  const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  setStatus(res.ok ? "success" : "error");
};
```

---

## Deployment Notes

- Platform: Netlify (free tier)
- Build command: `npx vite-ssg build`
- Publish directory: `dist`
- Domain: `jmpurefoods.com.au` (register when ready)
- SSL: auto-provisioned by Netlify
- Redirect: `www` → apex domain

---

_Document last updated: April 2026_
