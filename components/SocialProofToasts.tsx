"use client";

import { useEffect, useState } from "react";

// Rotating "recent purchase" notifications. Live social proof at the edge of
// vision nudges fence-sitters by making the buying decision feel popular and
// normal ("other people like me are doing this right now").
//
// NOTE: These are illustrative demo entries for the template. For a real store,
// wire this to actual recent orders (e.g. a webhook-fed feed) — never fabricate
// sales, both for trust and for consumer-protection compliance.
const RECENT = [
  ["Sarah M.", "Austin, TX", "the Playbook + Emergency Toolkit"],
  ["James W.", "Manchester, UK", "the Home Plumbing Playbook"],
  ["Diego R.", "Phoenix, AZ", "the Playbook + Video Vault"],
  ["Aisha K.", "Toronto, CA", "the Home Plumbing Playbook"],
  ["Tom B.", "Leeds, UK", "the Playbook + Emergency Toolkit"],
  ["Mia L.", "Denver, CO", "the Home Plumbing Playbook"],
];

const MINUTES_AGO = [2, 4, 7, 9, 12, 18];

export default function SocialProofToasts() {
  const [index, setIndex] = useState(-1); // -1 = hidden

  useEffect(() => {
    let i = 0;
    let hideTimer: ReturnType<typeof setTimeout>;

    const cycle = () => {
      setIndex(i % RECENT.length);
      hideTimer = setTimeout(() => setIndex(-1), 4500); // visible window
      i += 1;
    };

    // First one after a short delay, then every ~9s.
    const startTimer = setTimeout(cycle, 3500);
    const loop = setInterval(cycle, 9000);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(hideTimer);
      clearInterval(loop);
    };
  }, []);

  if (index < 0) return null;

  const [name, place, product] = RECENT[index];
  const mins = MINUTES_AGO[index % MINUTES_AGO.length];

  return (
    <div className="fixed bottom-20 left-4 z-30 max-w-xs animate-[fadeIn_0.3s_ease] sm:bottom-24">
      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-card">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-lg">
          🛠️
        </div>
        <div className="text-sm leading-tight">
          <p className="font-semibold">
            {name} <span className="font-normal text-slate-500">· {place}</span>
          </p>
          <p className="text-slate-600">just bought {product}</p>
          <p className="text-xs text-slate-400">{mins} minutes ago · ✅ verified</p>
        </div>
      </div>
    </div>
  );
}
