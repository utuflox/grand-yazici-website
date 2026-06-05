'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ChevronDown } from 'lucide-react';
import { hotelData } from '@/data/hotel';
import { MagneticButton } from './MagneticButton';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.65], [0, 0.55]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-background"
    >
      {/* Cinematic video – slow zoom on load */}
      <motion.div
        className="absolute inset-[-4%] overflow-hidden"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 11, ease: [0.16, 1, 0.3, 1] }}
      >
        <iframe
          src="https://www.youtube.com/embed/WAO_ECvzvxA?autoplay=1&mute=1&loop=1&playlist=WAO_ECvzvxA&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0"
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-screen min-w-full min-h-[56.25vw] pointer-events-none border-0 opacity-45"
          title="background video"
        />
      </motion.div>

      {/* Static gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/80 z-[1]" />

      {/* Scroll-driven darkening */}
      <motion.div
        className="absolute inset-0 bg-background z-[2]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content with parallax */}
      <motion.div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6"
        style={{ y: contentY }}
      >
        <div className="text-center w-full max-w-5xl mx-auto">

          {/* Location badge */}
          <motion.div
            className="mb-10 lg:mb-14"
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease, delay: 0.25 }}
          >
            <span className="inline-block px-6 py-2 text-[10px] font-light tracking-[0.32em] uppercase text-textSecondary/75 border border-divider/60 backdrop-blur-sm rounded-soft">
              Marmaris · Muğla · Türkiye
            </span>
          </motion.div>

          {/* Title – word-by-word blur reveal */}
          <h1 className="font-display font-light text-textPrimary leading-none tracking-tight mb-8 lg:mb-10">
            {['Grand', 'Yazıcı'].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.2em] last:mr-0 text-[14vw] sm:text-[11vw] lg:text-[9.5vw] xl:text-[8.5vw]"
                initial={{ opacity: 0, y: 48, filter: 'blur(18px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.5, ease, delay: 0.5 + i * 0.22 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Expanding gold line */}
          <div className="flex justify-center mb-9 lg:mb-12">
            <motion.div
              className="h-px bg-accent/65"
              initial={{ width: 0 }}
              animate={{ width: '3rem' }}
              transition={{ duration: 1.8, ease, delay: 1.0 }}
            />
          </div>

          {/* Subtitle lines */}
          <div className="mb-10 lg:mb-14 space-y-1">
            {['Lüks ve Huzurun', 'Mükemmel Senfonisi'].map((line, i) => (
              <motion.p
                key={line}
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-textSecondary font-light leading-relaxed"
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.3, ease, delay: 1.1 + i * 0.16 }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            className="text-sm text-textSecondary/55 font-light max-w-sm mx-auto leading-relaxed mb-12 lg:mb-14 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.5 }}
          >
            Ultra her şey dahil konseptiyle, tatil hayaliniz burada yaşanmaya başlar
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 1.72 }}
          >
            <MagneticButton href={hotelData.bookingUrl} primary external>
              Şimdi Rezervasyon Yap
            </MagneticButton>
            <MagneticButton
              href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
              icon={<Phone size={13} />}
            >
              Ara
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.3 }}
        >
          <span className="text-[9px] font-light tracking-[0.38em] uppercase text-textSecondary/45">
            Keşfet
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={14} className="text-textSecondary/45" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
