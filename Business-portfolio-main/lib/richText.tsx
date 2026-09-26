import { Fragment } from "react";
import { Italic } from "@/components/ui/Italic";

/**
 * Splits a string on {{...}} markers and wraps the marked segments in <Italic>.
 * Keeps heading copy as plain strings in content.ts instead of JSX.
 */
export function parseAccent(text: string) {
  const parts = text.split(/(\{\{.*?\}\})/g);

  return parts.map((part, i) => {
    const match = part.match(/^\{\{(.*)\}\}$/);
    if (match) {
      return <Italic key={i}>{match[1]}</Italic>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
