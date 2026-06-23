"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Exit-intent recovery: when a desktop visitor moves the cursor up toward the
// browser chrome (a strong "about to leave" signal), we surface a one-time
// incentive. This recaptures a slice of visitors who would otherwise bounce
// with zero cost to the ones who were always going to buy.
const SEEN_KEY = "spx_exit_seen";

export default function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      /* ignore */
    }

    const onLeave = (e: MouseEvent) => {
      // Only trigger when the mouse exits through the TOP of the viewport.
      if (e.clientY <= 0) {
        setOpen(true);
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {
          /* ignore */
        }
        document.removeEventListener("mouseout", onLeave);
      }
    };

    // Give the visitor a moment before arming, so it never fires on load.
    const arm = setTimeout(() => {
      document.addEventListener("mouseout", onLeave);
    }, 4000);

    return () => {
      clearTimeout(arm);
      document.removeEventListener("mouseout", onLeave);
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
