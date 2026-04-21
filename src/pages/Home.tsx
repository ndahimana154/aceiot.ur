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
    newsList,
    eventList,
    announcements,
    partnerLogos,
    staffList,
    researchHighlights,
} from '../data/content'
import Hero from '../components/ui/Hero'


export default function Home() {
    return (
        <>
            <PageMeta
                title="Home · ACEIoT"
                description="ACEIoT at the University of Rwanda accelerates IoT education, research, and partnerships for regional technology impact."
            />
            <Hero />
            <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-16 py-8">
                    <section id="background" className="py-8 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                        <div className="space-y-8">
                            <SectionHeader
                                label="Background"
                                title="A center for ICT innovation, capacity building, and research collaboration."
                                description="ACEIoT supports the next generation of African technologists with World Bank-funded programming, industry-engaged learning, and university research networks."
                            />
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.1)] transition-all duration-500 hover:-translate-y-1">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                                        <Building2 className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-900">Mission-driven research</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Grow scholarly programs that answer regional needs in connectivity, health, agriculture, and energy.
                                    </p>
                                </div>
                                <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.1)] transition-all duration-500 hover:-translate-y-1">
                                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                                        <Globe2 className="h-5 w-5" />
                                    </div>
                                    <h3 className="text-base font-semibold text-slate-900">Global partnerships</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Collaborate with the World Bank, public institutions, and global universities to scale research outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#00AEEF] to-sky-600 p-8 lg:p-10 text-white shadow-xl shadow-[#00AEEF]/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-100 relative z-10">Why ACEIoT</p>
                            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight relative z-10">A unique center combining academic excellence and technology leadership.</h2>
                            <p className="mt-4 text-sm leading-7 text-sky-50 relative z-10">
                                Our programming blends applied engineering, systems thinking and digital innovation so students graduate ready to design resilient IoT ecosystems for African communities.
                            </p>
                            <div className="mt-10 grid gap-4 sm:grid-cols-2 relative z-10">
                                <div className="rounded-[2rem] bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-all hover:bg-white/20">
                                    <p className="text-sm font-semibold text-white">World Bank funded</p>
                                    <p className="mt-3 text-sm text-sky-100">Addressing digital inclusion through research and scholarship.</p>
                                </div>
                                <div className="rounded-[2rem] bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-all hover:bg-white/20">
                                    <p className="text-sm font-semibold text-white">Regional impact</p>
                                    <p className="mt-3 text-sm text-sky-100">Research portfolios designed for Rwanda and East Africa.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="programs" className="py-8 space-y-10">
                        <SectionHeader
                            label="Programs"
                            title="Flexible academic pathways for Masters, PhD and ICT professionals."
                            description="Three tailored tracks help students develop technical expertise, research skills, and practical impact across IoT and digital systems."
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
                                title="Research and student impact in numbers."
                                description="Animated statistics show the growth of our community: graduates, current students, and program diversity."
                            />
                            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Scholarship highlights</p>
                                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-3xl bg-slate-50 p-5">
                                        <p className="text-3xl font-semibold text-slate-900">24</p>
                                        <p className="mt-2 text-sm text-slate-600">Active research grants</p>
                                    </div>
                                    <div className="rounded-3xl bg-slate-50 p-5">
                                        <p className="text-3xl font-semibold text-slate-900">32</p>
                                        <p className="mt-2 text-sm text-slate-600">Faculty mentors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-5 md:grid-cols-2">
                            <div className="grid gap-5">
                                <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                                    <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Graduates</p>
                                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                        {graduateStats.map((stat) => (
                                            <StatCard key={stat.label} target={stat.value} label={stat.label} accent={stat.accent} icon={stat.icon} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-5">
                                <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                                    <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Ongoing students</p>
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
                                title="Latest updates from ACEIoT"
                                description="Stay informed with the latest announcements, research milestones, and partnership news."
                            />
                            <Link
                                to="/news"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                            >
                                View all news
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid gap-6 lg:grid-cols-3">
                            {newsList.slice(0, 3).map((item) => (
                                <NewsCard key={item.slug} title={item.title} summary={item.summary} date={item.date} category={item.category} href={`/news/${item.slug}`} />
                            ))}
                        </div>
                    </section>

                    <section className="py-8 grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
                        <div className="space-y-8">
                            <SectionHeader
                                label="Events"
                                title="Upcoming workshops, symposiums, and innovation forums."
                                description="Engage with community events designed to connect students, researchers, and industry partners."
                            />
                            <div className="space-y-4">
                                {eventList.map((event) => (
                                    <motion.a
                                        key={event.title}
                                        className="group block rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.12)] hover:-translate-y-1"
                                        href="#"
                                    >
                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <div>
                                                <p className="text-lg font-semibold text-slate-900">{event.title}</p>
                                                <p className="mt-2 text-sm text-slate-600">{event.description}</p>
                                            </div>
                                            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
                                                <Bell className="h-4 w-4" />
                                                {event.date}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Announcements</p>
                                    <h3 className="mt-3 text-2xl font-semibold text-slate-900">Notice board</h3>
                                </div>
                                <BookOpen className="h-6 w-6 text-slate-400" />
                            </div>
                            <div className="mt-6 space-y-4">
                                {announcements.map((item) => (
                                    <div
                                        key={item.title}
                                        className={`rounded-3xl border px-5 py-4 ${item.important ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-slate-50'}`}
                                    >
                                        <div className="flex items-center justify-between gap-3">
                                            <p className="font-semibold text-slate-900">{item.title}</p>
                                            {item.important ? <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">Important</span> : null}
                                        </div>
                                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.note}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="py-8 space-y-8">
                        <SectionHeader
                            label="Partners"
                            title="Collaborating with regional and international institutions."
                            description="Our partner network supports research funding, student mobility, and innovation pathways across Africa."
                        />
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {partnerLogos.map((partner) => (
                                <PartnerLogo key={partner.name} name={partner.name} src={partner.logo} />
                            ))}
                        </div>
                    </section>

                    <section id="staff" className="py-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 p-8 lg:p-10 text-slate-900 shadow-xl shadow-slate-200/50">
                        <div className="grid gap-6 lg:grid-cols-[0.95fr_0.65fr] lg:items-end relative z-10">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00AEEF]">Our Staff</p>
                                <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-slate-900">Dedicated faculty and program leaders.</h2>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                                    A multidisciplinary team of professors, researchers and coordinators guiding student projects from lab to field deployment.
                                </p>
                            </div>
                            <Link
                                to="/staff"
                                className="inline-flex items-center justify-center rounded-full bg-[#00AEEF] px-8 py-4 text-sm font-semibold text-white transition-all shadow-[0_4px_20px_-4px_rgba(0,174,239,0.4)] hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.6)] hover:-translate-y-1"
                            >
                                Meet the team
                            </Link>
                        </div>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
                            {staffList.map((member) => (
                                <div key={member.name} className="rounded-[2rem] bg-white border border-slate-100 p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.12)] transition-all duration-300 hover:-translate-y-1">
                                    <p className="text-lg font-semibold text-slate-900">{member.name}</p>
                                    <p className="mt-2 text-sm font-medium text-[#00AEEF]">{member.role}</p>
                                    <p className="mt-4 text-sm leading-6 text-slate-600">{member.focus}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="research" className="py-8 space-y-6">
                        <SectionHeader
                            label="Research"
                            title="Applied research that informs future ICT ecosystems."
                            description="Discover the work that powers community-scale sensors, intelligent services, and resilient networks."
                        />
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {researchHighlights.map((item) => (
                                <motion.div
                                    key={item.title}
                                    className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.12)] hover:border-[#00AEEF]/20"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-600">Research</p>
                                    <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
