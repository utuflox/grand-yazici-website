'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { restaurants } from '@/data/hotel';

const RestaurantCard = ({ restaurant, index }: { restaurant: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      className="group overflow-hidden"
    >
      <div className="relative overflow-hidden h-64 mb-6">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover group-hover:scale-103 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <button className="btn-primary text-sm py-2 px-4 w-full">
            Daha Fazla
          </button>
        </div>
      </div>

      <div>
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-light tracking-wider uppercase mb-3">
          {restaurant.cuisine}
        </span>
        <h3 className="font-display text-xl font-light text-accent mb-2">
          {restaurant.name}
        </h3>
        <p className="text-text-light text-sm font-light">
          {restaurant.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function DiningSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'restaurant' | 'bar'>('all');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  const filteredRestaurants =
    activeTab === 'all'
      ? restaurants
      : restaurants.filter(r => r.type === activeTab);

  return (
    <section id="dining" className="py-20 lg:py-32 bg-ivory">
      <div className="container">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-32"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-light tracking-widest uppercase mb-6">
            Mutfak
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-light text-accent mb-8 lg:mb-10">
            Damağın Seyahati
          </h2>
          <p className="text-text-secondary text-lg lg:text-xl font-light max-w-2xl mx-auto">
            Şef imzalı lezzetler, altı restorana dağılmış dünya usulü yemekler
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12 lg:mb-20"
        >
          {[
            { key: 'all', label: 'Tümü' },
            { key: 'restaurant', label: 'Restoranlar' },
            { key: 'bar', label: 'Barlar' },
          ].map(tab => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-6 py-2 font-medium text-sm rounded-full transition-all ${
                activeTab === tab.key
                  ? 'bg-primary text-white'
                  : 'bg-sand text-accent hover:bg-sand/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {filteredRestaurants.map((restaurant, index) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
