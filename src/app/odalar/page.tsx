'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { rooms, hotelData } from '@/data/hotel';

const ease = [0.16, 1, 0.3, 1] as const;

const RoomRow = ({ room, index }: { room: typeof rooms[number]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <motion.article
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-card border border-divider"
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, ease }}
    >
      {/* Image */}
      <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden ${!isEven ? 'lg:order-last' : ''}`}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={isInView ? { scale: 1.0 } : {}}
          transition={{ duration: 1.5, ease }}
        >
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent to-black/20`} />
        <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-sm text-white/80 text-[10px] font-light tracking-[0.3em] uppercase px-3 py-1.5 rounded-soft">
          {room.size} m²
        </div>
      </div>

      {/* Info */}
      <div className="bg-surface flex flex-col justify-center px-8 lg:px-14 py-12 lg:py-16">
        <span className="text-accent text-[10px] font-light tracking-[0.4em] uppercase mb-4">
          Maks. {room.capacity} Kişi
        </span>

        <h2 className="font-display text-3xl lg:text-[2.1rem] font-light text-textPrimary mb-5 leading-tight">
          {room.name}
        </h2>

        <p className="text-textSecondary text-sm font-light leading-relaxed mb-8">
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-8">
          {room.amenities.map((amenity) => (
            <span
              key={amenity}
              className="px-3 py-1 bg-accent/10 text-accent text-[10px] font-light rounded-soft tracking-wide"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-10">
          {room.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm font-light text-textSecondary">
              <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href={hotelData.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start flex items-center gap-3 group"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3, ease }}
        >
          <span className="text-[11px] font-light tracking-[0.28em] uppercase text-textPrimary group-hover:text-accent transition-colors duration-300">
            Rezervasyon Yap
          </span>
          <span className="block h-px bg-accent w-8 group-hover:w-14 transition-all duration-400" />
        </motion.a>
      </div>
    </motion.article>
  );
};

export default function OdalarPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="bg-background">
      <Navigation />

      {/* Page Hero */}
      <section className="relative min-h-[56vh] flex items-end overflow-hidden bg-inkDark">
        <div
          className="absolute inset-0 opacity-[0.035]"
          aria-hidden
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(200,169,106,0.6) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(200,169,106,0.6) 80px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

        <div ref={heroRef} className="relative container pb-16 lg:pb-24 pt-44 lg:pt-48">
          <motion.span
            className="inline-block text-accent/60 text-[10px] font-light tracking-[0.48em] uppercase mb-5"
            initial={{ opacity: 0, x: -16 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
          >
            Konaklama
          </motion.span>
          <motion.h1
            className="font-display text-white font-light leading-none mb-5"
            initial={{ opacity: 0, y: 32, filter: 'blur(12px)' }}
            animate={isHeroInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.4, ease, delay: 0.4 }}
          >
            Odalarımız
          </motion.h1>
          <motion.p
            className="text-white/45 text-sm lg:text-base font-light max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease, delay: 0.6 }}
          >
            Standart konfordan Grand Suite lüksüne, hayallerinizdeki tatil için 6 farklı oda tipi
          </motion.p>
        </div>
      </section>

      {/* Room list */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="space-y-8 lg:space-y-10">
            {rooms.map((room, index) => (
              <RoomRow key={room.id} room={room} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="container text-center max-w-xl mx-auto">
          <motion.span
            className="inline-block text-accent/65 text-[10px] font-light tracking-[0.42em] uppercase mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            Erken Rezervasyon Avantajı
          </motion.span>
          <motion.h2
            className="font-display text-3xl lg:text-4xl font-light text-textPrimary mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease, delay: 0.1 }}
          >
            En İyi Fiyatı Garantileyin
          </motion.h2>
          <motion.a
            href={hotelData.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-background text-[11px] font-medium tracking-[0.22em] uppercase rounded-soft hover:bg-accent/85 transition-all duration-400"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Rezervasyon Yap
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
