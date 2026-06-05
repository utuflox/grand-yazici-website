'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const images = [
  { src: '/gallery/galeri1.webp', alt: 'Grand Yazıcı Galeri 1' },
  { src: '/gallery/galeri2.webp', alt: 'Grand Yazıcı Galeri 2' },
  { src: '/gallery/galeri3.webp', alt: 'Grand Yazıcı Galeri 3' },
  { src: '/gallery/galeri4.webp', alt: 'Grand Yazıcı Galeri 4' },
];

const GalleryItem = ({ img, index, onClick }: { img: typeof images[0]; index: number; onClick: () => void }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-card cursor-zoom-in group aspect-[4/3]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.0, ease, delay: index * 0.08 }}
      onClick={onClick}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
    </motion.div>
  );
};

export default function GallerySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 lg:py-36 bg-surface">
      <div className="container">

        {/* Header */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-16 lg:mb-20"
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
            Galeri
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-textPrimary leading-tight">
            Gözlerinizle Keşfedin
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {images.map((img, index) => (
            <GalleryItem
              key={index}
              img={img}
              index={index}
              onClick={() => setLightbox(index)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/96 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <X size={24} strokeWidth={1.5} />
            </motion.button>
            <motion.div
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
