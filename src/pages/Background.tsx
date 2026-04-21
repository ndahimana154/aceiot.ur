import { motion } from 'framer-motion';
import { Building2, Globe2 } from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import SectionHeader from '../components/ui/SectionHeader';
import PageBanner from '../components/ui/PageBanner';

export default function Background() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <PageMeta
        title="Background · ACEIoT"
        description="Discover the ACEIoT center background, mission, and global partnerships that support ICT research and education in Rwanda."
      />
      <div className="space-y-12">
        <PageBanner
          label="Background"
          title="The foundation behind ACEIoT’s growth."
          description="Learn how strategic funding, regional partnerships, and academic collaboration shaped our center."
          imageUrl="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1600&q=80"
        />

        <SectionHeader
          label="Background"
          title="A center for ICT innovation, capacity building, and research collaboration."
          description="ACEIoT supports the next generation of African technologists with World Bank-funded programming, industry-engaged learning, and university research networks."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Mission-driven research
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Grow scholarly programs that answer regional needs in
              connectivity, health, agriculture, and energy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
              <Globe2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">
              Global partnerships
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Collaborate with the World Bank, public institutions, and global
              universities to scale research outcomes.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2.5rem] bg-gradient-to-br from-[#00AEEF] to-sky-600 p-8 lg:p-10 text-white shadow-xl shadow-[#00AEEF]/20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-100">
            Why ACEIoT
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight">
            A unique center combining academic excellence and technology
            leadership.
          </h2>
          <p className="mt-4 text-sm leading-7 text-sky-50">
            Our programming blends applied engineering, systems thinking and
            digital innovation so students graduate ready to design resilient
            IoT ecosystems for African communities.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
