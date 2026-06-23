// Single source of truth for the funnel's products and pricing.
// Prices are in cents (Stripe's unit). Edit here to re-price the whole funnel.

export type Product = {
  id: string;
  name: string;
  tagline: string;
  priceCents: number;
  compareAtCents?: number;
};

// The main product the landing page sells.
export const MAIN_PRODUCT: Product = {
  id: "playbook",
  name: "The Home Plumbing Playbook",
  tagline: "Fix 90% of household plumbing problems yourself — no plumber, no callout fee.",
  priceCents: 1900, // $19
  compareAtCents: 4900, // $49 — anchor price
};

// The pre-checkout upsell (order bump). Offered as an add-on before payment.
export const UPSELL_PRODUCT: Product = {
  id: "emergency-toolkit",
  name: "The Emergency Repair Toolkit",
  tagline:
    "The companion guide for burst pipes, overflowing toilets & no-hot-water emergencies — step-by-step under pressure.",
  priceCents: 900, // $9 add-on (vs $29 if bought later)
  compareAtCents: 2900,
};

// The post-purchase one-click upsell, shown on the success page AFTER payment.
// This slot converts highest because the buyer is past the hardest step and
// (with real Stripe) the saved card means a literal one-click add — no re-entry.
export const POST_PURCHASE_PRODUCT: Product = {
  id: "video-vault",
  name: "The Lifetime Video Vault",
  tagline:
    "Every repair in the book, filmed over-the-shoulder in HD — pause, rewind, and follow along at the sink. Lifetime access.",
  priceCents: 2700, // $27 one-click add-on
  compareAtCents: 9700,
};

export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(cents % 100 === 0 ? 0 : 2)}`;
}

// Given whether the upsell is selected, return the line items + total.
export function buildOrder(withUpsell: boolean) {
  const items: Product[] = [MAIN_PRODUCT];
  if (withUpsell) items.push(UPSELL_PRODUCT);
  const totalCents = items.reduce((sum, p) => sum + p.priceCents, 0);
  return { items, totalCents };
}
