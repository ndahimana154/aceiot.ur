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
            className="group relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.12)] hover:-translate-y-2"
        >
            <div className="relative h-48 w-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop&q=80" alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF] shadow-sm">
                    {category}
                </div>
            </div>
            <div className="space-y-3 p-6">
                <div className="flex items-center text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    <span>{date}</span>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold tracking-tight text-slate-900">{title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600 line-clamp-2">{summary}</p>
                </div>
                <Link
                    to={href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#00AEEF] transition-all hover:text-sky-400 group-hover:gap-3"
                >
                    Read more
                    <span aria-hidden="true">→</span>
                </Link>
            </div>
        </motion.article>
    )
}
