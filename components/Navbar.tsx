"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import Image from "next/image";

interface NavbarProps {
  onBookNowClick?: () => void;
}

export const Navbar = ({ onBookNowClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Boats", id: "boats" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg">
              <Image
                src="/images/cresta_logo.png"
                alt="Cresta Logo"
                className="w-full h-full object-cover"
                width={40}
                height={40}
              />
            </div>
            <span
              className={`font-bold text-xl hidden sm:inline transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Cresta
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 font-medium hover:text-blue-500 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="md" onClick={onBookNowClick}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                size={28}
                className={isScrolled ? "text-gray-800" : "text-white"}
              />
            ) : (
              <Menu
                size={28}
                className={isScrolled ? "text-gray-800" : "text-white"}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 rounded-lg p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-gray-800 font-medium hover:bg-blue-50 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              size="md"
              className="w-full"
              onClick={() => {
                onBookNowClick?.();
                setIsMobileMenuOpen(false);
              }}
            >
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
