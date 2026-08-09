import React, { useEffect, useState } from 'react';
import { Sparkles, Crown } from 'lucide-react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadingOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 18) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFDF9] transition-opacity duration-700 ease-in-out ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Decorative Rose Gold Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#F2D8DF]/40 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FFF7F2] rounded-full filter blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 text-center px-6 max-w-md w-full">
        {/* Crown Icon */}
        <div className="inline-flex p-3 rounded-full bg-[#FFF7F2] border border-[#F2D8DF] text-[#8A4F62] shadow-sm mb-6 animate-bounce">
          <Crown className="w-8 h-8" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E2E2E] tracking-tight mb-2">
          Linta's <span className="text-[#8A4F62] italic">Beauty Salon</span>
        </h1>
        <p className="text-xs uppercase tracking-[0.25em] text-[#C78E7B] font-medium mb-8">
          North Nazimabad • Karachi
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#FFF7F2] border border-[#F2D8DF] rounded-full h-2 overflow-hidden mb-4 p-0.5 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#D98B9D] via-[#C78E7B] to-[#8A4F62] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-[#6E6E6E] font-medium">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D98B9D]" /> Loading Experience
          </span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};
