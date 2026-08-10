"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content/projects";
import { track } from "@/lib/analytics";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projekte/${project.slug}/`}
      onClick={() => track("project_open", { slug: project.slug })}
      className="group overflow-hidden rounded-3xl border border-gray-100 bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        {project.placeholder ? (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest">
            Beispiel
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <p className="text-sm font-semibold text-aqua-deep">
          {project.ort} · {project.areaM2} m² · {project.zones} Zonen
        </p>
        <h3 className="mt-2 text-lg font-bold text-forest">{project.gardenType}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{project.task}</p>
      </div>
    </Link>
  );
}
