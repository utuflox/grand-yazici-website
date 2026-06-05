'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function VideoSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-ivory">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-light tracking-widest uppercase mb-6">
            Deneyim
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-light text-accent mb-8 lg:mb-10">
            Görün, Hissedin, Yaşayın
          </h2>
          <p className="text-text-secondary text-lg lg:text-xl font-light max-w-2xl mx-auto">
            Saf lüks ve eğlencenin sonsuz alanında kendinizi kaybetmeye hazır mısınız?
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-video bg-black overflow-hidden rounded-card"
        >
          <iframe
            src="https://www.youtube.com/embed/WAO_ECvzvxA?rel=0&modestbranding=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
            title="Grand Yazıcı Club Turban Thermal"
          />
        </motion.div>

        {/* Video Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Kristal berrak sularından gourmet masalarına, animasyondan sessiz huzura kadar her detay mükemmelliğin tanımıdır. Videoda Grand Yazıcı'nın büyüleyici dünyasına bir bakış atın.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
