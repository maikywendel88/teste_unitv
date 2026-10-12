import { useState } from "react";

import { CHECKOUT, navLinks } from "../../data/ultrajano";
import { Container, CtaLink } from "./ui";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06060f]/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 md:h-20">
        <a
          href="#inicio"
          className="flex items-center gap-2 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--uj-highlight)]"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--uj-primary)] text-sm font-extrabold text-white"
          >
            UJ
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white">
            Ultra<span className="text-[var(--uj-primary-soft)]">Jano</span>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-[var(--uj-muted)] transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--uj-highlight)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CtaLink href={CHECKOUT.conta} variant="outline" className="px-5 py-2.5">
            Minha Conta
          </CtaLink>
          <CtaLink href="#planos" className="px-5 py-2.5">
            Assinar agora
          </CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--uj-highlight)] lg:hidden"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </Container>

      {open ? (
        <div id="menu-mobile" className="border-t border-white/10 bg-[#06060f] lg:hidden">
          <Container className="flex flex-col gap-2 py-4">
            <nav aria-label="Navegação mobile" className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-[var(--uj-muted)] transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--uj-highlight)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-2 flex flex-col gap-3">
              <CtaLink href={CHECKOUT.conta} variant="outline" className="w-full">
                Minha Conta
              </CtaLink>
              <CtaLink href="#planos" className="w-full">
                Assinar agora
              </CtaLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
