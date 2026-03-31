import { motion } from 'framer-motion'
import { ArrowRight, Building2, Globe2, Sparkles, Bell, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/ui/SectionHeader'
import ProgramCard from '../components/ui/ProgramCard'
import StatCard from '../components/ui/StatCard'
import NewsCard from '../components/ui/NewsCard'
import PartnerLogo from '../components/ui/PartnerLogo'
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

const aceiotLogo = new URL('../assets/logo.png', import.meta.url).href
const urLogo = new URL('../assets/urlogo2019.png', import.meta.url).href
const worldBankLogo = new URL('../assets/wrld.png', import.meta.url).href

export default function Home() {
    return (
        <div className="space-y-20">
            <section id="home" className="overflow-hidden rounded-[32px] bg-[#f8fbfd] px-6 py-16 sm:px-10 lg:px-16">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-8"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf8ff] px-4 py-2 text-sm font-semibold text-[#0f6e8c]">
                            <Sparkles className="h-4 w-4" />
                            World Bank partnership supporting ICT excellence
                        </span>
                        <div className="space-y-6">
                            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                                ACEIoT at the University of Rwanda: advancing African excellence in Internet of Things research.
                            </h1>
                            <p className="max-w-2xl text-lg leading-8 text-slate-600">
                                Join our interdisciplinary Masters, PhD, and professional ICT programs focused on intelligent systems, digital infrastructure, and sustainable innovation.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/programs"
                                className="inline-flex items-center justify-center rounded-full bg-[#0f6e8c] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0c5c75]"
                            >
                                Explore Programs
                            </Link>
                            <a
                                href="#background"
                                className="inline-flex items-center justify-center rounded-full border border-[#0f6e8c] bg-white px-7 py-3 text-sm font-semibold text-[#0f6e8c] transition hover:border-[#0c5c75] hover:bg-[#eff8ff]"
                            >
                                Learn More
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="rounded-[32px] bg-white p-8 shadow-[0_20px_80px_rgba(15,110,140,0.08)]"
                    >
                        <div className="rounded-[28px] bg-gradient-to-br from-[#0f6e8c] to-[#0c5c75] p-8 text-white shadow-lg">
                            <div className="flex items-center gap-3">
                                <img src={aceiotLogo} alt="ACEIoT logo" className="h-12 w-12 rounded-2xl bg-white/10 p-2" />
                                <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">ACEIoT Intelligence Hub</p>
                            </div>
                            <h2 className="mt-6 text-3xl font-semibold leading-tight">
                                Learn with researchers, build for communities, and launch technologies that matter.
                            </h2>
                            <div className="mt-8 space-y-4 text-sm text-slate-100">
                                <p>• Africa-focused IoT research with global impact.</p>
                                <p>• Partnerships across government, industry, and civil society.</p>
                                <p>• Practical labs and applied innovation support.</p>
                            </div>
                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full bg-white/15 px-4 py-2">Masters programs</span>
                                <span className="rounded-full bg-white/15 px-4 py-2">PhD research</span>
                                <span className="rounded-full bg-white/15 px-4 py-2">Short courses</span>
                            </div>
                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-[24px] bg-white/10 p-4">
                                    <p className="text-xs uppercase tracking-[0.35em] text-slate-200">Powered by</p>
                                    <img src={urLogo} alt="University of Rwanda logo" className="mt-4 h-10 object-contain" />
                                </div>
                                <div className="rounded-[24px] bg-white/10 p-4">
                                    <p className="text-xs uppercase tracking-[0.35em] text-slate-200">Partner</p>
                                    <img src={worldBankLogo} alt="World Bank logo" className="mt-4 h-10 object-contain" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="background" className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div className="space-y-8">
                    <SectionHeader
                        label="Background"
                        title="A center for ICT innovation, capacity building, and research collaboration."
                        description="ACEIoT supports the next generation of African technologists with World Bank-funded programming, industry-engaged learning, and university research networks."
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-50 text-sky-700">
                                <Building2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">Mission-driven research</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Grow scholarly programs that answer regional needs in connectivity, health, agriculture, and energy.
                            </p>
                        </div>
                        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-100 text-amber-900">
                                <Globe2 className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900">Global partnerships</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                Collaborate with the World Bank, public institutions, and global universities to scale research outcomes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-10 text-white shadow-2xl">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-300">Why ACEIoT</p>
                    <h2 className="mt-6 text-3xl font-semibold leading-tight">A unique center combining academic excellence and technology leadership.</h2>
                    <p className="mt-6 text-sm leading-7 text-slate-300">
                        Our programming blends applied engineering, systems thinking and digital innovation so students graduate ready to design resilient IoT ecosystems for African communities.
                    </p>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl bg-white/10 p-5">
                            <p className="text-sm font-semibold text-slate-100">World Bank funded</p>
                            <p className="mt-3 text-sm text-slate-300">Addressing digital inclusion through research and scholarship.</p>
                        </div>
                        <div className="rounded-3xl bg-white/10 p-5">
                            <p className="text-sm font-semibold text-slate-100">Regional impact</p>
                            <p className="mt-3 text-sm text-slate-300">Research portfolios designed for Rwanda and East Africa.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="programs" className="space-y-10">
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

            <section className="space-y-10">
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
                        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Graduates</p>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {graduateStats.map((stat) => (
                                    <StatCard key={stat.label} target={stat.value} label={stat.label} accent={stat.accent} icon={stat.icon} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
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

            <section className="space-y-8">
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

            <section className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
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
                                whileHover={{ y: -3 }}
                                className="group block rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
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

                <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
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

            <section className="space-y-8">
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

            <section id="staff" className="rounded-[32px] bg-gradient-to-br from-slate-950 to-slate-900 p-10 text-white shadow-2xl">
                <div className="grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-end">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Our Staff</p>
                        <h2 className="mt-4 text-3xl font-semibold leading-tight">Dedicated faculty and program leaders.</h2>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                            A multidisciplinary team of professors, researchers and coordinators guiding student projects from lab to field deployment.
                        </p>
                    </div>
                    <Link
                        to="/staff"
                        className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                    >
                        Meet the team
                    </Link>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {staffList.map((member) => (
                        <div key={member.name} className="rounded-[28px] bg-slate-900 p-6">
                            <p className="text-lg font-semibold text-white">{member.name}</p>
                            <p className="mt-2 text-sm text-slate-400">{member.role}</p>
                            <p className="mt-4 text-sm leading-6 text-slate-300">{member.focus}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="research" className="space-y-8">
                <SectionHeader
                    label="Research"
                    title="Applied research that informs future ICT ecosystems."
                    description="Discover the work that powers community-scale sensors, intelligent services, and resilient networks."
                />
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {researchHighlights.map((item) => (
                        <motion.div
                            key={item.title}
                            whileHover={{ y: -4 }}
                            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">Research</p>
                            <h3 className="mt-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                            <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
