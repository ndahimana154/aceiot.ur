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
            className="rounded-[2rem] border border-slate-100/50 bg-white p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.15)] hover:border-[#00AEEF]/30"
        >
            <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${accent}`}>
                <Icon className="h-5 w-5 text-white" />
            </div>
            <p className="text-2xl font-extrabold tracking-tight text-slate-900">{count}</p>
            <p className="mt-2 text-sm font-medium text-slate-600">{label}</p>
        </motion.div>
    )
}
