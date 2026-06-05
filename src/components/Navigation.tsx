'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { navigationLinks, hotelData } from '@/data/hotel';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4 lg:py-5">

          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/logo.webp"
              alt="Grand Yazıcı Club Turban Thermal"
              width={160}
              height={56}
              className={`h-11 w-auto object-contain transition-all duration-500 ${
                !scrolled ? 'brightness-0 invert' : ''
              }`}
              priority
            />
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.3 + i * 0.07 }}
                className={`relative text-[11px] font-light tracking-[0.2em] uppercase transition-colors duration-500 group py-1 ${
                  scrolled
                    ? 'text-textSecondary hover:text-textPrimary'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px bg-accent w-0 group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <motion.a
              href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.7 }}
              className={`flex items-center gap-1.5 text-[11px] font-light tracking-widest transition-colors duration-500 ${
                scrolled ? 'text-textSecondary hover:text-textPrimary' : 'text-white/75 hover:text-white'
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {hotelData.phone}
            </motion.a>
            <motion.a
              href={hotelData.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease, delay: 0.8 }}
              className="px-5 py-2.5 text-[10px] font-medium tracking-[0.2em] uppercase bg-accent text-white rounded-soft hover:bg-accent/85 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              Rezervasyon
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-textPrimary' : 'text-white'}`}
            aria-label="Menü"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease }}
              className="md:hidden overflow-hidden bg-white border-t border-divider"
            >
              <div className="py-5 space-y-1">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-3 text-[12px] font-light tracking-[0.2em] uppercase text-textSecondary hover:text-textPrimary transition-colors duration-300"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-divider mt-2">
                  <a
                    href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 py-2 text-[12px] font-light text-textSecondary"
                  >
                    {hotelData.phone}
                  </a>
                  <a
                    href={hotelData.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block w-full text-center py-3 text-[11px] tracking-[0.2em] uppercase bg-accent text-white rounded-soft font-medium"
                  >
                    Rezervasyon Yap
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
