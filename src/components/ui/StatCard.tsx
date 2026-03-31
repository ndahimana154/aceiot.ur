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
            whileHover={{ y: -3 }}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
        >
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${accent}`}>
                <Icon className="h-5 w-5 text-white" />
            </div>
            <p className="text-3xl font-semibold text-slate-900">{count}</p>
            <p className="mt-2 text-sm text-slate-600">{label}</p>
        </motion.div>
    )
}
