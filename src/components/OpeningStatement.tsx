'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function OpeningStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 px-4 bg-surface">
      <motion.div
        className="container max-w-3xl text-center"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="font-display text-4xl lg:text-6xl font-light text-textPrimary mb-10 lg:mb-12 leading-tight"
        >
          Tatil Yeniden Tanımlanıyor
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-textSecondary text-lg lg:text-xl font-light leading-relaxed mb-6"
        >
          Marmaris'in kalbinde, dinginlik ve lüksün eşsiz birleşimi sizi karşılamaya hazır.
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-textSecondary text-lg lg:text-xl font-light leading-relaxed mb-12 lg:mb-16"
        >
          Grand Yazıcı Club Turban Thermal'de her an özel, her gün yeni bir anı, her akşam bir anısı yaşanır.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="w-12 h-1 bg-accent mx-auto"
        ></motion.div>
      </motion.div>
    </section>
  );
}
