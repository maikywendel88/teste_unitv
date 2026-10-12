import { steps } from "../../data/ultrajano";
import { Container, CtaLink, SectionHeading } from "./ui";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="uj-section border-t border-white/10">
      <Container>
        <SectionHeading
          eyebrow="Passo a passo"
          title="Da Compra à TV em Minutos"
          description="São quatro etapas simples. Na maioria dos casos, o cliente já está assistindo menos de dez minutos depois do pagamento."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="uj-card p-6">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--uj-primary)] text-sm font-extrabold text-white"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--uj-muted)]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <CtaLink href="#planos">Ver planos disponíveis</CtaLink>
          <CtaLink href="#faq" variant="outline">
            Tirar dúvidas
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
