import Reveal from "./Reveal";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line px-5 py-24 sm:px-8"
    >
      <Reveal>
        <div className="mx-auto flex max-w-page flex-col gap-8 rounded-2xl border border-line bg-elevated p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Contact
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Let&apos;s build something meaningful.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              I&apos;m open to conversations about software engineering roles and thoughtful
              product work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-[color:var(--bg)] hover:opacity-90"
            >
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-line px-5 py-2.5 text-sm text-ink hover:border-accent"
            >
              LinkedIn
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-line px-5 py-2.5 text-sm text-ink hover:border-accent"
            >
              Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
