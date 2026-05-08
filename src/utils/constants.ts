import { Service, Vehicle, NavLink, Testimonial } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICES: Service[] = [
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    description:
      'Seamless, punctual airport transportation with flight tracking and meet-and-greet service.',
    benefits: [
      'Flight tracking & monitoring',
      'Meet & greet at arrival',
      'Complimentary wait time',
      'All airports covered',
    ],
    icon: 'Plane',
    slug: 'airport-transfers',
  },
  {
    id: 'corporate-transportation',
    title: 'Corporate Transportation',
    description:
      'Professional corporate travel solutions for executives, clients, and business events.',
    benefits: [
      'Executive-class vehicles',
      'Confidential & discreet',
      'Billing accounts available',
      'Multiple stops service',
    ],
    icon: 'Briefcase',
    slug: 'corporate-transportation',
  },
  {
    id: 'special-events',
    title: 'Special Events',
    description:
      'Make every milestone unforgettable — weddings, galas, proms, and celebrations.',
    benefits: [
      'Weddings & anniversaries',
      'Galas & charity events',
      'Prom & graduation',
      'Red carpet arrivals',
    ],
    icon: 'Sparkles',
    slug: 'special-events',
  },
  {
    id: 'city-tours',
    title: 'City Tours & Sightseeing',
    description:
      'Explore the city in style with our knowledgeable chauffeurs as your guide.',
    benefits: [
      'Customizable itineraries',
      'Knowledgeable chauffeurs',
      'Flexible duration',
      'Group tours available',
    ],
    icon: 'Map',
    slug: 'city-tours',
  },
  {
    id: 'hourly-service',
    title: 'Hourly Service',
    description:
      'Book by the hour for maximum flexibility — shopping, meetings, or a night out.',
    benefits: [
      'Flexible scheduling',
      'Multiple stops included',
      'Minimum 2-hour booking',
      'Extend anytime',
    ],
    icon: 'Clock',
    slug: 'hourly-service',
  },
  {
    id: 'point-to-point',
    title: 'Point-to-Point Transfers',
    description:
      'Reliable, direct transfers between any two locations with flat-rate pricing.',
    benefits: [
      'Flat-rate pricing',
      'No hidden fees',
      'Door-to-door service',
      'Real-time tracking',
    ],
    icon: 'MapPin',
    slug: 'point-to-point',
  },
]

export const VEHICLES: Vehicle[] = [
  {
    id: 'audi-s8',
    name: 'Audi S8',
    model: 'S8 Plus Quattro',
    capacity: 3,
    luggage: 3,
    amenities: ['WiFi', 'Leather Seats', 'Climate Control', 'Bottled Water', 'Phone Charger'],
    images: ['/images/fleet/audis8.jpg'],
    category: 'Sedan',
  },
  {
    id: 'lincoln-aviator',
    name: 'Lincoln Aviator',
    model: 'Aviator Ultra',
    capacity: 3,
    luggage: 3,
    amenities: ['WiFi', 'Leather Seats', 'Climate Control', 'Bottled Water', 'Phone Charger'],
    images: ['/images/fleet/aviator.jpg'],
    category: 'Sedan',
  },
  {
    id: 'cadillac-xt6',
    name: 'Cadillac XT6',
    model: 'Premium Luxury AWD',
    capacity: 3,
    luggage: 3,
    amenities: ['WiFi', 'Leather Seats', 'Climate Control', 'Bottled Water', 'Phone Charger'],
    images: ['/images/fleet/CadillacXT6.jpg'],
    category: 'Sedan',
  },
  {
    id: 'cadillac-escalade',
    name: 'Cadillac Escalade',
    model: 'ESV Platinum',
    capacity: 6,
    luggage: 6,
    amenities: ['WiFi', 'Leather Seats', 'Climate Control', 'Bottled Water', 'Premium Sound'],
    images: ['/images/fleet/Cadillac.png'],
    category: 'SUV',
  },
  {
    id: 'lincoln-navigator',
    name: 'Lincoln Navigator',
    model: 'L Black Label',
    capacity: 6,
    luggage: 6,
    amenities: ['WiFi', 'Reclining Seats', 'Climate Control', 'Bottled Water', 'Panoramic Roof'],
    images: ['/images/fleet/Lincoln-Navigator.png'],
    category: 'SUV',
  },
  {
    id: 'mercedes-sprinter',
    name: 'Mercedes-Benz Sprinter',
    model: 'Executive Van',
    capacity: 12,
    luggage: 12,
    amenities: ['WiFi', 'Leather Seats', 'Climate Control', 'Bottled Water', 'TV Screen', 'Mini Bar'],
    images: ['/images/fleet/Sprinter.png'],
    category: 'Van',
  },
  {
    id: 'cadillac-lyriq',
    name: 'Cadillac LYRIQ',
    model: 'Sport AWD',
    capacity: 3,
    luggage: 3,
    amenities: ['WiFi', 'Leather Seats', 'Climate Control', 'Bottled Water', 'Phone Charger', '33" Display'],
    images: ['/images/fleet/Cadillac Lyriq.jpg'],
    category: 'Electric',
  },
  {
    id: 'cadillac-vistiq',
    name: 'Cadillac VISTIQ',
    model: 'Premium Luxury',
    capacity: 3,
    luggage: 3,
    amenities: ['WiFi', 'Leather Seats', 'Climate Control', 'Bottled Water', 'Phone Charger', 'Panoramic Roof'],
    images: ['/images/fleet/Cadillac VISTIQ.jpg'],
    category: 'Electric',
  },
  {
    id: 'lucid-air',
    name: 'Lucid Air',
    model: 'Grand Touring',
    capacity: 3,
    luggage: 3,
    amenities: ['WiFi', 'Leather Seats', 'Climate Control', 'Bottled Water', 'Phone Charger', 'Glass Canopy Roof'],
    images: ['/images/fleet/lucio.jpg'],
    category: 'Electric',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'James Richardson',
    role: 'CEO, TechCorp Inc.',
    content:
      'FIRST CLASS LIMO consistently delivers exceptional service. Their chauffeurs are professional, punctual, and discreet. My go-to for all corporate travel.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Sarah & Michael Thompson',
    role: 'Wedding Clients',
    content:
      'They made our wedding day absolutely perfect. The vehicle was immaculate and the chauffeur was incredibly attentive. Highly recommended!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Amanda Chen',
    role: 'Frequent Traveler',
    content:
      'Airport transfers have never been so stress-free. Flight tracking, on-time pickup, and luxurious comfort every single time.',
    rating: 5,
  },
]

export const SERVICE_AREAS = [
  'Greater Montreal',
  'Montréal–Trudeau Airport (YUL)',
  'Laval',
  'Longueuil',
  'Brossard',
  'Saint-Lambert',
  'Westmount',
  'Mont-Royal',
  'Dorval',
  'Saint-Hubert Airport',
]

export const WHY_CHOOSE_US = [
  {
    icon: 'UserCheck',
    title: 'Professional Chauffeurs',
    description: 'Background-checked, licensed, and trained for the highest level of service.',
  },
  {
    icon: 'Car',
    title: 'Luxury Fleet',
    description: 'Meticulously maintained vehicles — always spotless, always premium.',
  },
  {
    icon: 'Clock',
    title: '24/7 Availability',
    description: 'We never sleep. Book any time, day or night, 365 days a year.',
  },
  {
    icon: 'DollarSign',
    title: 'Competitive Rates',
    description: 'Luxury transportation at transparent, flat-rate pricing. No surprises.',
  },
  {
    icon: 'Shield',
    title: 'Fully Insured',
    description: 'Fully licensed and insured for your complete peace of mind.',
  },
  {
    icon: 'Star',
    title: 'First Class Experience',
    description: 'Every detail curated — from the route to the in-car amenities.',
  },
]

export const BLOG_IMAGES = {
  nightlife: ['Upstairs.jpg', 'Club.jpg', 'Bar.jpg', 'Brasserie.jpg', 'Brutopia.jpg'],
  restaurants: ['Joe.jpg', 'Toque.jpg', 'Elena.jpg', 'Maison.jpg', 'Damas.jpg'],
  hotels: ['Ritz-Carlton.jpg', 'Four.jpg', 'William.jpg', 'Fairmont.jpg', 'Nelligan.jpg'],
  airports: ['YUL.jpg', 'YHU.jpg'],
}

export const COMPANY_INFO = {
  name: 'FIRST CLASS LIMO',
  legalName: '15820715 Canada Inc.',
  tagline: 'LUXURY IN MOTION',
  phone: '+1(450)-712-6972',
  email: 'info@thcfirstclasslimo.ca',
  whatsapp: '14507126972',
  hours: 'Available 24/7',
  established: 2015,
  description:
    'First Class Limo was founded in Montreal with a mission to deliver reliable, high-end transportation services tailored to both corporate and private clients. What began as a small chauffeur service has grown into a trusted luxury transportation provider, known for professionalism, punctuality, and exceptional customer care. Today, First Class Limo continues to serve the Greater Montreal area with a modern fleet and a commitment to excellence in every ride.',
}
