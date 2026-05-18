"use client";

import React, { useState, useMemo } from "react";
import { Modal } from "./Modal";
import { Button } from "./Button";
import { boats } from "@/data/boats";
import {
  formatPrice,
  calculateTotalPrice,
  isValidPhoneNumber,
} from "@/lib/utils";
import { toast } from "sonner";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBoatId?: number;
}

export const BookingModal = ({
  isOpen,
  onClose,
  selectedBoatId,
}: BookingModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    numberOfPassengers: 1,
    boatId: selectedBoatId || 0,
    preferredDate: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedBoat = useMemo(
    () => boats.find((b) => b.id === (formData.boatId || selectedBoatId)),
    [formData.boatId, selectedBoatId],
  );

  const totalPrice = useMemo(
    () =>
      selectedBoat
        ? calculateTotalPrice(selectedBoat.price, formData.numberOfPassengers)
        : 0,
    [selectedBoat, formData.numberOfPassengers],
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "numberOfPassengers" || name === "boatId"
          ? parseInt(value)
          : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!isValidPhoneNumber(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid phone number";
    }

    if (formData.numberOfPassengers < 1) {
      newErrors.numberOfPassengers = "At least 1 passenger is required";
    }

    if (!selectedBoat) {
      newErrors.boatId = "Please select a boat";
    } else if (formData.numberOfPassengers > selectedBoat.availableSlots) {
      newErrors.numberOfPassengers = `Only ${selectedBoat.availableSlots} slots available`;
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = "Preferred date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Booking submitted successfully!", {
        description: `Booking ID: BKG-${Date.now()}`,
      });

      // Reset form
      setFormData({
        fullName: "",
        contactNumber: "",
        numberOfPassengers: 1,
        boatId: selectedBoatId || 0,
        preferredDate: "",
        notes: "",
      });
      setErrors({});
      onClose();
    }, 1000);
  };

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Your Adventure">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="John Doe"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
              errors.fullName
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Contact Number */}
        <div>
          <label
            htmlFor="contactNumber"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Contact Number *
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            placeholder="+63 999 123 4567"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
              errors.contactNumber
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
          )}
        </div>

        {/* Boat Selection */}
        <div>
          <label
            htmlFor="boatId"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Select Boat *
          </label>
          <select
            id="boatId"
            name="boatId"
            value={formData.boatId}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
              errors.boatId
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-blue-500"
            }`}
          >
            <option value="0">Choose a boat...</option>
            {boats.map((boat) => (
              <option key={boat.id} value={boat.id}>
                {boat.name} - {formatPrice(boat.price)}/person
              </option>
            ))}
          </select>
          {errors.boatId && (
            <p className="text-red-500 text-sm mt-1">{errors.boatId}</p>
          )}
        </div>

        {/* Number of Passengers */}
        <div>
          <label
            htmlFor="numberOfPassengers"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Number of Passengers *
          </label>
          <input
            type="number"
            id="numberOfPassengers"
            name="numberOfPassengers"
            value={formData.numberOfPassengers}
            onChange={handleInputChange}
            min="1"
            max={selectedBoat?.availableSlots || 20}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
              errors.numberOfPassengers
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />
          {selectedBoat && (
            <p className="text-sm text-gray-600 mt-1">
              Available slots: {selectedBoat.availableSlots}
            </p>
          )}
          {errors.numberOfPassengers && (
            <p className="text-red-500 text-sm mt-1">
              {errors.numberOfPassengers}
            </p>
          )}
        </div>

        {/* Preferred Date */}
        <div>
          <label
            htmlFor="preferredDate"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Preferred Date *
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleInputChange}
            min={minDate}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none ${
              errors.preferredDate
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-blue-500"
            }`}
          />
          {errors.preferredDate && (
            <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>
          )}
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Special Requests (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            placeholder="Any special requests or dietary restrictions..."
            rows={3}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none"
          />
        </div>

        {/* Booking Summary */}
        {selectedBoat && (
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Boat:</span>
                <span className="font-semibold text-gray-800">
                  {selectedBoat.name}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Price per person:</span>
                <span className="font-semibold text-gray-800">
                  {formatPrice(selectedBoat.price)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Number of passengers:</span>
                <span className="font-semibold text-gray-800">
                  {formData.numberOfPassengers}
                </span>
              </div>
              <div className="pt-2 border-t border-blue-200 flex justify-between">
                <span className="font-semibold text-gray-800">
                  Total Price:
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            size="md"
            className="flex-1"
            onClick={onClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            size="md"
            className="flex-1"
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Confirm Booking"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
