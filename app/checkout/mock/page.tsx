import Link from "next/link";
import { buildOrder, formatPrice } from "@/lib/products";

// A visual stand-in for Stripe Checkout, used when no STRIPE_SECRET_KEY is
// configured. It mimics Stripe's hosted page so the funnel is fully clickable
// end-to-end in a demo without any real keys or charges.
export default async function MockStripeCheckout({
  searchParams,
}: {
  searchParams: Promise<{ upsell?: string }>;
}) {
  const { upsell } = await searchParams;
  const withUpsell = upsell === "1";
  const { items, totalCents } = buildOrder(withUpsell);

  return (
    <main className="min-h-screen bg-white md:grid md:grid-cols-2">
      {/* Left: order summary (Stripe's dark left rail) */}
      <div className="bg-slate-900 px-6 py-10 text-white md:px-12 md:py-16">
        <div className="mx-auto max-w-sm">
          <Link href="/checkout" className="text-sm text-slate-400">
            ← Back
          </Link>
          <p className="mt-8 text-sm text-slate-400">Pay SilverbridgeDIY</p>
          <p className="mt-1 text-4xl font-bold">{formatPrice(totalCents)}</p>

          <div className="mt-10 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-slate-400">Qty 1 · digital download</p>
                </div>
                <span>{formatPrice(item.priceCents)}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between border-t border-white/10 pt-4 font-semibold">
            <span>Total due</span>
            <span>{formatPrice(totalCents)}</span>
          </div>
        </div>
      </div>

      {/* Right: payment form (non-functional demo) */}
      <div className="px-6 py-10 md:px-12 md:py-16">
        <div className="mx-auto max-w-sm">
          <div className="mb-6 rounded-lg bg-amber-50 p-3 text-xs text-amber-800">
            🧪 Demo checkout — this mimics Stripe&apos;s hosted page. No real card is
            charged. Add a <code>STRIPE_SECRET_KEY</code> to use real Stripe test mode.
          </div>

          <label className="block text-sm font-medium text-slate-600">Email</label>
          <input
            disabled
            placeholder="you@example.com"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />

          <label className="mt-4 block text-sm font-medium text-slate-600">
            Card information
          </label>
          <input
            disabled
            placeholder="4242 4242 4242 4242"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
          <div className="mt-2 grid grid-cols-2 gap-2">
            <input
              disabled
              placeholder="MM / YY"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              disabled
              placeholder="CVC"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          {/* In a real integration this would be the Stripe redirect. Here it
              just sends the user to the success page. */}
          <Link
            href="/success"
            className="mt-6 block w-full rounded-md bg-brand-500 py-3 text-center font-semibold text-white transition hover:bg-brand-600"
          >
            Pay {formatPrice(totalCents)}
          </Link>

          <p className="mt-4 text-center text-xs text-slate-400">
            🔒 Payments are secure and encrypted · Powered by Stripe
          </p>
        </div>
      </div>
    </main>
  );
}
