import type { Icons } from "@/components/icons";

export interface PrayerTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

export interface PrayerCardProps {
  name: string;
  time?: string;
  isCurrent: boolean;
  isNext: boolean;
  icon: keyof typeof Icons;
}

export type TimezoneProps = {
  date: {
    gregorian: {
      date: string;
      day: string;
      format: string;
      weekday: {
        en: string;
        number: number;
      };
      month: { number: number; en: string };
      year: string;
    };
    hijri: {
      date: string;
      format: string;
      day: string;
      month: {
        ar: string;
        en: string;
        number: number;
      };
      weekday: { ar: string; en: string };
      year: string;
    };
    readable: string;
    timestamp: string;
  };
  meta: {
    latitude: number;
    longitude: number;
    method: {
      id: number;
      location: {
        latitude: number;
        longitude: number;
      };
      name: string;
    };
    timezone: string;
  };
  timings: Record<string, string>;
};

export type GeolocationProps = {
  ip: string;
  network: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country: string;
  country_name: string;
  country_code: string;
  country_code_iso3: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  country_area: number;
  country_population: number;
  asn: string;
  org: string;
};

export type PrayerItemsProps = {
  prayers: Array<PrayerCardProps>;
  currentTime: string;
  locale?: string;
  geolocation: GeolocationProps;
  data: unknown;
  date: Date;
};

export type PrayersInfoProps = {
  firstUpcomingPrayer: number;
  prayers: Array<PrayerCardProps>;
  currentTime: string;
  locale?: string;
  geolocation: GeolocationProps;
  data: unknown;
  date: Date;
};

export type PrayerCalendarProps = {
  prayers: Array<PrayerCardProps>;
  locale?: string;
  calendar: { data: Array<TimezoneProps> };
  date: Date;
};

export type AllahNamesProps = {
  code: number;
  status: string;
  data: Array<{
    name: string;
    transliteration: string;
    number: number;
    en: {
      meaning: string;
    };
  }>;
};

export type ChapterProps = {
  status: number;
  message: string;
  chapters: Chapter[];
};

type Chapter = {
  id: number;
  chapterNumber: string;
  chapterEnglish: string;
  chapterUrdu: string;
  chapterArabic: string;
  bookSlug: string;
};

interface Hadith {
  id: number;
  hadithNumber: string;
  englishNarrator: string;
  hadithEnglish: string;
  hadithUrdu: string;
  urduNarrator: string;
  hadithArabic: string;
  headingArabic: string | null;
  headingUrdu: string | null;
  headingEnglish: string | null;
  chapterId: string;
  bookSlug: string;
}

export interface HadithsProps {
  status: number;
  message: string;
  hadiths: {
    current_page: number;
    data: Hadith[];
  };
}

export interface QiblaProps {
  code: number;
  status: string;
  data: {
    latitude: number;
    longitude: number;
    direction: number;
  };
}
