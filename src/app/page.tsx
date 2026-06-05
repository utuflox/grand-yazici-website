import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import DiningSection from '@/components/DiningSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import OpeningStatement from '@/components/OpeningStatement';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-background">
      <Navigation />
      <HeroSection />

      <OpeningStatement />

      <VideoSection />
      <RoomsSection />
      <AmenitiesSection />
      <DiningSection />

      {/* Gallery Preview Section */}
      <section className="py-20 lg:py-32 bg-surface">
        <div className="container">
          <div className="text-center mb-20 lg:mb-24">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-soft text-xs font-light tracking-widest uppercase mb-6">
              Galeri
            </span>
            <h2 className="font-display text-4xl lg:text-6xl font-light text-textPrimary mb-8 lg:mb-10">
              Anlık Mükemmellikler
            </h2>
            <p className="text-textSecondary text-lg font-light max-w-2xl mx-auto">
              Tatil deneyiminin her anısı, bir eser
            </p>
          </div>

          <div className="bg-surface/50 rounded-card aspect-video flex items-center justify-center mb-8 border border-divider">
            <p className="text-textSecondary text-sm">Galeri İçeriği Yakında Eklenecek</p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
