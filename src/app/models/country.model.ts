export interface Country {
  altSpellings?: string[];
  area?: number;
  borders: string[];
  capital: string[];
  capitalInfo?: CapitalInfo;
  car?: Car;
  cca2?: string;
  cca3?: string;
  ccn3?: string;
  cioc?: string;
  coatOfArms?: CoatOfArms;
  continents?: string[];
  currencies: Record<string, Currency>[];
  demonyms?: Record<string, Demonyms>;
  fifa?: string;
  flag?: string;
  flags?: Flags;
  idd?: Idd;
  independent?: boolean;
  landlocked?: boolean;
  languages: Record<string, string>;
  latlng?: number[];
  maps?: Maps;
  name: Name<Translations>;
  population: number;
  postalCode?: PostalCode;
  region: string;
  startOfWeek?: string;
  status?: string;
  subRegion: string;
  timezones?: string[];
  tld: string[];
  translations?: Record<string, Translations>;
  unMember?: boolean;
}

interface CapitalInfo {
  latlng: number[];
}

interface Car {
  side: string;
  signs: string[];
}

interface CoatOfArms {
  png: string;
  svg: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Demonyms {
  f: string;
  m: string;
}

interface Flags extends CoatOfArms {
  alt: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Name<T> extends Translations {
  nativeName: {
    [key: string]: T;
  };
}

interface PostalCode {
  format: string;
  regex: string;
}

interface Translations {
  official: string;
  common: string;
}
