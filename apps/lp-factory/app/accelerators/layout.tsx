import type { Metadata } from "next";

/**
 * Category-level layout for /accelerators/*.
 *
 * Sets metadata defaults for every page under this route segment. Individual
 * accelerator routes (e.g., /accelerators/school-photography-commerce) override
 * title/description/canonical via their own layout.tsx.
 *
 * To add a new top-level category (case-studies, playbooks, etc.), create a
 * sibling folder at `app/<category>/` with its own layout.tsx + child routes.
 */

export const metadata: Metadata = {
  title: {
    template: "%s | scandiweb accelerators",
    default: "scandiweb accelerators",
  },
  description:
    "Productized commerce platforms for vertical retailers. Configured to your stack, live in weeks.",
  openGraph: {
    siteName: "scandiweb",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function AcceleratorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
