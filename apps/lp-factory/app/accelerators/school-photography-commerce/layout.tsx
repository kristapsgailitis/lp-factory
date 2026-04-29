import type { Metadata } from "next";

const URL_PATH = "/accelerators/school-photography-commerce";

export const metadata: Metadata = {
  title: "School photography commerce | scandiweb",
  description:
    "Productized commerce platform for school photography businesses. Parent ordering, ID cards, yearbooks, school portals. Five legacy systems collapsed into one. Live in 14 weeks.",
  alternates: { canonical: URL_PATH },
  openGraph: {
    title: "School photography commerce | scandiweb",
    description:
      "Productized commerce platform for school photography businesses. Live in 14 weeks. Peak support load down 95% in four weeks.",
    url: URL_PATH,
    type: "website",
    siteName: "scandiweb",
  },
  twitter: {
    card: "summary_large_image",
    title: "School photography commerce | scandiweb",
    description:
      "Productized commerce platform for school photography businesses. Live in 14 weeks.",
  },
};

export default function SchoolPhotographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
