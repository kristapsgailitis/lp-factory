import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "scandiweb commerce accelerators",
  description:
    "Productized commerce platforms for vertical retailers — configured to your stack, live in weeks.",
  robots: { index: false, follow: false },
};

const CATEGORIES: { slug: string; title: string; tagline: string; count: string }[] = [
  {
    slug: "accelerators",
    title: "Accelerators",
    tagline:
      "Productized commerce platforms for vertical retailers. Configured to your stack, live in weeks.",
    count: "2 verticals",
  },
];

export default function IndexPage() {
  return (
    <main className="min-h-screen bg-[var(--sw-black)] text-white px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-3xl mx-auto">
        <span className="label-code text-white/55">scandiweb · pages</span>
        <h1 className="font-head text-white text-[40px] md:text-[64px] leading-[1.05] mt-4 mb-6">
          scandiweb pages
        </h1>
        <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[60ch] mb-14">
          Custom pages on scandiweb.com – grouped by category. Each category is
          a folder under <code className="text-[var(--sw-mint)]">app/</code>.
        </p>
        <ul className="flex flex-col gap-4">
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/${c.slug}`}
                className="group block rounded-[3px] border border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05] transition-colors p-6"
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <span className="font-head text-white text-[22px] md:text-[26px] leading-tight group-hover:text-[var(--sw-mint)] transition-colors">
                    {c.title}
                  </span>
                  <span className="label-code text-white/45 group-hover:text-[var(--sw-mint)] transition-colors">
                    /{c.slug} · {c.count}
                  </span>
                </div>
                <p className="text-[14px] md:text-[15px] text-white/60 leading-relaxed">
                  {c.tagline}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
