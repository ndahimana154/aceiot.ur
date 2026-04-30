import { announcements, eventList } from '../data/content'
import { Bell, BookOpen } from 'lucide-react'
import SectionHeader from './ui/SectionHeader'
import { motion } from 'framer-motion'

const EventsAndAnnouncements = () => {
    return (
        <section className="bg-slate-50 py-12">
            <div className="max-w-7xl mx-auto px-4 grid gap-8 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
                <div className="space-y-2">
                    <SectionHeader
                        label="Events"
                        title="Upcoming workshops, symposiums, and innovation forums."
                        description="Engage with community events designed to connect students, researchers, and industry partners."
                    />
                    <div className="space-y-3">
                        {eventList.map((event) => (
                            <motion.a
                                key={event.title}
                                whileHover={{ y: -3 }}
                                className="group block rounded-[2rem] border border-slate-100 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.12)] hover:-translate-y-1"
                                href="#"
                            >
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-base font-semibold text-slate-900">{event.title}</p>
                                        <p className="mt-1 text-sm text-slate-600">{event.description}</p>
                                    </div>
                                    <div className="inline-flex items-center gap-2 mt-4 sm:mt-0 rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-[#00AEEF]">
                                        <Bell className="h-4 w-4" />
                                        {event.date}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="rounded-[2.5rem] border border-slate-100 bg-white p-6 lg:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden">
                    <BookOpen className="h-16 w-16 text-[#00AEEF]/5 absolute -right-4 -top-4 pointer-events-none" />
                    <div className="flex items-center justify-between relative z-10">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#00AEEF]">Announcements</p>
                            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">Notice board</h3>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        {announcements.map((item) => (
                            <div
                                key={item.title}
                                className={`rounded-[1.5rem] border px-6 py-5 transition-all duration-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:bg-white ${item.important ? 'border-amber-200 bg-amber-50/50' : 'border-slate-100 bg-slate-50/50'}`}
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-base font-semibold text-slate-900">{item.title}</p>
                                    {item.important ? <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-800">Important</span> : null}
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>)
}

export default EventsAndAnnouncements