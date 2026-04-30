import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Image as ImageIcon, X } from 'lucide-react'
import { galleryItems } from '../data/content'

export default function Gallery() {
    const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)

    return (
        <>
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <p className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF] mb-3">Visuals</p>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                                Our Gallery
                            </h2>
                            <p className="text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">
                                Explore our research activities, events, and achievements through photos and videos
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {galleryItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] cursor-pointer border border-slate-100 hover:shadow-[0_8px_30px_-4px_rgba(0,174,239,0.15)] transition-all duration-500 hover:-translate-y-2 focus-within:ring-2 ring-[#00AEEF] outline-none"
                                onClick={() => setSelectedItem(item)}
                            >
                                <div className="aspect-video relative">
                                    <img
                                        src={item.type === 'video' ? item.thumbnail : item.url}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        {item.type === 'video' ? (
                                            <Play className="w-12 h-12 text-white" />
                                        ) : (
                                            <ImageIcon className="w-12 h-12 text-white" />
                                        )}
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                    <h3 className="text-white font-semibold text-base mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 text-xs">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
                    >
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-10 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white rounded-full p-2 transition-all duration-300"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="aspect-video relative">
                            {selectedItem.type === 'video' ? (
                                <iframe
                                    src={selectedItem.url}
                                    title={selectedItem.title}
                                    className="w-full h-full"
                                    allowFullScreen
                                />
                            ) : (
                                <img
                                    src={selectedItem.url}
                                    alt={selectedItem.title}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>

                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                {selectedItem.title}
                            </h3>
                            <p className="text-slate-600">
                                {selectedItem.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    )
}