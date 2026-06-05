'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { hotelData } from '@/data/hotel';

const ease = [0.16, 1, 0.3, 1] as const;

const bookingChannels = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Online Rezervasyon',
    badge: 'Önerilen',
    subtitle: 'En iyi fiyat garantisi',
    description:
      'Resmi rezervasyon sistemimiz üzerinden anında, güvenli rezervasyon yapın. Direkt arama fiyat garantisiyle en avantajlı fiyatı sunuyoruz.',
    cta: 'Hemen Rezervasyon Yap',
    href: hotelData.bookingUrl,
    external: true,
    highlight: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Telefon',
    badge: null,
    subtitle: '7/24 hizmetinizdeyiz',
    description:
      'Uzman ekibimiz sorularınızı yanıtlamak ve size en uygun tatil paketini oluşturmak için her zaman hazır.',
    cta: hotelData.phone,
    href: `tel:${hotelData.phone.replace(/\s/g, '')}`,
    external: false,
    highlight: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    title: 'WhatsApp',
    badge: null,
    subtitle: 'Hızlı yanıt',
    description:
      'WhatsApp hattımız üzerinden anlık destek alın, sorularınızı iletin ve kolayca rezervasyon yapın.',
    cta: '+90 552 982 11 01',
    href: 'https://wa.me/905529821101',
    external: true,
    highlight: false,
  },
];

const quickInfo = [
  { value: '14:00', label: 'Check-in', note: 'Erken giriş talep üzerine' },
  { value: '12:00', label: 'Check-out', note: 'Geç çıkış talep üzerine' },
  { value: 'UHED', label: 'Konsept', note: 'Ultra Her Şey Dahil' },
  { value: '600+', label: 'Kapasite', note: 'Yatak kapasitesi' },
];

const included = [
  'Açık büfe kahvaltı, öğle ve akşam yemekleri',
  'Yerli & yabancı alkollü / alkolsüz içecekler',
  'Açık ve kapalı havuz kullanımı',
  'Animasyon ve eğlence programları',
  'Spor tesisleri ve fitness center',
  'Çocuk kulübü (Mini Club)',
  'Plaj ve havuz havluları',
  'Akrobatik gösteri ve gece programları',
  'Su sporları (bazı aktiviteler)',
  'Tüm alanlarda WiFi',
];

export default function RezervasyonPage() {
  const heroRef = useRef(null);
  const channelsRef = useRef(null);
  const includedRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const channelsInView = useInView(channelsRef, { once: true, margin: '-80px' });
  const includedInView = useInView(includedRef, { once: true, margin: '-80px' });

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
            Rezervasyon
          </motion.span>
          <motion.h1
            className="font-display text-white font-light leading-none mb-2"
            initial={{ opacity: 0, y: 32, filter: 'blur(12px)' }}
            animate={isHeroInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.4, ease, delay: 0.4 }}
          >
            Tatil İçin
          </motion.h1>
          <motion.div
            className="font-display leading-none mb-6"
            initial={{ opacity: 0, y: 32, filter: 'blur(12px)' }}
            animate={isHeroInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 1.4, ease, delay: 0.55 }}
          >
            <span className="font-display text-accent" style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 400 }}>
              İlk Adım
            </span>
          </motion.div>
          <motion.p
            className="text-white/45 text-sm lg:text-base font-light max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease, delay: 0.7 }}
          >
            Online sistem, telefon veya WhatsApp ile kolayca rezervasyon yapın.
          </motion.p>
        </div>
      </section>

      {/* Booking Channels */}
      <section className="py-20 lg:py-32 bg-background">
        <div ref={channelsRef} className="container">
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 24 }}
            animate={channelsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease }}
          >
            <motion.span
              className="inline-block text-accent/65 text-[10px] font-light tracking-[0.4em] uppercase mb-5"
              initial={{ opacity: 0 }}
              animate={channelsInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.0, ease, delay: 0.1 }}
            >
              3 Farklı Kanal
            </motion.span>
            <h2 className="font-display text-3xl lg:text-4xl font-light text-textPrimary">
              Nasıl Rezervasyon Yapılır?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {bookingChannels.map((channel, i) => (
              <motion.div
                key={channel.title}
                className={`relative rounded-card border flex flex-col p-8 lg:p-10 ${
                  channel.highlight ? 'bg-accent/5 border-accent/30' : 'bg-surface border-divider'
                }`}
                initial={{ opacity: 0, y: 40 }}
                animate={channelsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, ease, delay: i * 0.12 }}
              >
                {channel.badge && (
                  <span className="absolute top-5 right-5 text-[9px] font-medium tracking-[0.22em] uppercase bg-accent text-background px-2.5 py-1 rounded-soft">
                    {channel.badge}
                  </span>
                )}

                <div className={`mb-7 ${channel.highlight ? 'text-accent' : 'text-textSecondary/50'}`}>
                  {channel.icon}
                </div>

                <h3 className="font-display text-xl font-light text-textPrimary mb-1.5">
                  {channel.title}
                </h3>
                <p className="text-accent/80 text-[11px] font-light tracking-[0.22em] uppercase mb-5">
                  {channel.subtitle}
                </p>
                <p className="text-textSecondary text-sm font-light leading-relaxed mb-10 flex-1">
                  {channel.description}
                </p>

                <motion.a
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  className={`w-full text-center py-3.5 text-[11px] font-light tracking-[0.22em] uppercase rounded-soft transition-all duration-400 ${
                    channel.highlight
                      ? 'bg-accent text-background hover:bg-accent/85'
                      : 'border border-divider text-textSecondary hover:border-accent/50 hover:text-accent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {channel.cta}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick info stats */}
      <section className="py-16 lg:py-24 bg-surface border-t border-divider">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {quickInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease, delay: i * 0.09 }}
              >
                <p className="font-display text-4xl lg:text-5xl font-light text-accent mb-2 leading-none">
                  {item.value}
                </p>
                <p className="text-textPrimary text-[10px] font-light tracking-[0.28em] uppercase mb-1.5">
                  {item.label}
                </p>
                <p className="text-textSecondary/55 text-[11px] font-light">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 lg:py-32 bg-background">
        <div ref={includedRef} className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={includedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease }}
            >
              <span className="inline-block text-accent/65 text-[10px] font-light tracking-[0.42em] uppercase mb-6">
                Ultra Her Şey Dahil
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-light text-textPrimary mb-6 leading-tight">
                Pakete Dahil<br />Olanlar
              </h2>
              <p className="text-textSecondary text-sm font-light leading-relaxed">
                Grand Yazıcı Club Turban Thermal&apos;de ultra her şey dahil konseptiyle, ek ücret ödemeden sayısız deneyim sizi bekliyor.
              </p>
            </motion.div>

            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 lg:pt-2"
              initial={{ opacity: 0, y: 24 }}
              animate={includedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease, delay: 0.15 }}
            >
              {included.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-sm font-light text-textSecondary"
                  initial={{ opacity: 0, x: -12 }}
                  animate={includedInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease, delay: 0.25 + i * 0.05 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/65 shrink-0 mt-1.5" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 lg:py-28 bg-inkDark">
        <div className="container text-center">
          <motion.p
            className="text-white/35 text-[10px] font-light tracking-[0.42em] uppercase mb-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
          >
            Bizi Arayın
          </motion.p>
          <motion.a
            href={`tel:${hotelData.phone.replace(/\s/g, '')}`}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-white hover:text-accent transition-colors duration-400 block mb-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease, delay: 0.1 }}
          >
            {hotelData.phone}
          </motion.a>
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
            Online Rezervasyon Yap
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
