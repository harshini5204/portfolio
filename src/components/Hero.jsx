import { profile } from "../data/content";
import SystemTrace from "./SystemTrace";
import Reveal from "./Reveal";

const ctas = [
  { href: "#work", label: "View my work", primary: true, external: false },
  { href: profile.github, label: "GitHub", primary: false, external: true },
  { href: profile.linkedin, label: "LinkedIn", primary: false, external: true },
  { href: profile.resume, label: "Resume", primary: false, external: true },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-page items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {profile.role}
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            {profile.headline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                {...(cta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`inline-flex min-h-11 items-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  cta.primary
                    ? "bg-ink text-[color:var(--bg)] hover:opacity-90"
                    : "border border-line text-ink hover:border-accent"
                }`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <SystemTrace />
        </Reveal>
      </div>
    </section>
  );
}
