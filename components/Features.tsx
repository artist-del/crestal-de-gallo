"use client";

import React from "react";
import { features } from "@/data/features";
import { Shield, DollarSign, Smile, MapPin, Users, User } from "lucide-react";
import { Card } from "./Card";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={40} />,
  DollarSign: <DollarSign size={40} />,
  Smile: <Smile size={40} />,
  MapPin: <MapPin size={40} />,
  Users: <Users size={40} />,
  User: <User size={40} />,
};

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best island adventure with our premium services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} hover>
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4 text-blue-500">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
