import { plans } from "../../data/ultrajano";
import { Container, CtaLink, SectionHeading } from "./ui";

export function Plans() {
  return (
    <section id="planos" className="uj-section border-t border-white/10">
      <Container>
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o plano ideal para você"
          description="Todos os planos dão acesso completo ao catálogo. A diferença está no período e no preço por mês."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.id}
              aria-labelledby={`plano-${plan.id}`}
              className={`relative flex flex-col rounded-3xl border p-6 sm:p-7 ${
                plan.featured
                  ? "border-[var(--uj-highlight)]/60 bg-[linear-gradient(180deg,rgba(250,204,21,0.12),rgba(20,18,42,0.9))] shadow-[0_30px_70px_-35px_rgba(250,204,21,0.6)] lg:-mt-4 lg:mb-4"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.badge ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--uj-highlight)] px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#241a00]">
                  {plan.badge}
                </span>
              ) : null}

              <h3 id={`plano-${plan.id}`} className="text-lg font-bold text-white">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--uj-muted)]">{plan.summary}</p>

              <p className="mt-6 flex flex-wrap items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white sm:text-4xl">{plan.price}</span>
                <span className="text-sm text-[var(--uj-muted)]">{plan.period}</span>
              </p>

              <ul className="mt-6 space-y-2.5 text-sm">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span aria-hidden="true" className="text-[var(--uj-accent)]">
                      ✓
                    </span>
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>

              {plan.notice ? (
                <p className="mt-6 rounded-xl border border-white/10 bg-black/25 p-3 text-xs leading-relaxed text-[var(--uj-muted)]">
                  {plan.notice}
                </p>
              ) : null}

              <div className="mt-auto pt-7">
                <CtaLink
                  href={plan.href}
                  variant={plan.featured ? "primary" : "outline"}
                  className="w-full"
                  ariaLabel={`Assinar plano ${plan.name} em nova aba`}
                >
                  Assinar {plan.name}
                </CtaLink>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-[var(--uj-muted)]">
          Pagamento seguro • Sem renovação automática • Suporte em todos os planos
        </p>
      </Container>
    </section>
  );
}
