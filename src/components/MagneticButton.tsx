'use client';

import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Props {
  href: string;
  primary?: boolean;
  light?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function MagneticButton({ href, primary, light, external, icon, children, className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 180, damping: 20, mass: 0.6 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.26);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.26);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const base = primary
    ? 'bg-accent text-background hover:bg-accent/90'
    : light
      ? 'border border-white/40 text-white hover:bg-white/10 hover:border-white/70'
      : 'border border-accent/60 text-accent hover:border-accent hover:bg-accent/10';

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center gap-2.5 px-10 py-4 text-[11px] font-light tracking-[0.22em] uppercase transition-colors duration-500 rounded-soft select-none ${base} ${className}`}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
    >
      {icon}
      {children}
    </motion.a>
  );
}
