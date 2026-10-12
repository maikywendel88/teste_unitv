import { CHECKOUT, navLinks, plans } from "../../data/ultrajano";
import { Container, CtaLink } from "./ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <Container className="grid gap-10 py-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--uj-primary)] text-sm font-extrabold text-white"
            >
              UJ
            </span>
            <span className="text-lg font-extrabold tracking-tight text-white">
              Ultra<span className="text-[var(--uj-primary-soft)]">Jano</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--uj-muted)]">
            Códigos de recarga para assistir filmes, séries, canais ao vivo e esportes na TV, no
            celular ou no computador.
          </p>
          <div className="mt-5">
            <CtaLink href={CHECKOUT.conta} variant="outline" className="px-5 py-2.5">
              Minha Conta
            </CtaLink>
          </div>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Navegação</h2>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--uj-muted)] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--uj-highlight)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Planos</h2>
          <ul className="mt-4 space-y-2.5">
            {plans.map((plan) => (
              <li key={plan.id}>
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--uj-muted)] transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--uj-highlight)]"
                >
                  {plan.name} — {plan.price}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Atendimento</h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--uj-muted)]">
            Suporte humano todos os dias da semana. Acompanhe seus códigos e renovações na área do
            cliente.
          </p>
          <a
            href={CHECKOUT.conta}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-[var(--uj-accent)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--uj-highlight)]"
          >
            recargaflash.pro/cliente
          </a>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 text-xs text-[var(--uj-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ultra Jano. Todos os direitos reservados.</p>
          <p className="max-w-xl">
            Os códigos comercializados são de ativação de serviço próprio. Não temos vínculo com
            emissoras, estúdios ou plataformas de streaming.
          </p>
          <a
            href="#inicio"
            className="font-semibold text-white transition hover:text-[var(--uj-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--uj-highlight)]"
          >
            Voltar ao topo
          </a>
        </Container>
      </div>
    </footer>
  );
}
