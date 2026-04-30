import type { ComponentType } from 'react';
import { motion } from 'framer-motion';

type ProgramCardProps = {
  title: string;
  description: string;
  accent: string;
  imageUrl?: string;
  subPrograms?: Array<{ name: string; duration: string }>;
  icon: ComponentType<{ className?: string }>;
};

export default function ProgramCard({
  title,
  description,
  accent,
  imageUrl,
  subPrograms,
  icon: Icon,
}: ProgramCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="group rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-6 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)] transition-all duration-500 hover:border-[color:var(--ace-primary)] hover:shadow-[0_20px_44px_-26px_rgba(13,111,148,0.28)]"
    >
      {imageUrl ? (
        <div className="mb-4 h-36 overflow-hidden rounded-2xl">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div
        className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl ${accent}`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-[color:var(--ace-text)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--ace-muted)]">
        {description}
      </p>

      {subPrograms?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-[color:var(--ace-muted)]">
          {subPrograms.slice(0, 4).map((item) => (
            <li
              key={`${title}-${item.name}`}
              className="flex items-center justify-between rounded-xl bg-[color:var(--ace-card)] px-3 py-2"
            >
              <span className="font-medium text-[color:var(--ace-muted-strong)]">{item.name}</span>
              <span className="text-xs uppercase tracking-wide text-[color:var(--ace-muted)]">
                {item.duration}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  );
}
