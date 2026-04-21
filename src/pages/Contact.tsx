import { useEffect } from 'react';
import { Mail, MapPin, Phone, Globe2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import PageMeta from '../components/ui/PageMeta';
import SectionHeader from '../components/ui/SectionHeader';
import PageBanner from '../components/ui/PageBanner';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Visit us',
    description:
      'University of Rwanda, Kigali. Campus access available by appointment.',
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'info@aceiot.ur.ac.rw',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '+250 788 123 456',
  },
  {
    icon: Globe2,
    title: 'Inquiries',
    description: 'For research, partnerships, and admissions support.',
  },
];

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== '#get-involved') {
      return;
    }

    const element = document.getElementById('get-involved');
    if (!element) {
      return;
    }

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const input = document.getElementById('name') as HTMLInputElement | null;
      input?.focus();
    });
  }, [location.hash]);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <PageMeta
        title="Contact · ACEIoT"
        description="Find contact details for ACEIoT at the University of Rwanda, including email, phone, and partnership inquiries."
      />
      <div className="space-y-16">
        <PageBanner
          label="Contact"
          title="Let’s build something impactful together."
          description="Get in touch for admissions support, research collaboration, partnerships, and community initiatives."
          imageUrl="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="rounded-[32px] bg-white p-8 shadow-sm">
          <SectionHeader
            label="Contact"
            title="Get in touch with ACEIoT"
            description="Reach out for admissions guidance, research collaboration, or media inquiries. We’re here to support your questions and partnership interest."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="grid gap-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#00AEEF]/10 text-[#00AEEF] mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-sm uppercase tracking-[0.32em] text-slate-500">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base font-semibold text-slate-900">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              id="get-involved"
              className="rounded-[2rem] border-2 border-[#00AEEF]/20 bg-slate-50 p-6 shadow-sm"
            >
              <div className="mb-6 overflow-hidden rounded-3xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=900&q=80"
                  alt="Map and location visual"
                  className="h-40 w-full object-cover"
                />
              </div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[#00AEEF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
