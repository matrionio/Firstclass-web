export const SITE_URL = 'https://firstclasslimoservice.ca'

export const SERVICE_LANDING_META = {
  'airport-transfers': {
    title: 'Airport Transfers in Greater Montreal',
    description:
      'Private airport transportation in Greater Montreal with flight tracking, meet-and-greet service, and a premium published fleet.',
    serviceType: 'Airport transfers',
    vehicleIds: ['audi-s8', 'cadillac-escalade', 'mercedes-sprinter'],
  },
  'corporate-transportation': {
    title: 'Corporate Transportation in Montreal',
    description:
      'Professional corporate transportation in Greater Montreal for executives, clients, and business events with discreet service.',
    serviceType: 'Corporate transportation',
    vehicleIds: ['audi-s8', 'lincoln-aviator', 'cadillac-escalade'],
  },
  'special-events': {
    title: 'Luxury Transportation for Special Events in Montreal',
    description:
      'Premium chauffeur transportation for weddings, galas, proms, and celebrations across Greater Montreal.',
    serviceType: 'Special event transportation',
    vehicleIds: ['audi-s8', 'cadillac-escalade', 'mercedes-sprinter'],
  },
  'city-tours': {
    title: 'Montreal City Tours & Sightseeing',
    description:
      'Explore Montreal with a professional chauffeur, flexible duration, and customizable sightseeing itineraries.',
    serviceType: 'City tours and sightseeing',
    vehicleIds: ['cadillac-escalade', 'lincoln-navigator', 'mercedes-sprinter'],
  },
  'hourly-service': {
    title: 'Hourly Chauffeur Service in Greater Montreal',
    description:
      'Flexible hourly chauffeur service in Greater Montreal for meetings, shopping, events, and multiple stops.',
    serviceType: 'Hourly chauffeur service',
    vehicleIds: ['audi-s8', 'cadillac-escalade', 'lincoln-navigator'],
  },
  'point-to-point': {
    title: 'Point-to-Point Transfers in Montreal',
    description:
      'Reliable point-to-point private transportation in Greater Montreal with direct routing and transparent flat-rate service.',
    serviceType: 'Point-to-point transfers',
    vehicleIds: ['audi-s8', 'lincoln-aviator', 'cadillac-lyriq'],
  },
} as const

export type ServiceSlug = keyof typeof SERVICE_LANDING_META

export const SERVICE_SLUGS = Object.keys(SERVICE_LANDING_META) as ServiceSlug[]
