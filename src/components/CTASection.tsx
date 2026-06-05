'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { hotelData } from '@/data/hotel';

const PhoneIcon = ({ className = 'w-5 h-5' }: { className?: string } = {}) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 gradient-dark text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl lg:text-6xl font-light mb-10 lg:mb-12">
            Tatil Hayalı Burada Başlıyor
          </h2>

          <p className="text-lg lg:text-xl text-white/85 font-light mb-16 lg:mb-20 leading-relaxed">
            Ultra her şey dahil konseptiyle, Marmaris'in kalbinde beklenen o eşsiz tatil deneyimi sizi bekliyor.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 lg:mb-20"
          >
            <motion.a
              href={hotelData.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-gold w-full sm:w-auto text-center"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Şimdi Rezervasyon Yap
            </motion.a>
            <motion.a
              href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
              className="border border-white/40 text-white px-8 py-3 font-medium text-sm uppercase tracking-wider transition-all duration-400 flex items-center justify-center gap-2 w-full sm:w-auto bg-white/5 hover:bg-white/10 hover:border-white/60"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <PhoneIcon className="w-4 h-4" />
              Bizi Arayın
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-16 border-t border-white/10"
          >
            <p className="text-white/70 mb-6 text-xs uppercase tracking-widest font-light">İletişim Bilgileri</p>
            <a href={`tel:${hotelData.phone.replace(/\s/g, '')}`} className="text-3xl lg:text-4xl font-display font-light mb-6 block hover:text-primary transition-colors">
              {hotelData.phone}
            </a>
            <p className="text-white/60 text-xs font-light tracking-wide">
              Turizm İşletme Belgesi: 12737
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
