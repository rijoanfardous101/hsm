import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colors = [
  "hover:bg-[#FFCE00]",
  "hover:bg-[#ef4444]",
  "hover:bg-[#2D8CBB]",
];
