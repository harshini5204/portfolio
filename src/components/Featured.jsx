import { featuredProject, otherProjects } from "../data/content";
import Reveal, { SectionHeading } from "./Reveal";

const stages = [
  { title: "Problem", body: featuredProject.problem },
  { title: "Implementation", body: featuredProject.implementation },
  { title: "Technical challenges", body: featuredProject.challenges },
  { title: "Solution", body: featuredProject.solution },
  { title: "Result", body: featuredProject.result },
];

export default function Featured() {
  return (
    <section id="work" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-page">
        <Reveal>
          <SectionHeading
            kicker="Featured engineering"
            title="A real-time system, not a gallery card."
            description="ECG monitoring as a client/server case study — stream, persist, visualize."
          />
        </Reveal>

        <Reveal>
          <article className="rounded-2xl border border-line bg-elevated overflow-hidden">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  Case study
                </p>
                <h3 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">
                  {featuredProject.problem}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    ...featuredProject.stack.frontend,
                    ...featuredProject.stack.backend,
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={featuredProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm text-ink hover:border-accent"
                >
                  View repository
                </a>
              </div>

              <div className="border-t border-line bg-[color:var(--bg)] p-6 sm:p-8 lg:border-l lg:border-t-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-4">
                  architecture
                </p>
                <ol className="space-y-0">
                  {featuredProject.architecture.map((node, index) => (
                    <li key={node} className="flex flex-col">
                      <div className="rounded-xl border border-line bg-elevated px-4 py-3 text-sm text-ink">
                        {node}
                      </div>
                      {index < featuredProject.architecture.length - 1 ? (
                        <span
                          className="py-1 text-center font-mono text-xs text-accent"
                          aria-hidden="true"
                        >
                          ↓
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="grid border-t border-line sm:grid-cols-2">
              {stages.slice(1).map((stage) => (
                <section
                  key={stage.title}
                  className="border-line p-6 sm:border-r sm:p-8 sm:even:border-r-0 sm:[&:nth-child(n+3)]:border-t"
                >
                  <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {stage.title}
                  </h4>
                  {Array.isArray(stage.body) ? (
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                      {stage.body.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {stage.body}
                    </p>
                  )}
                </section>
              ))}
            </div>
          </article>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <Reveal key={project.title}>
              <article className="h-full rounded-2xl border border-line bg-elevated p-6">
                <h3 className="text-xl font-medium text-ink">{project.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[11px] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
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
