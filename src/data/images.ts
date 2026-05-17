/** Original image URLs from i-tatari.com (Figma Make bundle) */
export const images = {
  logo: '/logo-header.png',
  logoFull: '/logo.png',
  og: 'https://www.i-tatari.com/og-image.png',
  heroBg:
    'https://images.unsplash.com/photo-1768069794857-9306ac167c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMHNreWxpbmUlMjBsdXh0cnl8ZW58MXx8fHwxNzcxNzUxODk2fDA&ixlib=rb-4.1.0&q=80&w=1920&utm_source=figma&utm_medium=referral',
  trustHandshake:
    'https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBidXNpbmVzcyUyMHRydXN0fGVufDF8fHx8MTc3MTc1MTg5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  figmaTexture: 'https://www.i-tatari.com/_assets/v11/2d9284345e259befac4593f32ebc0d8dc09374a4.png',
} as const;

export const cityImages: Record<string, string> = {
  'New Administrative Capital':
    'https://images.unsplash.com/photo-1669995038383-6e5b2e5284db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzcxNzU0NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'New Alamein':
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGx1eHVyeSUyMHJlc29ydHxlbnwxfHx8fDE3NDAzMzQ0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  Dubai:
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGx1eHVyeXxlbnwxfHx8fDE3NDAzMzQ0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'Sheikh Zayed':
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGFyZWF8ZW58MXx8fHwxNzQwMzM0NDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  Hurghada:
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzZWElMjBiZWFjaHxlbnwxfHx8fDE3NDAzMzQ0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'Riyadh & Jeddah': '/images/locations/riyadh.jpg',
};

export const propertyImages: Record<string, string> = {
  'West Wind — Medical Unit': cityImages['Sheikh Zayed'],
  'West Wind — Admin Office':
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NDAzMzQ0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'West Wind — Retail Unit':
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGFwYXJ0bWVudCUyMHZpZXd8ZW58MXx8fHwxNzQwMzM0NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'Dubai — Premium Apartment': cityImages['Dubai'],
  'Riyadh — Wohn & Investment': cityImages['Riyadh & Jeddah'],
};

export const locationImages: Record<string, string> = {
  Dubai:
    'https://images.unsplash.com/photo-1573396822030-943d331b0f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyME1hcmluYSUyMHRvd2Vyc3xlbnwxfHx8fDE3NzE3NTE4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'New Cairo':
    'https://images.unsplash.com/photo-1758546705524-2fe862bf9f76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBDYWlybyUyMEVneXB0JTIwbW9kZXJufGVufDF8fHx8MTc3MTc1MTg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  Alamein:
    'https://images.unsplash.com/photo-1771143912427-1e9fb37f7fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBFZ3lwdGlhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzE3NTE4OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'Sheikh Zayed':
    'https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGludmVzdG1lbnR8ZW58MXx8fHwxNzcxNjUyNjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  Riyadh: '/images/locations/riyadh.jpg',
};
