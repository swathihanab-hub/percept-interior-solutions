import Link from "next/link";
import { Star } from "lucide-react";
import Hero from "@/components/Hero";
import LocationSection from "@/components/LocationSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectCard from "@/components/ProjectCard";
import ReviewSummary from "@/components/ReviewSummary";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { business, projects, services } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function HomePage() {
  const featured = projects.slice(0, 6);
  const whatsappHref = buildWhatsAppUrl(whatsappMessages.general);

  return (
    <>
      <Hero />

      <section className="border-y border-primary/10 bg-container">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-6 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-sm text-primary">
            <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
            {business.rating} rating
          </p>
          <p className="text-sm text-muted">{business.reviewCount} reviews</p>
          <p className="text-sm text-muted">
            {business.location.locality} studio
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Practice"
          title="Services"
          description="Residential, commercial, kitchen, and turnkey work, each planned from the same studio in Banjara Hills."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="A measured look at residential, commercial, and kitchen interiors."
          />
          <Link
            href="/projects"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View all projects
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Method"
          title="A four-step process"
          description="From first visit through site finish, decisions stay aligned with the brief."
        />
        <div className="mt-10">
          <ProcessTimeline />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trust"
          title="Reviews"
          description="An aggregate rating supplied for this studio. No individual quotes are shown."
        />
        <div className="mt-10">
          <ReviewSummary />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <LocationSection />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="bg-primary px-6 py-14 text-center sm:px-12">
          <h2 className="font-serif text-3xl text-container sm:text-4xl">
            Begin with a conversation.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-travertine">
            Share your property type and a short brief on WhatsApp. Your request
            is prepared in WhatsApp and you must press Send.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-primary transition-transform duration-250 ease-out hover:scale-102"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
