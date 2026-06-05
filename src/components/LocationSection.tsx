'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export default function LocationSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const mapInView = useInView(mapRef, { once: true, margin: '-60px' });

  const { scrollYProgress } = useScroll({
    target: mapRef,
    offset: ['start end', 'end start'],
  });
  const mapY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);

  return (
    <section id="contact" className="bg-background overflow-hidden">

      {/* Header */}
      <div className="container pt-20 lg:pt-28 pb-12 lg:pb-16 text-center">
        <motion.span
          ref={sectionRef}
          className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-soft text-[10px] font-light tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, filter: 'blur(6px)', y: 12 }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{ duration: 1.0, ease }}
        >
          Konum
        </motion.span>

        <motion.h2
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-textPrimary mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease, delay: 0.1 }}
        >
          Bizi Bulun
        </motion.h2>

        <motion.p
          className="text-textSecondary/60 font-light text-sm tracking-wider"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease, delay: 0.2 }}
        >
          Kemeraltı Cd. No:15 &nbsp;·&nbsp; Marmaris, Muğla
        </motion.p>
      </div>

      {/* Map */}
      <motion.div
        ref={mapRef}
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(320px, 50vw, 600px)' }}
        initial={{ opacity: 0, clipPath: 'inset(8% 4% 8% 4%)' }}
        animate={mapInView ? { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
        transition={{ duration: 1.4, ease, delay: 0.1 }}
      >
        {/* Parallax wrapper */}
        <motion.div className="absolute inset-0 w-full h-[115%] -top-[7.5%]" style={{ y: mapY }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51097.73889602038!2d28.24164!3d36.827896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc3e583643c5%3A0xc239470151d73ba0!2sGrand%20Yaz%C4%B1c%C4%B1%20Club%20Turban!5e0!3m2!1sen!2sus!4v1780680370510!5m2!1sen!2sus"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Grand Yazıcı Club Turban Thermal - Konum"
            className="w-full h-full border-0"
            style={{
              filter: 'grayscale(100%) invert(92%) hue-rotate(180deg) brightness(0.75) contrast(0.9)',
            }}
          />
        </motion.div>

        {/* Vignette */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 100px 50px var(--color-background, #0D0B08)' }}
        />
        <div className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none bg-gradient-to-t from-background to-transparent" />
      </motion.div>

    </section>
  );
}
