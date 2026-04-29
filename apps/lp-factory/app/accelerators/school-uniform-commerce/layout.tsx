import type { Metadata } from "next";

const URL_PATH = "/accelerators/school-uniform-commerce";

export const metadata: Metadata = {
  title: "School uniform commerce | scandiweb",
  description:
    "Productized commerce platform for school uniform retailers. Multi-child accounts, school-gated catalogs, ERP integration, term-aware delivery, fittings. Live in 11 weeks.",
  alternates: { canonical: URL_PATH },
  openGraph: {
    title: "School uniform commerce | scandiweb",
    description:
      "Productized commerce platform for school uniform retailers. 200 schools live the same morning. Live in 11 weeks.",
    url: URL_PATH,
    type: "website",
    siteName: "scandiweb",
  },
  twitter: {
    card: "summary_large_image",
    title: "School uniform commerce | scandiweb",
    description:
      "Productized commerce platform for school uniform retailers. Live in 11 weeks.",
  },
};

export default function SchoolUniformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
