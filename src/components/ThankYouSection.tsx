import React from 'react';
import FadeIn from './FadeIn.tsx';
import ContactButton from './ContactButton.tsx';

interface ThankYouSectionProps {
  onContactClick: () => void;
}

export default function ThankYouSection({ onContactClick }: ThankYouSectionProps) {
  return (
    <section
      id="thank-you"
      className="relative bg-[#0C0C0C] py-24 sm:py-32 border-t border-white/5 overflow-hidden select-none flex flex-col justify-center items-center text-center px-6 md:px-10 z-20"
    >
      {/* Decorative ambient background glow */}
      <div
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{
          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        }}
      />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Massive Thank You heading */}
        <FadeIn delay={0} y={40} duration={0.8}>
          <h2
            className="hero-heading font-black uppercase tracking-tighter leading-none"
            style={{ fontSize: 'clamp(3rem, 15vw, 160px)' }}
          >
            Thank You
          </h2>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.2} y={30} duration={0.8} className="mt-4 sm:mt-6">
          <p
            className="text-[#D7E2EA]/75 font-light uppercase tracking-widest max-w-xl font-kanit leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.3rem)' }}
          >
            Let&apos;s build something striking and high impact together.
          </p>
        </FadeIn>

        {/* Action Button */}
        <FadeIn delay={0.4} y={20} duration={0.8} className="mt-10 sm:mt-12">
          <ContactButton
            onClick={onContactClick}
            label="Get In Touch"
            className="px-10 py-3.5 sm:px-12 sm:py-4 md:px-14 md:py-4.5 text-xs sm:text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-2xl"
          />
        </FadeIn>

        {/* Closing details */}
        <div className="mt-20 sm:mt-24 border-t border-white/5 pt-8 w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-[#D7E2EA]/40 font-mono text-[10px] uppercase tracking-wider">
          <div>&copy; 2026 Hitarth Baldha</div>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors">&bull; AI Product Manager</span>
            <span className="hover:text-white transition-colors">&bull; Builder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
