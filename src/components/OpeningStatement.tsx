'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;
const titleWords = 'Tatil Yeniden Tanımlanıyor'.split(' ');

export default function OpeningStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);

  return (
    <section ref={sectionRef} className="py-28 lg:py-40 px-6 bg-surface overflow-hidden">
      <motion.div className="container max-w-3xl text-center" style={{ y }}>

        {/* Word-by-word blur reveal */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-textPrimary mb-10 lg:mb-12 leading-tight flex flex-wrap justify-center gap-x-[0.3em] gap-y-2">
          {titleWords.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block"
              initial={{ opacity: 0, y: 22, filter: 'blur(10px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.2, ease, delay: i * 0.12 }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Gold line */}
        <div className="flex justify-center mb-10 lg:mb-12">
          <motion.div
            className="h-px bg-accent/60"
            initial={{ width: 0 }}
            animate={isInView ? { width: '2.5rem' } : {}}
            transition={{ duration: 1.8, ease, delay: 0.5 }}
          />
        </div>

        <motion.p
          className="text-textSecondary text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-6"
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.2, ease, delay: 0.5 }}
        >
          Marmaris&apos;in kalbinde, dinginlik ve lüksün eşsiz birleşimi sizi karşılamaya hazır.
        </motion.p>

        <motion.p
          className="text-textSecondary/70 text-base sm:text-lg font-light leading-relaxed"
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 1.2, ease, delay: 0.72 }}
        >
          Grand Yazıcı Club Turban Thermal&apos;de her an özel, her gün yeni bir anı, her akşam bir anısı yaşanır.
        </motion.p>

      </motion.div>
    </section>
  );
}
