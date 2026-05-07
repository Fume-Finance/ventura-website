import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Ventura Fund Services",
  shortName: "Ventura",
  tagline: "Efficiency. Precision. Results.",
  email: "info@venturafs.com",
  phones: ["(646) 416-9596", "(310) 205-2157"],
  calendly: "mailto:info@venturafs.com?subject=Talk%20to%20Ventura%20Fund%20Services",
  offices: [
    {
      city: "Manhattan, NY",
      lines: ["1120 Avenue of the Americas", "4th Floor", "New York, NY 10036"],
    },
    {
      city: "Iselin, NJ",
      lines: ["Metropark", "33 Wood Avenue South, Suite 600", "Iselin, NJ 08830"],
    },
    {
      city: "Los Angeles, CA",
      lines: ["4221 Wilshire Blvd.", "Suite 1702", "Los Angeles, CA 90010"],
    },
  ],
};
