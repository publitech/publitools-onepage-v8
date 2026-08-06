import { useState } from 'react';

type Item = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <article
            key={item.question}
            className="overflow-hidden rounded-[14px] border border-[#e8e9ea] bg-white shadow-soft"
          >
            <button
              className="flex min-h-11 w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-base font-semibold text-[#262832] md:text-lg">{item.question}</span>
              <span className="text-2xl font-light text-[#f4862d]">{isOpen ? '−' : '+'}</span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[#5b6170]">{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
