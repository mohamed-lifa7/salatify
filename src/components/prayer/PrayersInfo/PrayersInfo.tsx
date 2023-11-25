// @ts-nocheck
import { Suspense } from "react";
import type { PrayersInfoProps } from "@/types";
import Image from "next/image";

export default function PrayersInfo({
  prayers,
  firstUpcomingPrayer,
  geolocation,
  data,
  date,
  locale,
}: PrayersInfoProps) {
  return (
    <div>
      <Image
        src={`https://static.abstractapi.com/country-flags/${geolocation.country}_flag.svg`}
        width={100}
        height={100}
        alt={`${geolocation.country_name} Flag`}
        title={`${geolocation.country_name} Flag`}
        className="rounded"
      />
      <div className="flex w-full items-start justify-between">
        <table className="text-md w-full md:text-xl">
          <tbody className="table-cell">
            <tr>
              <td className="capitalize after:mx-1 after:content-[':']">
                {data.praying?.location}
              </td>
              <td>{geolocation.city}</td>
            </tr>
            <tr>
              <td className="capitalize after:mx-1 after:content-[':']">
                {data.praying?.time}
              </td>
              <td>
                <time
                  dateTime={date.toLocaleTimeString("en", {
                    hour12: false,
                    timeZone: geolocation.timezone,
                  })}
                  dir="ltr"
                >
                  <Suspense fallback={null}>
                    {date.toLocaleTimeString("en", {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      timeZone: geolocation.timezone,
                    })}
                  </Suspense>
                </time>
              </td>
            </tr>
            <tr>
              <td className="capitalize after:mx-1 after:content-[':']">
                {data.praying?.date}
              </td>
              <td>
                <Suspense fallback={null}>
                  {new Intl.DateTimeFormat(locale, {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    timeZone: geolocation.timezone,
                  }).format(date)}
                </Suspense>
              </td>
            </tr>
            <tr>
              <td className="capitalize after:mx-1 after:content-[':']">
                {data.praying?.hijri}
              </td>
              <td>
                {new Intl.DateTimeFormat(`${locale}-TN-u-ca-islamic-umalqura`, {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  timeZone: geolocation.timezone,
                }).format(date)}
              </td>
            </tr>
            <tr>
              <td className="capitalize after:mx-1 after:content-[':']">
                {data.praying?.upcomingPrayer}
              </td>
              <td>
                {firstUpcomingPrayer > 0
                  ? prayers[firstUpcomingPrayer].name
                  : data.prayers?.fajr}
              </td>
            </tr>
            <tr>
              <td className="capitalize after:mx-1 after:content-[':']">
                {data.praying?.line}
              </td>
              <td>
                {geolocation.latitude.toFixed(4)}
                {", "}
                {geolocation.longitude.toFixed(4)}
              </td>
            </tr>
            <tr>
              <td className="capitalize after:mx-1 after:content-[':']">
                {data.praying?.timezone}
              </td>
              <td>{geolocation.timezone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
