import React from 'react';
import Magnet from './Magnet.tsx';
import FadeIn from './FadeIn.tsx';
import ContactButton from './ContactButton.tsx';

interface HeroSectionProps {
  onContactClick: () => void;
  onNavClick: (sectionId: string) => void;
}

export default function HeroSection({
  onContactClick,
  onNavClick,
}: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none"
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} duration={0.8}>
        <nav className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 z-30 relative">
          <button
            onClick={() => onNavClick('about')}
            className="text-sm md:text-lg lg:text-[1.4rem] text-[#D7E2EA] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => onNavClick('skills')}
            className="text-sm md:text-lg lg:text-[1.4rem] text-[#D7E2EA] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => onNavClick('projects')}
            className="text-sm md:text-lg lg:text-[1.4rem] text-[#D7E2EA] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={onContactClick}
            className="text-sm md:text-lg lg:text-[1.4rem] text-[#D7E2EA] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 cursor-pointer"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="flex-1 flex flex-col justify-center items-center w-full z-20 relative px-6 md:px-10">
        <div className="w-full text-center mt-6 sm:mt-4 md:-mt-5">
          <FadeIn delay={0.15} y={40} duration={0.9}>
            <h1 className="hero-heading font-black uppercase tracking-tighter leading-[0.8] w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] xl:text-[15vw] select-none text-center">
              hi, i&apos;m<br className="sm:hidden" /> hitarth
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portait replacement: Premium Glassmorphic AI PM Workspace Card */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[300px] sm:w-[380px] md:w-[460px] lg:w-[500px] top-[50%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-[10%] pointer-events-auto">
        <FadeIn delay={0.6} y={30} duration={1.1}>
          <Magnet
            padding={150}
            strength={4}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div className="relative overflow-hidden border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] aspect-[1.1/1] w-full rounded-3xl bg-neutral-950/40 backdrop-blur-xl p-4 sm:p-6 flex flex-col justify-between font-sans">
              
              {/* Decorative Glow inside */}
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-indigo-500/10 blur-[40px] pointer-events-none" />
              <div className="absolute -left-10 -top-10 w-44 h-44 rounded-full bg-purple-500/10 blur-[40px] pointer-events-none" />

              {/* Top Window Bar */}
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#D7E2EA]/60">
                    HIT_CORE_AGENT_v1.0
                  </span>
                </div>
              </div>

              {/* Graphic Body: Connected Node Flow representing agentic parsing */}
              <div className="my-3 flex-grow flex flex-col justify-center gap-4 relative">
                <div className="flex justify-between items-center px-2">
                  
                  {/* Gmail Node */}
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center transition-all group-hover:scale-110 shadow-md">
                      <span className="text-[10px] font-mono font-bold text-red-400">MAIL</span>
                    </div>
                    <span className="text-[9px] uppercase font-mono text-neutral-500">Inbox polling</span>
                  </div>

                  {/* Pulsing Link 1 */}
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-red-500/20 via-purple-500/40 to-purple-500/20 mx-1 sm:mx-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-4 bg-white/80 rounded-full animate-[shimmer_2s_infinite]" style={{ animationDuration: '1.5s' }} />
                  </div>

                  {/* LLM Agent Node */}
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-purple-500/15 border-2 border-purple-500/35 flex items-center justify-center transition-all group-hover:scale-110 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-mono font-bold text-purple-300">LLM</span>
                        <span className="text-[8px] font-mono text-purple-400 text-[7px] -mt-1">SCANNER</span>
                      </div>
                    </div>
                    <span className="text-[9px] uppercase font-mono text-purple-400 font-semibold animate-pulse">active agent</span>
                  </div>

                  {/* Pulsing Link 2 */}
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/20 via-green-500/40 to-green-500/20 mx-1 sm:mx-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-4 bg-white/80 rounded-full animate-[shimmer_2s_infinite]" style={{ animationDuration: '1.8s' }} />
                  </div>

                  {/* Sheet Log Node */}
                  <div className="flex flex-col items-center gap-1 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center transition-all group-hover:scale-110 shadow-md">
                      <span className="text-[10px] font-mono font-bold text-green-400">GSHEET</span>
                    </div>
                    <span className="text-[9px] uppercase font-mono text-neutral-500">Output Log</span>
                  </div>

                </div>

                {/* Status Overlay */}
                <div className="absolute top-0 right-0 py-0.5 px-2 rounded-md bg-white/5 border border-white/10 text-[8px] font-mono text-neutral-400 select-none">
                  Status: RUNNING
                </div>
              </div>

              {/* Bottom Workspace Metrics Row */}
              <div className="border-t border-white/5 pt-3 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-[8px] sm:text-[9px] uppercase font-mono text-neutral-500">Candidate Funnel</span>
                  <span className="text-xs sm:text-sm font-semibold font-mono text-stone-200">140+ Screened</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[8px] sm:text-[9px] uppercase font-mono text-neutral-500">Time Saved</span>
                  <span className="text-xs sm:text-sm font-semibold font-mono text-purple-400">~80% Acceleration</span>
                </div>
              </div>

            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 relative">
        <FadeIn delay={0.35} y={20} duration={0.8} className="text-left">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug select-none"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            <span className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px] block font-kanit">
              an ai-native pm driven by crafting striking and impactful products
            </span>
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} duration={0.8}>
          <ContactButton
            onClick={onContactClick}
            className="px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base"
          />
        </FadeIn>
      </div>
    </section>
  );
}
