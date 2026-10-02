import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content";
import { terms } from "@/data/legal";

export const metadata: Metadata = {
  title: `Terms of Use — ${site.name}`,
  description: `The terms that apply to your use of the ${site.name} website.`,
};

export default function TermsPage() {
  return <LegalPage doc={terms} />;
}
