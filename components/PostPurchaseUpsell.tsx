"use client";

import { useState } from "react";
import { POST_PURCHASE_PRODUCT, formatPrice } from "@/lib/products";

// One-click post-purchase upsell on the success page. This is the single
// highest-converting upsell position in a funnel: the customer has already paid
// and trusts you, and with a real saved Stripe card this is a literal one-click
// add with no friction. We frame it as a one-time, this-page-only deal.
export default function PostPurchaseUpsell() {
  const [state, setState] = useState<"offer" | "added" | "declined">("offer");
  const [loading, setLoading] = useState(false);

  async function addUpsell() {
    setLoading(true);
    // In a live integration this would charge the saved payment method via the
    // Stripe API (PaymentIntent off_session) — no new checkout, truly one click.
    // For the demo we simulate the confirmation.
    await new Promise((r) => setTimeout(r, 600));
    setState("added");
    setLoading(false);
  }

  if (state === "added") {
    return (
      <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-5 text-sm text-green-800">
        🎉 Added! <strong>{POST_PURCHASE_PRODUCT.name}</strong> is on its way to your
        inbox too. Enjoy.
      </div>
    );
  }

  if (state === "declined") return null;

  return (
    <div className="mt-8 rounded-3xl border-2 border-amber-300 bg-amber-50/70 p-6 text-left">
      <div className="mb-2 inline-block rounded-full bg-amber-400 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
        One-time offer · this page only
      </div>
      <h3 className="text-lg font-black">
        Add {POST_PURCHASE_PRODUCT.name} for {formatPrice(POST_PURCHASE_PRODUCT.priceCents)}?
      </h3>
      <p className="mt-2 text-sm text-slate-600">{POST_PURCHASE_PRODUCT.tagline}</p>
      <p className="mt-2 text-sm">
        <span className="font-bold text-brand-700">
          {formatPrice(POST_PURCHASE_PRODUCT.priceCents)}
        </span>{" "}
        <span className="text-slate-400 line-through">
          {formatPrice(POST_PURCHASE_PRODUCT.compareAtCents!)}
        </span>{" "}
        — no need to re-enter your details, it&apos;s one click.
      </p>
      <button
        onClick={addUpsell}
        disabled={loading}
        className="cta-pulse mt-4 w-full rounded-xl bg-brand-500 px-6 py-3 font-bold text-white shadow-card transition hover:bg-brand-600 disabled:opacity-60"
      >
        {loading ? "Adding…" : `✅ Yes, add it for ${formatPrice(POST_PURCHASE_PRODUCT.priceCents)}`}
      </button>
      <button
        onClick={() => setState("declined")}
        className="mt-2 w-full text-center text-sm text-slate-400 underline"
      >
        No thanks, I&apos;ll pass on this one-time deal
      </button>
    </div>
  );
}
