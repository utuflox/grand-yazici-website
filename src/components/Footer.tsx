'use client';

import { motion } from 'framer-motion';
import { hotelData, navigationLinks } from '@/data/hotel';

const PhoneIcon = ({ className = 'w-4 h-4' }: { className?: string } = {}) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = ({ className = 'w-4 h-4' }: { className?: string } = {}) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GlobeIcon = ({ className = 'w-4 h-4' }: { className?: string } = {}) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-20">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <p className="font-display text-xl font-light">Grand Yazıcı</p>
              <p className="text-white/70 text-sm font-light">Club Turban Thermal</p>
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              Marmaris'in kalbinde lüks ve rahatlık sizi bekliyor
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-light text-sm tracking-widest uppercase mb-6">Hızlı Linkler</h4>
            <ul className="space-y-2">
              {navigationLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-light text-sm tracking-widest uppercase mb-6">İletişim</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
                  className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <PhoneIcon />
                  {hotelData.phone}
                </a>
              </li>
              <li className="text-white/70 flex items-center gap-2">
                <LocationIcon />
                {hotelData.location}
              </li>
              <li>
                <a
                  href={hotelData.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"
                >
                  <GlobeIcon />
                  Rezervasyon Sistemi
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-light text-sm tracking-widest uppercase mb-6">Sosyal Medya</h4>
            <div className="flex gap-4">
              {[
                { name: 'Facebook', href: '#' },
                { name: 'Instagram', href: '#' },
                { name: 'Twitter', href: '#' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors text-xs font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  title={social.name}
                  aria-label={social.name}
                >
                  {social.name[0].toUpperCase()}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-10 lg:py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60 font-light">
            <p>
              &copy; {currentYear} Grand Yazıcı Club Turban Thermal. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Gizlilik Politikası
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Kullanım Şartları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
