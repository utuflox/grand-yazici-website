'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { rooms } from '@/data/hotel';
import RoomReservationModal from './RoomReservationModal';

const RoomCard = ({ room, index, onOpenModal }: { room: any; index: number; onOpenModal: (room: any) => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.9, delay: index * 0.08 }}
      className="group cursor-pointer"
      onClick={() => onOpenModal(room)}
    >
      <div className="relative overflow-hidden bg-surface/50 h-80 mb-8 rounded-card border border-divider">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover group-hover:scale-102 transition-transform duration-700 ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <button className="w-full px-4 py-2 text-sm font-light tracking-wider uppercase bg-accent text-background rounded-soft transition-all duration-500 hover:bg-accent/90">
            Detayları Gör
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-display text-2xl font-light text-textPrimary">
            {room.name}
          </h3>
          <p className="text-textSecondary text-xs font-light mt-2 tracking-wide uppercase">
            {room.capacity} Kişi • {room.size}m²
          </p>
        </div>

        <p className="text-textSecondary text-sm font-light leading-relaxed">
          {room.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {room.amenities.slice(0, 3).map((amenity: string) => (
            <span
              key={amenity}
              className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-light rounded-soft"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function RoomsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  return (
    <>
      <RoomReservationModal
        isOpen={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
        room={selectedRoom}
      />
    <section id="rooms" className="py-20 lg:py-32 bg-surface">
      <div className="container">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 lg:mb-32"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-soft text-xs font-light tracking-widest uppercase mb-6">
            Konaklama
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-light text-textPrimary mb-8 lg:mb-10">
            Rahatlığın Tanımı
          </h2>
          <p className="text-textSecondary text-lg lg:text-xl font-light max-w-2xl mx-auto">
            Her oda, dinginlik, incelik ve lüksün bir sunum alanı
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {rooms.map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              index={index}
              onOpenModal={setSelectedRoom}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
