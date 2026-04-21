import { motion } from 'framer-motion';
import ProgramCard from '../components/ui/ProgramCard';
import PageMeta from '../components/ui/PageMeta';
import SectionHeader from '../components/ui/SectionHeader';
import PageBanner from '../components/ui/PageBanner';
import { programCards } from '../data/content';

export default function Programs() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <PageMeta
        title="Programs · ACEIoT"
        description="Browse ACEIoT academic pathways for Masters, PhD and professional training in IoT and connected systems."
      />
      <div className="space-y-14">
        <PageBanner
          label="Programs"
          title="Learning paths designed for real-world ICT transformation."
          description="Explore Masters, PhD, and professional tracks built around connected systems, AI, and digital infrastructure leadership."
          imageUrl="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="rounded-[32px] bg-white p-8 shadow-sm">
          <SectionHeader
            label="Programs"
            title="Academic pathways designed for emerging ICT leaders."
            description="Choose the program that matches your ambitions: research-driven PhD work, applied Masters training, or short-form professional development."
          />
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programCards.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-3">
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
              Admissions
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              How to apply
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Submit your CV, transcripts, research proposal, and references
              through the University of Rwanda application portal.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
              Support
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              Scholarships & funding
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              World Bank and partner scholarships are available for qualified
              students from Rwanda and abroad.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
              Experience
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">
              Lab & field learning
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Students gain hands-on experience in smart systems, data
              analytics, and applied innovation through simulation and field
              projects.
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
