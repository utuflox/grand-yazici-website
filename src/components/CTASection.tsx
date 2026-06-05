'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { hotelData } from '@/data/hotel';
import { MagneticButton } from './MagneticButton';

const ease = [0.16, 1, 0.3, 1] as const;

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0d1f16 0%, #0B0B0C 50%, #0d1826 100%)' }}
    >
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        style={{ y: bgY }}
        aria-hidden
      >
        <div className="w-full h-full"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(200,169,106,0.3) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(200,169,106,0.3) 80px)',
          }}
        />
      </motion.div>

      <div className="relative container">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease }}
        >
          {/* Badge */}
          <motion.span
            className="inline-block px-4 py-1.5 bg-accent/15 text-accent rounded-soft text-[10px] font-light tracking-[0.3em] uppercase mb-10"
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.0, ease, delay: 0.1 }}
          >
            Rezervasyon
          </motion.span>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 lg:mb-10 leading-tight">
            Tatil Hayali Burada Başlıyor
          </h2>

          <motion.p
            className="text-base sm:text-lg text-white/65 font-light mb-14 lg:mb-16 leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease, delay: 0.18 }}
          >
            Ultra her şey dahil konseptiyle, Marmaris&apos;in kalbinde beklenen o eşsiz tatil deneyimi sizi bekliyor.
          </motion.p>

          {/* Magnetic CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease, delay: 0.28 }}
          >
            <MagneticButton href={hotelData.bookingUrl} primary external>
              Şimdi Rezervasyon Yap
            </MagneticButton>
            <MagneticButton
              href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
              light
            >
              Bizi Arayın
            </MagneticButton>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="pt-12 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.0, delay: 0.4 }}
          >
            <p className="text-white/30 mb-5 text-[10px] uppercase tracking-[0.3em] font-light">
              İletişim
            </p>
            <a
              href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-light text-white hover:text-accent transition-colors duration-400 block mb-4"
            >
              {hotelData.phone}
            </a>
            <p className="text-white/25 text-xs font-light tracking-wider">
              Turizm İşletme Belgesi: 12737
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
