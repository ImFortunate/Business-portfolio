"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-border/15">
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div key={item.question} className="border-b border-border/15">
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-lg font-medium md:text-xl">{item.question}</span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center text-2xl leading-none text-accent"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="min-h-0 max-w-2xl overflow-hidden text-muted">
                <span className="block pb-6">{item.answer}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
