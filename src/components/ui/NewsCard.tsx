import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type NewsCardProps = {
    title: string
    summary: string
    date: string
    category: string
    href: string
}

export default function NewsCard({ title, summary, date, category, href }: NewsCardProps) {
    return (
        <motion.article
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
        >
            <div className="h-48 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 p-5" />
            <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                    <span>{category}</span>
                    <span>{date}</span>
                </div>
                <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                    <p className="text-sm leading-6 text-slate-600">{summary}</p>
                </div>
                <Link
                    to={href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-800"
                >
                    Read more
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </motion.article>
    )
}
