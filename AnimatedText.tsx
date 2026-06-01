import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import React, { useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={containerRef} className={`${className} flex flex-wrap justify-center font-kanit`} style={style}>
      {characters.map((char, index) => {
        if (char === ' ') {
          return <span key={index} className="inline-block">&nbsp;</span>;
        }

        const startProgress = index / characters.length;
        // Soften transition window a bit so it blends nicely
        const segmentLength = 1.8 / characters.length;
        const endProgress = Math.min(1, startProgress + segmentLength);

        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            start={startProgress}
            end={endProgress}
          />
        );
      })}
    </p>
  );
}

interface CharacterProps {
  key?: React.Key;
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

function Character({ char, progress, start, end }: CharacterProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char}</span>
      <motion.span
        className="absolute top-0 left-0"
        style={{ opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}
