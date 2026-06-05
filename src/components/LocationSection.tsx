'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/grandyaziciclubturban',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0-2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/clubturbanmarmaris',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCcQHTcYFuFEF7oSeRO2Nusg',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

const contactItems = [
  {
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: '+90 252 417 73 12',
    href: 'tel:+902524177312',
  },
  {
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Kemeraltı Cd. No:15, Marmaris / Muğla',
    href: null,
  },
  {
    icon: (
      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'info@grandyazicihotels.com',
    href: 'mailto:info@grandyazicihotels.com',
  },
];

export default function LocationSection() {
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const mapInView = useInView(mapRef, { once: true, margin: '-60px' });

  const { scrollYProgress } = useScroll({ target: mapRef, offset: ['start end', 'end start'] });
  const mapY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section id="contact" className="bg-background overflow-hidden">
      <div className="container py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — info */}
          <div ref={sectionRef}>
            <motion.span
              className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-soft text-[10px] font-light tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0, filter: 'blur(6px)', y: 10 }}
              animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
              transition={{ duration: 1.0, ease }}
            >
              Konum & İletişim
            </motion.span>

            <motion.h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-textPrimary mb-3 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease, delay: 0.1 }}
            >
              Bizi Bulun
            </motion.h2>

            <motion.p
              className="text-textSecondary/50 font-light text-sm mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease, delay: 0.15 }}
            >
              Marmaris&apos;in en güzel koyunda, doğanın ve konforun buluştuğu nokta.
            </motion.p>

            {/* Contact items */}
            <ul className="space-y-5 mb-10">
              {contactItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-sm font-light text-textSecondary/70 hover:text-accent transition-colors duration-300 group"
                    >
                      <span className="text-accent/60 group-hover:text-accent transition-colors duration-300">
                        {item.icon}
                      </span>
                      {item.label}
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-sm font-light text-textSecondary/60">
                      <span className="text-accent/60 mt-0.5">{item.icon}</span>
                      {item.label}
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Divider */}
            <motion.div
              className="h-px bg-divider mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.0, ease, delay: 0.45 }}
            />

            {/* Social media */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease, delay: 0.5 }}
            >
              <p className="text-[10px] font-light tracking-[0.3em] uppercase text-textSecondary/40 mb-4">
                Sosyal Medya
              </p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 border border-divider rounded-soft flex items-center justify-center text-textSecondary/50 hover:border-accent/50 hover:text-accent transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, ease, delay: 0.55 + i * 0.07 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — map */}
          <motion.div
            ref={mapRef}
            className="relative overflow-hidden rounded-card"
            style={{ height: 'clamp(300px, 40vw, 480px)' }}
            initial={{ opacity: 0, clipPath: 'inset(6% 6% 6% 6%)' }}
            animate={mapInView ? { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' } : {}}
            transition={{ duration: 1.4, ease, delay: 0.2 }}
          >
            <motion.div className="absolute inset-0 w-full h-[115%] -top-[7.5%]" style={{ y: mapY }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d51097.73889602038!2d28.24164!3d36.827896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc3e583643c5%3A0xc239470151d73ba0!2sGrand%20Yaz%C4%B1c%C4%B1%20Club%20Turban!5e0!3m2!1sen!2sus!4v1780680370510!5m2!1sen!2sus"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Grand Yazıcı Club Turban Thermal - Konum"
                className="w-full h-full border-0"
                style={{
                  filter: 'grayscale(100%) invert(92%) hue-rotate(180deg) brightness(0.75) contrast(0.9)',
                }}
              />
            </motion.div>
            {/* Vignette */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-card"
              style={{ boxShadow: 'inset 0 0 60px 20px var(--color-background, #0D0B08)' }} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
