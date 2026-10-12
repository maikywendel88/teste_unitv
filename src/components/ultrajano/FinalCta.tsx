import { CHECKOUT } from "../../data/ultrajano";
import { Container, CtaLink } from "./ui";

export function FinalCta() {
  return (
    <section id="assinar" className="uj-section border-t border-white/10">
      <Container>
        <div className="uj-card uj-glow px-7 py-12 text-center sm:px-12">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--uj-accent)]">
            Comece agora
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Sua próxima sessão de filmes começa hoje
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--uj-muted)] sm:text-base">
            Escolha o plano que combina com você, pague com Pix ou cartão e receba o código de
            ativação em poucos minutos. Se surgir qualquer dúvida, o suporte atende você todos os
            dias da semana.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
            <CtaLink href="#planos">Escolher meu plano</CtaLink>
            <CtaLink href={CHECKOUT.conta} variant="outline" ariaLabel="Abrir Minha Conta em nova aba">
              Minha Conta
            </CtaLink>
          </div>

          <p className="mt-6 text-xs text-[var(--uj-muted)]">
            Pagamento seguro • Sem fidelidade • Ativação em minutos
          </p>
        </div>
      </Container>
    </section>
  );
}
