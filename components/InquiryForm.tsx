"use client";

import { FormEvent, useState } from "react";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

const propertyTypes = ["Apartment", "Villa", "Commercial"] as const;

type FormState = {
  name: string;
  phone: string;
  propertyType: (typeof propertyTypes)[number] | "";
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  propertyType: "",
  message: "",
};

export default function InquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );

  function validate(values: FormState) {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (!/^[0-9+\-\s()]{8,20}$/.test(values.phone.trim())) {
      next.phone = "Enter a valid phone number.";
    }
    if (!values.propertyType) next.propertyType = "Select a property type.";
    if (!values.message.trim()) next.message = "Please add a short message.";
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const href = buildWhatsAppUrl(
      whatsappMessages.inquiry({
        name: form.name.trim(),
        phone: form.phone.trim(),
        propertyType: form.propertyType,
        message: form.message.trim(),
      })
    );
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm text-primary">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          className="mt-2 w-full border border-primary/15 bg-beige px-3 py-2.5 text-sm text-primary"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-xs text-primary">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm text-primary">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(event) => setForm({ ...form, phone: event.target.value })}
          className="mt-2 w-full border border-primary/15 bg-beige px-3 py-2.5 text-sm text-primary"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-1 text-xs text-primary">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="propertyType" className="block text-sm text-primary">
          Property type
        </label>
        <select
          id="propertyType"
          name="propertyType"
          value={form.propertyType}
          onChange={(event) =>
            setForm({
              ...form,
              propertyType: event.target.value as FormState["propertyType"],
            })
          }
          className="mt-2 w-full border border-primary/15 bg-beige px-3 py-2.5 text-sm text-primary"
          aria-invalid={Boolean(errors.propertyType)}
          aria-describedby={errors.propertyType ? "property-error" : undefined}
        >
          <option value="">Select property type</option>
          {propertyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.propertyType ? (
          <p id="property-error" className="mt-1 text-xs text-primary">
            {errors.propertyType}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm({ ...form, message: event.target.value })
          }
          className="mt-2 w-full border border-primary/15 bg-beige px-3 py-2.5 text-sm text-primary"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-primary">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-container transition-transform duration-250 ease-out hover:scale-102"
      >
        Prepare WhatsApp message
      </button>
      <p className="text-xs leading-relaxed text-muted">
        Your request is prepared in WhatsApp. Review the message and press Send
        to reach the studio. Nothing is sent automatically.
      </p>
    </form>
  );
}
