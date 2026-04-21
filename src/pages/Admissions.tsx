import PageMeta from '../components/ui/PageMeta';
import SectionHeader from '../components/ui/SectionHeader';
import PageBanner from '../components/ui/PageBanner';
import { programCards } from '../data/content';

const admissionsSteps = [
  {
    title: 'Submit application',
    description:
      'Complete the University of Rwanda online application and attach transcripts, CV, and supporting materials.',
  },
  {
    title: 'Review & interview',
    description:
      'Our admissions panel evaluates applications and invites qualified candidates to interview or submit research proposals.',
  },
  {
    title: 'Accept offer',
    description:
      'Receive your admission decision and confirm your study plan with guidance from our academic team.',
  },
];

export default function Admissions() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <PageMeta
        title="Admissions · ACEIoT"
        description="Get admission details, application guidance, and scholarship support for ACEIoT Masters, PhD, and professional programs."
      />
      <div className="space-y-16">
        <PageBanner
          label="Admissions"
          title="Start your ACEIoT journey with confidence."
          description="Understand requirements, timelines, and support options with a clear path from application to enrollment."
          imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="rounded-[32px] bg-white p-8 shadow-sm">
          <SectionHeader
            label="Admissions"
            title="Start your journey with ACEIoT"
            description="Learn how to apply, which documents are required, and how our scholarship pathways support students from Rwanda and beyond."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {admissionsSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {step.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] bg-slate-50 p-8 shadow-sm">
          <SectionHeader
            label="Programs"
            title="Choose the program that fits your goals"
            description="We support prospective students across Masters, PhD and executive tracks with guidance on available pathways and funding options."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programCards.map((program) => (
              <div
                key={program.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {program.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {program.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {program.subPrograms.map((item) => (
                    <li key={item.name}>
                      {item.name} · {item.duration}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[32px] bg-gradient-to-br from-[#00AEEF] to-sky-600 p-8 text-white shadow-xl shadow-[#00AEEF]/20">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_0.45fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">
                Scholarship support
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Funding and mentorship for every stage.
              </h2>
              <p className="mt-4 text-sm leading-7 text-sky-100/90">
                In partnership with the World Bank and regional stakeholders,
                ACEIoT connects students with scholarships, research stipends,
                and mentoring to help them reach their goals.
              </p>
            </div>
            <div className="space-y-4 rounded-[2rem] bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-100">
                What's included
              </p>
              <ul className="space-y-3 text-sm leading-7 text-sky-100/90">
                <li>Application review and academic advising</li>
                <li>Research proposal support and faculty mentorship</li>
                <li>
                  Access to lab facilities and field deployment opportunities
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
