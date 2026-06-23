"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MAIN_PRODUCT,
  UPSELL_PRODUCT,
  buildOrder,
  formatPrice,
} from "@/lib/products";

export default function PreCheckoutPage() {
  // The order bump: defaults to OFF so the add-on is an active opt-in (cleaner
  // intent + avoids surprise charges), but it's visually loud to drive uptake.
  const [withUpsell, setWithUpsell] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { items, totalCents } = buildOrder(withUpsell);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ withUpsell }),
      });
      if (!res.ok) throw new Error("Could not start checkout.");
      const data = (await res.json()) as { url: string };
      window.location.href = data.url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          Silverbridge<span className="text-brand-500">DIY</span>
        </Link>
        <span className="text-sm text-slate-400">🔒 Secure checkout</span>
      </header>

      <div className="mx-auto max-w-2xl px-5 pb-20">
        <h1 className="text-2xl font-bold">Review your order</h1>
        <p className="mt-1 text-sm text-slate-500">
          You&apos;re one step away. Confirm what you want, then continue to payment.
        </p>

        {/* Main item */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-bold">{MAIN_PRODUCT.name}</h2>
              <p className="mt-1 text-sm text-slate-500">{MAIN_PRODUCT.tagline}</p>
            </div>
            <div className="text-right">
              <div className="font-bold">{formatPrice(MAIN_PRODUCT.priceCents)}</div>
              {MAIN_PRODUCT.compareAtCents && (
                <div className="text-xs text-slate-400 line-through">
                  {formatPrice(MAIN_PRODUCT.compareAtCents)}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* PRE-CHECKOUT UPSELL (order bump) — the AOV driver                  */}
        {/* ----------------------------------------------------------------- */}
        <label
          className={`mt-4 block cursor-pointer rounded-2xl border-2 border-dashed p-5 transition ${
            withUpsell
              ? "border-brand-500 bg-brand-50"
              : "border-amber-400 bg-amber-50/60"
          }`}
        >
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              checked={withUpsell}
              onChange={(e) => setWithUpsell(e.target.checked)}
              className="mt-1 h-5 w-5 accent-brand-500"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
                  One-time offer
                </span>
                <span className="text-sm font-bold text-brand-700">
                  Add it for {formatPrice(UPSELL_PRODUCT.priceCents)}
                </span>
                {UPSELL_PRODUCT.compareAtCents && (
                  <span className="text-xs text-slate-400 line-through">
                    {formatPrice(UPSELL_PRODUCT.compareAtCents)}
                  </span>
                )}
              </div>
              <h2 className="mt-2 font-bold">
                ✅ Yes — add {UPSELL_PRODUCT.name}
              </h2>
              <p className="mt-1 text-sm text-slate-600">{UPSELL_PRODUCT.tagline}</p>
              <p className="mt-2 text-xs font-medium text-brand-700">
                You won&apos;t see this {formatPrice(UPSELL_PRODUCT.priceCents)} price
                again — it&apos;s {formatPrice(UPSELL_PRODUCT.compareAtCents!)} on its own.
              </p>
            </div>
          </div>
        </label>

        {/* Order summary */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between py-1 text-sm">
              <span className="text-slate-600">{item.name}</span>
              <span className="font-medium">{formatPrice(item.priceCents)}</span>
            </div>
          ))}
          <div className="mt-3 flex justify-between border-t border-slate-200 pt-3 text-lg font-bold">
            <span>Total</span>
            <span>{formatPrice(totalCents)}</span>
          </div>
        </div>

        {error && (
          <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</p>
        )}

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="cta-pulse mt-6 w-full rounded-xl bg-brand-500 px-8 py-4 text-lg font-bold text-white shadow-card transition hover:bg-brand-600 disabled:opacity-60"
        >
          {loading ? "Redirecting to secure payment…" : `Continue to payment · ${formatPrice(totalCents)}`}
        </button>

        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-400">
          <span>🔒 256-bit encrypted</span>
          <span>Powered by Stripe</span>
          <span>30-day guarantee</span>
        </div>

        <p className="mt-6 text-center">
          <Link href="/" className="text-sm text-slate-400 underline">
            ← Back to the page
          </Link>
        </p>
      </div>
    </main>
  );
}
