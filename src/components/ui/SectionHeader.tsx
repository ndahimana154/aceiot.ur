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
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0f6e8c]">{label}</p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600">{description}</p>
        </motion.div>
    )
}
