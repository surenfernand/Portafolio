"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { projects } from "@/lib/content";
import { useSite } from "./site-context";

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
      <div className="eyebrow">Project concept</div>
      <h2 id="project-title">{project?.title}</h2>
      <p>{project?.description}</p>
      <p>{project?.features}</p>
      <div className="dialog-actions">
        <a
          className="button"
          href="#contact"
          onClick={() => dialogRef.current?.close()}
        >
          Plan something similar ↗
        </a>
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
