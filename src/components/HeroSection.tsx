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

      {/* Scroll indicator – arrow only, no text */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.0 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-textSecondary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

