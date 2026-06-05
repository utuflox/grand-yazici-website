'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { hotelData, navigationLinks } from '@/data/hotel';

const ease = [0.16, 1, 0.3, 1] as const;

const PhoneIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/grandyaziciclubturban', label: 'IG' },
  { name: 'Facebook', href: 'https://www.facebook.com/clubturbanmarmaris', label: 'FB' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCcQHTcYFuFEF7oSeRO2Nusg', label: 'YT' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const year = new Date().getFullYear();

  const cols = [
    { delay: 0 },
    { delay: 0.1 },
    { delay: 0.2 },
    { delay: 0.3 },
  ];

  return (
    <footer ref={ref} className="bg-background border-t border-divider pt-20 lg:pt-28 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16 lg:mb-20">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease, delay: cols[0].delay }}
          >
            <div className="mb-5">
              <p className="font-display text-lg font-light text-textPrimary">Grand Yazıcı</p>
              <p className="text-textSecondary/50 text-xs font-light tracking-wider mt-0.5">
                Club Turban Thermal
              </p>
            </div>
            <p className="text-textSecondary/60 text-sm font-light leading-relaxed mb-6">
              Marmaris&apos;in kalbinde lüks, huzur ve sonsuz anılar sizi bekliyor.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-8 h-8 border border-divider rounded-soft flex items-center justify-center text-textSecondary/50 hover:border-accent/50 hover:text-accent transition-colors duration-300 text-[10px] font-light"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease, delay: cols[1].delay }}
          >
            <h4 className="text-[10px] font-light tracking-[0.3em] uppercase text-textSecondary/50 mb-6">
              Hızlı Erişim
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-textSecondary/70 hover:text-textPrimary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease, delay: cols[2].delay }}
          >
            <h4 className="text-[10px] font-light tracking-[0.3em] uppercase text-textSecondary/50 mb-6">
              İletişim
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm font-light text-textSecondary/70 hover:text-textPrimary transition-colors duration-300"
                >
                  <PhoneIcon />
                  {hotelData.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm font-light text-textSecondary/60">
                <LocationIcon />
                <span>{hotelData.location}</span>
              </li>
              <li>
                <a
                  href={hotelData.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-accent/70 hover:text-accent transition-colors duration-300"
                >
                  Rezervasyon Sistemi →
                </a>
              </li>
            </ul>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease, delay: cols[3].delay }}
          >
            <h4 className="text-[10px] font-light tracking-[0.3em] uppercase text-textSecondary/50 mb-6">
              WhatsApp
            </h4>
            <p className="text-sm font-light text-textSecondary/60 leading-relaxed mb-5">
              Anlık destek ve rezervasyon için WhatsApp hattımız 7/24 hizmetinizdedir.
            </p>
            <motion.a
              href="https://wa.me/905529821101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-divider text-[11px] font-light tracking-[0.18em] uppercase text-textSecondary hover:border-accent/50 hover:text-accent transition-colors duration-300 rounded-soft"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              +90 552 982 11 01
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-divider pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, ease, delay: 0.4 }}
        >
          <p className="text-[11px] text-textSecondary/40 font-light">
            © {year} Grand Yazıcı Club Turban Thermal. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[11px] text-textSecondary/40 hover:text-textSecondary transition-colors font-light">
              Gizlilik
            </a>
            <a href="#" className="text-[11px] text-textSecondary/40 hover:text-textSecondary transition-colors font-light">
              Kullanım Şartları
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
