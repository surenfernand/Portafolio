"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";
import { useSite } from "./site-context";

const categoryLabel = {
  website: "Business website",
  booking: "Booking",
  app: "Web application",
  store: "E-commerce",
} as const;

export function ProjectDialog() {
  const { activeProject, closeProject } = useSite();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const project = activeProject === null ? null : projects[activeProject];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const bounds = dialog.getBoundingClientRect();
    const outside =
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom;
    if (outside) dialog.close();
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-title"
      onClose={closeProject}
      onClick={closeOnBackdrop}
    >
      <button
        className="dialog-close"
        type="button"
        aria-label="Close project details"
        onClick={() => dialogRef.current?.close()}
      >
        ×
      </button>
      {project?.images ? (
        <div className="dialog-shot">
          <Image
            src={project.images.desktop}
            alt={project.alt}
            fill
            sizes="640px"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
      ) : project ? (
        <p className="shot-missing-note">Screenshot needed for this project.</p>
      ) : null}
      <div className="eyebrow">
        {project ? categoryLabel[project.category] : "Project"}
      </div>
      <h2 id="project-title">{project?.title}</h2>
      <p>{project?.description}</p>
      <p>{project?.features}</p>
      {project ? (
        <ul className="tech-list">
          {project.technologies.map((tech) => (
            <li className="tech-badge" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="dialog-actions">
        {project?.live ? (
          <a
            className="button light"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live website ↗
          </a>
        ) : null}
        <Link
          className="button light"
          href="/about#contact"
          onClick={() => dialogRef.current?.close()}
        >
          Plan something similar ↗
        </Link>
        <button
          className="button light dialog-close-button"
          type="button"
          onClick={() => dialogRef.current?.close()}
        >
          Close
        </button>
      </div>
    </dialog>
  );
}
