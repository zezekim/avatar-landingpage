# Conversion rationale

Why each piece is built the way it is. This is the "why" behind the funnel —
useful for the walkthrough and for anyone iterating on it later.

## Landing page (`/`)

- **One job per page, minimal navigation.** The header has no menu of links —
  only the logo and a "Get the ebook" button. Every extra link is a leak; on a
  paid-traffic landing page you want the *only* meaningful action to be "buy."
- **Headline mirrors the original + restates the core desire.** *"Stop overpaying
  for plumbing repairs you could do yourself"* leads with the prospect's pain and
  the transformation, not the product features.
- **Price anchoring.** The price is always shown as `$19` struck through from
  `$49`. The "real" value is set high so the actual price feels like a steal.
- **Pain → agitate → solve.** The "Sound familiar?" section reflects the
  reader's frustration back at them before offering relief — classic direct-
  response structure that increases emotional buy-in.
- **Benefit-led feature grid.** "What you'll be able to fix this weekend" frames
  features as outcomes ("stop the drip in 20 minutes") rather than chapters.
- **Layered social proof.** Star rating in the hero, hard numbers (14,000 sold,
  $680 saved, 4.9/5), and named testimonials. Proof appears *before* and *after*
  the ask so it's present at the decision moment.
- **Risk reversal.** A bold 30-day money-back guarantee removes the perceived
  risk of buying — one of the highest-leverage conversion elements for low-
  ticket info products.
- **Value framing at the CTA.** "One repair pays for it" reframes $19 as trivial
  next to a $150 callout — selling the gap, not the price.
- **Repeated, identical CTAs.** The same primary action appears in the hero, the
  closing section, and the header so the buy button is always within a thumb's
  reach as the visitor scrolls.

## Pre-checkout upsell / order bump (`/checkout`)

This is the **average-order-value (AOV) lever** and the part the brief asked for.

- **Placed at the moment of highest intent.** The bump is shown *after* the
  visitor has decided to buy but *before* payment. They've already crossed the
  "should I spend money" line, so adding a small complementary item is a much
  smaller decision.
- **Complementary, not competing.** The upsell (*Emergency Repair Toolkit*) pairs
  naturally with the main book — it deepens the same outcome instead of asking
  the buyer to choose between products.
- **Priced as a no-brainer.** `$9` add-on shown against its `$29` standalone
  price. A bump priced at a fraction of the main product converts far better than
  one priced near it.
- **Opt-in, not pre-ticked.** The box defaults to *off*. Pre-checking it can lift
  short-term revenue but creates refunds, chargebacks, and distrust (and is
  disallowed in some jurisdictions). The design instead makes the offer visually
  loud — dashed highlight border, "one-time offer" badge, scarcity line — to
  drive genuine opt-in.
- **Live order summary + single total.** The total updates instantly when the box
  is toggled, and the CTA button shows the exact amount, so there are no payment-
  page surprises (surprises are a top cause of checkout abandonment).
- **Trust signals at the payment step.** "Secure," "Powered by Stripe,"
  "encrypted," and the guarantee repeat right next to the button, where last-
  second hesitation happens.

## Checkout (`/api/checkout` + Stripe / mock)

- **Stripe-hosted checkout.** Offloading the card form to Stripe maximizes trust
  (a recognized, PCI-compliant brand) and conversion vs. a custom card form.
- **Graceful mock fallback.** With no key configured the funnel still completes
  end-to-end via a Stripe-look-alike page, so the demo and a fresh Vercel deploy
  are always clickable.

## What I'd test next (not yet built)

- A true **post-purchase upsell** (a one-click upsell *after* payment, where
  conversion is highest because no card re-entry is needed).
- **Exit-intent** offer on the landing page.
- A/B testing the order bump's default state, price point, and copy.
- Real **email delivery** of the download on the success page.
