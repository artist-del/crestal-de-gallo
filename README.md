# Cresta de Gallo - Island Booking System

A modern, fully responsive booking system for Cresta de Gallo, Sibuyan Island built with Next.js 14, Tailwind CSS, and TypeScript.

## 🌴 Features

### Design & UI

- **Tropical Theme**: Soft blues, aqua, white, and sand colors with smooth rounded cards
- **Responsive Design**: Mobile-first approach optimized for all screen sizes
- **Modern Animations**: Smooth transitions and hover effects throughout
- **Clean Architecture**: Reusable components with TypeScript interfaces

### Sections

- **Hero Section**: Full-screen carousel with auto-sliding beach images
- **Responsive Navbar**: Transparent on scroll, hamburger menu for mobile
- **About Section**: Island description with image gallery and hover effects
- **Boat Listings**: Dynamic card-based boat selection with pricing
- **Features Section**: Highlighting key benefits with icons
- **Testimonials**: Carousel-style customer reviews
- **Booking Modal**: Comprehensive form with validation
- **Footer**: Contact info and social media links

### Functionality

- Mock data for boats, testimonials, and gallery images
- Form validation with error messages
- Toast notifications using Sonner
- Responsive image carousel
- Smooth scroll navigation
- Mobile-friendly hamburger menu
- Dynamic pricing calculation

## 🛠️ Tech Stack

- **Next.js 14** - App Router, SSR-ready
- **React 18** - UI components and hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS 3** - Utility-first styling
- **Sonner** - Toast notifications
- **Lucide React** - Beautiful icons
- **PostCSS** - CSS processing

## 📦 Installation

1. **Clone the repository** (or open the project)

```bash
cd booking-system-for-cresta
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🚀 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── Card.tsx            # Reusable card component
│   ├── Modal.tsx           # Modal dialog component
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section with carousel
│   ├── About.tsx           # About section with gallery
│   ├── Boats.tsx           # Boat listings
│   ├── BookingModal.tsx    # Booking form modal
│   ├── Features.tsx        # Features showcase
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── Footer.tsx          # Footer section
│   └── index.ts            # Component exports
├── data/
│   ├── boats.ts            # Mock boat data
│   ├── testimonials.ts     # Mock testimonials
│   ├── features.ts         # Features list
│   └── gallery.ts          # Gallery images
├── hooks/
│   └── useBooking.ts       # Booking state management hook
├── lib/
│   └── utils.ts            # Utility functions
├── types/
│   └── index.ts            # TypeScript interfaces
├── public/
│   └── images/             # Public images directory
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Project dependencies
```

## 🎨 Color Palette

- **Primary Blue**: `#0ea5e9`
- **Aqua**: `#06b6d4`
- **Sand**: `#e0cfa8`
- **White**: `#ffffff`
- **Gray**: Various shades for text and backgrounds

## ✨ Key Components

### Button

Versatile button component with multiple variants:

- `primary` - Main CTA button
- `secondary` - Secondary actions
- `outline` - Outlined style
- `ghost` - Minimal style

### Card

Reusable card component with optional hover scale effect

### Modal

Responsive modal dialog with backdrop and smooth animations

### Navbar

Sticky navigation with mobile hamburger menu and scroll detection

### Hero

Full-screen carousel with auto-play and manual navigation

### BookingModal

Comprehensive booking form with validation and price calculation

## 🔧 Customization

### Modify Boats

Edit `data/boats.ts` to add or update boat listings

### Update Testimonials

Edit `data/testimonials.ts` to add customer reviews

### Change Colors

Update the Tailwind theme in `tailwind.config.js`

### Add Images

Replace image URLs in components with your own images

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🌐 Deployment

The project is ready to deploy to Vercel, Netlify, or any Node.js hosting:

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
vercel deploy
```

## 📝 Notes

- **Frontend Only**: Currently uses mock data; ready for backend integration
- **No Database**: All data is static; add API integration when ready
- **Toast Notifications**: Uses Sonner for non-intrusive notifications
- **TypeScript**: Full type safety throughout the application
- **Scalable**: Component structure allows easy addition of new features

## 🚀 Future Enhancements

- Dark mode toggle
- Booking history page
- Payment integration
- Real-time availability
- Email confirmations
- User authentication
- Admin dashboard
- Backend API integration

## 📄 License

This project is created for Cresta de Gallo Tourism. All rights reserved.

## 👨‍💻 Made with ❤️ for Cresta de Gallo Tourism

Perfect for showcasing your island resort and enabling seamless bookings!
