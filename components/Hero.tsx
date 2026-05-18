"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

const heroImages = [
  "/images/hero1.jpg",
  "/images/hero2.webp",
  "/images/hero3.webp",
  "/images/hero4.webp",
];

interface HeroProps {
  onBookNowClick?: () => void;
}

export const Hero = ({ onBookNowClick }: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen pt-16 overflow-hidden"
    >
      {/* Carousel */}
      <div className="relative w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Hero slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft size={28} className="text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/30 hover:bg-white/50 transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight size={28} className="text-white" />
        </button>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Explore Cresta de Gallo
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl animate-fade-in">
            Book your island adventure today
          </p>
          <Button
            size="lg"
            onClick={onBookNowClick}
            className="animate-fade-in"
          >
            Book Now
          </Button>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
