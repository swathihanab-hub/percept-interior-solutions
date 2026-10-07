"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const href = buildWhatsAppUrl(whatsappMessages.general);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Percept Interior Solutions"
      className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary shadow-md transition-transform duration-250 ease-out hover:scale-102 focus-visible:scale-102 md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
