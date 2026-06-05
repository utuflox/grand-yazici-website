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
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.8 }}
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
