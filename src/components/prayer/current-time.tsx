"use client";
import { useEffect, useState, useRef } from "react";

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(() => new Date());
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer.current);
  }, []);
  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  return (
    <span className="text-2xl font-bold text-primary" suppressHydrationWarning>
      {formattedTime}
    </span>
  );
};
