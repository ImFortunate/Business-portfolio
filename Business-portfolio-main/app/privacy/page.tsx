import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/content";
import { privacy } from "@/data/legal";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.name}`,
  description: `How ${site.name} collects, uses and protects your personal information.`,
};

export default function PrivacyPage() {
  return <LegalPage doc={privacy} />;
}
