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

  return currentTime;
};
