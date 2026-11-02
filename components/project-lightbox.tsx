"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export type LightboxShot = {
  title: string;
  description: string;
  alt: string;
  src: string;
};

export function ProjectLightbox({
  shots,
  index,
  onClose,
  onIndex,
}: {
  shots: LightboxShot[];
  index: number | null;
  onClose: () => void;
  onIndex: (next: number) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const shot = index === null ? null : shots[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (shot && !dialog.open) dialog.showModal();
    if (!shot && dialog.open) dialog.close();
  }, [shot]);

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-labelledby="lightbox-title"
      onClose={onClose}
    >
      {shot ? (
        <>
          <button
            className="dialog-close"
            type="button"
            aria-label="Close screenshot"
            onClick={() => dialogRef.current?.close()}
          >
            ×
          </button>
          <div className="lightbox-shot">
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="960px"
              style={{ objectFit: "contain", objectPosition: "center" }}
            />
          </div>
          <h2 id="lightbox-title">{shot.title}</h2>
          <p>{shot.description}</p>
          {shots.length > 1 && index !== null ? (
            <div className="dialog-actions">
              <button
                className="button light"
                type="button"
                disabled={index === 0}
                onClick={() => onIndex(index - 1)}
              >
                Previous
              </button>
              <button
                className="button light"
                type="button"
                disabled={index === shots.length - 1}
                onClick={() => onIndex(index + 1)}
              >
                Next
              </button>
            </div>
          ) : null}
        </>
      ) : null}
    </dialog>
  );
}
