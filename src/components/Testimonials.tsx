import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../data/content'

export default function Testimonials() {
    return (
        <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF] mb-3">Community</p>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                            What Our Alumni Says
                        </h2>
                        <p className="text-base text-slate-600 max-w-2xl mx-auto">
                            Hear from our graduates, partners, and collaborators about their experience with ACEIoT
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative bg-white rounded-[2rem] p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.12)] transition-all duration-500 hover:-translate-y-2 overflow-hidden z-10"
                        >
                            <Quote className="absolute -top-4 -right-4 w-20 h-20 text-[#00AEEF]/5 -rotate-12 pointer-events-none z-0" />
                            <div className="relative z-10 flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                                ))}
                            </div>

                            <p className="relative z-10 text-slate-700 text-sm mb-6 leading-relaxed font-medium">
                                "{testimonial.quote}"
                            </p>

                            <div className="relative z-10 flex items-center pt-4 border-t border-slate-100">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}