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
            className="group relative overflow-hidden rounded-[2.5rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)] transition-all duration-500 hover:shadow-[0_20px_44px_-26px_rgba(13,111,148,0.24)] hover:-translate-y-2"
        >
            <div className="relative h-48 w-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop&q=80" alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-[color:var(--ace-primary-soft)] px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--ace-primary)] shadow-sm">
                    {category}
                </div>
            </div>
            <div className="space-y-3 p-6">
                <div className="flex items-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ace-muted)]">
                    <span>{date}</span>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-[color:var(--ace-text)]">{title}</h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-[color:var(--ace-muted)]">{summary}</p>
                </div>
                <Link
                    to={href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[color:var(--ace-primary)] transition-all hover:text-[color:var(--ace-primary-dark)] group-hover:gap-3"
                >
                    Read more
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </motion.article>
    )
}
