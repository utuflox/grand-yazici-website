'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navigationLinks, hotelData } from '@/data/hotel';

const PhoneIcon = ({ className = 'w-4 h-4' }: { className?: string } = {}) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-4 lg:py-6">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-display font-light">G</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <p className="text-accent font-display font-light text-sm lg:text-base">
                  GRAND YAZICI
                </p>
                <p className="text-text-light text-xs">Turban Thermal</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light text-accent hover:text-primary transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 text-sm font-light text-accent hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <PhoneIcon className="w-4 h-4" />
                {hotelData.phone}
              </motion.a>
              <motion.a
                href={hotelData.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-4"
                whileHover={{ scale: 1.05 }}
              >
                Rezervasyon
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <CloseIcon />
              ) : (
                <MenuIcon />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 border-t border-divider"
            >
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-sm font-light text-accent hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
                className="block py-3 text-sm font-light text-primary border-t border-divider mt-3 pt-3 flex items-center gap-2"
              >
                <PhoneIcon className="w-4 h-4" />
                {hotelData.phone}
              </a>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
}
