import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const convertToLink = (value1: string, value2?: string) => {
  return `${value1.split(" ").join("%20")}${
    value2 && `&country=${value2.split(" ").join("%20")}`
  }}`;
};
