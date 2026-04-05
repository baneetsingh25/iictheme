import type { PropsWithChildren } from "react";

type PageHeroProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  description: string;
}>;

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="rounded-[2rem] bg-hero-glow bg-white px-6 py-12 shadow-panel sm:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-brand-700">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{description}</p>
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}
