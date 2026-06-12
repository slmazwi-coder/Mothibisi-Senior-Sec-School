import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80',
    caption: 'Excellence in Education',
  },
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
    caption: 'Building Tomorrow\'s Leaders',
  },
  {
    url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3d?w=1600&q=80',
    caption: 'Nurturing Talents & Skills',
  },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentIndex];

  return (
    <div className="relative h-[650px] w-full overflow-hidden" style={{ background: '#800020' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={slide.url}
            alt={slide.caption}
            className="h-full w-full object-cover object-center"
            style={{ opacity: 0.45 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(128,0,32,0.92) 0%, rgba(128,0,32,0.55) 45%, rgba(26,10,15,0.35) 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-24 left-0 right-0 text-center z-20 px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={`caption-${currentIndex}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="text-base md:text-lg font-medium tracking-widest uppercase"
            style={{ color: 'rgba(255,255,255,0.85)' }}
          >
            {slide.caption}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-5"
        >
          <img
            src="/mslogo.jpg"
            alt="Mothibisi SSS crest"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-2xl mx-auto"
            style={{ border: '3px solid #FFFFFF' }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold mb-3 uppercase tracking-wider"
          style={{ color: '#FFFFFF' }}
        >
          Mothibisi SSS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-base md:text-xl font-light italic mb-8"
          style={{ color: 'rgba(255,255,255,0.8)' }}
        >
          "We Strive to Excel"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <a
            href="/admissions"
            className="px-7 py-3 font-bold transition-all rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            style={{ background: '#FFFFFF', color: '#800020' }}
          >
            Apply Now
          </a>
          <a
            href="/about"
            className="px-7 py-3 font-bold transition-all rounded-lg hover:-translate-y-0.5"
            style={{ border: '2px solid #FFFFFF', color: '#FFFFFF', background: 'transparent' }}
          >
            About Us
          </a>
        </motion.div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-20 transition-all hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}
        aria-label="Previous"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-20 transition-all hover:scale-110"
        style={{ background: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}
        aria-label="Next"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30 flex-wrap justify-center max-w-xs">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="h-2 w-2 rounded-full transition-all"
            style={{ background: i === currentIndex ? '#FFFFFF' : 'rgba(255,255,255,0.3)' }}
          />
        ))}
      </div>
    </div>
  );
};