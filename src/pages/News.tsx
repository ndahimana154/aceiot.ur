import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/ui/SectionHeader'
import { useAsyncData } from '../hooks/useAsyncData'
import { newsList } from '../data/content'

export default function News() {
    const [query, setQuery] = useState('')
    const { data, loading } = useAsyncData(newsList)

    const filteredNews = useMemo(() => {
        if (!data) return []
        return data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.summary.toLowerCase().includes(query.toLowerCase()))
    }, [data, query])

    return (
        <div className="space-y-10">
            <section className="rounded-[32px] bg-white p-8 shadow-sm">
                <SectionHeader
                    label="News"
                    title="Stories, updates, and announcements from ACEIoT."
                    description="Search the latest news and discover our center’s recent research, partnership, and community activity."
                />
                <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center gap-3">
                        <Search className="h-4 w-4 text-slate-400" />
                        <input
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search news articles"
                            className="w-full bg-transparent px-3 py-3 text-sm text-slate-700 outline-none"
                        />
                    </div>
                </div>
            </section>

            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {loading ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="animate-pulse rounded-[28px] bg-slate-100 p-6" />
                    ))
                ) : filteredNews.length ? (
                    filteredNews.map((item) => (
                        <article key={item.slug} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
                            <div className="mb-4 h-44 rounded-3xl bg-slate-200" />
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                                    <span>{item.category}</span>
                                    <span>{item.date}</span>
                                </div>
                                <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
                                <p className="text-sm leading-6 text-slate-600">{item.summary}</p>
                            </div>
                            <Link
                                to={`/news/${item.slug}`}
                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-800"
                            >
                                Read article
                                <span aria-hidden="true">→</span>
                            </Link>
                        </article>
                    ))
                ) : (
                    <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center text-sm text-slate-600">
                        No articles matched your search. Try a different term or clear the filter.
                    </div>
                )}
            </section>
        </div>
    )
}
