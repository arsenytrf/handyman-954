import type { Metadata } from "next";
import { company } from "@/data/company";

export function createMetadata({
  title,
  description,
  path = "",
  ogTitle,
  ogDescription,
}: {
  title: string;
  description: string;
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(company.url),
    alternates: {
      canonical: `${company.url}${path}`,
    },
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      url: `${company.url}${path}`,
      siteName: company.name,
      images: [
        {
          url: `/images/og-image.png`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle || title,
      description: ogDescription || description,
      images: [`/images/og-image.png`],
    },
  };
}
