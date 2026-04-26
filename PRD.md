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

- Hero: company tagline + short intro + CTA ("Get in Touch", "Our Services")
- Stats strip: packaging formats, markets, location, export-ready
- Service cards: Contract Packaging, Food Service, Private Label
- Footer CTA strip

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

| Section                      | Mobile                     | Desktop                         |
| ---------------------------- | -------------------------- | ------------------------------- |
| Navbar                       | Hamburger menu, stacked    | Horizontal links + phone number |
| Hero                         | Single column, stacked CTA | Split layout with image         |
| About (Story/Vision/Mission) | Stacked cards              | 3-column grid                   |
| Products/Services            | 1-col grid                 | 3-col grid                      |
| Packaging formats            | 2-col grid                 | 5-col grid                      |
| Contact form                 | Full width, stacked fields | 2-column (form + details)       |
| Footer                       | Stacked sections           | Multi-column layout             |

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

- [ ] Navbar — desktop horizontal + mobile hamburger menu with open/close toggle
- [ ] Footer — links, contact info, ABN/ACN, copyright
- [ ] Button component (primary + outline variants)
- [ ] Section wrapper / container component
- [ ] Page hero banner component (reusable across pages)

### Phase 3 — Page Builds

- [ ] Home page — hero, stats strip, 3 service cards, CTA strip
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

- [ ] Test navbar hamburger on mobile
- [ ] Test all grids collapse correctly at 375px / 768px / 1280px
- [ ] Test contact form usability on mobile
- [ ] Run Chrome DevTools device emulator across all 5 pages
- [ ] Run Lighthouse mobile audit (target 90+ on Performance and Accessibility)

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

---

_Document last updated: April 2026_
