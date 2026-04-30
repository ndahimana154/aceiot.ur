type PageBannerProps = {
  label: string;
  title: string;
  description: string;
  imageUrl: string;
};

export default function PageBanner({
  label,
  title,
  description,
  imageUrl,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden rounded-[2.25rem] border border-slate-800/60 shadow-[0_24px_60px_-28px_rgba(2,6,23,0.95)]">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/55" />
      <div className="absolute -left-16 top-8 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute -right-12 -bottom-8 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />

      <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 lg:max-w-3xl lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200">
          {label}
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}
