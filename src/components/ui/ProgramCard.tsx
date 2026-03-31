import type { ComponentType } from 'react'
import { motion } from 'framer-motion'

type ProgramCardProps = {
    title: string
    description: string
    accent: string
    icon: ComponentType<{ className?: string }>
}

export default function ProgramCard({ title, description, accent, icon: Icon }: ProgramCardProps) {
    return (
        <motion.article
            whileHover={{ y: -6 }}
            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
        >
            <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl ${accent}`}>
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
        </motion.article>
    )
}
