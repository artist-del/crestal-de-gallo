"use client";

import React, { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import { Card } from "./Card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerView,
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            What Travelers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read genuine reviews from our satisfied customers
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                    "{testimonial.comment}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {Array.from({
                length: Math.max(0, testimonials.length - itemsPerView + 1),
              }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-blue-500 w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={currentIndex === maxIndex}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
