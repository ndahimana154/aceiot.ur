import { motion } from 'framer-motion'
import { ArrowRight, Building2, Globe2, Bell, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/ui/SectionHeader'
import ProgramCard from '../components/ui/ProgramCard'
import StatCard from '../components/ui/StatCard'
import NewsCard from '../components/ui/NewsCard'
import PartnerLogo from '../components/ui/PartnerLogo'
import PageMeta from '../components/ui/PageMeta'
import {
    programCards,
    graduateStats,
    ongoingStats,
    eventList,
    announcements,
    partnerLogos,
    staffList,
    researchHighlights,
} from '../data/content'
import Hero from '../components/ui/Hero'
import SpipHealthCheck from '../components/SpipHealthCheck'
import { useSpipNews } from '../hooks/useSpipNews'


export default function Home() {
    const { data: newsItems } = useSpipNews()

    return (
        <>
            <PageMeta
                title="Home · ACEIoT"
                description="ACEIoT at the University of Rwanda accelerates IoT education, research, and partnerships for regional technology impact."
            />
            <Hero />
            <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-16 py-8">
                    <SpipHealthCheck />

                    <section id="background" className="py-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <div className="space-y-8">
                            <SectionHeader
                                label="Background"
                                title="Focused postgraduate education in ICT and connected systems."
                                description="ACEIoT brings together graduate study, applied research, and institutional partnerships within the University of Rwanda."
                            />
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-6 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_44px_-26px_rgba(13,111,148,0.24)]">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--ace-primary-soft)] text-[color:var(--ace-primary)]">
                                        <Building2 className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-base font-semibold text-[color:var(--ace-text)]">Applied postgraduate study</h3>
                                    <p className="mt-2 text-sm leading-6 text-[color:var(--ace-muted)]">
                                        Structured MSc and PhD pathways centred on digital systems, networks, and practical research.
                                    </p>
                                </div>
                                <div className="rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-6 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_44px_-26px_rgba(13,111,148,0.24)]">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--ace-primary-soft)] text-[color:var(--ace-primary)]">
                                        <Globe2 className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-base font-semibold text-[color:var(--ace-text)]">Regional collaboration</h3>
                                    <p className="mt-2 text-sm leading-6 text-[color:var(--ace-muted)]">
                                        Work with universities, institutions, and funding partners supporting graduate research and innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[color:var(--ace-primary-dark)] to-[color:var(--ace-primary)] p-8 text-white shadow-xl shadow-[rgba(13,111,148,0.22)] lg:p-10">
                            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
                            <p className="relative z-10 text-xs font-bold uppercase tracking-[0.3em] text-[#f3dfb0]">At a glance</p>
                            <h2 className="relative z-10 mt-4 text-2xl font-semibold leading-tight tracking-tight">Graduate study and research aligned with Rwanda's digital priorities.</h2>
                            <p className="relative z-10 mt-4 text-sm leading-7 text-slate-100">
                                The centre keeps its offer simple: advanced training, supervised research, and partnerships that strengthen academic and public impact.
                            </p>
                            <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                                    <p className="text-sm font-semibold text-white">Postgraduate focus</p>
                                    <p className="mt-3 text-sm text-slate-100">MSc, PhD, and executive learning designed for advanced ICT practice.</p>
                                </div>
                                <div className="rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                                    <p className="text-sm font-semibold text-white">Partnership-led delivery</p>
                                    <p className="mt-3 text-sm text-slate-100">Research, scholarships, and events supported by university and external partners.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="programs" className="py-8 space-y-10">
                        <SectionHeader
                            label="Programs"
                            title="Three clear study pathways."
                            description="Choose a postgraduate or executive route shaped around advanced ICT capability and applied research."
                        />
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {programCards.map((program) => (
                                <ProgramCard key={program.title} {...program} />
                            ))}
                        </div>
                    </section>

                    <section className="py-8 space-y-10">
                        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
                            <SectionHeader
                                label="Statistics"
                                title="A concise view of scale and participation."
                                description="Headline figures summarise graduate output, current enrolment, and the breadth of the academic community."
                            />
                            <div className="rounded-[32px] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-8 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)]">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--ace-muted)]">Current focus</p>
                                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-3xl bg-[color:var(--ace-card)] p-5">
                                        <p className="text-3xl font-semibold text-[color:var(--ace-text)]">24</p>
                                        <p className="mt-2 text-sm text-[color:var(--ace-muted)]">Active research projects</p>
                                    </div>
                                    <div className="rounded-3xl bg-[color:var(--ace-card)] p-5">
                                        <p className="text-3xl font-semibold text-[color:var(--ace-text)]">7</p>
                                        <p className="mt-2 text-sm text-[color:var(--ace-muted)]">Core partner institutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="grid gap-5">
                                <div className="rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-8 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)]">
                                    <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--ace-muted)]">Graduates</p>
                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                        {graduateStats.map((stat) => (
                                            <StatCard key={stat.label} target={stat.value} label={stat.label} accent={stat.accent} icon={stat.icon} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-5">
                                <div className="rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-8 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)]">
                                    <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--ace-muted)]">Current students</p>
                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                        {ongoingStats.map((stat) => (
                                            <StatCard key={stat.label} target={stat.value} label={stat.label} accent={stat.accent} icon={stat.icon} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-8 space-y-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <SectionHeader
                                label="News"
                                title="Latest updates"
                                description="Recent notices, programme updates, and research activity from the centre."
                            />
                            <Link
                                to="/news"
                                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] px-5 py-2 text-sm font-semibold text-[color:var(--ace-muted-strong)] transition hover:border-[color:var(--ace-primary)] hover:bg-[color:var(--ace-card)]"
                            >
                                View all news
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid gap-6 lg:grid-cols-3">
                            {newsItems.slice(0, 3).map((item) => (
                                <NewsCard key={item.slug} title={item.title} summary={item.summary} date={item.date} category={item.category} href={`/news/${item.slug}`} />
                            ))}
                        </div>
                    </section>

                    <section className="py-8 grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
                        <div className="space-y-8">
                            <SectionHeader
                                label="Events"
                                title="Upcoming events and key dates."
                                description="A short calendar of seminars, applicant support sessions, and research events."
                            />
                            <div className="space-y-4">
                                {eventList.map((event) => (
                                    <motion.a
                                        key={event.title}
                                        className="group block rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-8 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-26px_rgba(13,111,148,0.24)]"
                                        href="#"
                                    >
                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <div>
                                                <p className="text-lg font-semibold text-[color:var(--ace-text)]">{event.title}</p>
                                                <p className="mt-2 text-sm text-[color:var(--ace-muted)]">{event.description}</p>
                                            </div>
                                            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ace-card)] px-4 py-2 text-sm text-[color:var(--ace-muted-strong)]">
                                                <Bell className="h-4 w-4" />
                                                {event.date}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-8 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)]">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--ace-muted)]">Announcements</p>
                                    <h3 className="mt-3 text-2xl font-semibold text-[color:var(--ace-text)]">Notice board</h3>
                                </div>
                                <BookOpen className="h-6 w-6 text-[color:var(--ace-primary)]" />
                            </div>
                            <div className="mt-6 space-y-4">
                                {announcements.map((item) => (
                                    <div
                                        key={item.title}
                                        className={`rounded-3xl border px-5 py-4 ${item.important ? 'border-[color:var(--ace-secondary)] bg-[color:var(--ace-secondary-soft)]' : 'border-[color:var(--ace-border)] bg-[color:var(--ace-card)]'}`}
                                    >
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="font-semibold text-[color:var(--ace-text)]">{item.title}</p>
                                            {item.important ? <span className="rounded-full bg-[rgba(255,255,255,0.65)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ace-secondary)]">Important</span> : null}
                                        </div>
                                        <p className="mt-2 text-sm leading-6 text-[color:var(--ace-muted)]">{item.note}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-8 space-y-8">
                        <SectionHeader
                            label="Partners"
                            title="Partners supporting delivery and research."
                            description="Institutional relationships help extend scholarship support, mobility, and applied project work."
                        />
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {partnerLogos.map((partner) => (
                                <PartnerLogo key={partner.name} name={partner.name} src={partner.logo} />
                            ))}
                        </div>
                    </section>

                    <section id="staff" className="rounded-[2.5rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-card)] p-8 py-8 text-[color:var(--ace-text)] shadow-xl shadow-[rgba(19,49,63,0.08)] lg:p-10">
                        <div className="relative z-10 grid gap-6 lg:grid-cols-[0.95fr_0.65fr] lg:items-end">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--ace-primary)]">Leadership</p>
                                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-[color:var(--ace-text)]">Academic and programme leadership.</h2>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-[color:var(--ace-muted)]">
                                    A compact team guides admissions, postgraduate supervision, partnerships, and research planning.
                                </p>
                            </div>
                            <Link
                                to="/staff"
                                className="inline-flex items-center justify-center rounded-full bg-[color:var(--ace-primary)] px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[color:var(--ace-primary-dark)] hover:shadow-[0_18px_36px_-22px_rgba(13,111,148,0.32)]"
                            >
                                View staff
                            </Link>
                        </div>
                        <div className="relative z-10 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {staffList.map((member) => (
                                <div key={member.name} className="rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-8 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-26px_rgba(13,111,148,0.24)]">
                                    <p className="text-lg font-semibold text-[color:var(--ace-text)]">{member.name}</p>
                                    <p className="mt-2 text-sm font-medium text-[color:var(--ace-primary)]">{member.role}</p>
                                    <p className="mt-4 text-sm leading-6 text-[color:var(--ace-muted)]">{member.focus}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="research" className="py-8 space-y-6">
                        <SectionHeader
                            label="Research"
                            title="Applied research themes."
                            description="Current work focuses on practical systems that respond to public, institutional, and infrastructure needs."
                        />
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {researchHighlights.map((item) => (
                                <motion.div
                                    key={item.title}
                                    className="rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-6 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)] transition-all duration-300 hover:border-[color:var(--ace-primary)] hover:shadow-[0_20px_44px_-26px_rgba(13,111,148,0.24)]"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--ace-primary)]">Research</p>
                                    <h3 className="mt-3 text-lg font-semibold text-[color:var(--ace-text)]">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-[color:var(--ace-muted)]">{item.summary}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
