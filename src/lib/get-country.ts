import type { Location } from "@/types/countries";

export async function getCountry(name: string) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${name}`);
  try {
    const countries = (await res.json()) as Location;
    return countries;
  } catch {
    throw new Error("Error fetching countries");
  }
}
