import { useState, useEffect, type TouchEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play, MapPin } from 'lucide-react'
import { labImages } from '../data/content'

export default function Labs() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)
    const [touchStart, setTouchStart] = useState<number | null>(null)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % labImages.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + labImages.length) % labImages.length)
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            nextSlide()
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, currentIndex])

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setTouchStart(e.touches[0].clientX)
    }

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        if (!touchStart) return
        const touchEnd = e.changedTouches[0].clientX
        const diff = touchStart - touchEnd

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide()
            } else {
                prevSlide()
            }
        }
        setTouchStart(null)
    }

    const currentSlide = labImages[currentIndex]

    return (
        <section className="py-16 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our State-of-the-Art Labs
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Discover our cutting-edge research facilities equipped with the latest IoT technology
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    <div
                        className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={currentSlide.url}
                                    alt={currentSlide.alt}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`content-${currentIndex}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin className="w-5 h-5 text-blue-400" />
                                        <span className="text-sm font-medium text-blue-400 uppercase tracking-wide">
                                            Research Facility
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        {currentSlide.title}
                                    </h3>
                                    <p className="text-slate-200 text-lg">
                                        {currentSlide.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="absolute top-4 right-4 z-20 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white rounded-full p-2 transition-all duration-300"
                        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                    >
                        {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {labImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${currentIndex === index
                                        ? 'w-8 h-2 bg-blue-400'
                                        : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}