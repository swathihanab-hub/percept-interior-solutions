"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects, type ServiceCategory } from "@/lib/data";

const filters: Array<"All" | ServiceCategory> = [
  "All",
  "Residential",
  "Commercial",
  "Kitchens",
];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Project categories"
      >
        {filters.map((item) => {
          const selected = filter === item;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setFilter(item)}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-250 ease-out ${
                selected
                  ? "bg-primary text-container"
                  : "border border-primary/15 bg-container text-muted hover:text-primary"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
