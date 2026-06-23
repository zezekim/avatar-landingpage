import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Home Plumbing Playbook — Stop Overpaying for Repairs You Could Do Yourself",
  description:
    "The step-by-step ebook that helps homeowners fix 90% of plumbing problems themselves and skip the $150+ callout fee. Instant download.",
  openGraph: {
    title: "The Home Plumbing Playbook",
    description:
      "Stop overpaying for plumbing repairs you could do yourself. Instant-download ebook.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
