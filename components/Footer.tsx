"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center font-bold text-lg">
                C
              </div>
              <span className="font-bold text-xl">Cresta</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience the beauty and tranquility of Cresta de Gallo, Sibuyan
              Island. Your island adventure awaits.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#hero"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#boats"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Boats
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <a
                  href="tel:+639123456789"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +63 912 345 6789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@cresta.ph"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  info@cresta.ph
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-blue-400 flex-shrink-0 mt-1"
                />
                <span className="text-gray-400">
                  Cresta de Gallo, Sibuyan Island
                  <br />
                  Romblon, Philippines
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-gray-700 hover:bg-blue-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Cresta de Gallo. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ for Cresta de Gallo Tourism
          </p>
          <p className="text-gray-500 text-sm">Developer: Artz Rase</p>
        </div>
      </div>
    </footer>
  );
};
