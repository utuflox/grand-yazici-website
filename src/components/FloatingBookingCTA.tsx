'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hotelData } from '@/data/hotel';

export function FloatingBookingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-5 z-50"
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.9 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.a
            href={hotelData.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 pl-5 pr-7 py-3.5 bg-accent text-background text-[10px] font-medium tracking-[0.22em] uppercase rounded-full shadow-2xl shadow-black/50"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-background/60 shrink-0"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            Rezervasyon
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
