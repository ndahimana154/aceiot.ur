import { useState, useEffect, type TouchEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

import urLogo from '../../assets/urlogo2019.png';
import worldBankLogo from '../../assets/wrld.png';
import aceiotLogo from '../../assets/logo.png';

const carouselImages = [
    {
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&h=900&fit=crop',
        alt: 'IoT Lab Research',
        title: 'Cutting-edge IoT Research',
        description: 'State-of-the-art laboratories equipped with the latest IoT technology for groundbreaking research'
    },
    {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop',
        alt: 'Students Collaborating',
        title: 'Collaborative Learning Environment',
        description: 'Join a diverse community of passionate researchers and innovators from across Africa'
    },
    {
        url: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1600&h=900&fit=crop',
        alt: 'Advanced Technology',
        title: 'Advanced Technology Labs',
        description: 'Hands-on experience with cutting-edge equipment and industry-standard tools'
    },
    {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&h=900&fit=crop',
        alt: 'African Innovation',
        title: 'African Excellence',
        description: 'Solving local challenges with global impact through innovative IoT solutions'
    }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex]);

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        if (!touchStart) return;
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        setTouchStart(null);
    };

    const currentSlide = carouselImages[currentIndex];

    return (
        <>
            <section
                id="hero-section"
                className="relative w-screen h-screen overflow-hidden"

            >
                {/* Background Image Carousel */}
                <div
                    className="absolute inset-0 w-full h-full"
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
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={currentSlide.url}
                                alt={currentSlide.alt}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-slate-950/20 backdrop-blur-md hover:bg-slate-950/40 text-white rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 hidden sm:flex items-center justify-center"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-slate-950/20 backdrop-blur-md hover:bg-slate-950/40 text-white rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 hidden sm:flex items-center justify-center"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </button>

                <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-slate-950/20 backdrop-blur-md hover:bg-slate-950/40 text-white rounded-full p-2 md:p-3 transition-all duration-300"
                    aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                    {isAutoPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-2 md:gap-3">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${currentIndex === index
                                ? 'w-4 sm:w-6 md:w-8 h-1.5 sm:h-2 bg-green-400'
                                : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="relative z-10 h-full w-full flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16">
                    <div className="max-w-6xl mx-auto text-center mt-10 sm:mt-12 md:mt-16 lg:mt-20">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`title-${currentIndex}`}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="mb-4 sm:mb-6"
                            >
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
                                    <span className="block">ACEIoT at the University of Rwanda:</span>
                                    <span className="block text-green-400 mt-2">
                                        {currentSlide.title}
                                    </span>
                                </h1>
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`desc-${currentIndex}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                            >
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
                                    {currentSlide.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-white/70 max-w-2xl mx-auto"
                        >
                            Join our interdisciplinary Masters, PhD, and professional ICT programs focused on intelligent systems, digital infrastructure, and sustainable innovation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center px-4"
                        >
                            <Link
                                to="/programs"
                                className="group inline-flex items-center justify-center rounded-full bg-green-400 hover:bg-green-500 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base font-semibold text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                Explore Programs
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <a
                                href="#background"
                                className="inline-flex items-center justify-center rounded-full border-2 border-green-400/50 bg-white/10 backdrop-blur-sm px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-green-400/20 hover:border-green-400 transition-all duration-300"
                            >
                                Learn More
                            </a>
                        </motion.div>

                        {/* Partner Logos */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-10 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 backdrop-blur-sm bg-black/20 rounded-xl p-4 sm:p-6 mx-2 sm:mx-4"
                        >
                            <div className="flex flex-col items-center gap-1 sm:gap-2 flex-1 min-w-[80px] sm:min-w-[100px]">
                                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">Powered by</p>
                                <img src={urLogo} alt="University of Rwanda logo" className="h-8 sm:h-10 md:h-12 object-contain  hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex flex-col items-center gap-1 sm:gap-2 flex-1 min-w-[80px] sm:min-w-[100px]">
                                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">Partner</p>
                                <img src={worldBankLogo} alt="World Bank logo" className="h-8 sm:h-10 md:h-12 object-contain  hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex flex-col items-center gap-1 sm:gap-2 flex-1 min-w-[80px] sm:min-w-[100px]">
                                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">ACEIoT Hub</p>
                                <img src={aceiotLogo} alt="ACEIoT logo" className="h-8 sm:h-10 md:h-12 object-contain  hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    </div>
                </div>


            </section>
        </>
    );
};

export default Hero;