# Cal.com Embed Integration Plan

Status: implementation plan only; no booking code or Cal.com configuration has been changed  
Repository: `BVG_Website_2026`  
Working branch: `codex/backend-dashboard-implementation`  
Prepared: 2026-08-19

## 1. Mission and outcome

Add one primary end-user booking flow to the BlackVault Group website using a Cal.com embed, not the Cal.com Scheduling API. The final conversion section will say **Book a call**. A visitor will first complete the existing BlackVault qualification form; only after that form is valid and successfully stored will the site reveal Cal.com availability and let the qualified visitor choose a time and confirm the booking without leaving the BlackVault website.

The implementation must:

- keep the current Vite/React site and BlackVault visual identity;
- use one Cal.com event-type link;
- keep Supabase as the source of truth for the initial qualification submission and Cal.com as the source of truth for the scheduled appointment;
- avoid an on-site admin panel;
- avoid the paid Scheduling API;
- minimize Lighthouse and Core Web Vitals impact;
- remain safe across React Router route changes;
- provide a usable fallback when Cal.com or its script is blocked;
- document third-party data and cookie behavior before release;
- deploy from the existing Codex Git branch through the approved Netlify workflow.

## 2. Repository findings

### Framework and deployment

- Vite 7, React 19, TypeScript, and React Router 7.
- Tailwind CSS 4 plus component-level styles and existing BlackVault CSS variables.
- Client-rendered SPA; this is not Next.js and does not currently server-render.
- `public/_redirects` sends all routes to `index.html` for React Router.
- Production is served by Netlify.
- The homepage is assembled in `src/App.tsx` and ends with `CTAClose`, then the footer.

### Current booking behavior

- `src/components/schedule-call-provider.tsx` exposes `openModal()` globally.
- `src/components/schedule-call-modal.tsx` collects qualification data and inserts it into Supabase.
- The navigation, homepage close, service pages, and How It Works page all open that same form.
- After submission, the user sees “Request Received,” but no live calendar or available time is presented.
- Therefore the current experience is an inquiry form, not a completed booking flow.
 


### Existing brand tokens

The current site tokens in `src/index.css` are the source of truth:

| Role | Existing token/value |
|---|---|
| Main background | `#0F0B0A` |
| Secondary background | `#1A1514` |
| Floating/card background | `#221D1B` |
| Primary gold | `#C19A6B` |
| Gold hover | `#D4B483` |
| Primary text | `#FFFFFF` |
| Secondary text | `#A1A1AA` |
| Muted text | `#71717A` |
| Base radius | `0.125rem` / approximately `2px` |
| Display font | Bodoni Moda |
| Body font | Jost |

Cal.com's internal font may not be completely replaceable through the standard embed. Color, surface, border, radius, and surrounding BlackVault typography should carry most of the visual alignment.

## 3. Funnel decision: qualification first, scheduling second

### Recommendation

Use this sequence:

1. Visitor clicks **Book a call** from any approved CTA.
2. The existing BlackVault qualification form opens.
3. The website validates and normalizes the submitted fields.
4. The qualification record is successfully stored in Supabase.
5. The same BlackVault-owned modal advances to the scheduling step and loads the Cal.com inline embed.
6. Visitor sees their detected time zone and actual availability.
7. Visitor chooses a date and time.
8. Cal.com uses its minimal booking confirmation step. No custom Cal questions are configured; default name and email are prefilled from in-memory React state where the embed supports it.
9. Visitor confirms and receives Cal.com's booking confirmation.

Do not show Cal.com availability before the BlackVault form has been successfully stored. Do not advance merely because client-side validation passed.

### Why this is the better primary flow

- It preserves BlackVault's required qualification gate before calendar access.
- It captures a valid inquiry even when the visitor does not finish scheduling.
- It fixes the current broken expectation by continuing from “request received” into actual availability instead of ending prematurely.
- It prevents unqualified visitors from immediately consuming calendar capacity.
- It retains one user-facing flow even though Supabase and Cal.com have separate responsibilities.
- Prefilling supported Cal fields avoids making the visitor retype information already supplied.

### Tradeoff

Qualification-first adds more friction than showing availability immediately and creates two records that cannot be authoritatively linked without a trusted server-side identifier or later webhook integration. The initial embed-only release should therefore:

- treat a stored qualification as an inquiry, not a booking;
- treat Cal.com as authoritative for whether a meeting was actually scheduled;
- keep the visitor in one uninterrupted modal flow;
- avoid claiming that the Supabase inquiry and Cal booking are server-verified as the same record;
- disable all optional/custom Cal questions and prefill Cal's unavoidable default identity fields where supported;
- provide a retry/fallback if Cal fails after the qualification has already been stored.

## 4. Recommended embed approach

### Decision: advanced JavaScript inline embed

Use Cal.com's advanced JavaScript inline embed initialized by a small React wrapper inside the existing BlackVault-owned scheduling dialog. The standard Cal embed still renders its booking experience in a managed iframe internally, but the JavaScript layer supplies lifecycle control, customization, prefill configuration, events, and failure handling.

Do not use a hand-authored raw `<iframe>` as the primary implementation.

### Why advanced JavaScript is preferred

| Requirement | Advanced JavaScript embed | Raw iframe |
|---|---|---|
| Load only after intent | Strong control | Possible, but manual |
| Cal UI customization | `Cal("ui", ...)`, themes, CSS variables | Mostly URL/account settings |
| Readiness/failure events | `linkReady`, `bookerReady`, `linkFailed` | No supported parent lifecycle |
| Booking success signal | `bookingSuccessfulV2` | No supported direct signal |
| SPA cleanup and re-init | Can be namespaced and managed | Manual element lifecycle only |
| Dynamic height handling | Managed by Cal embed communication | More manual and fragile |
| Fallback timing | Can react to failure/timeout | Only generic iframe timeout behavior |
| Lighthouse control | Script can be loaded only after stored qualification | Iframe often encourages eager third-party load |

Cal.com documents inline embeds, UI instructions, namespaced embed events, and CSS-variable theming. Sources: [embed instructions](https://cal.com/help/embedding/embed-instructions), [embed events](https://cal.com/help/embedding/embed-events), and [CSS-variable customization](https://cal.com/docs/developing/guides/embeds/customize-embed-css-variables).

### Why inline inside the BlackVault dialog instead of a Cal-generated popup

- The existing qualification form already uses a BlackVault-owned Radix dialog.
- The form and calendar can become two steps in one controlled experience without opening a second modal on top.
- BlackVault retains control of the step indicator, heading, supporting copy, spacing, loading state, consent disclosure, and fallback.
- The final homepage section can say **Book a call** without permanently placing a third-party iframe in the page layout.
- Route changes, mobile focus, scroll locking, and cleanup can be owned by one React state machine.

The Cal embed must not load when the dialog first opens. It should load only after the qualification form is valid and Supabase confirms the insert. The dialog then transitions to a reserved scheduling region and initializes Cal.com. This reduces initial third-party cost, prevents Cal.com data transfer before the user reaches scheduling, and enforces the qualification-first requirement.

## 5. Proposed user experience

### Homepage

- Replace the current final inquiry CTA with a final section identified by `id="book-a-call"`.
- Heading: **Book a call**.
- Keep concise BlackVault-controlled supporting copy above the embed.
- Primary button: **Book a call**.
- Clicking opens Step 1, the existing qualification form; it does not load Cal.com yet.
- Keep the existing form submit action; do not add a **Continue to scheduling** button or any intermediate click.
- Immediately after a successful Supabase insert, automatically transition the same dialog to Step 2, reserve the calendar's expected height, show a branded loading state, and initialize Cal.com.
- Keep a direct Cal.com fallback inside Step 2: “Having trouble? Open scheduling in a new tab.”
- Do not auto-open the dialog or load Cal.com on ordinary page load.

### Other CTAs

All current scheduling CTAs should open the same two-step flow through the existing global provider:

- desktop and mobile navigation;
- homepage close;
- service-page closing CTAs;
- How It Works scheduling CTAs.

The final homepage CTA must visibly say **Book a call**. CTAs on service routes may open the same dialog in place so the visitor is not forced to navigate away. There must never be a second independent form or embed instance.

### Booking completion

- Let Cal.com own its normal confirmation screen and calendar invitation.
- Listen to `bookingSuccessfulV2` only for non-authoritative UI/analytics actions such as marking the local shell complete.
- Do not treat a browser event as verified server-side proof and do not use it to write a trusted booking record to Supabase.
- Do not display an additional BlackVault success message until Cal.com reports success.
- If the visitor closes the dialog after qualification but before booking, retain the Supabase inquiry as unscheduled; do not mark it booked.

## 6. Cal.com event-type configuration

The event type must be configured and tested in Cal.com before code is enabled.

### Event basics

- One event type, for example `blackvault/strategy-call`.
- Confirm the event title, duration, location, host calendar, availability schedule, buffer times, minimum notice, booking window, rescheduling, cancellation, and confirmation behavior.
- Ensure conflict calendars are connected and real busy periods remove availability.
- Use the public event-type link, not a dashboard URL.

### Cal.com booking fields: no custom questions

Cal.com's booking form includes name and email by default. Cal.com can support custom required/optional questions, but BlackVault will not configure any custom Cal questions in this release. The existing BlackVault form already collects the necessary qualification information. Sources: [Booking Questions](https://cal.com/help/event-types/booking-questions) and [Prefill booking form in Embed](https://cal.com/help/embedding/prefill-booking-form-embed).

#### Information collected by the BlackVault qualification form

| Current website field | Required | Treatment before scheduling |
|---|---:|---|
| Full name | Yes | Validate, store in Supabase, keep in React memory for Cal's default name prefill |
| Business name | Yes | Validate and store; do not ask again in Cal initially |
| Email | Yes | Normalize, validate, store, and prefill Cal's default email field |
| Phone | No | Normalize and store in Supabase only; do not create a Cal phone question |
| Company size | Yes | Store in Supabase; do not duplicate in Cal |
| Area of interest | Yes | Store in Supabase; do not duplicate because there is one event type |
| Preferred meeting time | Remove | The Cal calendar replaces this free-text field |
| Additional context | No | Store in Supabase; do not automatically copy into Cal unless BlackVault explicitly wants it in calendar details |

#### What Cal.com should show

- Keep only Cal.com's required default name and email booking fields.
- Prefill name and email from the successfully submitted BlackVault form.
- Disable/remove custom questions, phone, notes, and guest fields in the Cal event configuration where the dashboard allows it.
- Do not recreate company name, company size, area of interest, preferred time, primary challenge, or additional context in Cal.com.
- If Cal.com still displays its required name/email confirmation, that is a booking-platform requirement rather than a second qualification questionnaire.

#### Prefill rules

- Pass only name and email through the advanced embed's `config` object from React state after the Supabase insert succeeds.
- Do not place personal information in the browser URL or enable broad automatic query-parameter forwarding.
- Do not use hidden metadata to imply server-verified linkage in the initial embed-only release.
- Treat prefilled name/email as user-confirmable unless the Cal account explicitly supports and has approved read-only-on-prefill behavior.
- If the direct-link fallback opens because the embed failed, warn that Cal may ask the visitor to re-enter name/email because safely transferring in-memory values to a new tab without putting PII in the URL is not guaranteed.

Keep the Cal confirmation step to its unavoidable defaults. Do not collect sensitive personal data, credentials, customer records, regulated data, or confidential workflow details through either system.

### Consent wording

- Booking confirmation email is transactional and should not be combined with marketing consent.
- Do not enable Cal.com SMS reminders or add an SMS question in the initial release.
- If BlackVault wants promotional follow-up, collect separate, explicit marketing consent; do not infer it from booking.

## 7. Embed configuration and brand alignment

### Cal embed UI options

Use a dedicated namespace such as `blackvault-book-call` so initialization and event listeners do not collide with other scripts.

Recommended options:

- Theme: `dark`.
- Layout: `month_view` initially; validate on phone widths before finalizing.
- `hideEventTypeDetails`: `false`, because duration, meeting purpose, and time-zone context help visitors make a confident selection.
- Keep Cal.com's time-zone selector visible and test its detected value.
- Do not use `forwardQueryParams` in the initial release.

### CSS-variable mapping

Pass BlackVault colors through Cal.com's supported `cssVarsPerTheme.dark` map:

| Cal variable | Proposed value |
|---|---|
| `cal-brand` | `#C19A6B` |
| `cal-brand-emphasis` | `#D4B483` |
| `cal-brand-text` | `#0F0B0A` |
| `cal-brand-subtle` | muted gold derived from `#C19A6B` |
| `cal-brand-accent` | `#0F0B0A` |
| `cal-text` | `#A1A1AA` |
| `cal-text-emphasis` | `#FFFFFF` |
| `cal-text-subtle` | `#A1A1AA` |
| `cal-text-muted` | `#71717A` |
| `cal-text-inverted` | `#0F0B0A` or white after visual verification |
| `cal-bg` | `#1A1514` |
| `cal-bg-emphasis` | `#221D1B` |
| `cal-bg-subtle` | `#221D1B` |
| `cal-bg-muted` | `#0F0B0A` |
| `cal-bg-inverted` | `#FFFFFF` |
| `cal-border` | `rgba(255,255,255,0.10)` represented by a supported solid/alpha value |
| `cal-border-emphasis` | `#C19A6B` |
| `cal-border-subtle` | `rgba(255,255,255,0.06)` represented by a supported value |
| `cal-border-booker` | `rgba(193,154,107,0.30)` represented by a supported value |
| `cal-border-booker-width` | `1px` |
| `radius` | `2px` |

Verify contrast inside Cal.com's actual rendered states rather than assuming token substitution is sufficient. Error, success, disabled-date, focused-input, selected-date, and hover states must remain readable.

## 8. File-level implementation plan

### Add

| Path | Responsibility |
|---|---|
| `src/config/cal.ts` | Validate/read the public Cal link, namespace, layout, and BlackVault Cal UI token map. No secrets. |
| `src/lib/cal-embed.ts` | Idempotent client-only script loader, Cal command queue typing, singleton promise, timeout handling, and supported event subscription helpers. |
| `src/types/cal-embed.d.ts` | Minimal TypeScript declarations for `window.Cal` and supported public events. |
| `src/components/cal-booking-embed.tsx` | Post-qualification inline embed lifecycle, in-memory prefill, reserved container, loading/ready/error states, cleanup, and external fallback link. |
| `src/components/qualification-form.tsx` | Extracted existing BlackVault form UI and validation so the dialog can orchestrate it as Step 1. |
| `src/lib/cal-embed.test.ts` | Script-loader idempotency, timeout, and failure tests. |
| `src/components/cal-booking-embed.test.tsx` | Component state and fallback behavior tests, if a DOM test environment is added. |

### Modify

| Path | Planned change |
|---|---|
| `src/main.tsx` | Place `BrowserRouter` above the booking provider so the provider can reset safely on route changes. |
| `src/App.tsx` | Remove the nested `BrowserRouter` while preserving the current route table. |
| `src/components/schedule-call-provider.tsx` | Keep and refactor into the one global two-step state machine: qualification, scheduling, completion/failure, close/reset. |
| `src/components/schedule-call-modal.tsx` | Keep the BlackVault dialog shell; render the qualification form first and mount `CalBookingEmbed` only after confirmed storage. |
| `src/components/sections/cta-close.tsx` | Keep the final section, change its heading/primary button as approved so the last action clearly says **Book a call**. |
| `src/components/navigation.tsx` | Change `Start Now` and mobile equivalent to **Book a call**; keep opening the one global flow. |
| `src/components/service-page-layout.tsx` | Keep closing CTAs connected to the one global flow; do not instantiate another embed. |
| `src/pages/how-it-works.tsx` | Keep scheduling CTAs connected to the same global flow. |
| `src/lib/intake.ts` | Retain validation/normalization, remove `preferred_meeting_time`, and keep protected operational fields out of the client payload. |
| `src/lib/intake.test.ts` | Update tests for the qualification-first payload and transition gate. |
| `src/pages/privacy-policy.tsx` | Identify Cal.com as the scheduling provider and describe booking/technical data, cookies, purposes, and links to Cal.com's privacy information. Correct the current domain wording while editing. |
| `.env.example` | Add the public Cal event link and optional feature flag. |
| `README.md` | Document local and Netlify configuration plus the fallback test procedure. |
| `public/robots.txt` / `public/sitemap.xml` | No booking URL should be added because the embed is a section, not an indexable local route. Verify no change is required. |

### Retain and refactor

The Supabase qualification form, provider, modal shell, and intake contract remain part of the primary flow. They are not fallback code and must not be removed. The old terminal “Request Received” state is replaced by the scheduling step; a stored qualification alone must not appear as a completed booking.

Do not add a separate **Continue to scheduling** control. The existing form submission action stores the qualification and automatically advances to scheduling on success.

## 9. Environment and configuration

### Local file

Add these public values to the ignored repository-root `.env.local`:

- `VITE_CAL_LINK=your-cal-username/strategy-call`
- `VITE_CAL_EMBED_ENABLED=true`

The link is public and not a credential. Store only the Cal path/slug, not arbitrary embed HTML. Do not add Cal API keys, OAuth secrets, or Scheduling API credentials; this integration does not need them.

### Netlify

Add the same variables to the appropriate Netlify deploy contexts:

- local/development;
- Deploy Preview/staging;
- production only after approval.

Use a real test event or Cal test mode for preview validation where available. Do not point a public preview at unrestricted production availability until the booking notifications and host calendar behavior have been reviewed.

### Brand configuration

Keep colors in `src/config/cal.ts`, sourced conceptually from `src/index.css`, rather than environment variables. Colors are versioned design configuration, not environment-specific secrets. Add a comment linking each Cal token to the BlackVault token it mirrors.

## 10. Safe loading and SPA lifecycle

### Script loading

- Do not paste Cal.com's script directly into `index.html`.
- Do not load the script during initial application bootstrap.
- Load it from a React effect only after the qualification insert succeeds and the dialog enters the scheduling step.
- Guard all `window` and `document` access so the component remains safe if SSR/prerendering is introduced later.
- Mark the remote script asynchronous and use one stable element ID.
- Cache one loader promise so React Strict Mode cannot inject the script twice.
- Initialize one namespace and avoid global wildcard listeners.

### Route changes

- Keep one provider and one modal instance for the whole SPA.
- Move the router above the provider so the flow can observe `location.pathname`.
- On route departure, close/reset the dialog, unsubscribe documented Cal event listeners, and clear embed-owned nodes from the container unless product testing proves preserving the open flow is preferable.
- Keep the shared remote script cached rather than repeatedly downloading it.
- Reinitialize the inline embed when the scheduling step remounts; never append a second iframe to an existing container.
- Do not rely on Cal.com's internal `__routeChanged` event because Cal documents double-underscore events as internal and unstable.

### Supported public events

Use only documented public events:

- `linkReady` or `bookerReady`: replace the loading state;
- `linkFailed`: show the fallback;
- `bookingSuccessfulV2`: optional non-authoritative UI/analytics signal;
- optionally `bookerViewed`: measure that the scheduler became visible, if analytics is approved.

## 11. Performance and Lighthouse controls

- No Cal.com network request before the qualification form has been successfully stored.
- Avoid adding `@calcom/embed-react` unless the generated snippet proves it is needed; the lightweight script wrapper avoids increasing the first-party JavaScript bundle.
- Do not call Cal `preload` on initial page load.
- When the dialog advances to Step 2, reserve a responsive minimum height before inserting the embed: establish values from staging measurements for desktop and mobile rather than guessing permanently.
- Use a skeleton or progress state with fixed dimensions so the iframe's arrival does not shift surrounding content.
- Because expansion is caused by user input, its layout movement is less likely to count as unexpected CLS, but the expanded region must still be stable.
- Add `preconnect`/`dns-prefetch` only after intent or omit them if measurement shows no material gain.
- Keep the final section's BlackVault heading and CTA server-independent and immediately renderable.
- Measure Lighthouse before and after in mobile and desktop modes, both before opening the flow and after a test qualification advances to scheduling.
- Record script transfer, iframe transfer, main-thread time, LCP, CLS, INP, and total blocking time.
- Set an eight-to-ten-second readiness timeout, then expose the fallback without trapping the user.

## 12. Failure and accessibility behavior

### Failure cases

- Script blocked by an ad/privacy extension.
- Cal.com origin unavailable.
- Invalid or unpublished event link.
- No availability.
- Third-party cookies/storage blocked.
- Slow network or iframe never reports ready.
- Route changes during load.

### Required fallback

The scheduling step must always retain a normal HTTPS link to the same Cal.com event. On `linkFailed` or timeout:

- show a concise message that scheduling could not load;
- offer **Open scheduling in a new tab**;
- offer a retry that reuses the singleton loader safely;
- do not claim the user is booked;
- do not silently fall back to the old Supabase success screen.

### Accessibility

- Use a real button for **Book a call** and a real anchor for the external fallback.
- Move focus to the booking region or its status heading after expansion without stealing focus during ordinary scrolling.
- Use an `aria-live="polite"` status for loading/failure.
- Preserve visible focus styles.
- Verify keyboard access through date, time, time-zone, question, confirmation, reschedule, and cancellation controls.
- Test at 200% zoom and with reduced motion.
- Verify the embedded UI's accessible name and iframe title generated by Cal.com.

## 13. Security, privacy, GDPR, and cookies

### Data passed to Cal.com

When the script or iframe is loaded, Cal.com may receive technical/usage data such as IP address, browser/device information, referrer or page context, timestamps, and diagnostic data. In this minimal configuration, Cal.com receives the selected time, detected/selected time zone, name, and email when a booking is submitted. No custom question answers, phone number, or notes should be sent to Cal.com.

Do not pass Supabase record IDs, internal lead status, secrets, private notes, or customer data into the embed.

Keep automatic query-parameter forwarding disabled initially. Cal.com warns that forwarded parameters are passed as-is and should not contain sensitive information: [Auto-forwarding Query Parameters](https://cal.com/help/embedding/embed-auto-forward-query-params).

### Cookie implications

Cal.com's general privacy policy describes usage data and session, preference, security, and advertising cookies. That does not prove that every category is set by this exact embed, so staging must inventory the cookies and requests produced by the actual event embed rather than making an unsupported claim. Source: [Cal.com Privacy Policy](https://cal.com/privacy).

The current BlackVault privacy policy says the site does not use advertising cookies or cross-site tracking and does not name Cal.com. That statement must be reconciled with measured embed behavior before release.

### Recommended consent behavior

Privacy-by-default implementation:

1. Render the BlackVault qualification step without loading Cal.com.
2. Explain before submission that successful qualification continues to scheduling provided by Cal.com and link to the updated privacy policy.
3. If a consent manager is adopted, classify Cal.com under a clearly named functional/scheduling category and prevent the script from loading until the required consent state exists.
4. For EU/UK visitors, obtain legal/privacy review of whether the embed's actual cookies require prior consent. If non-essential cookies or tracking fire, block the embed until opt-in; a general “by using this site” banner is not sufficient.
5. Make rejection as accessible as acceptance in any banner and keep the external scheduling link subject to the same clear disclosure.
6. Store no booking PII in consent logs.

Submitting the qualification form and continuing to scheduling is strong evidence of user intent to use the scheduler, but it should not automatically be treated as valid consent for unrelated analytics or advertising. This plan is technical guidance, not legal advice.

### Other controls

- If a Content Security Policy is introduced, derive the minimum `script-src`, `frame-src`, `connect-src`, `img-src`, and `style-src` Cal domains from staging network evidence.
- Do not use `postMessage` data from unknown origins; rely on Cal.com's supported event layer.
- Do not log full event payloads, invitee answers, email addresses, phone numbers, or meeting URLs to the console or analytics.
- Review Cal.com's DPA/subprocessors and retention settings for the business's jurisdiction and commitments.

## 14. Step-by-step implementation tasks

### Phase A — Cal.com account readiness

1. Create or select the single event type.
2. Confirm the final public Cal link.
3. Configure real availability, conflict calendars, duration, location, buffers, notice, window, cancellation, and rescheduling.
4. Remove/disable all custom booking questions; retain only Cal.com's required default name/email fields and verify embed prefill.
5. Decide whether bookings confirm immediately or require organizer approval.
6. Configure transactional email confirmation/reminders; leave SMS reminders disabled for the initial release.
7. Set Cal.com account/event appearance to dark with the BlackVault gold.
8. Generate the official advanced inline embed snippet and retain it as implementation reference; do not paste it directly into `index.html`.

Exit: the event works correctly at its direct Cal.com URL before website integration.

### Phase B — Configuration and loader

1. Add the public environment variables and `.env.example` documentation.
2. Add typed config with link validation and safe disabled behavior when missing.
3. Add the idempotent client-only script loader.
4. Add documented public event subscriptions and cleanup.
5. Add unit tests for duplicate calls, success, timeout, script error, and retry.

Exit: the loader cannot add duplicate scripts or leak listeners under React Strict Mode.

### Phase C — One booking component

1. Refactor the existing provider/modal into a two-step state machine.
2. Keep the current qualification form as Step 1 and remove the obsolete preferred-time field.
3. Advance only after validation and a confirmed Supabase insert.
4. Preserve only name and email in React memory for Cal prefill.
5. Mount one inline Cal embed as Step 2.
6. Add loading, ready, failure, and completed states.
7. Apply dark theme and BlackVault CSS variables.
8. Reserve measured dimensions for mobile and desktop.
9. Add the direct-link fallback and retry.
10. Verify Cal displays no custom questions and uses prefilled name/email in its minimal confirmation step.

Exit: a user cannot see availability before stored qualification and can complete a test booking without retyping the full questionnaire.

### Phase D — Consolidate CTAs and routing

1. Keep the homepage closing section and change its final action to **Book a call**.
2. Rename navigation CTA labels to **Book a call**.
3. Keep every scheduling CTA connected to the one global provider/modal.
4. Move `BrowserRouter` above the provider so route changes can close and clean up the flow safely.
5. Verify that no route creates a second provider, form, or embed.

Exit: there is one primary qualification-then-scheduling flow and no CTA ends at the old non-booking success screen.

### Phase E — Privacy, accessibility, and performance

1. Update the BlackVault privacy policy for Cal.com and correct any stale domain text.
2. Capture an actual cookie/network inventory in a clean browser profile.
3. Implement consent gating if the measured behavior or applicable jurisdiction requires it.
4. Run keyboard, screen-reader-oriented, zoom, reduced-motion, and contrast checks.
5. Run Lighthouse before/after and adjust load timing/reserved height.
6. Verify no PII is logged or forwarded through URLs.

Exit: policy, implementation, and measured browser behavior agree.

### Phase F — Staging, rollout, and rollback

1. Keep changes on the Codex feature branch.
2. Add `VITE_CAL_LINK` and `VITE_CAL_EMBED_ENABLED=true` only to a Netlify Deploy Preview context first.
3. Complete the full QA matrix with a clearly labeled internal test booking.
4. Cancel/remove the test booking and confirm host calendar/notification cleanup.
5. Review the diff for secrets, unrelated copy changes, and the old duplicate flow.
6. Obtain explicit production deployment approval.
7. Add production variables, deploy the approved commit, and smoke-test one labeled booking.
8. Monitor Cal load failures and booking notifications after release.

Rollback: disable the feature flag and redeploy the last known-good build, or revert the integration commit. Retain the direct Cal link as an emergency manual fallback. Do not reactivate the old Supabase success message as if it were booking confirmation.

## 15. QA checklist

### Functional

- [ ] Every CTA opens the same global two-step flow.
- [ ] **Book a call** opens the BlackVault qualification form first.
- [ ] Cal.com makes no network request before qualification storage succeeds.
- [ ] Invalid qualification data cannot advance to scheduling.
- [ ] A Supabase insert failure cannot advance to scheduling.
- [ ] A successful qualification advances to actual availability.
- [ ] No API key or paid Scheduling API is used.
- [ ] Correct event type, duration, host, and location appear.
- [ ] No custom Cal.com questions, phone, notes, or guest fields appear.
- [ ] Name/email are prefilled without appearing in the URL.
- [ ] Company name, company size, area of interest, and additional context are not asked twice.
- [ ] Only Cal.com's unavoidable default booking identity fields remain.
- [ ] A completed test creates exactly one Cal.com booking.
- [ ] Confirmation, calendar invitation, reschedule, and cancellation links work.
- [ ] No old website form claims success without a booked time.
- [ ] Closing after qualification retains an unscheduled inquiry and never marks it booked.

### Desktop and mobile

- [ ] Chrome desktop at common widths.
- [ ] Safari desktop.
- [ ] Chrome Android or responsive real-device equivalent.
- [ ] Safari iPhone, including keyboard appearance and viewport resizing.
- [ ] Narrow mobile width without horizontal scrolling.
- [ ] Tablet portrait and landscape.
- [ ] 200% zoom.

### Time zones and dates

- [ ] Detected time zone matches the device.
- [ ] User can change time zone.
- [ ] Selected time matches confirmation and host calendar.
- [ ] Test Eastern, Pacific, UTC, and one non-U.S. zone.
- [ ] Test a daylight-saving transition week.
- [ ] Locale/date formatting is understandable.

### SPA and lifecycle

- [ ] Open from homepage.
- [ ] Navigate from each service route to booking.
- [ ] Browser Back/Forward behaves predictably.
- [ ] Reopen after leaving and returning; only one iframe exists.
- [ ] React Strict Mode does not add duplicate scripts/listeners.
- [ ] Route away during slow loading; no late DOM injection or console error.

### Failure modes

- [ ] Block Cal.com with an ad blocker/privacy extension.
- [ ] Simulate offline mode.
- [ ] Simulate slow 3G and script timeout.
- [ ] Test invalid link in a preview context.
- [ ] Verify `linkFailed` and timeout show the fallback.
- [ ] External fallback opens the correct HTTPS event link.
- [ ] No false booking success is shown.

### Privacy and cookie banner

- [ ] Clean-profile cookie inventory before opening the scheduler.
- [ ] Cookie/network inventory after opening and after booking.
- [ ] If consent-gated, reject prevents Cal script/iframe requests.
- [ ] Accept loads the scheduler once.
- [ ] Consent state persists only as documented.
- [ ] Privacy policy names Cal.com and accurately describes measured behavior.
- [ ] No PII appears in URL query strings, console logs, or analytics payloads.

### Lighthouse and visual stability

- [ ] Mobile and desktop Lighthouse before interaction.
- [ ] No Cal request on initial load.
- [ ] No unexpected CLS when the booking region becomes ready.
- [ ] Booking UI remains usable after load.
- [ ] BlackVault background, gold, text contrast, borders, and radius are consistent.
- [ ] Loading and failure states match the site.

## 16. Rollout recommendation

Use the optional feature flag for the first release because the current site already has an inquiry flow and the Cal link is not final in the repository.

1. Build with `VITE_CAL_EMBED_ENABLED=false` by default when the value is missing.
2. Enable it in Netlify Deploy Preview with the real or controlled test event.
3. Validate branding, absence of custom questions, email notifications, calendars, privacy, and performance.
4. Enable in production only after the event and fallback are verified.
5. Keep the qualification form as Step 1 and remove only the old terminal success behavior; do not leave a separate inquiry-only path competing with the combined flow.
6. Keep the flag for one rollback window, then remove it once the embed is stable.

## 17. Future upgrades

These are intentionally outside the initial embed-only release:

### Expanded prefill

- The initial release prefills only name/email from in-memory state.
- Future work may prefill additional matching booking-question identifiers if a webhook or other trusted process needs those values attached to the booking.
- Continue preferring in-memory embed configuration over putting PII in the page URL.
- Keep Cal.com's automatic `forwardQueryParams` disabled unless an allowlist strips everything except approved UTM keys.

### UTM attribution

- Forward only allowlisted `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term` values.
- Never forward arbitrary query parameters.
- Define retention and analytics consent before enabling tracking.

### Verified booking synchronization

- If a later Cal.com plan supports the required webhook functionality, add signed webhook processing for booking created, rescheduled, and canceled events.
- Verify signatures, enforce idempotency, and reconcile missed events before writing booking status to Supabase.
- Do not substitute the browser `bookingSuccessfulV2` event for a webhook.

### Qualification and routing

- If BlackVault later adds multiple event types or staff, evaluate Cal.com Routing Forms or team routing.
- If questions are introduced later, give them stable identifiers so answers can map cleanly.

### Analytics

- Add consent-aware events for booking CTA click, booker ready/viewed, fallback shown, and booking success.
- Do not send question answers or contact details to analytics.

## 18. Decisions required before coding

1. Final Cal.com event-type link.
2. Event duration, meeting location, availability, notice, buffers, and booking window.
3. Confirm that all custom Cal questions, phone, notes, and guests are disabled and only required default name/email remain.
4. Immediate confirmation versus organizer approval.
5. Confirm SMS reminders remain disabled for the initial release.
6. Privacy/consent treatment for target jurisdictions after the staging cookie inventory.
7. Whether the current closing-section copy should be retained above **Book a call** or shortened in a separately approved copy change.

Only one decision is needed to begin the technical build: the final Cal.com event-type link or an approved placeholder/test link. Account-level questions and privacy behavior must be resolved before production enablement.
