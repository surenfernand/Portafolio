"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import { useSite } from "./site-context";

export function EnquiryDialog() {
  const { enquiry, enquiryOpen, closeEnquiry, copyEnquiry, copyStatus } =
    useSite();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (enquiryOpen && !dialog.open) dialog.showModal();
    if (!enquiryOpen && dialog.open) dialog.close();
  }, [enquiryOpen]);

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
      aria-labelledby="enquiry-title"
      onClose={closeEnquiry}
      onClick={closeOnBackdrop}
    >
      <button
        className="dialog-close"
        type="button"
        aria-label="Close enquiry"
        onClick={() => dialogRef.current?.close()}
      >
        ×
      </button>
      <div className="eyebrow">Your project brief</div>
      <h2 id="enquiry-title">A good place to start.</h2>
      <p>
        Your draft is ready. Copy it to share by email or WhatsApp. This
        preview does not send your details.
      </p>
      <div id="enquiry-output">{enquiry}</div>
      <div className="dialog-actions">
        <button className="button" type="button" onClick={() => void copyEnquiry()}>
          Copy enquiry ↗
        </button>
        <button
          className="button light dialog-close-button"
          type="button"
          onClick={() => dialogRef.current?.close()}
        >
          Keep editing
        </button>
      </div>
      <div id="copy-status" role="status" aria-live="polite">
        {copyStatus}
      </div>
    </dialog>
  );
}
