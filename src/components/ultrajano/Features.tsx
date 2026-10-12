import { features } from "../../data/ultrajano";
import { Container, SectionHeading } from "./ui";

export function Features() {
  return (
    <section id="vantagens" className="uj-section border-t border-white/10">
      <Container>
        <SectionHeading
          eyebrow="Vantagens"
          title="Tudo o que você precisa em um só lugar"
          description="Uma estrutura simples e completa para assistir o que você gosta sem depender de instalação, técnico ou contrato longo."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="uj-card p-6 transition duration-200 hover:-translate-y-1 hover:border-white/25 motion-reduce:hover:translate-y-0"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-xl"
              >
                {feature.icon}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--uj-muted)]">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
