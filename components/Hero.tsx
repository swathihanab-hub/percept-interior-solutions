import Link from "next/link";
import Image from "next/image";
import { business } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function Hero() {
  const whatsappHref = buildWhatsAppUrl(whatsappMessages.general);

  return (
    <section className="relative w-full max-w-full overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="reveal">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            {business.location.locality}, {business.location.city}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-primary sm:text-5xl lg:text-6xl">
            Interiors composed with light, material, and restraint.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            {business.name} designs residential and commercial interiors from
            our studio in {business.location.locality}. Spaces are planned for
            how they are lived in, not how they photograph.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-container transition-transform duration-250 ease-out hover:scale-102"
            >
              Explore Projects
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-primary/20 bg-transparent px-6 py-3 text-sm font-medium text-primary transition-transform duration-250 ease-out hover:scale-102"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-travertine">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
            alt="Warm architectural living interior with stone, timber, and natural light"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
