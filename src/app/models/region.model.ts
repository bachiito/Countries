export const regions = [
  'all',
  'Africa',
  'America',
  'Asia',
  'Europe',
  'Oceania',
] as const;

export type Region = (typeof regions)[number];

export const fallbackRegion = regions[0];
