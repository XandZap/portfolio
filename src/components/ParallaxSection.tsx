"use client";

import { useRef, useEffect, useState } from "react";

interface ParallaxSectionProps {
  backgroundImage?: string;
  quote: string;
  author: string;
}

function ParallaxSection({ backgroundImage, quote, author }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      if (rect.top < windowH && rect.bottom > 0) {
        setIsVisible(true);
        const speed = 0.3;
        const yPos = -(rect.top * speed);
        setOffset(yPos);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden py-32 md:py-40"
    >
      {/* Parallax background layer */}
      <div
        className={`absolute inset-0 w-full h-full bg-gradient-to-r from-primary/90 to-secondary/90 dark:from-primary/80 dark:to-secondary/80 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700`}
      >
        {backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              transform: `translateY(${offset}px)`,
              willChange: "transform",
            }}
          />
        )}
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold text-accent/95 leading-relaxed italic">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="mt-4 text-accent/70 text-lg">
            <cite>{author}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default ParallaxSection;