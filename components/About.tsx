"use client";

import React from "react";
import { galleryImages } from "@/data/gallery";
import { Card } from "./Card";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            About Cresta de Gallo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the hidden gem of Sibuyan Island
          </p>
        </div>

        {/* Description */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              Cresta de Gallo is a pristine island destination that offers an
              unforgettable tropical experience. With its white sandy beaches,
              crystal-clear turquoise waters, and vibrant marine life, it's the
              perfect escape from the hustle and bustle of everyday life.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our island is home to breathtaking snorkeling spots where you can
              explore colorful coral reefs and encounter tropical fish species.
              Whether you're seeking adventure, relaxation, or quality time with
              loved ones, Cresta de Gallo has something for everyone.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    White Sand Beaches
                  </h4>
                  <p className="text-gray-600">
                    Pristine, unspoiled beaches perfect for relaxation
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Crystal Clear Waters
                  </h4>
                  <p className="text-gray-600">
                    Transparent waters ideal for snorkeling and swimming
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Vibrant Coral Reefs
                  </h4>
                  <p className="text-gray-600">
                    Home to diverse marine life and colorful coral gardens
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Relaxing Atmosphere
                  </h4>
                  <p className="text-gray-600">
                    Peaceful island vibes perfect for unwinding and rejuvenation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl transform rotate-3" />
            <img
              src={galleryImages[1].src}
              alt="Featured island view"
              className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Gallery */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <Card key={image.id} hover className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <div className="text-white">
                      <h4 className="font-bold text-lg">{image.title}</h4>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
