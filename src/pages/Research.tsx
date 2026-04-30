import PageMeta from '../components/ui/PageMeta';
import SectionHeader from '../components/ui/SectionHeader';
import PageBanner from '../components/ui/PageBanner';
import { researchHighlights } from '../data/content';

export default function Research() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <PageMeta
        title="Research · ACEIoT"
        description="Explore ACEIoT research themes in smart systems, IoT infrastructure, and digital resilience at the University of Rwanda."
      />
      <div className="space-y-14">
        <PageBanner
          label="Research"
          title="Applied research turning ideas into measurable community outcomes."
          description="From resilient networks to intelligent automation, ACEIoT research is grounded in local challenges and global-quality science."
          imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="rounded-[32px] bg-white p-8 shadow-sm">
          <SectionHeader
            label="Research"
            title="Our current research themes and future directions."
            description="Explore the ICT research areas driving ACEIoT innovation and regional technology growth."
          />
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {researchHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                Research
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {item.summary}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
