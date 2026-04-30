import type { ComponentType } from 'react'
import { motion } from 'framer-motion'
import { useAnimatedCount } from '../../hooks/useAnimatedCount'

type StatCardProps = {
    target: number
    label: string
    accent: string
    icon: ComponentType<{ className?: string }>
}

export default function StatCard({ target, label, accent, icon: Icon }: StatCardProps) {
    const count = useAnimatedCount(target)

    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[2rem] border border-[color:var(--ace-border)] bg-[color:var(--ace-surface)] p-6 shadow-[0_16px_36px_-28px_rgba(19,49,63,0.45)] transition-all duration-500 hover:border-[color:var(--ace-primary)] hover:shadow-[0_20px_44px_-26px_rgba(13,111,148,0.24)]"
        >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: accent }}>
                <Icon className="h-5 w-5 text-white" />
            </div>
            <p className="text-2xl font-extrabold tracking-tight text-[color:var(--ace-text)]">{count}</p>
            <p className="mt-2 text-sm font-medium text-[color:var(--ace-muted)]">{label}</p>
        </motion.div>
    )
}
