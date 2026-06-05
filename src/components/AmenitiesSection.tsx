'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplet, Zap, Music, CheckCircle2, Smile } from 'lucide-react';
import { amenities } from '@/data/hotel';

const iconMap: Record<string, React.ReactNode> = {
  'Water': <Droplet size={24} />,
  'Sports': <Zap size={24} />,
  'Entertainment': <Music size={24} />,
  'Wellness': <CheckCircle2 size={24} />,
  'Kids': <Smile size={24} />,
};

const AmenityCard = ({ amenity, index }: { amenity: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.7, delay: index * 0.04 }}
      className="flex flex-col items-center text-center p-8 hover:bg-accent/5 rounded-soft transition-colors duration-500 group"
    >
      <motion.div
        className="mb-4 text-accent group-hover:scale-110 transition-transform duration-500"
        whileHover={{ rotate: 10 }}
      >
        {iconMap[amenity.category] || iconMap['Wellness']}
      </motion.div>
      <h3 className="font-display text-lg font-light text-textPrimary">
        {amenity.name}
      </h3>
    </motion.div>
  );
};

export default function AmenitiesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-surface">
      <div className="container">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 lg:mb-32"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-soft text-xs font-light tracking-widest uppercase mb-6">
            Olanaklar
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-light text-textPrimary mb-8 lg:mb-10">
            Sonsuz Seçenekler
          </h2>
          <p className="text-textSecondary text-lg lg:text-xl font-light max-w-2xl mx-auto">
            Statükonuzu belirleme özgürlüğü — eğlence de, huzur da, her şey de
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {amenities.map((amenity, index) => (
            <AmenityCard key={amenity.id} amenity={amenity} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mt-28 lg:mt-40 pt-24 lg:pt-32 border-t border-divider"
        >
          {[
            { number: '14+', label: 'Tesis' },
            { number: '6', label: 'Restoran' },
            { number: '4', label: 'Bar' },
            { number: '∞', label: 'Keyif' },
          ].map((stat, statIndex) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7, delay: 0.2 + statIndex * 0.08 }}
              className="text-center"
            >
              <h3 className="font-display text-5xl lg:text-6xl font-light text-accent mb-4">
                {stat.number}
              </h3>
              <p className="text-textSecondary font-light text-sm tracking-widest uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
