'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.65], [0, 0.75]);
  const textY = useTransform(scrollYProgress, [0, 0.6], [0, 70]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Cinematic video – slow zoom on load */}
      <motion.div
        className="absolute inset-[-4%] overflow-hidden"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 11, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          src="/hero.webm"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-screen min-w-full min-h-[56.25vw] object-cover pointer-events-none opacity-65"
        />
      </motion.div>

      {/* Dark gradient at top — critical for nav text readability */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-[1]" />

      {/* Cinematic vignette — darker at edges and bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/60 z-[1]" />

      {/* Scroll-driven fade to page background */}
      <motion.div
        className="absolute inset-0 bg-background z-[2]"
        style={{ opacity: overlayOpacity }}
      />

      {/* Hero text — parallax on scroll */}
      <motion.div
        className="absolute inset-0 z-[3] flex flex-col items-center justify-center text-center px-6"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.span
          className="block text-white/55 text-[10px] font-light tracking-[0.45em] uppercase mb-8"
          initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease, delay: 0.6 }}
        >
          Marmaris · Muğla · Türkiye
        </motion.span>

        <h1 className="font-display text-white font-light mb-5 leading-none">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 35, filter: 'blur(14px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease, delay: 0.85 }}
          >
            Grand Yazıcı
          </motion.span>
          <motion.span
            className="block text-accent"
            initial={{ opacity: 0, y: 35, filter: 'blur(14px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease, delay: 1.05 }}
          >
            Club Turban
          </motion.span>
        </h1>

        <motion.div
          className="h-px bg-white/25 mb-6"
          initial={{ width: 0 }}
          animate={{ width: '3.5rem' }}
          transition={{ duration: 1.8, ease, delay: 1.3 }}
        />

        <motion.p
          className="text-white/60 text-sm sm:text-base font-light tracking-[0.12em] max-w-sm leading-relaxed"
          initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease, delay: 1.45 }}
        >
          Ultra Her Şey Dahil
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.4 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-white/35" />
        </motion.div>
      </motion.div>
    </section>
  );
}
