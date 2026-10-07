import Link from "next/link";
import { ArrowRight, Building2, ChefHat, Home, Layers } from "lucide-react";
import type { Service } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

const icons = {
  home: Home,
  building: Building2,
  chef: ChefHat,
  layers: Layers,
};

type ServiceCardProps = {
  service: Service;
  detailed?: boolean;
};

export default function ServiceCard({ service, detailed = false }: ServiceCardProps) {
  const Icon = icons[service.icon];
  const whatsappHref = buildWhatsAppUrl(whatsappMessages.service(service.title));

  return (
    <article className="group flex h-full flex-col border border-primary/10 bg-container p-6 transition-transform duration-250 ease-out hover:scale-102">
      <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
      <h3 className="mt-5 font-serif text-2xl text-primary">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {detailed ? service.description : service.shortDescription}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        {detailed ? (
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Inquire on WhatsApp
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : (
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            View service
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
