'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { restaurants } from '@/data/hotel';

const ease = [0.16, 1, 0.3, 1] as const;

const RestaurantCard = ({ restaurant, index }: { restaurant: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const delay = index * 0.08;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, ease, delay }}
      className="group"
    >
      {/* Mask reveal image */}
      <div className="relative overflow-hidden h-60 mb-5 rounded-card">
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={isInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
          transition={{ duration: 1.3, ease, delay: delay + 0.1 }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 1.1 }}
            animate={isInView ? { scale: 1.0 } : {}}
            transition={{ duration: 1.5, ease, delay: delay + 0.1 }}
          >
            <Image
              src={restaurant.image}
              alt={restaurant.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>

        {/* Gold bottom line on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-accent"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.5, ease }}
        />
      </div>

      <div>
        <span className="inline-block px-2.5 py-1 bg-accent/10 text-accent text-[10px] font-light tracking-widest uppercase mb-2.5 rounded-soft">
          {restaurant.cuisine}
        </span>
        <h3 className="font-display text-lg lg:text-xl font-light text-textPrimary mb-1.5 leading-snug">
          {restaurant.name}
        </h3>
        <p className="text-textSecondary text-sm font-light leading-relaxed">
          {restaurant.description}
        </p>
      </div>
    </motion.div>
  );
};

const tabs = [
  { key: 'all', label: 'Tümü' },
  { key: 'restaurant', label: 'Restoranlar' },
  { key: 'bar', label: 'Barlar' },
] as const;

export default function DiningSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'restaurant' | 'bar'>('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' });

  const filtered = activeTab === 'all'
    ? restaurants
    : restaurants.filter((r) => r.type === activeTab);

  return (
    <section id="dining" className="py-24 lg:py-36 bg-background">
      <div className="container">

        {/* Header */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-16 lg:mb-22"
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
            Mutfak
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-textPrimary mb-6 lg:mb-8 leading-tight">
            Damağın Seyahati
          </h2>
          <p className="text-textSecondary text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Şef imzalı lezzetler, altı restorana dağılmış dünya mutfağı
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center gap-1 mb-14 lg:mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, delay: 0.25 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-6 py-2.5 text-[11px] font-light tracking-[0.2em] uppercase transition-colors duration-300 rounded-soft ${
                activeTab === tab.key ? 'text-background' : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="dining-tab-bg"
                  className="absolute inset-0 bg-accent rounded-soft"
                  transition={{ duration: 0.4, ease }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((restaurant, index) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
