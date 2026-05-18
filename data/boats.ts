import { Boat } from '@/types';

export const boats: Boat[] = [
  {
    id: 1,
    name: 'Small Island Boat',
    capacity: 5,
    availableSlots: 3,
    price: 2500,
    size: 'Small',
    description: 'Perfect for intimate adventures and couples',
    features: ['Life jackets included', 'Snorkeling gear', 'Umbrella'],
    image: '/images/boat1.jpg',
  },
  {
    id: 2,
    name: 'Family Adventure Boat',
    capacity: 10,
    availableSlots: 7,
    price: 5000,
    size: 'Medium',
    description: 'Ideal for families and small groups',
    features: [
      'Life jackets for all',
      'Full snorkeling equipment',
      'Cooler with refreshments',
      'Shaded area',
    ],
    image: '/images/boat2.jpg',
  },
  {
    id: 3,
    name: 'Big Tourist Boat',
    capacity: 20,
    availableSlots: 12,
    price: 8500,
    size: 'Large',
    description: 'Perfect for large groups and organized tours',
    features: [
      'Life jackets for all',
      'Professional snorkeling guide',
      'Premium refreshments & snacks',
      'Spacious deck',
      'Multiple shaded areas',
      'First aid kit',
    ],
    image: '/images/boat3.jpg',
  },
];
