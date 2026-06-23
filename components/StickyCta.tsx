"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MAIN_PRODUCT, formatPrice } from "@/lib/products";
import Countdown from "./Countdown";

// A persistent buy bar that slides up once the visitor scrolls past the hero.
// Keeping the primary action permanently within reach (especially on mobile,
// where it docks to the bottom of the screen) is one of the most reliable
// conversion lifts on a long-scroll sales page.
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
        <div className="hidden sm:block">
          <p className="text-sm font-bold leading-tight">{MAIN_PRODUCT.name}</p>
          <p className="text-xs text-slate-500">
            Offer ends in <Countdown className="font-semibold text-red-600" /> ·{" "}
            <span className="font-semibold text-ink">
              {formatPrice(MAIN_PRODUCT.priceCents)}
            </span>{" "}
            <span className="text-slate-400 line-through">
              {formatPrice(MAIN_PRODUCT.compareAtCents!)}
            </span>
          </p>
        </div>
        <Link
          href="/checkout"
          className="cta-pulse w-full rounded-xl bg-brand-500 px-6 py-3 text-center font-bold text-white shadow-card transition hover:bg-brand-600 sm:w-auto"
        >
          Get instant access — {formatPrice(MAIN_PRODUCT.priceCents)} →
        </Link>
      </div>
    </div>
  );
}
