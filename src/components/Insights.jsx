import { githubRepos, journey, learning } from "../data/content";
import Reveal, { SectionHeading } from "./Reveal";

export default function Insights() {
  return (
    <>
      <section id="journey" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-page">
          <Reveal>
            <SectionHeading
              kicker="Engineering journey"
              title="A path shaped by the systems behind the interface."
              description="A concise view of the areas I have worked in and the technical depth I am continuing to build."
            />
          </Reveal>
          <div className="grid gap-3 md:grid-cols-2">
            {journey.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-line bg-elevated p-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-medium text-ink">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="github" className="border-y border-line px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-page gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              kicker="Open source"
              title="Selected work on GitHub."
              description="A small selection is more useful than a repository wall. This is the project I currently use to explore real-time systems."
            />
          </Reveal>
          <div className="space-y-4">
            {githubRepos.map((repo) => (
              <Reveal key={repo.name}>
                <article className="rounded-2xl border border-line bg-elevated p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                        {repo.technology}
                      </p>
                      <h3 className="mt-2 text-xl font-medium text-ink">{repo.name}</h3>
                    </div>
                    <a
                      href={repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent underline-offset-4 hover:underline"
                    >
                      View on GitHub ↗
                    </a>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{repo.description}</p>
                  <p className="mt-4 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
                    {repo.interesting}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="learning" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-page">
          <Reveal>
            <SectionHeading
              kicker="Currently strengthening"
              title="An engineering roadmap, not a course list."
              description="The areas I am deliberately studying to become a more complete software engineer."
            />
          </Reveal>
          <div className="grid gap-x-8 gap-y-0 md:grid-cols-2">
            {learning.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="flex gap-4 border-t border-line py-5">
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-medium text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
