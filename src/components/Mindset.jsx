import { useState } from "react";
import { stackLayers } from "../data/content";
import Reveal, { SectionHeading } from "./Reveal";

export default function Mindset() {
  const [active, setActive] = useState(stackLayers[2].id);
  const current = stackLayers.find((layer) => layer.id === active);

  return (
    <section id="mindset" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-page">
        <Reveal>
          <SectionHeading
            kicker="Engineering mindset"
            title="I care about the path a request takes, not only the screen it lands on."
            description="I work most at the frontend and API layers, and I keep studying what sits above and below them — runtime, data, and infrastructure — so features stay coherent in production."
          />
        </Reveal>

        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <ol className="space-y-2">
              {stackLayers.map((layer, index) => (
                <li key={layer.id}>
                  <button
                    type="button"
                    onClick={() => setActive(layer.id)}
                    onMouseEnter={() => setActive(layer.id)}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition-colors ${
                      active === layer.id
                        ? "border-accent bg-[color:var(--accent-soft)]"
                        : "border-line bg-elevated hover:border-muted"
                    }`}
                    aria-pressed={active === layer.id}
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium text-ink">{layer.label}</span>
                    </span>
                    {index < stackLayers.length - 1 ? (
                      <span className="font-mono text-xs text-muted" aria-hidden="true">
                        ↓
                      </span>
                    ) : null}
                  </button>
                </li>
              ))}
            </ol>

            <div className="rounded-2xl border border-line bg-elevated p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Layer
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink">{current.label}</h3>
              <p className="mt-4 leading-relaxed text-muted">{current.detail}</p>
              <p className="mt-6 text-sm text-muted">
                This is curiosity and working context, not a claim that I operate every
                layer at the same depth.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
