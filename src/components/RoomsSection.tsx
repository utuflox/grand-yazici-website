'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { rooms } from '@/data/hotel';
import RoomReservationModal from './RoomReservationModal';

const ease = [0.16, 1, 0.3, 1] as const;

const RoomCard = ({
  room,
  index,
  onOpenModal,
}: {
  room: any;
  index: number;
  onOpenModal: (room: any) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const delay = index * 0.1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.1, ease, delay }}
      className="group cursor-pointer"
      onClick={() => onOpenModal(room)}
    >
      {/* Mask reveal image */}
      <div className="relative overflow-hidden h-72 lg:h-80 mb-7 rounded-card">
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={isInView ? { clipPath: 'inset(0 0 0% 0)' } : {}}
          transition={{ duration: 1.4, ease, delay: delay + 0.08 }}
        >
          <motion.div
            className="relative w-full h-full"
            initial={{ scale: 1.12 }}
            animate={isInView ? { scale: 1.0 } : {}}
            transition={{ duration: 1.8, ease, delay: delay + 0.08 }}
          >
            <Image
              src={room.image}
              alt={room.name}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        </motion.div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="w-full text-center px-4 py-2.5 text-[11px] font-light tracking-[0.2em] uppercase bg-accent text-inkDark rounded-soft">
            Detayları Gör
          </span>
        </div>

        {/* Subtle gold bottom border on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-accent"
          initial={{ width: '0%' }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.5, ease }}
        />
      </div>

      {/* Info */}
      <div className="space-y-3 px-1">
        <div>
          <h3 className="font-display text-xl lg:text-2xl font-light text-textPrimary leading-snug">
            {room.name}
          </h3>
          <p className="text-textSecondary/60 text-[11px] font-light mt-1.5 tracking-[0.15em] uppercase">
            {room.capacity} Kişi · {room.size} m²
          </p>
        </div>

        <p className="text-textSecondary text-sm font-light leading-relaxed line-clamp-3">
          {room.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {room.amenities.slice(0, 3).map((amenity: string) => (
            <span
              key={amenity}
              className="inline-block px-2.5 py-1 bg-accent/10 text-accent text-[10px] font-light rounded-soft tracking-wide"
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
  const isInView = useInView(sectionRef, { once: true, margin: '-150px' });
  const [selectedRoom, setSelectedRoom] = useState<any>(null);

  return (
    <>
      <RoomReservationModal
        isOpen={!!selectedRoom}
        onClose={() => setSelectedRoom(null)}
        room={selectedRoom}
      />

      <section id="rooms" className="py-24 lg:py-36 bg-surface">
        <div className="container">

          {/* Header */}
          <motion.div
            ref={sectionRef}
            className="text-center mb-20 lg:mb-28"
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-textPrimary mb-6 lg:mb-8 leading-tight">
              Rahatlığın Tanımı
            </h2>
            <p className="text-textSecondary text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
              Her oda, dinginlik, incelik ve lüksün bir sunum alanı
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
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
