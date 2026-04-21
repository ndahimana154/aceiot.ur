import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { partnerLogos } from '../data/content'

export default function SlidingPartners() {
    const [duplicatedLogos, setDuplicatedLogos] = useState<typeof partnerLogos>([])

    useEffect(() => {
        // Duplicate logos for seamless scrolling
        setDuplicatedLogos([...partnerLogos, ...partnerLogos, ...partnerLogos])
    }, [])

    return (
        <section className="py-12 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF] mb-3">Ecosystem</p>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                            Our Partners
                        </h2>
                        <p className="text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">
                            Collaborating with regional and international institutions to advance IoT research and education
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    <motion.div
                        animate={{
                            x: [-100, -200],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                        className="flex gap-8"
                    >
                        {duplicatedLogos.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex-shrink-0 w-48 h-24 flex items-center justify-center rounded-[1.5rem] border border-slate-100 bg-white p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.15)] hover:-translate-y-2 group"
                            >
                                {partner.logo ? (
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-12 object-contain grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                                    />
                                ) : (
                                    <span className="text-base font-semibold tracking-wide text-slate-700">
                                        {partner.name}
                                    </span>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}