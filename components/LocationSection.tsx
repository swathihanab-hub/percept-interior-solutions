import { MapPin } from "lucide-react";
import { business } from "@/lib/data";

export default function LocationSection() {
  return (
    <section className="grid gap-8 border border-primary/10 bg-container p-8 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Studio
        </p>
        <h2 className="mt-3 font-serif text-3xl text-primary">
          {business.location.locality}, {business.location.city}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          We work from {business.location.locality} in {business.location.city},{" "}
          {business.location.region}, {business.location.country}. Reach us by
          phone or WhatsApp to discuss a visit or a project briefing.
        </p>
        <p className="mt-4 text-sm text-muted">{business.hours}</p>
      </div>
      <div className="flex min-h-40 items-center justify-center bg-travertine p-8">
        <p className="flex items-center gap-2 text-sm text-primary">
          <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
          {business.location.locality}, {business.location.city}
        </p>
      </div>
    </section>
  );
}
