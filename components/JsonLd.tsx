import { business } from "@/lib/data";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    name: business.name,
    telephone: business.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.location.locality,
      addressRegion: business.location.region,
      addressCountry: business.location.countryCode,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
