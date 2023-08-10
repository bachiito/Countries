export const Regions = [
  'All',
  'Africa',
  'America',
  'Asia',
  'Europe',
  'Oceania',
] as const;

export type Region = (typeof Regions)[number];
