'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="bg-background">

      {/* Label + address */}
      <motion.div
        ref={ref}
        className="container pt-20 lg:pt-28 pb-12 lg:pb-16 text-center"
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, ease }}
      >
        <motion.span
          className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-soft text-[10px] font-light tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.0, ease, delay: 0.1 }}
        >
          Konum
        </motion.span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-textPrimary mb-4 leading-tight">
          Bizi Bulun
        </h2>
        <p className="text-textSecondary/60 font-light text-sm tracking-wider">
          Kemeraltı Cd. No:15 &nbsp;·&nbsp; Marmaris, Muğla
        </p>
      </motion.div>

      {/* Map */}
      <motion.div
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(320px, 50vw, 600px)' }}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease, delay: 0.2 }}
      >
        {/* Vignette edges */}
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 80px 40px var(--color-background, #0D0B08)',
          }}
        />
        {/* Top & bottom gradient fade */}
        <div className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 z-10 pointer-events-none bg-gradient-to-t from-background to-transparent" />

        <iframe
          src="https://maps.google.com/maps?q=36.827896,28.24164&z=14&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Grand Yazıcı Club Turban Thermal - Konum"
          className="w-full h-full border-0"
          style={{
            filter: 'grayscale(100%) invert(92%) hue-rotate(180deg) brightness(0.75) contrast(0.9)',
            opacity: 0.85,
          }}
        />
      </motion.div>

    </section>
  );
}
