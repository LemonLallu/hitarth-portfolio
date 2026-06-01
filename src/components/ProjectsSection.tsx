import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Project } from '../types.ts';
import LiveProjectButton from './LiveProjectButton.tsx';
import FadeIn from './FadeIn.tsx';

const PROJECTS_DATA: Project[] = [
  {
    id: 'proj1',
    number: '01',
    name: 'Gmail AI Resume Screener',
    category: 'AI Pipeline & n8n',
    description: 'An automated agentic workflow parsing candidate resumes straight from Gmail inbox, running OpenAI scoring agents, and logging formatted outcomes clean to Google Sheets with zero-touch delivery.',
    techStack: ['n8n', 'OpenAI API', 'Gmail API', 'Google Sheets'],
    liveLink: 'https://drive.google.com/file/d/1F4l5HYH5uq4sley4OLrd5Hl1SOkZKUM8/view?usp=sharing',
    imageCol1_1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    imageCol1_2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    imageCol2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    id: 'proj2',
    number: '02',
    name: 'CURO Service Platform',
    category: 'Product & Design',
    description: 'Lead the full-cycle product lifecycle for a service-booking platform; authored RICE-prioritized PRD and user stories aligning business objectives with customer pain points.',
    techStack: ['Figma', 'PRD Design', 'Lovable', 'React'],
    liveLink: 'https://curo-it.netlify.app/login',
    imageCol1_1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    imageCol1_2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    imageCol2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    id: 'proj3',
    number: '03',
    name: 'ZEPTO Optimization',
    category: 'Product Growth',
    description: 'National Finalist (Top 2 of 140 teams) in the Inter-IIT design challenge. Validated intense delivery logistics pain points through 30+ structured user interviews.',
    techStack: ['User Research', 'Figma', 'Metrics Framing', 'Product Pitch'],
    liveLink: 'https://drive.google.com/file/d/1gHqiQ6OncHI2lHJ0-3n6oEG7CpJVK7XL/view?usp=drivesdk',
    imageCol1_1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    imageCol1_2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    imageCol2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
  {
    id: 'proj4',
    number: '04',
    name: 'CRED Conversion Concept',
    category: 'Conversion & UX Audit',
    description: 'An in-depth evaluation of engagement and payment flows, charting friction levels and outlining metrics to boost core conversion and user retention metrics.',
    techStack: ['Friction Mapping', 'Metrics Framing', 'Product Pitch', 'Case Analysis'],
    liveLink: 'https://drive.google.com/file/d/1E8b5zzoODxM9zjOndi2NtDa27Cb5xsh-/view?usp=drivesdk',
    imageCol1_1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    imageCol1_2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    imageCol2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    id: 'proj5',
    number: '05',
    name: 'Hello PM Case Study',
    category: 'Product Analytics & GTM',
    description: 'Ranked Top 51 globally among 5,000+ contributors. Analyzed competitive product landscapes to formulate a comprehensive D2C feature expansion and deployment roadmap.',
    techStack: ['GTM Strategy', 'User Segmentation', 'Case Analysis', 'Roadmap Modeling'],
    liveLink: 'https://drive.google.com/file/d/1N83DXdiEnA55TMwCrhwi4zKCVsTWJSJX/view?usp=drivesdk',
    imageCol1_1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    imageCol1_2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    imageCol2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
  }
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 pt-20 pb-32 z-10 px-4 sm:px-6 md:px-8 select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24">
          <FadeIn delay={0} y={40} duration={0.8}>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Projects
            </h2>
          </FadeIn>
        </div>

        {/* Project Stacking Cards Container */}
        <div className="flex flex-col gap-16 relative">
          {PROJECTS_DATA.map((project, index) => (
            <CardWrapper
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
              sectionContainerRef={containerRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardWrapperProps {
  key?: React.Key;
  project: Project;
  index: number;
  totalCards: number;
  sectionContainerRef: React.RefObject<HTMLDivElement | null>;
}

function CardWrapper({ project, index, totalCards, sectionContainerRef }: CardWrapperProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // We track the scroll progress of this specific card wrapper
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start start', 'end start'],
  });

  // Scale down target: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  // Slowly scale down as page scrolls beyond this sticky card
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  // Sticky top offset
  const topOffset = 96 + index * 28; // 24px is ~96px, with overlapping stacking layers

  return (
    <div
      ref={cardRef}
      className="sticky w-full h-[90vh] sm:h-[85vh] min-h-[500px] flex flex-col justify-start"
      style={{
        top: `${topOffset}px`,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          transformOrigin: 'top center',
        }}
        className="w-full bg-[#0C0C0C] rounded-[32px] sm:rounded-[40px] md:rounded-[50px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
      >
        {/* Top Navigation Row */}
        <div className="flex justify-between items-start w-full border-b border-[#D7E2EA]/10 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 md:gap-6">
            {/* Massive Number */}
            <span className="font-black text-[#D7E2EA] leading-none shrink-0" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs uppercase text-neutral-400 font-mono tracking-widest leading-none mb-1">
                {project.category}
              </span>
              <h3 className="font-semibold uppercase text-stone-100 tracking-wide font-kanit text-sm sm:text-base md:text-lg lg:text-xl">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton
            href={project.liveLink}
            label="Live Project"
            className="px-4 py-1.5 sm:px-6 sm:py-2 text-[10px] sm:text-xs md:text-sm shadow-sm"
          />
        </div>

        {/* Dynamic description info */}
        <div className="py-2 text-xs sm:text-sm text-neutral-300 max-w-4xl line-clamp-2 sm:line-clamp-none">
          {project.description}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Image grid row */}
        <div className="grid grid-cols-10 gap-3 sm:gap-4 flex-grow overflow-hidden mt-2 h-0">
          {/* Left Column (40% width / 4 cols) */}
          <div className="col-span-4 flex flex-col gap-3 sm:gap-4 h-full">
            {/* Top Image */}
            <div className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-neutral-900 border border-white/5 select-none" style={{ height: '50%' }}>
              <img
                src={project.imageCol1_1}
                alt={`${project.name} preview`}
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Bottom Image */}
            <div className="rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-neutral-900 border border-white/5 select-none" style={{ height: '50%' }}>
              <img
                src={project.imageCol1_2}
                alt={`${project.name} mock`}
                className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column (60% width / 6 cols) */}
          <div className="col-span-6 h-full rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden bg-neutral-900 border border-white/5 select-none">
            <img
              src={project.imageCol2}
              alt={`${project.name} full layout`}
              className="w-full h-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
