import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[var(--uj-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-[var(--uj-muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export type CtaVariant = "primary" | "outline" | "ghost";

const ctaVariants: Record<CtaVariant, string> = {
  primary:
    "bg-[var(--uj-primary)] text-white shadow-[0_18px_40px_-20px_var(--uj-primary)] hover:bg-[var(--uj-primary-soft)]",
  outline: "border border-white/25 text-white hover:border-white/50 hover:bg-white/5",
  ghost: "text-[var(--uj-muted)] hover:text-white",
};

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: CtaVariant;
  className?: string;
  ariaLabel?: string;
}) {
  const external = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--uj-highlight)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--uj-bg)] ${ctaVariants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
