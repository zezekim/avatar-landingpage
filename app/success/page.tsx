import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-5">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-card">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✅
        </div>
        <h1 className="mt-5 text-2xl font-bold">You&apos;re all set!</h1>
        <p className="mt-2 text-slate-600">
          Thank you for your purchase. Your download link is on its way to your
          inbox — check your email (and spam folder, just in case).
        </p>
        <div className="mt-6 rounded-xl bg-brand-50 p-4 text-sm text-brand-800">
          📥 Tip: save the PDF to your phone so it&apos;s with you at the sink.
        </div>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-600"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
