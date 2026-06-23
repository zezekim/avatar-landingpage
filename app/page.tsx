import Link from "next/link";
import { MAIN_PRODUCT, UPSELL_PRODUCT, formatPrice } from "@/lib/products";
import Countdown from "@/components/Countdown";
import StickyCta from "@/components/StickyCta";
import ExitIntentModal from "@/components/ExitIntentModal";
import SocialProofToasts from "@/components/SocialProofToasts";
import PaymentBadges from "@/components/PaymentBadges";

// ---------------------------------------------------------------------------
// Small presentational helpers (kept local so the page is self-contained).
// ---------------------------------------------------------------------------

function PrimaryCTA({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="/checkout"
      className="cta-pulse inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-8 py-4 text-lg font-bold text-white shadow-card transition hover:bg-brand-600"
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

function Stars() {
  return (
    <span className="text-amber-400" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

function BookMockup() {
  // Pure-CSS book cover so there are zero image assets to manage / break.
  return (
    <div className="relative mx-auto w-60 sm:w-72">
      <div className="rotate-[-4deg] rounded-r-md rounded-l-sm bg-gradient-to-br from-brand-700 to-brand-900 p-6 shadow-2xl ring-1 ring-black/10">
        <div className="border-l-4 border-amber-400 pl-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-100">
            The
          </p>
          <h3 className="mt-1 text-2xl font-black leading-tight text-white">
            HOME
            <br />
            PLUMBING
            <br />
            PLAYBOOK
          </h3>
        </div>
        <p className="mt-8 text-[11px] leading-relaxed text-brand-100/80">
          The DIY repair manual every homeowner wishes they bought sooner.
        </p>
        <p className="mt-6 text-xs font-semibold text-amber-300">
          MARK SILVERBRIDGE
        </p>
      </div>
      <div className="absolute -bottom-3 left-1/2 h-3 w-44 -translate-x-1/2 rounded-full bg-black/20 blur-md" />
    </div>
  );
}

// ---------------------------------------------------------------------------

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Announcement bar — urgency + live countdown framing the launch price */}
      <div className="bg-ink px-4 py-2 text-center text-sm font-medium text-white">
        🔧 Launch price ends in{" "}
        <Countdown className="font-bold text-amber-300" /> —{" "}
        <span className="font-bold text-amber-300">
          {formatPrice(MAIN_PRODUCT.priceCents)}
        </span>{" "}
        <span className="text-white/60 line-through">
          {formatPrice(MAIN_PRODUCT.compareAtCents!)}
        </span>{" "}
        · instant download
      </div>

      {/* Minimal header. No nav links on purpose — fewer exits = higher conversion */}
      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
        <span className="text-lg font-extrabold tracking-tight">
          Silverbridge<span className="text-brand-500">DIY</span>
        </span>
        <Link
          href="/checkout"
          className="rounded-lg border border-brand-200 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
        >
          Get the ebook
        </Link>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 pb-16 pt-8 md:grid-cols-2 md:pt-14">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
            <Stars /> Rated 4.9 by 3,100+ homeowners
          </div>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
            Stop overpaying for plumbing repairs{" "}
            <span className="text-brand-500">you could do yourself.</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            The average plumber callout is <strong>$150 before they touch a
            thing.</strong> This ebook walks you — in plain English, with photos —
            through the 27 most common household plumbing fixes. No experience
            needed.
          </p>

          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <PrimaryCTA>Get instant access — {formatPrice(MAIN_PRODUCT.priceCents)}</PrimaryCTA>
            <span className="text-sm text-slate-500">
              ✅ 30-day money-back guarantee
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            Instant PDF download · Works on any device · 14,000+ copies sold
          </p>
          <PaymentBadges className="mt-4 justify-start" />
        </div>

        <div className="pt-6 md:pt-0">
          <BookMockup />
        </div>
      </section>

      {/* PAIN / AGITATE — mirror the reader's frustration before the solution */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-3xl font-bold">Sound familiar?</h2>
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
            {[
              "A dripping tap or running toilet you've “learned to live with.”",
              "A $200 invoice for a job that took the plumber 11 minutes.",
              "Waiting 3 days for an appointment while water damage spreads.",
            ].map((pain) => (
              <div
                key={pain}
                className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm"
              >
                <span className="mb-2 block text-2xl">😤</span>
                {pain}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-lg text-slate-600">
            Most home plumbing problems are <strong>genuinely simple</strong> once
            someone shows you the trick. That&apos;s the entire point of this book.
          </p>
        </div>
      </section>

      {/* WHAT'S INSIDE — benefit-led, not feature-led */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold">
          What you&apos;ll be able to fix this weekend
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["Leaky faucets & taps", "Stop the drip (and the rising water bill) in under 20 minutes with $4 of parts."],
            ["Running / weak toilets", "Diagnose the flapper, fill valve, or float — and fix it for a few dollars."],
            ["Clogged drains", "Clear blockages without caustic chemicals or a $180 rooter visit."],
            ["Low water pressure", "Find the real cause in 3 checks instead of guessing."],
            ["Under-sink leaks", "Spot, tighten, and seal joints the right way so they stay fixed."],
            ["Water heater basics", "Safe checks that tell you 'DIY' vs 'call a pro' before you spend a cent."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                ✓
              </div>
              <h3 className="font-bold">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="bg-brand-900 py-16 text-white">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            {[
              ["14,000+", "copies sold"],
              ["$680", "average saved in year one"],
              ["4.9/5", "from 3,100+ reviews"],
            ].map(([stat, label]) => (
              <div key={label}>
                <div className="text-4xl font-black text-amber-300">{stat}</div>
                <div className="mt-1 text-sm text-brand-100">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["“Fixed a running toilet that two plumbers ‘couldn't find.’ Paid for itself 10x over the first day.”", "— Dana R., Ohio"],
              ["“I'm not handy at all. The photos made it impossible to get wrong. Saved a $220 callout.”", "— Marcus T., Texas"],
              ["“Bought it after a burst pipe scare. Now my whole family knows what to do.”", "— Priya S., Florida"],
            ].map(([quote, name]) => (
              <figure key={name} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <Stars />
                <blockquote className="mt-3 text-sm text-brand-50">{quote}</blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-amber-300">
                  {name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-3xl">
          🧰
        </div>
        <h2 className="text-2xl font-bold">Who&apos;s Mark Silverbridge?</h2>
        <p className="mt-4 text-slate-600">
          22 years as a licensed plumber, and the guy his whole town texts before
          calling anyone else. He wrote this book because{" "}
          <strong>most of the jobs he gets paid for take minutes</strong> — and he
          got tired of watching people overpay for things they could easily handle.
        </p>
      </section>

      {/* VALUE STACK + BONUSES — inflate perceived value before the low price */}
      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold">Here&apos;s everything you get today</h2>
        <p className="mt-2 text-center text-slate-500">
          Plus 3 free bonuses included with your order this week:
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-card">
          {[
            [MAIN_PRODUCT.name, "The complete 27-fix DIY manual with step-by-step photos", MAIN_PRODUCT.compareAtCents!],
            [`BONUS: ${UPSELL_PRODUCT.name}`, "Stay calm and fix burst pipes & overflows under pressure", UPSELL_PRODUCT.compareAtCents!],
            ["BONUS: Printable Shut-Off Valve Map", "Find and label every shut-off in your home before an emergency", 1900],
            ["BONUS: 'Call a Pro or DIY?' Decision Cheatsheet", "Know in 10 seconds whether a job is safe to tackle yourself", 1500],
          ].map(([title, desc, value]) => (
            <div
              key={title as string}
              className="flex items-center justify-between gap-4 border-b border-slate-100 bg-white px-5 py-4 last:border-0"
            >
              <div>
                <p className="font-semibold">{title as string}</p>
                <p className="text-sm text-slate-500">{desc as string}</p>
              </div>
              <span className="shrink-0 text-sm text-slate-400 line-through">
                {formatPrice(value as number)}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between bg-slate-50 px-5 py-4">
            <span className="font-bold">Total value</span>
            <span className="font-bold text-slate-400 line-through">
              {formatPrice(
                MAIN_PRODUCT.compareAtCents! +
                  UPSELL_PRODUCT.compareAtCents! +
                  1900 +
                  1500
              )}
            </span>
          </div>
          <div className="flex items-center justify-between bg-brand-500 px-5 py-5 text-white">
            <span className="text-lg font-black">Yours today</span>
            <span className="text-2xl font-black">
              {formatPrice(MAIN_PRODUCT.priceCents)}
            </span>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <PrimaryCTA>Get it all for {formatPrice(MAIN_PRODUCT.priceCents)}</PrimaryCTA>
          <PaymentBadges className="mt-5" />
        </div>
      </section>

      {/* GUARANTEE / RISK REVERSAL */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-2xl px-5 text-center">
          <div className="rounded-3xl border-2 border-dashed border-brand-300 bg-white p-8">
            <div className="text-4xl">🛡️</div>
            <h2 className="mt-3 text-2xl font-bold">
              Fix one thing, or pay nothing.
            </h2>
            <p className="mt-3 text-slate-600">
              Read it, try it, and if you don&apos;t save the price of the book on
              your very first repair, email us within 30 days for a full refund.
              You keep the book. The risk is entirely on us.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h2 className="text-3xl font-black sm:text-4xl">
          One repair pays for it. The rest is money in your pocket.
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Get instant access for{" "}
          <span className="font-bold text-ink">
            {formatPrice(MAIN_PRODUCT.priceCents)}
          </span>{" "}
          <span className="text-slate-400 line-through">
            {formatPrice(MAIN_PRODUCT.compareAtCents!)}
          </span>
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryCTA>Get the Playbook now</PrimaryCTA>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Secure checkout · Instant download · 30-day guarantee
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <h2 className="mb-8 text-center text-2xl font-bold">Quick questions</h2>
        <div className="space-y-3">
          {[
            ["Do I need any tools or experience?", "No experience needed. Each fix lists the (cheap, common) tools required, and most need only a wrench and a screwdriver."],
            ["What format is it?", "An instant-download PDF you can read on your phone, tablet, or laptop — handy right next to the sink while you work."],
            ["What if it doesn't help me?", "30-day, no-questions money-back guarantee. If you don't save the price of the book, you don't pay for it."],
            ["Is the payment secure?", "Yes — checkout is processed by Stripe. We never see or store your card details."],
          ].map(([q, a]) => (
            <details
              key={q}
              className="group rounded-xl border border-slate-200 p-5 [&_summary]:cursor-pointer"
            >
              <summary className="flex items-center justify-between font-semibold">
                {q}
                <span className="text-brand-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 pb-28 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} SilverbridgeDIY · This is a demo template landing page.</p>
        <p className="mt-1">Not affiliated with any real plumbing service.</p>
      </footer>

      {/* Global conversion widgets (client-side) */}
      <StickyCta />
      <ExitIntentModal />
      <SocialProofToasts />
    </main>
  );
}
