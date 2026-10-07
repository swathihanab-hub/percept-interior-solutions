import Link from "next/link";
import { business, navLinks } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function Footer() {
  const whatsappHref = buildWhatsAppUrl(whatsappMessages.general);

  return (
    <footer className="mt-20 w-full max-w-full border-t border-primary/10 bg-container">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-xl text-primary">{business.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Interior design studio in {business.location.locality},{" "}
            {business.location.city}.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-primary transition-colors duration-250 ease-out hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Contact
          </p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-primary">
            <li>
              <a
                href={`tel:${business.phoneTel}`}
                className="transition-colors duration-250 ease-out hover:text-accent"
              >
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-250 ease-out hover:text-accent"
              >
                WhatsApp
              </a>
            </li>
            <li>
              {business.location.locality}, {business.location.city},{" "}
              {business.location.region}, {business.location.country}
            </li>
            <li className="text-muted">{business.hours}</li>
            <li className="text-muted">{business.pricing}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-muted sm:px-6 lg:px-8">
          Designed and Developed by Sutrixa Tech
        </p>
      </div>
    </footer>
  );
}
