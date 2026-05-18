export const formatPrice = (price: number): string => {
  return `₱${price.toLocaleString('en-US')}`;
};

export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned;
};

export const generateBookingId = (): string => {
  return `BKG-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const calculateTotalPrice = (boatPrice: number, passengers: number): number => {
  return boatPrice * passengers;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};
