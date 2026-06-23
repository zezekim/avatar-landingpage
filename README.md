# SilverbridgeDIY — Landing Page + Pre-Checkout Upsell Funnel

A Next.js (App Router) recreation of a YouTube-channel ebook landing page, built
as a reusable template. It demonstrates a complete conversion funnel:

**Landing page → Pre-checkout upsell (order bump) → Stripe checkout → Success**

The product is a DIY plumbing ebook (*The Home Plumbing Playbook*), with a
pre-checkout upsell for a second ebook (*The Emergency Repair Toolkit*).

> This is a demo template. Branding is fictional and not affiliated with any
> real service.

## The funnel

| Route | What it is |
| --- | --- |
| `/` | Landing page — hero, social proof, benefits, guarantee, FAQ, CTAs |
| `/checkout` | **Pre-checkout page with the upsell order bump** (the AOV driver) |
| `/api/checkout` | Creates a Stripe Checkout Session (or returns the mock URL) |
| `/checkout/mock` | A Stripe-look-alike checkout used when no Stripe key is set |
| `/success` | Post-purchase thank-you / delivery page |

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

No environment variables are required — the funnel runs fully with a built-in
**mock checkout** that mimics Stripe's hosted page (no real charges).

## Connecting real Stripe (test mode)

1. Copy `.env.example` to `.env.local`.
2. Add your **test-mode** secret key from
   [Stripe → Developers → API keys](https://dashboard.stripe.com/test/apikeys):

   ```
   STRIPE_SECRET_KEY=sk_test_xxx
   ```
3. Restart `npm run dev`. The funnel now creates a real Stripe Checkout Session
   and redirects to Stripe's hosted page. Use test card `4242 4242 4242 4242`.

If the key is absent, the app automatically falls back to `/checkout/mock`, so
nothing breaks in a demo or on a fresh Vercel deploy.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → import the repo → Deploy** (framework auto-detected
   as Next.js; no config needed).
3. (Optional) Add `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_SITE_URL` in Vercel's
   Environment Variables to enable real Stripe checkout.

## Editing products / prices

All product copy and pricing live in [`lib/products.ts`](./lib/products.ts) —
one file controls the landing page, the upsell, the order summary, and Stripe.

## Why it's built this way

See [`CONVERSION_NOTES.md`](./CONVERSION_NOTES.md) for the conversion-rate
reasoning behind each section and the upsell mechanics.

## Tech

Next.js 15 · React 18 · TypeScript · Tailwind CSS · Stripe SDK.
