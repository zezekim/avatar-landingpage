"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Exit-intent recovery: surface a one-time incentive the moment a visitor
// signals they're leaving, recapturing a slice of would-be bounces at no cost
// to committed buyers.
//
// We listen for TWO leave signals, because mouse-to-top alone is unreliable
// (it misses trackpad/touch users and fires erratically over child elements):
//   1. Cursor exiting through the top of the viewport (classic desktop signal).
//   2. The tab becoming hidden — switching tabs, switching apps, or minimizing
//      (Page Visibility API). This is the robust, device-agnostic signal and is
//      what makes the popup demo reliably: switch tabs and back, and it's there.
//
// DEMO MODE: this fires on EVERY exit signal, not once per session. A real store
// would suppress repeats (e.g. a sessionStorage flag) so it doesn't nag — but
// for demoing we want it to re-trigger on each tab switch.

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let armed = false;

    const trigger = () => {
      if (!armed) return; // ignore signals during the initial grace period
      setOpen(true); // re-opens on every signal; listeners stay attached
    };

    const onMouseOut = (e: MouseEvent) => {
      // Fire only when the pointer actually leaves the window through the top,
      // not when it merely crosses between child elements (relatedTarget set).
      if (e.clientY <= 0 && !e.relatedTarget) trigger();
    };

    const onVisibility = () => {
      if (document.visibilityState === "hidden") trigger();
    };

    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("visibilitychange", onVisibility);

    // Short grace period so it never fires on initial load.
    const arm = setTimeout(() => {
      armed = true;
    }, 1500);

    return () => {
      clearTimeout(arm);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-2xl leading-none text-slate-400 hover:text-slate-600"
          aria-label="Close"
        >
          ×
        </button>
        <div className="text-4xl">✋</div>
        <h2 className="mt-3 text-2xl font-black">Wait — don&apos;t pay a plumber yet</h2>
        <p className="mt-3 text-slate-600">
          Before you go, take <strong>an extra $5 off</strong>. Grab the full
          Playbook for just <span className="font-bold text-brand-600">$14</span>{" "}
          — that&apos;s less than the parts for a single repair.
        </p>
        <Link
          href="/checkout"
          onClick={() => setOpen(false)}
          className="cta-pulse mt-6 block w-full rounded-xl bg-brand-500 px-6 py-4 text-lg font-bold text-white shadow-card transition hover:bg-brand-600"
        >
          Claim my $5 off →
        </Link>
        <button
          onClick={() => setOpen(false)}
          className="mt-3 text-sm text-slate-400 underline"
        >
          No thanks, I&apos;d rather keep overpaying
        </button>
      </div>
    </div>
  );
}
