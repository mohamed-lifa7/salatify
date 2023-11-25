"use client";
import type { PrayerCardProps } from "@/types";
import { Icons } from "../icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useCountdown } from "@/hooks/use-countdown";
import { format } from "date-fns";
import { Badge } from "../ui/badge";

const PrayerCard = (data: PrayerCardProps) => {
  const PrayerIcon = Icons[data.icon];
  const prayerTime = new Date(
    `${format(new Date(), "yyyy-MM-dd")} ${data.time}`,
  );

  const countdown = useCountdown(prayerTime);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>{data.time}</CardDescription>
        </CardHeader>
        <CardContent className="grid place-content-center">
          <PrayerIcon className="h-8 w-8 text-primary" />
        </CardContent>
        <CardFooter>
          {countdown !== null && (
            <Badge>
              <span>{countdown} minutes</span>
            </Badge>
          )}
          {data.isNext && (
            <Badge>
              <span>{data.name} is next</span>
            </Badge>
          )}
        </CardFooter>
      </Card>
    </>
  );
};

export default PrayerCard;
