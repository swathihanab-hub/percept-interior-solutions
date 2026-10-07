import { business } from "./data";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsappNumber}?text=${encoded}`;
}

export const whatsappMessages = {
  general:
    "Hello Percept Interior Solutions, I would like to discuss an interior project in Hyderabad.",
  explore:
    "Hello Percept Interior Solutions, I would like to explore a similar interior design for my property in Hyderabad.",
  service: (serviceTitle: string) =>
    `Hello Percept Interior Solutions, I am interested in ${serviceTitle}. Please share how we can begin.`,
  project: (projectTitle: string) =>
    `Hello Percept Interior Solutions, I would like to inquire about a design similar to "${projectTitle}".`,
  inquiry: (params: {
    name: string;
    phone: string;
    propertyType: string;
    message: string;
  }) =>
    [
      "Hello Percept Interior Solutions, I would like to inquire about an interior project.",
      `Name: ${params.name}`,
      `Phone: ${params.phone}`,
      `Property type: ${params.propertyType}`,
      `Message: ${params.message}`,
    ].join("\n"),
};
