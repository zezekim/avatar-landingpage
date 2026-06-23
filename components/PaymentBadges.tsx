// Lightweight, dependency-free trust badges. Showing recognized payment marks
// and security signals next to a CTA reduces last-second "is this safe?"
// hesitation — a small but consistent lift right at the decision point.
export default function PaymentBadges({ className = "" }: { className?: string }) {
  const cards = ["VISA", "MC", "AMEX", "PayPal", "Pay"];
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      {cards.map((c) => (
        <span
          key={c}
          className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-bold tracking-wide text-slate-500 shadow-sm"
        >
          {c}
        </span>
      ))}
      <span className="rounded-md border border-green-200 bg-green-50 px-2.5 py-1 text-[11px] font-bold tracking-wide text-green-700 shadow-sm">
        🔒 SSL Secure
      </span>
    </div>
  );
}
