"use client";
import { useState, useEffect } from "react";
import { differenceInSeconds } from "date-fns";
export const useCountdown = (prayerTime: Date): number | null => {
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const remainingTimeInSeconds = differenceInSeconds(
        prayerTime,
        currentTime,
      );

      const remainingMinutes = Math.floor(remainingTimeInSeconds / 60);

      if (remainingMinutes <= 15) {
        setCountdown(remainingMinutes);
      } else {
        setCountdown(null);
      }

      if (currentTime > prayerTime) {
        setCountdown(null);
        clearInterval(intervalId);
      }
    }, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, [prayerTime]);

  return countdown;
};
