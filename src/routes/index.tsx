import { createFileRoute } from "@tanstack/react-router";

import "../styles/ultrajano.css";
import { Compatibility } from "../components/ultrajano/Compatibility";
import { Faq } from "../components/ultrajano/Faq";
import { Features } from "../components/ultrajano/Features";
import { FinalCta } from "../components/ultrajano/FinalCta";
import { Hero } from "../components/ultrajano/Hero";
import { HowItWorks } from "../components/ultrajano/HowItWorks";
import { Plans } from "../components/ultrajano/Plans";
import { SiteFooter } from "../components/ultrajano/SiteFooter";
import { SiteHeader } from "../components/ultrajano/SiteHeader";

function LandingPage() {
  return (
    <div className="uj-page flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--uj-primary)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Ir para o conteúdo
      </a>

      <SiteHeader />

      <main id="conteudo" className="flex-1">
        <Hero />
        <Features />
        <Compatibility />
        <Plans />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: LandingPage,
});
