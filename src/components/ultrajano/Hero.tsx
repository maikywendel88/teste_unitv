import { CHECKOUT } from "../../data/ultrajano";
import { Container, CtaLink } from "./ui";

const stats = [
  { value: "+30 mil", label: "clientes ativos" },
  { value: "4K", label: "quando disponível" },
  { value: "24h", label: "ativação no mesmo dia" },
];

const categories = ["Ação", "Séries", "Esportes", "Infantil", "Canais", "4K"];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <Container className="grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--uj-accent)]">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[var(--uj-accent)]" />
            Ativação imediata
          </p>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Sua TV completa <span className="uj-gradient-text">em poucos minutos</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[var(--uj-muted)] sm:text-base lg:mx-0 lg:text-lg">
            Filmes, séries, canais ao vivo e esportes na Smart TV, no celular ou no computador.
            Escolha seu plano, receba o código de ativação e comece a assistir hoje mesmo — sem
            antena, sem cabo e sem burocracia.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <CtaLink href="#planos" ariaLabel="Ver planos e assinar">
              Quero assinar agora
            </CtaLink>
            <CtaLink
              href={CHECKOUT.conta}
              variant="outline"
              ariaLabel="Abrir Minha Conta em nova aba"
            >
              Minha Conta
            </CtaLink>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 text-center lg:text-left">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-xl font-extrabold text-white sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] uppercase tracking-wide text-[var(--uj-muted)]">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="uj-card uj-glow mx-auto max-w-xl p-4 sm:p-6">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[var(--uj-muted)]">
              <span>Ultra Jano</span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                ao vivo
              </span>
            </div>

            <div className="mt-4 aspect-video w-full rounded-xl bg-[linear-gradient(135deg,#1c1746_0%,#0b0a1a_60%,#131033_100%)] p-4 ring-1 ring-white/10">
              <div className="flex h-full flex-col justify-between gap-3">
                <div className="grid grid-cols-3 gap-2">
                  {categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-lg bg-white/5 px-2 py-1 text-center text-[11px] font-semibold text-white/80"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-black/40 px-3 py-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--uj-primary)] text-[11px] text-white">
                    ▶
                  </span>
                  <span className="h-1.5 flex-1 rounded-full bg-white/15">
                    <span className="block h-full w-2/3 rounded-full bg-[var(--uj-primary-soft)]" />
                  </span>
                  <span className="text-[11px] text-[var(--uj-muted)]">02:14:08</span>
                </div>
              </div>
            </div>

            <ul className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-[var(--uj-muted)]">
              <li className="rounded-lg border border-white/10 px-3 py-2">Qualidade HD e 4K</li>
              <li className="rounded-lg border border-white/10 px-3 py-2">Sem travamentos</li>
              <li className="rounded-lg border border-white/10 px-3 py-2">Filmes e séries</li>
              <li className="rounded-lg border border-white/10 px-3 py-2">Canais e esportes</li>
            </ul>
          </div>

          <p className="mt-5 text-center text-xs text-[var(--uj-muted)]">
            Pagamento seguro • Suporte todos os dias • Sem fidelidade
          </p>
        </div>
      </Container>
    </section>
  );
}
