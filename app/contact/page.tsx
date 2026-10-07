import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import SectionHeading from "@/components/SectionHeading";
import { business } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Percept Interior Solutions in Banjara Hills, Hyderabad by phone or WhatsApp.",
};

export default function ContactPage() {
  const whatsappHref = buildWhatsAppUrl(whatsappMessages.general);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeading
        eyebrow="Studio"
        title="Contact"
        description={`Reach ${business.name} in ${business.location.locality}, ${business.location.city}. ${business.hours} ${business.pricing}.`}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="border border-primary/10 bg-container p-6">
            <p className="flex items-center gap-2 text-sm font-medium text-primary">
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              Phone
            </p>
            <a
              href={`tel:${business.phoneTel}`}
              className="mt-3 inline-block text-lg text-primary"
            >
              {business.phoneDisplay}
            </a>
          </div>
          <div className="border border-primary/10 bg-container p-6">
            <p className="flex items-center gap-2 text-sm font-medium text-primary">
              <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" />
              WhatsApp
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-lg text-primary"
            >
              {business.phoneDisplay}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Your request is prepared in WhatsApp. Review the message and press
              Send. Nothing is sent automatically.
            </p>
          </div>
          <div className="border border-primary/10 bg-container p-6">
            <p className="text-sm font-medium text-primary">Location</p>
            <p className="mt-3 text-lg text-primary">
              {business.location.locality}, {business.location.city}
            </p>
            <p className="mt-2 text-sm text-muted">
              {business.location.region}, {business.location.country}
            </p>
          </div>
        </div>

        <div className="border border-primary/10 bg-container p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-primary">Inquiry</h2>
          <p className="mt-2 text-sm text-muted">
            Complete the form to prepare a WhatsApp message. You must press Send
            in WhatsApp to reach the studio.
          </p>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
