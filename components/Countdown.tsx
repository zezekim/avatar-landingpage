"use client";

import { useEffect, useState } from "react";

// Evergreen countdown: the first time a visitor lands, we stamp a deadline N
// hours out in localStorage. It then counts down consistently across page
// changes and refreshes (instead of obviously resetting on every load), which
// is how real evergreen funnels create honest, persistent urgency.
const WINDOW_HOURS = 6;
const STORAGE_KEY = "spx_offer_deadline";

function getDeadline(): number {
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) {
      const ts = parseInt(existing, 10);
      if (!Number.isNaN(ts) && ts > Date.now()) return ts;
    }
  } catch {
    /* localStorage unavailable (SSR / privacy mode) — fall through */
  }
  const fresh = Date.now() + WINDOW_HOURS * 60 * 60 * 1000;
  try {
    localStorage.setItem(STORAGE_KEY, String(fresh));
  } catch {
    /* ignore */
  }
  return fresh;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function Countdown({ className = "" }: { className?: string }) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const deadline = getDeadline();
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Render a stable placeholder on the server / first paint to avoid hydration
  // mismatch, then swap in the live timer.
  if (remaining === null) {
    return <span className={className}>06:00:00</span>;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  return (
    <span className={`tabular-nums ${className}`}>
      {pad(h)}:{pad(m)}:{pad(s)}
    </span>
  );
}
