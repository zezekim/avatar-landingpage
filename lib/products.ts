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
