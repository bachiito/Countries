export const regions = [
  'All',
  'Africa',
  'America',
  'Asia',
  'Europe',
  'Oceania',
] as const;

export type Region = (typeof regions)[number];

export const fallBackRegion = regions[0];
