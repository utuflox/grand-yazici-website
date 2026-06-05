'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronDown } from 'lucide-react';
import { hotelData } from '@/data/hotel';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.9,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.9,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* YouTube Background Video - Full Screen */}
      <div className="absolute inset-0 overflow-hidden bg-background">
        <iframe
          src="https://www.youtube.com/embed/WAO_ECvzvxA?autoplay=1&mute=1&loop=1&playlist=WAO_ECvzvxA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0"
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-screen min-w-full min-h-[56.25vw] pointer-events-none border-0 opacity-40"
          title="background video"
        />
      </div>

      {/* Dark overlay for luxury readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/70" />

      {/* Content Container - Centered, spacious */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
        >
          {/* Location Badge - Minimal, whisper */}
          <motion.div
            custom={0}
            variants={textVariants}
            className="mb-12 lg:mb-16"
          >
            <span className="inline-block px-6 py-2 text-xs font-light tracking-widest uppercase text-textSecondary border border-divider backdrop-blur-sm rounded-soft">
              Marmaris, Muğla
            </span>
          </motion.div>

          {/* Main Headline - Cinematic, whisper loud */}
          <motion.h1
            custom={1}
            variants={textVariants}
            className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-textPrimary mb-8 lg:mb-12 leading-tight tracking-tight"
          >
            Grand Yazıcı
          </motion.h1>

          {/* Subheading - Editorial, restrained */}
          <motion.h2
            custom={2}
            variants={textVariants}
            className="font-light text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-textSecondary mb-16 lg:mb-24 max-w-4xl mx-auto leading-relaxed"
          >
            <div>Lüks ve Huzurun</div>
            <div>Mükemmel Senfonisi</div>
          </motion.h2>

          {/* Supporting Tagline - Quiet narrative */}
          <motion.p
            custom={3}
            variants={textVariants}
            className="text-lg lg:text-xl text-textSecondary font-light max-w-2xl mx-auto leading-relaxed mb-20 lg:mb-24"
          >
            Ultra her şey dahil konseptiyle, tatil hayaliniz burada yaşanmaya başlar
          </motion.p>

          {/* Single primary CTA - Restraint is luxury */}
          <motion.div
            custom={4}
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20"
          >
            <motion.a
              href={hotelData.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 text-sm font-light tracking-wider uppercase bg-accent text-background hover:bg-accent/90 transition-all duration-500 rounded-soft"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Şimdi Rezervasyon Yap
            </motion.a>

            <motion.a
              href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 px-8 py-4 text-sm font-light tracking-wider uppercase text-accent border border-accent hover:bg-accent/10 transition-all duration-500 rounded-soft"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={16} />
              Ara
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Breathing, subtle */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-light tracking-widest uppercase text-textSecondary">
              Keşfet
            </span>
            <ChevronDown size={20} className="text-textSecondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
