import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  label?: string;
  className?: string;
}

export default function LiveProjectButton({
  href,
  onClick,
  label = "Live Project",
  className = '',
}: LiveProjectButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
    } else if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10 active:scale-95 cursor-pointer ${className}`}
    >
      {label}
    </button>
  );
}
