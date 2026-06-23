# Loom walkthrough script

> **Heads up:** I (the AI assistant) can't record a Loom — that needs a screen +
> microphone. This is a ready-to-read narration script so you can record one in
> ~4 minutes without prep. Run `npm run dev`, open `http://localhost:3000`, hit
> record, and read along. Timestamps are approximate.

---

### 0:00 — Intro (on the landing page `/`)

> "Hey — this is a recreation of the Mark Silverbridge plumbing-ebook landing
> page, rebuilt in Next.js and React so it deploys to Vercel in one click. I kept
> the same offer — a DIY plumbing ebook — and rebuilt it as a clean, reusable
> template. Let me walk you through the funnel and why each piece is there, with
> conversions in mind."

### 0:25 — Hero (scroll slowly through the top)

> "The headline leads with the prospect's pain — *stop overpaying for repairs you
> could do yourself* — not with features. Right under it, the price is anchored:
> nineteen dollars struck through from forty-nine, so it reads as a discount. The
> star rating and '14,000 copies sold' put social proof above the fold, and
> there's a single call-to-action. Notice the header has no navigation menu — on
> a paid landing page every extra link is a way to leak the visitor, so the only
> real action is 'buy.'"

### 1:00 — Pain → benefits → proof (scroll down)

> "This 'Sound familiar?' block agitates the problem before offering relief —
> standard direct-response structure. Then the feature grid is written as
> outcomes — *stop the drip in twenty minutes* — instead of chapter titles.
> Below that, hard numbers and named testimonials, and a bold 30-day money-back
> guarantee. Risk reversal is one of the biggest levers for low-ticket products —
> it removes the 'what if it's useless' objection."

### 1:40 — Click a CTA → pre-checkout page (`/checkout`)

> "Now here's the part that actually raises revenue per visitor. When they click
> buy, they don't go straight to Stripe — they hit this pre-checkout page with an
> order bump."

### 2:00 — The upsell (toggle the checkbox on and off)

> "The main ebook is here, and this highlighted box is the upsell — a second,
> complementary ebook, the Emergency Repair Toolkit, for nine dollars instead of
> its usual twenty-nine. Two reasons this works: first, *timing* — the visitor
> has already decided to spend money, so adding a small related item is a tiny
> decision, not a new one. Second, *price* — at a fraction of the main product
> it's a no-brainer add-on. Watch the total and the button update live as I
> toggle it — no surprises at the payment screen, which is a top cause of
> abandoned carts. And I deliberately left it *unchecked* by default — pre-
> ticking it lifts revenue short-term but drives refunds and distrust, so instead
> I made the offer visually loud to earn a real opt-in."

### 2:50 — Continue to payment (click the button)

> "Continue to payment hands off to Stripe's hosted checkout. I'm running without
> live keys, so it drops to this built-in mock that mimics Stripe's page — which
> means the whole funnel is clickable in a demo or a fresh deploy with zero
> setup. With a real Stripe test key in the environment, this exact button
> creates a real Stripe Checkout Session instead — it's a one-line switch, no
> code change."

### 3:20 — Complete → success page (click Pay)

> "And paying lands on the success page — the delivery moment, where the download
> would be emailed. That's the full funnel: landing, pre-checkout upsell, Stripe,
> success."

### 3:35 — Wrap (optional: show the repo / Vercel)

> "Everything's in the repo — there's a CONVERSION_NOTES file explaining the
> reasoning behind every section, and all the products and prices live in one
> file so it's easy to re-skin for another offer. Push to GitHub, import to
> Vercel, done. Thanks!"

---

### Recording tips
- **Loom** (loom.com) or **CleanShot X** both record screen + voice in a click.
- Have two tabs ready: the running app and the GitHub repo.
- Toggling the upsell checkbox on camera is the single most important moment —
  linger on it so the live total update is visible.
