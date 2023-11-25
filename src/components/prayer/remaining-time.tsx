"use client";

import React, { useState, useEffect } from "react";

interface RemainingTimeProps {
  remainingTime: {
    hours: number;
    minutes: number;
    seconds: number;
  };
  nextPrayer: string;
}

const RemainingTimeComponent: React.FC<RemainingTimeProps> = ({
  remainingTime,
  nextPrayer,
}) => {
  const [time, setTime] = useState(remainingTime);
  const [isTimeZero, setIsTimeZero] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
        clearInterval(intervalId);
        setIsTimeZero(true);
      } else {
        const newTime = { ...time };

        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          if (newTime.minutes > 0) {
            newTime.minutes--;
            newTime.seconds = 59;
          } else {
            if (newTime.hours > 0) {
              newTime.hours--;
              newTime.minutes = 59;
              newTime.seconds = 59;
            }
          }
        }

        setTime(newTime);
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [time]);

  return (
    <div>
      <h3 className="text-3xl font-bold">{nextPrayer}</h3>
      <p className="text-muted-foreground">{nextPrayer} Remaining time</p>
      <time className={`text-4xl ${isTimeZero ? "text-red-500" : ""}`}>
        {`${time.hours}:${time.minutes}:${time.seconds}`}
      </time>
      {isTimeZero && <p>Time has reached zero!</p>}
    </div>
  );
};

export default RemainingTimeComponent;
