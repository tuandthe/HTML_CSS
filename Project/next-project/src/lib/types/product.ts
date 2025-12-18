import { LucideIcon } from "lucide-react";

export type stockStatus = "In Stock" | "Out of Stock";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  stockStatus: stockStatus;
  dateAdded: string;
  discountLabel?: string;
}
export interface StatItem {
  label: string;
  value: string | number;
  icon: LucideIcon;
  href?: string;
}
