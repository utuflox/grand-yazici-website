'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.65], [0, 0.75]);

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

      {/* Dark gradient at top — nav text readability */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-[1]" />

      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/50 z-[1]" />

      {/* Scroll-driven fade to page background */}
      <motion.div
        className="absolute inset-0 bg-background z-[2]"
        style={{ opacity: overlayOpacity }}
      />

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
