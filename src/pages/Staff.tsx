import { Users2 } from 'lucide-react'
import { staffList } from '../data/content'

export default function Staff() {
    return (
        <div className="space-y-14">
            <section className="rounded-[32px] bg-white p-8 shadow-sm">
                <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-100 text-sky-700">
                        <Users2 className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Our team</p>
                        <h1 className="mt-3 text-3xl font-semibold text-slate-900">Meet the ACEIoT leadership and faculty.</h1>
                    </div>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {staffList.map((member) => (
                    <article key={member.name} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                        <div className="mb-5 h-14 w-14 rounded-3xl bg-slate-100" />
                        <h2 className="text-xl font-semibold text-slate-900">{member.name}</h2>
                        <p className="mt-3 text-sm font-semibold text-slate-600">{member.role}</p>
                        <p className="mt-4 text-sm leading-6 text-slate-600">{member.focus}</p>
                    </article>
                ))}
            </section>
        </div>
    )
}
