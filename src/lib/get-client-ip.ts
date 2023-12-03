import type { GeolocationProps } from "@/types";

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
