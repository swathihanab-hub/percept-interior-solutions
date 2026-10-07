"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { business, navLinks } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const whatsappHref = buildWhatsAppUrl(whatsappMessages.general);

  return (
    <header className="sticky top-0 z-50 w-full max-w-full border-b border-primary/10 bg-container/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-primary sm:text-xl"
        >
          {business.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-250 ease-out ${
                    active
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-4 py-2 text-xs font-medium tracking-wide text-container transition-transform duration-250 ease-out hover:scale-102 md:inline-flex"
          >
            Chat on WhatsApp
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-primary/10 bg-container px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-1 text-sm ${
                      active ? "text-primary" : "text-muted"
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-medium tracking-wide text-container"
                onClick={() => setOpen(false)}
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
