"use client";

import React from "react";
import { boats } from "@/data/boats";
import { Button } from "./Button";
import { Card } from "./Card";
import { formatPrice } from "@/lib/utils";
import { Users, Anchor } from "lucide-react";

interface BoatsProps {
  onBookBoat?: (boatId: number) => void;
}

export const Boats = ({ onBookBoat }: BoatsProps) => {
  return (
    <section
      id="boats"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Available Boats
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect vessel for your island adventure
          </p>
        </div>

        {/* Boats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boats.map((boat) => (
            <Card key={boat.id} hover>
              {/* Image */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={boat.image}
                  alt={boat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold text-sm">
                    {boat.size}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {boat.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{boat.description}</p>

                {/* Details */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center justify-between text-gray-700">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-blue-500" />
                      <span>Capacity</span>
                    </div>
                    <span className="font-semibold">
                      {boat.capacity} persons
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <div className="flex items-center gap-2">
                      <Anchor size={18} className="text-blue-500" />
                      <span>Available</span>
                    </div>
                    <span className="font-semibold text-green-600">
                      {boat.availableSlots} slots
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Features:
                  </h4>
                  <ul className="space-y-2">
                    {boat.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm">Starting at</p>
                    <p className="text-3xl font-bold text-blue-600">
                      {formatPrice(boat.price)}
                    </p>
                    <p className="text-xs text-gray-500">per person</p>
                  </div>
                  <Button size="md" onClick={() => onBookBoat?.(boat.id)}>
                    Book
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
