'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Waves, Zap, Music2, Dumbbell, Baby } from 'lucide-react';
import { amenities } from '@/data/hotel';

const ease = [0.16, 1, 0.3, 1] as const;

const iconMap: Record<string, React.ReactNode> = {
  Water: <Waves size={22} strokeWidth={1.5} />,
  Sports: <Zap size={22} strokeWidth={1.5} />,
  Entertainment: <Music2 size={22} strokeWidth={1.5} />,
  Wellness: <Dumbbell size={22} strokeWidth={1.5} />,
  Kids: <Baby size={22} strokeWidth={1.5} />,
};

const AmenityCard = ({ amenity, index }: { amenity: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.88, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, ease, delay: index * 0.04 }}
      className="flex flex-col items-center text-center p-6 lg:p-8 rounded-soft hover:bg-accent/5 transition-colors duration-500 group"
    >
      <motion.div
        className="mb-3.5 text-accent/70 group-hover:text-accent transition-colors duration-400"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.35, ease }}
      >
        {iconMap[amenity.category] ?? iconMap.Wellness}
      </motion.div>
      <p className="font-display text-sm lg:text-base font-light text-textPrimary leading-snug">
        {amenity.name}
      </p>
    </motion.div>
  );
};

const stats = [
  { number: '14+', label: 'Tesis' },
  { number: '6', label: 'Restoran' },
  { number: '4', label: 'Bar' },
  { number: '∞', label: 'Keyif' },
];

export default function AmenitiesSection() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-100px' });

  return (
    <section id="amenities" className="py-24 lg:py-36 bg-surface">
      <div className="container">

        {/* Header */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, ease }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-soft text-[10px] font-light tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.0, ease, delay: 0.1 }}
          >
            Olanaklar
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-textPrimary mb-6 lg:mb-8 leading-tight">
            Sonsuz Seçenekler
          </h2>
          <p className="text-textSecondary text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Eğlence de, huzur da, her şey dahil — statükonuzu siz belirleyin
          </p>
        </motion.div>

        {/* Amenities grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4">
          {amenities.map((amenity, index) => (
            <AmenityCard key={amenity.id} amenity={amenity} index={index} />
          ))}
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mt-24 lg:mt-32 pt-20 lg:pt-28 border-t border-divider"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
              animate={statsInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 1.0, ease, delay: i * 0.1 }}
            >
              <p className="font-display text-5xl lg:text-6xl xl:text-7xl font-light text-accent mb-3 leading-none">
                {stat.number}
              </p>
              <p className="text-textSecondary/70 font-light text-[11px] tracking-[0.28em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
