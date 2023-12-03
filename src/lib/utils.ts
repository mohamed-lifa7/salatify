import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const convertToLink = (value1: string, value2?: string) => {
  return `${value1}${value2 && `&country=${value2}`}}`;
};
