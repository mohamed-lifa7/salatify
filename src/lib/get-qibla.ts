import { type QiblaProps } from "@/types";
import { loadGeolocation } from "./get-prayer-times";

export const getQibla = async () => {
  const geolocation = await loadGeolocation();
  try {
    const res = await fetch(
      `http://api.aladhan.com/v1/qibla/${geolocation.latitude}/${geolocation.longitude}`,
    );
    const response = (await res.json()) as QiblaProps;
    const data = response.data;
    return data;
  } catch {
    throw new Error("Error fetching Qibla direction");
  }
};
