import { skillGroups } from "../data/content";
import Reveal, { SectionHeading } from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-page">
        <Reveal>
          <SectionHeading
            kicker="Technical skills"
            title="Tools I actually use."
            description="Grouped by the layer of the stack they belong to — not a logo wall."
          />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <article className="h-full rounded-2xl border border-line bg-elevated p-5">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
