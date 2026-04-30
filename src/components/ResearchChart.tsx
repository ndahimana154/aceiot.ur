import { motion } from 'framer-motion'
import { researchStats } from '../data/content'

export default function ResearchChart() {
    const maxValue = Math.max(...researchStats.flatMap(stat => [stat.publications, stat.grants, stat.patents]))

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Research Impact Over Time</h3>

            <div className="space-y-4">
                {researchStats.map((stat, index) => (
                    <motion.div
                        key={stat.year}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-slate-700">{stat.year}</span>
                            <div className="flex gap-4 text-sm">
                                <span className="text-blue-600">{stat.publications} publications</span>
                                <span className="text-green-600">{stat.grants} grants</span>
                                <span className="text-purple-600">{stat.patents} patents</span>
                            </div>
                        </div>

                        <div className="flex gap-1 h-8">
                            <div
                                className="bg-blue-500 rounded transition-all duration-1000 ease-out"
                                style={{
                                    width: `${(stat.publications / maxValue) * 100}%`,
                                    minWidth: '4px'
                                }}
                            />
                            <div
                                className="bg-green-500 rounded transition-all duration-1000 ease-out"
                                style={{
                                    width: `${(stat.grants / maxValue) * 100}%`,
                                    minWidth: '4px'
                                }}
                            />
                            <div
                                className="bg-purple-500 rounded transition-all duration-1000 ease-out"
                                style={{
                                    width: `${(stat.patents / maxValue) * 100}%`,
                                    minWidth: '4px'
                                }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    <span>Publications</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span>Grants</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                    <span>Patents</span>
                </div>
            </div>
        </div>
    )
}