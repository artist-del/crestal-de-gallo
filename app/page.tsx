"use client";

import React, { useState } from "react";
import {
  Navbar,
  Hero,
  About,
  Boats,
  Features,
  Testimonials,
  Footer,
  BookingModal,
} from "@/components";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBoatId, setSelectedBoatId] = useState<number>();

  const handleBookNow = () => {
    setSelectedBoatId(undefined);
    setIsBookingOpen(true);
  };

  const handleBookBoat = (boatId: number) => {
    setSelectedBoatId(boatId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedBoatId(undefined);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar onBookNowClick={handleBookNow} />
      <Hero onBookNowClick={handleBookNow} />
      <About />
      <Boats onBookBoat={handleBookBoat} />
      <Features />
      <Testimonials />
      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedBoatId={selectedBoatId}
      />
    </main>
  );
}
