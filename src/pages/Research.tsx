import SectionHeader from '../components/ui/SectionHeader'
import { researchHighlights } from '../data/content'

export default function Research() {
    return (
        <div className="space-y-14">
            <section className="rounded-[32px] bg-white p-8 shadow-sm">
                <SectionHeader
                    label="Research"
                    title="Our current research themes and future directions."
                    description="Explore the ICT research areas driving ACEIoT innovation and regional technology growth."
                />
            </section>

            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {researchHighlights.map((item) => (
                    <article key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Research</p>
                        <h2 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h2>
                        <p className="mt-4 text-sm leading-6 text-slate-600">{item.summary}</p>
                    </article>
                ))}
            </section>
        </div>
    )
}
