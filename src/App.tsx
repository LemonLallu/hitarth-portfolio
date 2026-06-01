import React, { useState } from 'react';
import HeroSection from './components/HeroSection.tsx';
import MarqueeSection from './components/MarqueeSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import ThankYouSection from './components/ThankYouSection.tsx';
import ContactModal from './components/ContactModal.tsx';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased overflow-x-clip">
      {/* 1. Hero Section */}
      <HeroSection
        onContactClick={() => setIsContactOpen(true)}
        onNavClick={scrollToSection}
      />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* 6. Thank You Section */}
      <ThankYouSection onContactClick={() => setIsContactOpen(true)} />

      {/* Interactive Contact & Links Overlay Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Subtle Floating Bottom Left Watermark / Indicator for easy portfolio accessibility */}
      <div className="fixed bottom-4 left-4 z-40 hidden md:flex items-center gap-2 bg-[#0C0C0C]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full select-none shadow-lg">
        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
        <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
          Hitarth Baldha &bull; PM Portfolio
        </span>
      </div>

      {/* Subtle Floating Resume Badge on Bottom Right for extreme high-intent visibility */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsContactOpen(true)}
          className="bg-white text-black hover:bg-neutral-100 font-bold font-kanit uppercase tracking-wider text-xs px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-25"
        >
          Resume & Docs
        </button>
      </div>
    </div>
  );
}
