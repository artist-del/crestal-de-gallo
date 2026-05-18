'use client';

import { useState, useCallback } from 'react';
import { Booking } from '@/types';
import { generateBookingId } from '@/lib/utils';

export const useBooking = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addBooking = useCallback((booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newBooking: Booking = {
        ...booking,
        id: generateBookingId(),
        createdAt: new Date(),
        status: 'pending',
      };
      setBookings((prev) => [...prev, newBooking]);
      setIsLoading(false);
    }, 500);
  }, []);

  const getBookingById = useCallback((id: string) => {
    return bookings.find((b) => b.id === id);
  }, [bookings]);

  const getAllBookings = useCallback(() => {
    return bookings;
  }, [bookings]);

  const updateBooking = useCallback((id: string, updates: Partial<Booking>) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, ...updates } : b))
    );
  }, []);

  return {
    bookings,
    isLoading,
    addBooking,
    getBookingById,
    getAllBookings,
    updateBooking,
  };
};
