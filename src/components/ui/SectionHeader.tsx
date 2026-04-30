import { motion } from 'framer-motion'

type SectionHeaderProps = {
    label: string
    title: string
    description: string
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="space-y-3"
        >
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[#00AEEF]">
                {label}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl mt-4">{title}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600 mt-2">{description}</p>
        </motion.div>
    )
}
