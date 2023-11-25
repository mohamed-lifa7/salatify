import type { GeolocationProps, TimezoneProps } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { CurrentTime } from "../prayer/current-time";

const PrayerInfoPanel = ({
  geolocation,
  timings,
}: {
  geolocation: GeolocationProps;
  timings: TimezoneProps;
}) => {
  return (
    <>
      <Card className="space-y-4">
        <CardHeader className="flex items-center justify-between md:flex-row">
          <CardTitle>{geolocation.city} Prayer times.</CardTitle>
          <CardDescription>{timings.date.readable}</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold ">TimeZone: </span>
              {geolocation.timezone}
            </div>
            <div>
              <span className="font-bold ">Location: </span>
              {`${geolocation.country}, ${geolocation.city}`}
            </div>
          </div>
          <div className="my-8 grid place-content-center">
            <CurrentTime />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default PrayerInfoPanel;
