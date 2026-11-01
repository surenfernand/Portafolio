"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { projects } from "@/lib/content";
import { EnquiryDialog } from "./enquiry-dialog";
import { ProjectDialog } from "./project-dialog";
import {
  SiteContext,
  type EnquiryForm,
  type SiteContextValue,
} from "./site-context";

const initialForm: EnquiryForm = {
  name: "",
  email: "",
  company: "",
  service: "Business website",
  packageName: "Help me decide",
  message: "",
};

export function SiteProvider({ children }: { children: ReactNode }) {
  const [form, setForm] = useState<EnquiryForm>(initialForm);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [enquiry, setEnquiry] = useState("");
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const value = useMemo<SiteContextValue>(() => {
    return {
      form,
      updateField(field, next) {
        setForm((current) => ({ ...current, [field]: next }));
      },
      selectOffer(packageName, service) {
        setForm((current) => ({
          ...current,
          packageName,
          ...(service ? { service } : {}),
        }));
      },
      activeProject,
      openProject(index) {
        setActiveProject(index);
        const project = projects[index];
        if (!project) return;
        setForm((current) => ({ ...current, service: project.service }));
      },
      closeProject() {
        setActiveProject(null);
      },
      enquiry,
      enquiryOpen,
      submitEnquiry(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const business = form.company.trim() || "Not specified";
        setEnquiry(
          [
            "Website project enquiry",
            "",
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Business: ${business}`,
            `Service: ${form.service}`,
            `Scope: ${form.packageName}`,
            "",
            "Project details:",
            form.message,
          ].join("\n"),
        );
        setCopyStatus("");
        setEnquiryOpen(true);
      },
      closeEnquiry() {
        setEnquiryOpen(false);
      },
      copyStatus,
      async copyEnquiry() {
        try {
          await navigator.clipboard.writeText(enquiry);
          setCopyStatus("Copied. You can now paste it into your message.");
        } catch {
          const output = document.querySelector("#enquiry-output");
          const selection = window.getSelection();
          if (output && selection) {
            const range = document.createRange();
            range.selectNodeContents(output);
            selection.removeAllRanges();
            selection.addRange(range);
          }
          setCopyStatus(
            "Select and copy the highlighted text using your device’s copy command.",
          );
        }
      },
    };
  }, [activeProject, copyStatus, enquiry, enquiryOpen, form]);

  return (
    <SiteContext.Provider value={value}>
      {children}
      <ProjectDialog />
      <EnquiryDialog />
    </SiteContext.Provider>
  );
}
