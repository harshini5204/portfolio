import { education, experience } from "../data/content";
import Reveal, { SectionHeading } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-page">
        <Reveal>
          <SectionHeading
            kicker="Experience"
            title="Professional work first."
            description="Production engineering at QuarkSek — intern through Associate SDE."
          />
        </Reveal>

        <div className="space-y-8">
          {experience.map((job) => (
            <Reveal key={`${job.role}-${job.period}`}>
              <article className="rounded-2xl border border-line bg-elevated p-6 sm:p-8">
                <div className="flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-ink sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-muted">{job.company}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                    {job.period}
                    {job.current ? " · Current" : ""}
                  </p>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="text-sm text-muted" id="education">
            <span className="font-medium text-ink">Education. </span>
            {education.degree}, {education.school}. {education.period}.{" "}
            {education.note}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
