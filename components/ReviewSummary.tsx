import { Star } from "lucide-react";
import { business } from "@/lib/data";

export default function ReviewSummary() {
  return (
    <section className="border border-primary/10 bg-container px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="h-4 w-4 fill-accent text-accent"
            />
          ))}
        </div>
        <p className="mt-4 font-serif text-4xl text-primary">{business.rating}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {business.name} holds a {business.rating} rating from{" "}
          {business.reviewCount} reviews. This summary reflects the supplied
          aggregate rating only.
        </p>
      </div>
    </section>
  );
}
