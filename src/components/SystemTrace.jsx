import { useEffect, useState } from "react";

const hops = [
  { id: "client", label: "Browser", code: "GET /api" },
  { id: "edge", label: "Network", code: "TLS · JSON" },
  { id: "api", label: "Express", code: "route · auth" },
  { id: "data", label: "Prisma", code: "query" },
  { id: "db", label: "PostgreSQL", code: "rows" },
  { id: "ui", label: "React", code: "render" },
];

export default function SystemTrace() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % hops.length);
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <aside
      className="w-full rounded-2xl border border-line bg-elevated p-5 shadow-[0_1px_0_rgba(20,19,16,0.04)]"
      aria-label="Request path visualization"
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          request.trace
        </p>
        <span className="font-mono text-[11px] text-accent">live path</span>
      </div>

      <ol className="space-y-0">
        {hops.map((hop, index) => {
          const isActive = index === active;
          return (
            <li key={hop.id} className="relative pl-8">
              {index < hops.length - 1 ? (
                <span
                  className="absolute left-[9px] top-6 h-[calc(100%-8px)] w-px bg-line"
                  aria-hidden="true"
                />
              ) : null}
              <button
                type="button"
                onClick={() => setActive(index)}
                className={`mb-3 flex w-full items-center justify-between rounded-xl border px-3 py-2.5 text-left transition-colors ${
                  isActive
                    ? "border-accent bg-[color:var(--accent-soft)]"
                    : "border-line hover:border-muted"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-accent hop-pulse" : "bg-line"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-ink">{hop.label}</span>
                </span>
                <span className="font-mono text-[11px] text-muted">{hop.code}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
