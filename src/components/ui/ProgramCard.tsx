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
      className="group rounded-[2rem] border border-slate-100/50 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.15)] hover:border-[#00AEEF]/30"
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
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      {subPrograms?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {subPrograms.slice(0, 4).map((item) => (
            <li
              key={`${title}-${item.name}`}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"
            >
              <span className="font-medium text-slate-700">{item.name}</span>
              <span className="text-xs uppercase tracking-wide text-slate-500">
                {item.duration}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </motion.article>
  );
}
