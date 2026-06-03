# ANEW Venue Booking — Valuation

> Estimate as of 2026-06-03. Covers the full platform: public site (`timberline-estate`),
> admin dashboard (`anew-admin`), and Stripe + Firebase backend.

## TL;DR

| | |
|---|---|
| **Fair market value, as-is (~95% complete)** | **$15k–22k** |
| **Finished & launched (solo-dev client project)** | **$15k–25k** |
| **Equivalent agency build cost** | **$40k–75k** |
| **Status** | Built, tested, deployed to staging. In **launch standby** — gated on client action, not engineering. |

## What's in scope

| Piece | Stack | Scope |
|---|---|---|
| Public site (`timberline-estate`) | Next.js 16, React 19, Tailwind 4, Framer Motion | ~6,080 LOC · 18 pages · 18 components |
| Admin dashboard (`anew-admin`) | Next.js 16, Firebase | ~1,450 LOC · 8 pages |
| Backend (Cloud Functions) | Stripe + Firebase | ~1,240 LOC |
| **Total app code** | | **~8,770 LOC** |

Features: 5-step booking flow with **real Stripe payments**, Firebase auth (guest + account),
chef portal, gallery, availability calendar, Hospitable reservation sync, full admin CRUD
dashboard, Firestore security rules, and a high-craft custom frontend (sound engine,
falling-leaves effect, 3D tilt, page transitions, hand-drawn dividers). The custom-design
layer is a meaningful share of the value — it does not read as a template.

## Build / replacement cost

| Component | Freelancer | Agency |
|---|---|---|
| Custom multi-page marketing site w/ premium animation | $6k–12k | $15k–30k |
| Booking flow + Stripe payments + backend functions | $5k–10k | $12k–20k |
| Admin dashboard | $3k–6k | $8k–14k |
| Auth, Firestore, security rules, deploy config | $2k–4k | $5k–10k |
| **Total** | **~$16k–32k** | **~$40k–75k** |

## Resale as a template

Low — **$500–3k**. Client-specific (ANEW branding, copy, Firebase project), so it would
need to be stripped to a generic template before resale.

## Why it isn't "live" yet

It is **~95% done, gated on the client**, not on remaining engineering. The only blockers
require client-provided access:

- Stripe **live** keys — waiting for client invite
- Hospitable dashboard access — waiting for client invite
- Final pricing confirmation — waiting for client reply
- Custom domain go-live — client decision

Technical work remaining is ~30–45 min (swap test keys → live, point the domain). The site
is already deployed at `bakkers-website-847ba.web.app`.

## Recurring-value note

Worth more as an ongoing asset than a one-time sale: a $150–500/mo maintenance/hosting
retainer is justifiable, and the platform processes real bookings for a venue that charges
$3k–9k per event.
