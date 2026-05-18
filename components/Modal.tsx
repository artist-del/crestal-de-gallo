"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative bg-white rounded-3xl shadow-2xl z-10 max-h-[90vh] overflow-y-auto w-full mx-4 sm:mx-6 md:mx-0 md:max-w-2xl animate-zoom-in ${className}`}
      >
        <div className="sticky top-0 bg-white flex items-center justify-between p-6 border-b border-gray-100">
          {title && (
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="ml-auto p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};
