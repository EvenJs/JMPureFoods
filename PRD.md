# JM Purefoods Pty Ltd — Website PRD

## Project Overview

A 5-page responsive static marketing website for JM Purefoods Pty Ltd. Primary goals: present company credentials, showcase contract packaging and food service capabilities, and capture enquiries via email.

---

## Company Details

| Field        | Value                            |
| ------------ | -------------------------------- |
| Company Name | JM PUREFOODS PTY LTD             |
| ABN          | 91 690 274 901                   |
| ACN          | 690 274 901                      |
| Address      | 2 Exchange Dr, Pakenham VIC 3810 |
| Phone        | +61 428 254 866                  |
| Email        | info@jmpurefoods.com.au          |
| Logo         | Placeholder — to be provided     |

---

## Reference Websites

- https://refreshoil.com.au/about-us/
- https://www.shermanfoods.com.au/contract-packaging

---

## UI Design References

### Desktop design

- Warm cream/off-white page background (`#f0ede0`)
- Olive/sage green hero background with canola field illustration
- Dark forest green footer (`#1a3d25`) and Why Choose JMP panel (`#1e4a2c`)
- Organic SVG wave dividers between every section (no straight horizontal lines)
- Olive branch / leaf PNG decorations on left and right edges of sections
- Section accent: short green bar (`#2d6a3f`) below section headings

### Mobile design (confirmed from client reference)

Three screens provided:

**Screen 1 — Home (mobile)**

- Navbar: JMP logo left, hamburger icon (≡) right
- Hero: full-width image background, heading + subheading overlaid, "Get a Quote" (primary) + "Learn More →" (ghost) buttons stacked
- What We Do: centred heading + green bar, list layout (icon left + title/desc right) — NOT grid
- Packaging Formats: heading + description stacked, formats as vertical list (icon left + name/size right), "View All Options" button at bottom

**Screen 2 — Process & Industries (mobile)**

- Our Process: centred heading, vertical step list with dashed connector line between steps (icon circle → dashed line → icon circle)
- Industries We Serve: centred heading, full-width stacked image cards (image top, icon + title + desc below)
- Why Choose JMP: dark green card, vertical list of 4 items (icon left + label + desc right)
- Let's Work Together: light cream section, heading + desc + "Get a Quote" button + "Contact Us →" ghost link

**Screen 3 — Mobile nav drawer**

- Full-screen dark green overlay (`#1a3d25`) slides in from right
- Close (×) button top right
- Nav items: Home, About Us, Our Services (expandable with sub-items: Toll Packing, Contract Filling, Custom Packaging), Packaging Solutions (expandable: Bottles, Jerry Cans, Drums, IBC Totes), Industries, Quality, Contact Us
- "Get a Quote" outlined button at bottom of drawer
- Olive branch leaf decoration bottom-right of drawer

---

## Tech Stack

| Layer               | Choice             | Reason                                                 |
| ------------------- | ------------------ | ------------------------------------------------------ |
| Framework           | Vite + React 19    | Familiar stack, fast setup, sufficient for static site |
| Routing             | React Router v6    | Client-side routing across 5 pages                     |
| Styling             | Tailwind CSS v4    | Responsive-first, consistent utility classes           |
| Pre-rendering (SEO) | vite-ssg           | Generates static HTML per route at build time          |
| Per-page meta tags  | react-helmet-async | Title, description, OG tags per page                   |
| Contact form        | Formspree          | Zero backend — form submissions sent to email via API  |
| Deployment          | Netlify            | Free tier, auto SSL, GitHub push deploy                |

---

## Pages (5 total)

### 1. Home

- Hero: company tagline + short intro + CTA ("Get a Quote" primary, "Learn More →" ghost)
- What We Do: 3 items — Toll Packing, Contract Filling, Custom Packaging
- Our Process: 4 steps — Get in Touch → Plan & Confirm → Fill & Pack → Ready to Deliver
- Packaging Formats: Bottles, Jerry Cans, Drums, IBC Totes + "View All Options" CTA
- Industries We Serve: Food Manufacturers, Food Service & Hospitality, Export & International Brands
- Why Choose JMP: 4 items — Australian Based, Flexible MOQ, High Quality, Fast Turnaround
- Let's Work Together: CTA section with "Get a Quote" + "Contact Us →"

### 2. About

- Full company introduction text
- Our Story / Our Mission / Our Values (3-column)
- Why Choose Us (key differentiators)

**Company intro copy:**

> JM Purefoods Pty Ltd is an Australia-based food company focused on edible oil production, packaging, and supply chain solutions. We operate across both local and international markets, offering flexible toll packing services tailored to different customer requirements. Our capabilities include a wide range of packaging formats and sizes, enabling our partners to efficiently bring products to market under their own brands or supply channels. We are committed to delivering consistent quality, operational flexibility, and reliable service across the entire supply chain.

### 3. Contract Packaging

- Page intro: _"End-to-end contract packaging solutions for edible oil products"_
- Core capabilities grid with icons (6 items)
- Flexible packaging formats section
- Private label packaging section
- CTA: Enquire Now → Contact Us

**Core capabilities:**

- Edible oil filling & packing
- Flexible packaging formats
- Private label manufacturing support
- Label application & compliance support
- Small to bulk production capability
- Export-ready packaging solutions

**Flexible packaging formats:**

| Format        | Size         |
| ------------- | ------------ |
| Glass bottles | 250ml, 500ml |
| PET bottles   | 2L, 4L, 5L   |
| Tins          | 4L           |

**Private label packaging:**

- Custom bottle design
- Label application
- Brand packaging support
- Export compliance packaging

### 4. Food Service

- Page intro: _"Reliable bulk edible oil supply for food service operations"_
- Target customers: restaurants, catering businesses, commercial kitchens
- What we supply (5 items)
- Food service packaging formats
- CTA: Enquire Now → Contact Us

**Supply capabilities:**

- Bulk edible oil supply
- Large format packaging (drums / containers / IBC)
- Consistent commercial supply
- Custom order volumes
- Long-term supply partnerships

**Food service packaging formats:**

| Format               |
| -------------------- |
| 10L containers       |
| 20L containers       |
| Bag-in-box solutions |

### 5. Contact Us

- Enquiry form: Name, Email, Phone (optional), Message, Submit
- Company contact details: phone, email, address
- ABN / ACN displayed
- Google Maps embed (placeholder)

---

## Responsive Design

Mobile-first approach using Tailwind breakpoints (`sm:`, `md:`, `lg:`).

### Breakpoints

| Breakpoint | Width          | Target                     |
| ---------- | -------------- | -------------------------- |
| Mobile     | 375px – 767px  | iPhone SE, standard phones |
| Tablet     | 768px – 1023px | iPad, small laptops        |
| Desktop    | 1024px+        | Laptops, wide screens      |

### Section-by-section layout

| Section             | Mobile                                                                                   | Desktop                                                   |
| ------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Navbar              | Logo left + hamburger (≡) right                                                          | Logo left + horizontal links + "Get a Quote" button right |
| Mobile nav drawer   | Full-screen dark green overlay, slides from right, expandable sub-menus, leaf decoration | N/A                                                       |
| Hero                | Full-width bg image, text overlay, stacked CTA buttons                                   | Split: text left, machinery image right                   |
| What We Do          | Vertical list — icon circle left + title/desc right                                      | 3-column icon card grid                                   |
| Our Process         | Vertical steps — icon circle + dashed connector line between steps                       | 4-column horizontal row with arrows                       |
| Packaging Formats   | Vertical list — product image left + name/size right, full-width CTA button              | Split: copy left + 4-col format grid right                |
| Industries We Serve | Stacked full-width image cards                                                           | 3-column image card grid                                  |
| Why Choose JMP      | Dark green section, vertical list — icon left + label/desc right                         | Dark green left panel, 2×2 icon grid                      |
| Let's Work Together | Stacked — heading + desc + primary button + ghost link                                   | Side-by-side with leaf decoration                         |
| Contact form        | Full width, stacked fields                                                               | 2-column (form left, details right)                       |
| Footer              | Stacked sections                                                                         | 3-column layout                                           |

### Mobile nav drawer detail

- Triggered by hamburger (≡) icon in navbar
- Full-screen dark green overlay (`#1a3d25`) slides in from right
- Close button (×) top right
- Nav items with expandable accordion sub-menus:
  - Home
  - About Us
  - Our Services ↓ (Toll Packing, Contract Filling, Custom Packaging)
  - Packaging Solutions ↓ (Bottles, Jerry Cans, Drums, IBC Totes)
  - Industries
  - Quality
  - Contact Us
- "Get a Quote" outlined button at bottom
- Olive branch leaf SVG decoration bottom-right corner of drawer

### Wave dividers

- Every section transition uses an SVG wave path — no straight borders
- Wave `fill` colour always matches the next section's background
- Wave height: 60–80px, `preserveAspectRatio="none"` for full-width stretch
- Section backgrounds in order: `#f0ede0` → `#f5f2e8` → `#e8edcc` → `#ffffff` → `#f5f2e8` → `#1e4a2c` / `#f0f4e0` → `#1a3d25`

### Decorative elements

- Olive branch / leaf SVGs: absolutely positioned on left/right edges of hero and select sections
- `pointer-events: none` on all decorative elements
- On mobile: leaves scale down or are hidden if they interfere with content

---

## SEO Setup

### Approach

Use `vite-ssg` to pre-render each route into static HTML at build time. This ensures Google receives real HTML content without needing to execute JavaScript.

### Build output structure

```
/dist
  index.html                        ← Home
  about/index.html                  ← About
  contract-packaging/index.html     ← Contract Packaging
  food-service/index.html           ← Food Service
  contact-us/index.html             ← Contact Us
```

### Per-page meta tags (react-helmet-async)

| Page               | Title                               | Description                                                                                                        |
| ------------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Home               | JM Purefoods Pty Ltd                | Australian edible oil production, contract packaging and food service supply. Pakenham, VIC.                       |
| About              | About Us \| JM Purefoods            | Learn about JM Purefoods — an Australian food company focused on edible oil production and supply chain solutions. |
| Contract Packaging | Contract Packaging \| JM Purefoods  | End-to-end edible oil contract packaging in Australia. Glass, PET, tins from 250ml to 5L. Private label support.   |
| Food Service       | Food Service Supply \| JM Purefoods | Bulk edible oil supply for restaurants, catering, and commercial kitchens across Australia.                        |
| Contact Us         | Contact Us \| JM Purefoods          | Get in touch with JM Purefoods Pty Ltd. Located in Pakenham VIC. ABN 91 690 274 901.                               |

### Additional SEO files

- `public/robots.txt` — allow all, reference sitemap
- `public/sitemap.xml` — list all 5 page URLs
- Submit sitemap to Google Search Console after deploy

---

## Task List

### Phase 1 — Setup

- [ ] Initialise Vite + React 19 project
- [ ] Install Tailwind CSS v4
- [ ] Install React Router v6
- [ ] Install vite-ssg + react-helmet-async
- [ ] Set up GitHub repo (`main` / `dev` / `feature/*` branching)
- [ ] Create folder structure: `src/pages/`, `src/components/`, `src/assets/`
- [ ] Add placeholder logo in `src/assets/`
- [ ] Configure global fonts and colour palette (Tailwind config / CSS variables)
- [ ] Set up routes in `routes.js` and update `main.jsx` to use `ViteSSG`

### Phase 2 — Shared Components

- [ ] Navbar — desktop horizontal + mobile hamburger icon
- [ ] Mobile nav drawer — full-screen dark green overlay, slide-in animation, expandable accordion sub-menus, leaf decoration, "Get a Quote" button
- [ ] Footer — links, contact info, ABN/ACN, copyright
- [ ] Button component (primary + outline + ghost variants)
- [ ] Section wrapper / container component
- [ ] Page hero banner component (reusable across pages)
- [ ] `WaveDivider` component — reusable SVG wave with configurable `fill`, `height`, and `flip` props
- [ ] `LeafDecoration` component — absolutely positioned olive branch SVG, configurable side (left/right) and opacity

### Phase 3 — Page Builds

- [ ] Home page:
  - [ ] Hero section (image bg, heading, CTA buttons, leaf decorations)
  - [ ] Wave divider → What We Do
  - [ ] What We Do (3 items: Toll Packing, Contract Filling, Custom Packaging)
  - [ ] Wave divider → Our Process
  - [ ] Our Process (4 steps with dashed connector on mobile, arrows on desktop)
  - [ ] Wave divider → Packaging Formats
  - [ ] Packaging Formats (Bottles, Jerry Cans, Drums, IBC Totes)
  - [ ] Wave divider → Industries We Serve
  - [ ] Industries We Serve (3 image cards)
  - [ ] Wave divider → Why Choose JMP + Let's Work Together
  - [ ] Why Choose JMP (dark green, 4 items) + Let's Work Together (CTA)
- [ ] About page — company intro, Story/Mission/Values, Why Choose Us
- [ ] Contract Packaging page — intro, capabilities grid, formats, private label, CTA
- [ ] Food Service page — intro, supply list, packaging formats, CTA
- [ ] Contact Us page — enquiry form + contact details block

### Phase 4 — SEO

- [ ] Add `<Helmet>` with title, description, OG tags to each page
- [ ] Add canonical URL per page
- [ ] Create `public/robots.txt`
- [ ] Create `public/sitemap.xml` with all 5 URLs
- [ ] Verify pre-rendering output with `npx vite-ssg build`
- [ ] Submit sitemap to Google Search Console after deploy

### Phase 5 — Form & Email Integration

- [ ] Create Formspree account and form endpoint
- [ ] Wire contact form to Formspree endpoint
- [ ] Add client-side validation (required fields, email format) using React Hook Form + Zod
- [ ] Add success / error feedback UI after submission
- [ ] End-to-end test: form → email arrives at info@jmpurefoods.com.au

### Phase 6 — Responsive QA

- [ ] Test hamburger icon triggers drawer correctly on mobile
- [ ] Test mobile nav drawer slide-in animation and close button
- [ ] Test expandable sub-menus in mobile nav drawer (Our Services, Packaging Solutions)
- [ ] Test hero image and text overlay on mobile (375px)
- [ ] Test What We Do switches from list (mobile) to 3-col grid (desktop)
- [ ] Test Our Process switches from vertical dashed steps (mobile) to horizontal arrows (desktop)
- [ ] Test Packaging Formats switches from vertical list (mobile) to split layout (desktop)
- [ ] Test Industries cards stack correctly on mobile
- [ ] Test wave dividers render correctly at all screen widths
- [ ] Test leaf decorations hidden or scaled correctly on mobile
- [ ] Test contact form usability on mobile
- [ ] Run Chrome DevTools device emulator across all 5 pages at 375px, 768px, 1280px
- [ ] Run Lighthouse mobile audit (target 90+ on Performance and Accessibility)
- [ ] Test on real iOS (Safari) and Android (Chrome) devices

### Phase 7 — Content Finalisation

- [ ] Swap logo placeholder with real logo (when ready)
- [ ] Add product / service photos when provided
- [ ] Optimise all images (WebP format, compress before upload)
- [ ] Review all copy with client

### Phase 8 — Deploy

- [ ] Deploy to Netlify (connect GitHub repo for auto-deploy on push)
- [ ] Connect domain `jmpurefoods.com.au` (when registered)
- [ ] Verify SSL certificate (auto-handled by Netlify)
- [ ] Cross-browser test (Chrome, Safari, Firefox, Edge)
- [ ] Test on real iOS and Android devices

---

## Formspree Integration (Contact Form)

No backend required. Formspree handles form submissions and forwards them to the configured email address.

```jsx
// ContactUs.jsx
const [status, setStatus] = useState("idle");

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
- SSL: Auto-provisioned by Netlify

## Animation (Framer Motion)

Install: `npm install framer-motion`

| Section                    | Animation                                                        |
| -------------------------- | ---------------------------------------------------------------- |
| Navbar                     | Logo + links fade in on load; mobile drawer slides in from right |
| Hero                       | Badge → heading → subheading → buttons fade up in sequence       |
| Section headings           | Fade up on scroll into view (`useInView`, `once: true`)          |
| What We Do items           | Stagger fade up on scroll                                        |
| Our Process steps          | Stagger fade up on scroll                                        |
| Packaging format items     | Spring pop-in on scroll                                          |
| Industry cards             | Stagger fade up on scroll                                        |
| Why Choose JMP items       | Stagger fade in on scroll                                        |
| Service / feature cards    | Lift up (`y: -6`) + shadow on hover                              |
| CTA buttons                | Scale pulse on hover                                             |
| Page transitions           | Fade in/out via `AnimatePresence` on route change                |
| Contact form success/error | Slide down on submit                                             |

---

## Colour Palette

| Token         | Hex       | Usage                          |
| ------------- | --------- | ------------------------------ |
| Brand green   | `#2d6a3f` | Buttons, icons, accents        |
| Dark green    | `#1e4a2c` | Why Choose JMP bg              |
| Footer green  | `#1a3d25` | Footer bg                      |
| Footer dark   | `#112a1a` | Footer bottom bar              |
| Hero bg       | `#f0ede0` | Hero section background        |
| Section cream | `#f5f2e8` | What We Do, Industries bg      |
| Section sage  | `#e8edcc` | Packaging Formats bg           |
| CTA bg        | `#f0f4e0` | Let's Work Together bg         |
| White         | `#ffffff` | Our Process bg, card bg        |
| Leaf accent   | `#7ab84a` | Why Choose JMP bar, leaf tones |

---

_Document last updated: April 2026_
