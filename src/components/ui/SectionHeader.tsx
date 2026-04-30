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
            <p className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ace-primary-soft)] px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--ace-primary)]">
                {label}
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[color:var(--ace-text)] md:text-3xl">{title}</h2>
            <p className="mt-2 max-w-2xl text-base leading-relaxed text-[color:var(--ace-muted)]">{description}</p>
        </motion.div>
    )
}
