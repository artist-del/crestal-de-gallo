export interface Boat {
  id: number;
  name: string;
  capacity: number;
  availableSlots: number;
  price: number;
  size: 'Small' | 'Medium' | 'Large';
  description: string;
  features: string[];
  image: string;
}

export interface Booking {
  id: string;
  fullName: string;
  contactNumber: string;
  numberOfPassengers: number;
  boatId: number;
  boatName: string;
  preferredDate: string;
  notes: string;
  totalPrice: number;
  createdAt: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
  location: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title?: string;
}
