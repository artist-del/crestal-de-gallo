"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", hover = false }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
          hover ? "hover:shadow-2xl hover:scale-105" : ""
        } ${className}`}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
