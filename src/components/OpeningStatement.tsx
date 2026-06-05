'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export default function OpeningStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section ref={sectionRef} className="py-32 lg:py-48 px-6 bg-surface overflow-hidden">
      <motion.div className="container max-w-4xl text-center" style={{ y }}>

        {/* Location */}
        <motion.span
          className="inline-block text-accent/65 text-[10px] font-light tracking-[0.48em] uppercase mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.2, ease, delay: 0.1 }}
        >
          Marmaris · Muğla · Türkiye
        </motion.span>

        {/* Main title — Grand Yazıcı */}
        <h2 className="font-display font-light text-textPrimary leading-[0.95] mb-3 lg:mb-4 flex flex-wrap justify-center gap-x-[0.22em]">
          {['Grand', 'Yazıcı'].map((word, i) => (
            <motion.span
              key={word}
              className="inline-block"
              initial={{ opacity: 0, y: 36, filter: 'blur(16px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.4, ease, delay: 0.2 + i * 0.16 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Subtitle — Club Turban Thermal */}
        <div className="flex flex-wrap justify-center gap-x-[0.2em] mb-14 lg:mb-20">
          {['Club', 'Turban', 'Thermal'].map((word, i) => (
            <motion.span
              key={word}
              className="inline-block font-display text-2xl sm:text-3xl lg:text-[2.25rem] font-light text-accent/75 leading-tight"
              initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.2, ease, delay: 0.52 + i * 0.13 }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Gold divider */}
        <div className="flex justify-center mb-14 lg:mb-16">
          <motion.div
            className="h-px bg-accent/45"
            initial={{ width: 0 }}
            animate={isInView ? { width: '3rem' } : {}}
            transition={{ duration: 2.0, ease, delay: 0.9 }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          className="text-textSecondary text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.2, ease, delay: 1.05 }}
        >
          Tatil ultra her şey dahilse tatildir. Marmaris&apos;in kalbinde huzur, konfor, lüks, eğlence ve çok daha fazlası sizi bekliyor.
        </motion.p>

      </motion.div>
    </section>
  );
}
