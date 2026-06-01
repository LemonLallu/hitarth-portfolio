import React from 'react';
import FadeIn from './FadeIn.tsx';
import AnimatedText from './AnimatedText.tsx';
import ContactButton from './ContactButton.tsx';

interface AboutSectionProps {
  onContactClick: () => void;
}

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  // Adapted text matching the requested length and style, but personalized for Hitarth (the real user resume)
  const bioText = "With a strong foundation in product management at IIT Dhanbad, i focus on LLMs, agentic workflows, and user experience, i truly enjoy building systems that stand out and deliver high impact for active projects. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* Decorative 3D images positioned absolutely in corners */}
      
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 select-none pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon"
            className="w-[120px] sm:w-[160px] md:w-[210px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] animate-pulse"
            style={{ animationDuration: '4s' }}
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 select-none pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Geometry"
            className="w-[100px] sm:w-[140px] md:w-[180px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 select-none pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego"
            className="w-[120px] sm:w-[160px] md:w-[210px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 select-none pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Sphere Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            referrerPolicy="no-referrer"
          />
        </FadeIn>
      </div>

      {/* Main content elements */}
      <div className="flex flex-col items-center justify-center max-w-4xl z-20 w-full relative">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap 1 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated text block */}
        <div className="w-full text-center max-w-[560px]">
          <AnimatedText
            text={bioText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed font-kanit"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        {/* Gap 2 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={30} duration={0.8}>
          <ContactButton
            onClick={onContactClick}
            className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:scale-105 transition-transform duration-300"
          />
        </FadeIn>
      </div>
    </section>
  );
}
