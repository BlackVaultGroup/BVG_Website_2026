# BlackVault Group LLC — Project Brief

## Verified Facts

- We have worked with multiple businesses that have earned 8 figures.

## Truth Rules (Non-Negotiable)

- Do not invent testimonials, clients, logos, case studies, ratings, awards, revenue, savings, conversion improvements, rankings, local affiliations, addresses, or usage counts.
- Remove claims such as "Trusted by 500+ founders," "elite," and any unsupported percentage or absolute performance claim.
- Do not publish bracketed placeholders.
- Do not state "sub-60-second response," "2–4 week deployment," "from $2,000," or similar specifics unless present in the verified fact block above.
- Any calculator result must be labeled an estimate, explain its assumptions, and never be presented as guaranteed recovered revenue.
- Do not create fake social proof. Use working demos, transparent process, clear pricing, and technical explanations as proof.

## Audience

Small and mid-sized business owners and operators arriving through outbound outreach, referrals, and direct traffic. Keep the homepage broadly relevant to SMBs; do not force a narrow industry niche.

## Positioning

BlackVault builds practical systems that stop leads from going cold, catch calls you'd otherwise miss, and cut the manual follow-up work eating your week. We lead with the business problem, not the AI, not a tool list.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home — broad SMB relevance, problem-first messaging |
| `/services` | Services overview |
| `/pricing` | Pricing transparency |
| `/hampton-roads` | Hampton Roads local page |
| `/resources` | Resources hub |
| `/contact` | Contact / strategy call request |

## Primary CTA

One consistent primary action throughout the site. Since `PRIMARY_CTA_URL` is not verified, route the CTA to `/contact` with the label "Talk through your workflow."

## Technical Architecture

- Vite + React 19 + TypeScript (existing stack, preserved)
- React Router DOM v7 for routing
- Tailwind CSS v4 with shadcn/ui components
- react-helmet-async for per-route SEO
- Supabase for form submissions (existing)
- No Three.js / WebGL dependency
- Content must render in static HTML without client-side JavaScript revealing headings or body copy
- Progressive enhancement: scroll animations are additive, never required for content visibility
- Semantic HTML, accessible components, responsive layouts
- Premium dark identity (`#0F0B0A` bg, `#C19A6B` gold accent)
- No CMS, database (beyond existing form), authentication, paid API, analytics, or deployment without explicit approval

## Acceptance Criteria

- [ ] Page content appears in server-generated/static HTML
- [ ] Keyboard navigation and visible focus styles work
- [ ] Mobile layout works at 360px width
- [ ] No unverified claims or fake proof appear
- [ ] No Three.js/WebGL dependency is installed
- [ ] No bracketed placeholders published
