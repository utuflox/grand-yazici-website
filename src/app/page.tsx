import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OpeningStatement from '@/components/OpeningStatement';
import VideoSection from '@/components/VideoSection';
import RoomsSection from '@/components/RoomsSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import DiningSection from '@/components/DiningSection';
import GallerySection from '@/components/GallerySection';
import CTASection from '@/components/CTASection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';
import { FloatingBookingCTA } from '@/components/FloatingBookingCTA';

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
      <GallerySection />
      <CTASection />
      <LocationSection />
      <Footer />
      <FloatingBookingCTA />
    </main>
  );
}
