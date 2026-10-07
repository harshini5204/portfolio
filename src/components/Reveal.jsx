import { motion, useReducedMotion } from "framer-motion";

const MotionDiv = motion.div;

export default function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  );
}

export function SectionHeading({ kicker, title, description }) {
  return (
    <header className="mb-10 max-w-2xl">
      {kicker ? (
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent mb-3">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-3xl sm:text-4xl text-ink leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-muted leading-relaxed">{description}</p>
      ) : null}
    </header>
  );
}
