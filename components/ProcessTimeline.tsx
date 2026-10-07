import { processSteps } from "@/lib/data";

export default function ProcessTimeline() {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((item) => (
        <li
          key={item.step}
          className="border border-primary/10 bg-container p-6 transition-transform duration-250 ease-out hover:scale-102"
        >
          <p className="font-serif text-2xl text-accent">{item.step}</p>
          <h3 className="mt-4 font-serif text-xl text-primary">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
