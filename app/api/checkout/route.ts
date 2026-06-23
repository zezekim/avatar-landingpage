import { NextResponse } from "next/server";
import Stripe from "stripe";
import { MAIN_PRODUCT, UPSELL_PRODUCT, buildOrder } from "@/lib/products";

// POST /api/checkout
// Body: { withUpsell: boolean }
// Returns: { url } — where the browser should redirect to pay.
//
// If STRIPE_SECRET_KEY is set, we create a real Stripe Checkout Session (test
// mode). If it's not set, we fall back to the built-in /checkout/mock page so
// the whole funnel is demonstrable without any credentials.
export async function POST(req: Request) {
  const { withUpsell } = (await req.json()) as { withUpsell?: boolean };
  const { items } = buildOrder(Boolean(withUpsell));

  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ||
    req.headers.get("origin") ||
    "http://localhost:3000";

  const secret = process.env.STRIPE_SECRET_KEY;

  // ---- Fallback: no Stripe key → mock checkout (keeps the demo self-contained)
  if (!secret) {
    const mockUrl = `${origin}/checkout/mock?upsell=${withUpsell ? "1" : "0"}`;
    return NextResponse.json({ url: mockUrl });
  }

  // ---- Real Stripe Checkout Session (test mode)
  try {
    const stripe = new Stripe(secret);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: items.map((p) => ({
        quantity: 1,
        price_data: {
          currency: "usd",
          unit_amount: p.priceCents,
          product_data: { name: p.name, description: p.tagline },
        },
      })),
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
      metadata: {
        main: MAIN_PRODUCT.id,
        upsell: withUpsell ? UPSELL_PRODUCT.id : "none",
      },
    });

    if (!session.url) throw new Error("Stripe did not return a checkout URL.");
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
