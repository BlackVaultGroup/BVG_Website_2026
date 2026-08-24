# Backend and Dashboard Implementation Status

Updated: 2026-08-19

## Safety boundary

- Working repository: `BVG_Website_2026`
- Working branch: `codex/backend-dashboard-implementation`
- Starting commit: `7a90685`
- No production deployment, merge, Supabase restore, database write, or hosting change has been performed.
- Public-site copy, layout, animation, and visual design are unchanged.

## Confirmed baseline

- Runtime verified with Node `24.14.1` and npm `11.11.0`.
- Clean dependency installation succeeds from the committed lockfile.
- TypeScript typecheck succeeds.
- Production build succeeds.
- Live hosting provider is Netlify, confirmed from public response headers.
- The production frontend targets Supabase project `wvhotmaqtrpziuajcxxd`, confirmed from its public JavaScript bundle.
- The matching Supabase project is named `bolt-native-database-65705419` and is currently inactive.
- Local `.env.local` contains the expected public variables and is ignored by Git.
- Supabase schema, migration history, policies, grants, functions, triggers, Auth configuration, and advisors remain unverified because the database is inactive.

## Implemented locally

- Added a versioned Zod contract for strategy-call intake.
- Added trimming, email normalization, enum validation, and input-length limits.
- Removed the client-controlled `status` value from browser inserts.
- Added automated tests for normalization, invalid enums, protected-field rejection, and maximum lengths.
- Added a secret-free `.env.example`.
- Added Vitest as an exactly pinned development dependency.
- Applied lockfile-safe dependency security updates; `npm audit` reports zero known vulnerabilities.

## Transitional behavior

The public form still inserts directly into `discovery_call_requests`. This remains transitional. It must not be switched to an Edge Function until the verified database schema and the protected endpoint are available together; changing the client first would break submissions.

## Required gate before database-backed implementation

Explicit approval is required before restoring the inactive production-linked Supabase project. After restoration, Phase 0 must inventory and reconcile the live schema before any migration is authored or applied. A nonproduction Supabase branch is preferable for testing migrations, RLS, Auth, and the dashboard before production changes.

## Verification commands

```text
npm run test
npm run typecheck
npm run build
npm audit
```

