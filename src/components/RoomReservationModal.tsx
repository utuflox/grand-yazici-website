'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

interface RoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: {
    id: string;
    name: string;
    capacity: number;
    size: number;
    description: string;
    image: string;
    amenities: string[];
    features: string[];
  };
}

export default function RoomReservationModal({ isOpen, onClose, room }: RoomModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && e.target === modalRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      window.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-surface rounded-card max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-divider"
          >
            {/* Header */}
            <div className="sticky top-0 bg-surface border-b border-divider px-6 lg:px-8 py-6 flex items-center justify-between">
              <h2 className="font-display text-3xl font-light text-textPrimary">
                {room.name}
              </h2>
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-accent/10 rounded-soft transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} className="text-textSecondary" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="px-6 lg:px-8 py-8">
              {/* Room Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-accent/5 rounded-soft p-4 border border-divider">
                  <p className="text-textSecondary text-xs uppercase tracking-widest font-light mb-2">
                    Kapasite
                  </p>
                  <p className="font-display text-2xl font-light text-accent">
                    {room.capacity}
                  </p>
                  <p className="text-textSecondary text-sm font-light">Kişi</p>
                </div>
                <div className="bg-accent/5 rounded-soft p-4 border border-divider">
                  <p className="text-textSecondary text-xs uppercase tracking-widest font-light mb-2">
                    Alan
                  </p>
                  <p className="font-display text-2xl font-light text-accent">
                    {room.size}
                  </p>
                  <p className="text-textSecondary text-sm font-light">m²</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-textSecondary font-light leading-relaxed mb-8">
                {room.description}
              </p>

              {/* Amenities */}
              {room.amenities.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-display text-lg font-light text-textPrimary mb-4">
                    Odada Bulunlar
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => (
                      <motion.span
                        key={amenity}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="px-3 py-1 bg-accent/10 text-accent text-xs font-light rounded-soft"
                      >
                        {amenity}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {room.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-display text-lg font-light text-textPrimary mb-4">
                    Özellikler
                  </h3>
                  <ul className="space-y-2">
                    {room.features.map((feature) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="text-textSecondary font-light flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Button */}
              <motion.a
                href={`https://grandyazicihotels.platformeva.com/?checkin=&checkout=&currency=usd#/rooms/search/date=${new Date().toISOString().split('T')[0]}&guests=2`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center block px-8 py-4 text-sm font-light tracking-wider uppercase bg-accent text-background hover:bg-accent/90 transition-all duration-500 rounded-soft"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Şimdi Rezervasyon Yap
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
