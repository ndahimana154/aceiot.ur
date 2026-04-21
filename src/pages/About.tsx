import { Link } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import SectionHeader from '../components/ui/SectionHeader';
import ProgramCard from '../components/ui/ProgramCard';
import PartnerLogo from '../components/ui/PartnerLogo';
import PageBanner from '../components/ui/PageBanner';
import {
  programCards,
  partnerLogos,
  researchHighlights,
} from '../data/content';

export default function About() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <PageMeta
        title="About ACEIoT · University of Rwanda"
        description="ACEIoT is a research and education center at the University of Rwanda focused on IoT, digital systems and community impact. Learn about our mission, partnerships, and academic vision."
      />
      <div className="space-y-16">
        <PageBanner
          label="About"
          title="Building digital innovation leaders for Rwanda and beyond."
          description="ACEIoT combines academic rigor, applied research, and industry collaboration to deliver real technology impact for communities."
          imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="space-y-8 rounded-[32px] bg-white p-8 shadow-sm">
          <SectionHeader
            label="About"
            title="A research partnership center shaping the future of African IoT innovation."
            description="ACEIoT brings together academic excellence, industry collaboration, and community-driven research to build resilient digital infrastructure across Rwanda and the region."
          />
          <div className="grid gap-6 lg:grid-cols-[0.7fr_0.3fr]">
            <div className="space-y-6 text-slate-600">
              <p>
                ACEIoT supports Masters, PhD, and professional education with a
                focus on applied research, sustainable technology, and inclusive
                capacity building. Our center is anchored in the University of
                Rwanda and funded through strategic partnerships that expand
                opportunity across sectors.
              </p>
              <p>
                Our work blends data science, connectivity, intelligent systems
                and user-centered design to deliver solutions that matter for
                health, agriculture, energy, and smart infrastructure.
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center rounded-full bg-[#00AEEF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Explore programs
              </Link>
            </div>
            <div className="rounded-[2rem] bg-slate-50 p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
                Highlights
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <li className="rounded-3xl bg-white p-4 shadow-sm">
                  <strong className="block text-slate-900">
                    Interdisciplinary research
                  </strong>
                  Applied projects in sensors, AI and resilient networks.
                </li>
                <li className="rounded-3xl bg-white p-4 shadow-sm">
                  <strong className="block text-slate-900">
                    Global partnerships
                  </strong>
                  Collaborations with World Bank, regional institutions, and
                  industry.
                </li>
                <li className="rounded-3xl bg-white p-4 shadow-sm">
                  <strong className="block text-slate-900">
                    Student impact
                  </strong>
                  Training future leaders in digital inclusion and innovation.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <SectionHeader
            label="Programs"
            title="Academic pathways with strong research and real-world application."
            description="From Masters to PhD to executive training, our curriculum is built for future-focused technology leaders."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programCards.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </section>

        <section className="space-y-10 rounded-[2.5rem] bg-gradient-to-br from-[#00AEEF] to-sky-600 p-8 lg:p-10 text-white shadow-xl shadow-[#00AEEF]/20">
          <SectionHeader
            label="Research impact"
            title="Research that informs policy, empowers communities, and strengthens digital ecosystems."
            description="Our research portfolio addresses priority technology challenges across East Africa while creating learning opportunities for students and partners."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {researchHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] bg-white/10 p-6 shadow-sm"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-sky-100">
                  Research
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-sky-100/90">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10 rounded-[2.5rem] bg-white p-8 shadow-sm">
          <SectionHeader
            label="Partners"
            title="Trusted partners supporting our mission and student success."
            description="These institutions help fuel our academic programs, fund research, and expand learning pathways for more students."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partnerLogos.map((partner) => (
              <PartnerLogo key={partner.name} {...partner} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
