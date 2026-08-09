/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { ProposalBanner } from './components/ProposalBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { RatingHighlight } from './components/RatingHighlight';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { HairTransformations } from './components/HairTransformations';
import { BridalShowcase } from './components/BridalShowcase';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { GallerySection } from './components/GallerySection';
import { InstagramShowcase } from './components/InstagramShowcase';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TeamSection } from './components/TeamSection';
import { SpecialPackages } from './components/SpecialPackages';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#2E2E2E] font-sans antialiased selection:bg-[#F2D8DF] selection:text-[#8A4F62]">
      {/* 1. Luxury Animated Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* 2. Proposal Concept Header Banner */}
      <ProposalBanner />

      {/* 3. Glass Sticky Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main>
        {/* 4. Hero Section */}
        <HeroSection />

        {/* 5. Google Rating Highlight Banner */}
        <RatingHighlight />

        {/* 6. About Linta's Beauty Salon */}
        <AboutSection />

        {/* 7. Why Choose Linta's */}
        <WhyChooseUs />

        {/* 8. Premium Services Catalog with Search & Filter */}
        <ServicesSection />

        {/* 9. Featured Hair Transformations */}
        <HairTransformations />

        {/* 10. Bridal Makeup Showcase */}
        <BridalShowcase />

        {/* 11. Interactive Before / After Compare Slider */}
        <BeforeAfterSlider />

        {/* 12. Pinterest / Masonry Style Gallery */}
        <GallerySection />

        {/* 13. Instagram Showcase */}
        <InstagramShowcase />

        {/* 14. Verified Customer Testimonials */}
        <TestimonialsSection />

        {/* 15. Meet The Team */}
        <TeamSection />

        {/* 16. Special Pampering Packages */}
        <SpecialPackages />

        {/* 17. WhatsApp Appointment Booking Form */}
        <BookingSection />

        {/* 18. Google Maps & Location Section */}
        <LocationSection />

        {/* 19. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 20. Luxury Footer */}
      <Footer />

      {/* 21. Floating WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
