import Image from "next/image";
import type { Project } from "@/lib/data";
import { buildWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const href = buildWhatsAppUrl(whatsappMessages.project(project.title));

  return (
    <article className="group flex h-full flex-col overflow-hidden bg-container transition-transform duration-250 ease-out hover:scale-102">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-travertine">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-280 ease-out group-hover:scale-102"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-accent">
          {project.category}
        </p>
        <h3 className="mt-2 font-serif text-xl text-primary">{project.title}</h3>
        <p className="mt-1 text-xs text-muted">{project.location}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Inquire about similar design
        </a>
      </div>
    </article>
  );
}
