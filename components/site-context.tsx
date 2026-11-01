"use client";

import { createContext, useContext, type FormEvent } from "react";

export type EnquiryForm = {
  name: string;
  email: string;
  company: string;
  service: string;
  packageName: string;
  message: string;
};

export type SiteContextValue = {
  form: EnquiryForm;
  updateField: (field: keyof EnquiryForm, value: string) => void;
  selectOffer: (packageName: string, service?: string) => void;
  activeProject: number | null;
  openProject: (index: number) => void;
  closeProject: () => void;
  enquiry: string;
  enquiryOpen: boolean;
  submitEnquiry: (event: FormEvent<HTMLFormElement>) => void;
  closeEnquiry: () => void;
  copyStatus: string;
  copyEnquiry: () => Promise<void>;
};

export const SiteContext = createContext<SiteContextValue | null>(null);

export function useSite() {
  const value = useContext(SiteContext);
  if (!value) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return value;
}
