import type { AllahNamesProps } from "@/types";

export async function getAllahNames() {
  try {
    const res = await fetch(`http://api.aladhan.com/v1/asmaAlHusna`);
    const data = res.json() as Promise<AllahNamesProps>;
    return data;
  } catch {
    throw new Error("Error fetching allah names");
  }
}
