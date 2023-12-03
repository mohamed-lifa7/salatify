interface Name {
  common: string;
  official: string;
  nativeName: {
    eng: {
      official: string;
      common: string;
    };
  };
}

interface Currency {
  name: string;
  symbol: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Demonyms {
  eng: {
    f: string;
    m: string;
  };
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface FlagUrls {
  png: string;
  svg: string;
}

interface CoatOfArmsUrls {
  png: string;
  svg: string;
}

interface Car {
  signs: string[];
  side: string;
}

type LanguageTranslations = Record<
  string,
  {
    official: string;
    common: string;
  }
>;

export interface Location {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Record<string, Currency>;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  translations: LanguageTranslations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Record<
    string,
    {
      f: string;
      m: string;
    }
  >;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: FlagUrls;
  coatOfArms: CoatOfArmsUrls;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}
