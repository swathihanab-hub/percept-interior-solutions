import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { business, services } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential interiors, commercial interiors, modular kitchens, and turnkey execution in Banjara Hills, Hyderabad.",
};

export default function ServicesPage() {
  const whatsappHref = buildWhatsAppUrl(whatsappMessages.general);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Practice"
        title="Services"
        description={`${business.name} offers interior design and turnkey execution from ${business.location.locality}, ${business.location.city}. ${business.pricing}.`}
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} detailed />
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-muted">
        Prefer to talk first?{" "}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Chat on WhatsApp
        </a>
        . Your request is prepared in WhatsApp and you must press Send.
      </p>
    </section>
  );
}
