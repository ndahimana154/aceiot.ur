// components/ui/GraduatesChart.tsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { motion } from 'framer-motion'

const graduatesData = [
    { year: '2020', masters: 18, phd: 4, total: 22 },
    { year: '2021', masters: 24, phd: 6, total: 30 },
    { year: '2022', masters: 32, phd: 8, total: 40 },
    { year: '2023', masters: 38, phd: 11, total: 49 },
    { year: '2024', masters: 45, phd: 14, total: 59 },
]

export default function GraduatesChart() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <ResponsiveContainer width="100%" height={280}>
                <BarChart data={graduatesData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                        dataKey="year"
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                    />
                    <YAxis
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        label={{ value: 'Graduates', angle: -90, position: 'insideLeft', style: { fontSize: 12, fill: '#64748b' } }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            padding: '8px 12px',
                            fontSize: '12px'
                        }}
                        cursor={{ fill: '#f1f5f9' }}
                    />
                    <Bar dataKey="masters" name="Masters" fill="#0ea5e9" radius={[4, 4, 0, 0]}>
                        {graduatesData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill="#0ea5e9" />
                        ))}
                    </Bar>
                    <Bar dataKey="phd" name="PhD" fill="#f59e0b" radius={[4, 4, 0, 0]}>
                        {graduatesData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill="#f59e0b" />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-sky-500" />
                    <span className="text-xs text-slate-600">Masters</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-amber-500" />
                    <span className="text-xs text-slate-600">PhD</span>
                </div>
            </div>
        </motion.div>
    )
}