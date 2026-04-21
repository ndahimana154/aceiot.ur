import { useEffect, useState } from 'react';
import { Mail, Users2, X } from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';
import PageBanner from '../components/ui/PageBanner';
import { staffList } from '../data/content';

type CommunityPerson = {
  name: string;
  role: string;
  focus: string;
  image: string;
  email: string;
  expertise: string[];
  bio: string;
};

export default function Staff() {
  const [selectedPerson, setSelectedPerson] = useState<CommunityPerson | null>(
    null,
  );

  useEffect(() => {
    if (!selectedPerson) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedPerson(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPerson]);

  const people: CommunityPerson[] = staffList.map((member, index) => ({
    ...member,
    image: `https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80&sig=${index + 20}`,
    email: `${member.name.toLowerCase().replace(/\s+/g, '.')}@aceiot.ur.ac.rw`,
    expertise: [
      member.focus,
      'Mentorship and student guidance',
      'Applied research collaboration',
    ],
    bio: `${member.name} contributes to ACEIoT through leadership in ${member.focus.toLowerCase()}. Their work supports program quality, student development, and impactful research outcomes for Rwanda and the wider region.`,
  }));

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <PageMeta
        title="Our Community · ACEIoT"
        description="Meet the ACEIoT community of mentors, program leaders, and researchers shaping innovation at the University of Rwanda."
      />
      <div className="space-y-14">
        <PageBanner
          label="Our Community"
          title="People behind ACEIoT impact and excellence."
          description="Discover our mentors, researchers, and program leaders. Click any profile to open full details."
          imageUrl="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1600&q=80"
        />

        <section className="rounded-[32px] bg-white p-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
              <Users2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">
                Community
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">
                Meet the ACEIoT people and leadership.
              </h1>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {people.map((member) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setSelectedPerson(member)}
              className="rounded-[28px] border border-slate-200 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF] focus-visible:ring-offset-2"
            >
              <img
                src={member.image}
                alt={member.name}
                className="mb-5 h-16 w-16 rounded-3xl object-cover"
              />
              <h2 className="text-left text-xl font-semibold text-slate-900">
                {member.name}
              </h2>
              <p className="mt-3 text-left text-sm font-semibold text-slate-600">
                {member.role}
              </p>
              <p className="mt-4 text-left text-sm leading-6 text-slate-600">
                {member.focus}
              </p>
              <p className="mt-4 text-left text-sm font-semibold text-[#00AEEF]">
                View full profile
              </p>
            </button>
          ))}
        </section>
      </div>

      {selectedPerson ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 px-4"
          onClick={() => setSelectedPerson(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="community-person-title"
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={selectedPerson.image}
                  alt={selectedPerson.name}
                  className="h-16 w-16 rounded-2xl object-cover"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#00AEEF]">
                    Our Community
                  </p>
                  <h2
                    id="community-person-title"
                    className="mt-2 text-2xl font-semibold text-slate-900"
                  >
                    {selectedPerson.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    {selectedPerson.role}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPerson(null)}
                className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200"
                aria-label="Close profile modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Focus Area
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {selectedPerson.focus}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Biography
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {selectedPerson.bio}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Expertise
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {selectedPerson.expertise.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Mail className="h-4 w-4 text-[#00AEEF]" />
                {selectedPerson.email}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
