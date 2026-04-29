import type { Metadata } from "next";

const URL_PATH = "/accelerators/school-photography-commerce/canada";

export const metadata: Metadata = {
  title: "School photography commerce, Canada | scandiweb",
  description:
    "Productized commerce platform for Canadian school photography brands. Parent ordering, ID cards, yearbooks, school portals on one data model. The same accelerator behind Australia's largest school photographer, now deploying in Canada.",
  alternates: { canonical: URL_PATH },
  openGraph: {
    title: "School photography commerce, Canada | scandiweb",
    description:
      "Productized commerce platform for Canadian school photography brands. The same accelerator behind Australia's largest school photographer, now in Canada.",
    url: URL_PATH,
    type: "website",
    siteName: "scandiweb",
  },
  twitter: {
    card: "summary_large_image",
    title: "School photography commerce, Canada | scandiweb",
    description:
      "Productized commerce platform for Canadian school photography brands. Now deploying in Canada.",
  },
};

export default function SchoolPhotographyCanadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
