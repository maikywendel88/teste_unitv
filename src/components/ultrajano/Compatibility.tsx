import { devices } from "../../data/ultrajano";
import { Container } from "./ui";

export function Compatibility() {
  return (
    <section id="compatibilidade" className="uj-section">
      <Container>
        <div className="uj-card uj-glow grid gap-10 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--uj-accent)]">
              Compatibilidade
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Funciona no aparelho que você já tem
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--uj-muted)] sm:text-base">
              Não precisa trocar de TV nem comprar equipamento novo. Basta instalar, ativar o
              código e assistir.
            </p>
          </div>

          <ul className="grid gap-3">
            {devices.map((device) => (
              <li
                key={device}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/90"
              >
                <span aria-hidden="true" className="text-[var(--uj-accent)]">
                  ✓
                </span>
                <span>{device}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
