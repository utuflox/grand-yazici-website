'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export default function VideoSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' });

  return (
    <section ref={sectionRef} className="py-24 lg:py-36 bg-surface">
      <div className="container">

        {/* Header */}
        <motion.div
          className="text-center mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-soft text-[10px] font-light tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.0, ease, delay: 0.1 }}
          >
            Deneyim
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-textPrimary mb-6 lg:mb-8 leading-tight">
            Görün, Hissedin, Yaşayın
          </h2>
          <p className="text-textSecondary text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Saf lüks ve eğlencenin sonsuz alanında kendinizi kaybetmeye hazır mısınız?
          </p>
        </motion.div>

        {/* Video – scale + opacity reveal */}
        <motion.div
          className="relative w-full aspect-video overflow-hidden rounded-card bg-black"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
        >
          <iframe
            src="https://www.youtube.com/embed/WAO_ECvzvxA?rel=0&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
            title="Grand Yazıcı Club Turban Thermal"
          />
        </motion.div>

        {/* Caption */}
        <motion.p
          className="text-center text-textSecondary/60 text-sm font-light mt-10 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease, delay: 0.4 }}
        >
          Kristal berrak sularından gourmet masalarına, animasyondan sessiz huzura kadar — her detay mükemmelliğin tanımıdır.
        </motion.p>
      </div>
    </section>
  );
}
