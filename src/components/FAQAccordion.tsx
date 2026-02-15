import { useState } from "react";

type FAQItem = { question: string; answer: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-brand-border border-t border-b border-brand-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] font-medium leading-relaxed text-brand-text">
                {item.question}
              </span>
              <span
                className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-stone-400 transition-transform duration-300 ease-out"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}
                aria-hidden
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 text-[14px] leading-[1.9] text-stone-500">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
