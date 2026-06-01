import React from 'react';
import FadeIn from './FadeIn.tsx';
import { ServiceItem } from '../types.ts';

const SKILLS_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'AI & Automation Solutions',
    description: 'Expertise in LLMs, Prompt Engineering, Agentic Workflows (n8n/Make), and OpenAI API/RAG integrations. Built complex auto-screening pipelines to completely automate high-intensity recruiter decisions.',
  },
  {
    number: '02',
    title: 'Analytics & Insight Mining',
    description: 'Proficient in GA4, Mixpanel, Power BI, SQL, and advanced Excel logic. Skilled at standing up high-fidelity interactive Tableau dashboards to pinpoint and reduce reporting overhead.',
  },
  {
    number: '03',
    title: 'Product & Design Systems',
    description: 'Advanced workspace prototyping with Figma, JIRA, Notion, Lovable, and Canva. Focused on drafting detailed feature maps and PRDs to compress cross-functional decision cycles.',
  },
  {
    number: '04',
    title: 'Surgical Product Practices',
    description: 'Command of user-centered specifications: end-to-end PRD Authoring, A/B testing, user journey/funnel optimizations, rigorous competitor research, GTM strategies, and Agile sprints.',
  }
];

export default function ServicesSection() {
  return (
    <section
      id="skills"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-25"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28">
          <FadeIn delay={0} y={40} duration={0.8}>
            <h2
              className="font-black uppercase tracking-tight text-[#0C0C0C] leading-none"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Skills
            </h2>
          </FadeIn>
        </div>

        {/* Skills List */}
        <div className="flex flex-col">
          {SKILLS_DATA.map((skill, index) => (
            <FadeIn
              key={skill.number}
              delay={index * 0.1}
              y={50}
              duration={0.8}
              className="border-t border-[rgba(12,12,12,0.15)] last:border-b py-8 sm:py-10 md:py-12 group hover:bg-neutral-50 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row items-baseline md:items-center gap-6 md:gap-16 w-full">
                {/* Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none tracking-tight select-none self-start md:self-center shrink-0 min-w-[70px] sm:min-w-[120px]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {skill.number}
                </div>

                {/* Info Container */}
                <div className="flex flex-col gap-2 md:gap-3 flex-grow">
                  {/* Title / Name */}
                  <h3
                    className="font-semibold uppercase text-stone-900 group-hover:text-black transition-colors duration-300 font-kanit"
                    style={{ fontSize: 'clamp(1.2rem, 2.2vw, 2.1rem)' }}
                  >
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-light text-stone-600 leading-relaxed max-w-2xl font-sans"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
