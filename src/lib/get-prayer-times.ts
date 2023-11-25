import type { GeolocationProps, TimezoneProps } from "@/types";
import { convertToLink } from "./utils";

interface PrayerJsonRes {
  code: number;
  status: string;
  data: TimezoneProps;
}

interface CalendarPrayerJsonRes {
  code: number;
  status: string;
  data: TimezoneProps[];
}

export async function loadGeolocation() {
  const res = await fetch("https://api.ipify.org");
  const ip = await res.text();
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json`);
    const data = (await response.json()) as GeolocationProps;
    return data;
  } catch {
    throw new Error("Error fetching geolocation");
  }
}

export async function getTimingsByCity(geolocation: GeolocationProps) {
  try {
    const res = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${convertToLink(
        geolocation.city,
        geolocation.country_name,
      )}`,
    );
    const response = (await res.json()) as PrayerJsonRes;
    const data = response.data;
    return data;
  } catch {
    throw new Error("Error fetching timings");
  }
}

export async function getCalendarByCity(geolocation: GeolocationProps) {
  try {
    const res = await fetch(
      `http://api.aladhan.com/v1/calendarByCity?city=${convertToLink(
        geolocation.city,
        geolocation.country_name,
      )}`,
    );

    const response = (await res.json()) as CalendarPrayerJsonRes;
    const data = response.data;
    return data;
  } catch {
    throw new Error("Error fetching calendar");
  }
}
