"use client";
import { getTimingsByCity, loadGeolocation } from "@/lib/get-prayer-times";
import PrayerCard from "./prayer-card";
import type { GeolocationProps, PrayerCardProps, TimezoneProps } from "@/types";
import PrayerInfoPanel from "./prayer-info-panel";
import { Suspense, useEffect, useState } from "react";
import { toast } from "../ui/use-toast";
import { Loader } from "lucide-react";

export default function PrayersSection() {
  const [geolocation, setGeolocation] = useState<GeolocationProps | null>(null);
  const [data, setData] = useState<TimezoneProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const geo = await loadGeolocation();
        setGeolocation(geo);

        const prayerData = await getTimingsByCity(geo);
        setData(prayerData);
        setIsLoading(false);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Error fetching prayer data try again",
        });
        setIsLoading(false);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, []);
  if (!geolocation || !data)
    return (
      <section className="container grid place-content-center space-y-4">
        <p className="flex items-center">
          <span>Loading</span> <Loader className="mx-4 h-4 w-4 animate-spin" />
        </p>
      </section>
    );
  const FajrTime = new Date(
    `${new Date().toDateString()} ${data.timings.Fajr}`,
  );

  const fajrTimeInSeconds = FajrTime.getTime();
  const sunriseTime = new Date(
    `${new Date().toDateString()} ${data.timings.Sunrise}`,
  );
  const sunriseTimeInSeconds = sunriseTime.getTime();

  const dhuhrTime = new Date(
    `${new Date().toDateString()} ${data.timings.Dhuhr}`,
  );
  const dhuhrTimeInSeconds = dhuhrTime.getTime();

  const asrTime = new Date(`${new Date().toDateString()} ${data.timings.Asr}`);
  const asrTimeInSeconds = asrTime.getTime();

  const maghribTime = new Date(
    `${new Date().toDateString()} ${data.timings.Maghrib}`,
  );
  const maghribTimeInSeconds = maghribTime.getTime();

  const ishaTime = new Date(
    `${new Date().toDateString()} ${data.timings.Isha}`,
  );
  const ishaTimeInSeconds = ishaTime.getTime();

  const date = new Date();
  const currentTimeInSeconds = date.getTime();

  const prayers: PrayerCardProps[] = [
    {
      time: data.timings.Fajr,
      icon: "fajr",
      name: "Fajr",
      isCurrent:
        currentTimeInSeconds >= fajrTimeInSeconds &&
        currentTimeInSeconds < sunriseTimeInSeconds,
      isNext: currentTimeInSeconds < fajrTimeInSeconds,
    },
    {
      time: data.timings.Sunrise,
      icon: "sunrise",
      name: "Sunrise",
      isCurrent:
        currentTimeInSeconds >= sunriseTimeInSeconds &&
        currentTimeInSeconds < dhuhrTimeInSeconds,
      isNext:
        currentTimeInSeconds < sunriseTimeInSeconds &&
        currentTimeInSeconds > fajrTimeInSeconds,
    },
    {
      time: data.timings.Dhuhr,
      icon: "dhuhr",
      name: "Dhuhr",
      isCurrent:
        currentTimeInSeconds >= dhuhrTimeInSeconds &&
        currentTimeInSeconds < asrTimeInSeconds,
      isNext:
        currentTimeInSeconds < dhuhrTimeInSeconds &&
        currentTimeInSeconds > sunriseTimeInSeconds,
    },
    {
      time: data.timings.Asr,
      icon: "asr",
      name: "Asr",
      isCurrent:
        currentTimeInSeconds >= asrTimeInSeconds &&
        currentTimeInSeconds < maghribTimeInSeconds,
      isNext:
        currentTimeInSeconds < asrTimeInSeconds &&
        currentTimeInSeconds > dhuhrTimeInSeconds,
    },
    {
      time: data.timings.Maghrib,
      icon: "maghrib",
      name: "Maghrib",
      isCurrent:
        currentTimeInSeconds >= maghribTimeInSeconds &&
        currentTimeInSeconds < ishaTimeInSeconds,
      isNext:
        currentTimeInSeconds < maghribTimeInSeconds &&
        currentTimeInSeconds > asrTimeInSeconds,
    },
    {
      time: data.timings.Isha,
      icon: "isha",
      name: "Isha",
      isCurrent:
        currentTimeInSeconds >= ishaTimeInSeconds &&
        currentTimeInSeconds < fajrTimeInSeconds,
      isNext:
        currentTimeInSeconds < ishaTimeInSeconds &&
        currentTimeInSeconds > maghribTimeInSeconds,
    },
  ];
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="container space-y-4">
        <PrayerInfoPanel geolocation={geolocation} timings={data} />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {prayers.map((prayer) => (
            <PrayerCard key={prayer.name} {...prayer} />
          ))}
        </div>
      </section>
    </Suspense>
  );
}
