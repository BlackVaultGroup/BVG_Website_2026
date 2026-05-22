# CLAUDE.md — Black Vault Group LLC

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.
- **Invoke the `ui-ux-pro-max` skill** for component patterns, UX checklists, and interaction guidance — but never adopt its color, font, or style suggestions. The brand system in this file overrides everything.
- **Check `brand_assets/`** before every session. Use any logos, lockups, or imagery found there. Never use placeholders where real assets exist.

---

## Project Identity

**Client:** Black Vault Group LLC
**Site:** blackvaultgroupllc.com
**Category:** Strategic AI consulting — not a chatbot vendor, not an automation agency, not a SaaS product
**Audience:** Founders, executives, operators, and decision-makers at $5M–$500M revenue companies
**The brief:** A discerning executive lands on this page and immediately thinks — *"These people know exactly what they're doing."*

### What Black Vault Is NOT
- A chatbot or phone dialer vendor
- A prompt engineering shop
- A generic "AI agency"
- A SaaS dashboard product

### What Black Vault IS
- A strategic AI consultancy
- A firm that solves real business problems using AI
- A premium partner for operators who think in outcomes, not tools

Every design and copy decision must reinforce this. If a section makes the site feel like a $299/month SaaS product, it has failed.

---

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch using the full brand system defined below.
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or the user says so.

---

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

---

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots save to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label: `node screenshot.mjs http://localhost:3000 label` → `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Always check: spacing/padding, font size/weight/line-height, exact hex colors, alignment, border-radius, shadows, image sizing.

---

## Output Defaults
- Single `index.html` file, all styles in a `<style>` block in `<head>`, unless told otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Google Fonts via preconnect (see Typography section below) — always load both fonts
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT/1A1A1A/C19A6B` (matches brand palette)
- Mobile-first responsive: `sm: 640px` / `md: 768px` / `lg: 1024px` / `xl: 1280px`

---

## Color System — MANDATORY, DO NOT DEVIATE
```css
/* Backgrounds */
--bv-bg-primary:    #0F0B0A;   /* Warm near-black — primary page background */
--bv-bg-secondary:  #1A1514;   /* Elevated surfaces, cards, panels */
--bv-bg-floating:   #221D1B;   /* Hover states, tooltips, modals */

/* Accent Palette — Champagne Gold */
--bv-accent-50:   #FAF5EE;
--bv-accent-100:  #EFE3CC;
--bv-accent-200:  #E0C9A0;
--bv-accent-300:  #C19A6B;   /* ← Default accent. CTAs, dividers, highlights */
--bv-accent-400:  #A87F52;
--bv-accent-500:  #8F673D;
--bv-accent-600:  #73512E;
--bv-accent-700:  #573C20;
--bv-accent-800:  #3B2814;
--bv-accent-900:  #1F140A;

/* Text */
--bv-text-primary:   #FFFFFF;
--bv-text-secondary: #A1A1AA;
--bv-text-muted:     #71717A;
```

**Accent usage rules:**
- `--bv-accent-300` (#C19A6B) is used for: primary CTAs, active nav, eyebrow labels, section dividers, key metric callouts, left-border card accents
- Maximum 1–2 accent touches per section
- Never use accent as a large background fill
- Never use Tailwind blue, indigo, purple, violet, or green as a primary brand color — ever

---

## Typography System

### Font Loading — Always Include Both
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,300;0,6..96,400;0,6..96,500;1,6..96,300;1,6..96,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Usage Rules
| Role | Font | Weight | Size | Tracking |
|---|---|---|---|---|
| Hero headline | Bodoni Moda | 300–400 | `clamp(3rem, 6vw, 5.5rem)` | `-0.02em` |
| Section headlines | Bodoni Moda | 400 | `clamp(2rem, 4vw, 3.5rem)` | `-0.01em` |
| Subheadlines | Jost | 300 | `1.125rem–1.25rem` | `0` |
| Body copy | Jost | 300–400 | `1rem` | `0` |
| Eyebrow labels | Jost | 500 | `0.75rem` | `0.14em` + uppercase |
| Nav links | Jost | 400 | `0.875rem` | `0.04em` |
| Buttons / CTAs | Jost | 500 | `0.875rem` | `0.06em` |

**Hard typography rules:**
- Bodoni Moda is for headlines only — never use it in buttons, nav, labels, or body
- Jost is for all UI elements and body copy — never substitute another sans
- Hero headline `line-height`: `1.05–1.1`
- Body `line-height`: `1.75`
- Eyebrow labels: always uppercase, always `--bv-accent-300`, always above a section headline
- Max body text width: `65ch`
- Apply tight tracking (`-0.02em to -0.03em`) on all large display headings
- Apply generous line-height (`1.7`) on all body copy

---

## Spacing System
```css
--space-xs:  0.5rem;    /*  8px */
--space-sm:  1rem;      /* 16px */
--space-md:  1.5rem;    /* 24px */
--space-lg:  2.5rem;    /* 40px */
--space-xl:  4rem;      /* 64px */
--space-2xl: 6rem;      /* 96px */
--space-3xl: 8rem;      /* 128px */
```

- Section vertical padding: `--space-3xl` top and bottom (128px minimum)
- Between eyebrow and headline: `--space-xs`
- Between headline and subheadline: `--space-md`
- Between subheadline and CTA: `--space-xl`
- Card grid gaps: `--space-lg` or `--space-xl`
- Never use random Tailwind steps (`py-7`, `mt-11`, `mb-14`) — map to these tokens only

---

## Surface & Depth System

Every surface must belong to one of these three levels. Never place two surfaces at the same level directly adjacent without a separator.

| Level | Background | Border | Use For |
|---|---|---|---|
| Base | `#0F0B0A` | none | Page background |
| Elevated | `#1A1514` | `1px solid rgba(255,255,255,0.06)` | Cards, nav (scrolled), panels |
| Floating | `#221D1B` | `1px solid rgba(193,154,107,0.15)` | Hover states, modals, tooltips |

---

## Component Specifications

### Buttons
```css
/* Primary — Filled */
background: #C19A6B;
color: #0F0B0A;
font-family: Jost, sans-serif;
font-size: 0.875rem;
font-weight: 500;
letter-spacing: 0.06em;
padding: 0.875rem 2rem;
border: none;
border-radius: 2px;
transition: background 0.2s ease, transform 0.15s ease;

/* Hover */
background: #D4B483;
transform: translateY(-1px);

/* Active */
transform: translateY(0);

/* Ghost */
background: transparent;
color: #C19A6B;
border: 1px solid #C19A6B;
/* Hover → filled version */
```

### Cards
```css
background: #1A1514;
border: 1px solid rgba(255,255,255,0.06);
border-radius: 4px;
padding: 2rem;
transition: border-color 0.2s ease;

/* Hover */
border-color: rgba(193,154,107,0.2);
```

### Eyebrow Labels
```css
font-family: Jost, sans-serif;
font-size: 0.75rem;
font-weight: 500;
letter-spacing: 0.14em;
text-transform: uppercase;
color: #C19A6B;
margin-bottom: 0.75rem;
```

### Dividers
```css
/* Accent divider (sparingly — 1 per section max) */
width: 40px;
height: 1px;
background: #C19A6B;
margin: 1.5rem 0;

/* Section separator */
border: none;
border-top: 1px solid rgba(255,255,255,0.06);
```

### Navigation
- Transparent on load → `#0F0B0A` + `border-bottom: 1px solid rgba(255,255,255,0.06)` on scroll
- Logo left, nav links center or right, single CTA button right
- Nav links: Jost 400, 0.875rem, `--bv-text-secondary`, hover → `--bv-text-primary`
- CTA: ghost button style, hover fills to `#C19A6B` with `#0F0B0A` text

---

## Animation & Motion Rules

Motion should be felt, not noticed. The user should sense quality, not see effects.
```css
/* Page load / scroll reveal — stagger by element */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;

/* Scroll reveal — IntersectionObserver */
/* Threshold: 0.15 | Stagger delay: 100ms per child element */

/* Card hover */
transition: border-color 0.2s ease;

/* Button hover */
transition: background 0.2s ease, transform 0.15s ease;
```

**Preferred easing:** `cubic-bezier(0.16, 1, 0.3, 1)` for reveals, `ease` for micro-interactions

**Only animate `transform` and `opacity`.** Never anything else.

**Forbidden — do not use under any circumstances:**
- `transition-all`
- Typing / typewriter animations
- Particle systems, canvas animations, floating blobs
- Parallax scrolling
- Spinning or pulsing elements
- Scroll-jacking
- Three.js, GSAP, Lottie, or any heavy animation library unless explicitly requested

---

## Page Structure — Required Section Order

Build the homepage in this exact order. Do not skip sections. Do not add sections not listed here.

1. **Navigation** — fixed, transparent → solid on scroll
2. **Hero** — full viewport, asymmetric layout, left-dominant headline, locked copy (see below)
3. **Social Proof Strip** — logo row, muted, thin
4. **Value Proposition** — 3-column typographic layout, no icons
5. **Services** — 2×2 card grid with left accent borders
6. **Proof / Outcomes** — 3 anonymous metric vignettes
7. **Process** — numbered steps, pure typographic treatment
8. **CTA / Close** — centered, single action
9. **Footer** — 4-column, no social icons unless requested

### Hero Layout
- Asymmetric split: headline dominates left 60% of viewport
- Thin vertical gold line (`#C19A6B`, 1px) dividing left and right
- Right side: small body copy + ghost CTA button stacked vertically
- Massive negative space above and below headline
- Subtle geometric thin-line abstract shapes in `#C19A6B` at 8% opacity — architectural, not decorative

### Hero Copy — LOCKED, DO NOT CHANGE

Primary:   "Strategic AI Solutions"
           "for Businesses"
Subhead:   I want you to decide what the subhead is.
CTAs:      "Schedule a Consultation"  (primary, filled)
           "See Our Work"             (secondary, ghost)

---

## Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette. All colors derive from the brand system above.
- **Shadows:** Never use flat `shadow-md`. Use layered, low-opacity shadows.
- **Typography:** Bodoni Moda for display, Jost for everything else. Tight tracking on large headings. `line-height: 1.75` on body.
- **Gradients:** Single subtle radial gradient on hero only — `#C19A6B` at 4–6% opacity, originating upper-center. No loud gradients anywhere.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Spacing:** Use the spacing tokens defined above. Never random Tailwind steps.
- **Depth:** Base → Elevated → Floating. Every surface belongs to a level.
- **Buttons:** `border-radius: 2px` maximum. No pill buttons.
- **Icons:** No icon libraries. Typography and thin borders carry the visual weight.
- **Emoji:** None. Anywhere. Ever.
- **Copy:** No lorem ipsum. Write real, professional placeholder copy in Black Vault's voice.

---

## Brand Voice

- Direct and confident — no hedging, no filler
- Outcome-focused: "We architect AI systems that reduce decision latency by 40%"
- Never write: "cutting-edge", "game-changing", "revolutionary", "transformative", "AI-powered", "next-level", "best-in-class"
- Speak to operators, not consumers
- Short sentences over long ones
- Active voice only

---

## Hard Rules

1. Do not add sections not listed in this file or requested by the user
2. Do not change the locked hero copy
3. Do not "improve" a reference design — match it exactly
4. Do not stop after one screenshot pass — minimum 2 comparison rounds
5. Do not use `transition-all`
6. Do not use default Tailwind blue / indigo / purple / violet as any brand color
7. Do not use pill-style buttons (`border-radius` > 4px)
8. Do not add particle effects, typing animations, Three.js backgrounds, or parallax
9. Do not use lorem ipsum copy anywhere
10. Do not use emoji anywhere on the page
11. The brand system in this file is the absolute source of truth. `ui-ux-pro-max` recommendations are for component patterns and UX checklists only — never adopt its color, font, or style suggestions
12. If a Stitch DESIGN.md is provided, use it for layout and structural reference ONLY. Never adopt its color tokens, font choices, or component styles — the BVG brand system in this CLAUDE.md overrides everything Stitch outputs.

---

## Design Philosophy

1. **Motion with purpose.** Animation shouldn't exist to decorate. It should clarify, guide, and reinforce meaning. When motion has purpose, the interface feels smarter and more alive.
2. **Contrast creates clarity.** Contrast is more than light and dark. It's the difference between what matters and what doesn't. It helps the user understand where to look, what to feel, and what to do.
3. **Emotion shapes experience.** Great websites don't just function. They create a mood. Through pacing, imagery, and composition, design turns interaction into feeling.
4. **Simplicity takes discipline.** Simple design comes from removing distractions until only the essential remains.

---

## Success Criteria

Before submitting any output, ask:

> "If a partner at a private equity firm or the operator of a $50M business landed on this page cold, would they immediately feel this firm is operating at their level?"

If the answer is no — or even "maybe" — keep working.

**The site must feel: expensive · calm · intelligent · precise · built for operators**

If it feels like it belongs on a $300/month SaaS landing page, it has failed. This should look like a $50k website. The theme is minimalistic luxury.
