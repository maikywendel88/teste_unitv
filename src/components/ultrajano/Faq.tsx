import { useState } from "react";

import { faq } from "../../data/ultrajano";
import { Container, SectionHeading } from "./ui";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="uj-section">
      <Container>
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Perguntas que todo mundo faz antes de assinar"
          description="Se a sua dúvida não estiver aqui, o suporte responde rapidinho pelos canais de atendimento."
        />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-semibold text-white transition hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--uj-highlight)] sm:px-7 sm:text-base"
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-xl leading-none text-[var(--uj-accent)] transition-transform duration-200 motion-reduce:transition-none ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                {isOpen ? (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className="px-5 pb-5 text-sm leading-relaxed text-[var(--uj-muted)] sm:px-7"
                  >
                    {item.answer}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
