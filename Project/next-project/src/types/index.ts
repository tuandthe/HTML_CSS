import { LucideIcon } from "lucide-react";

export interface Order {
  id: string;
  date: string;
  status: "Processing" | "Completed" | "Cancelled";
  items: string;
  total: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  icon: LucideIcon; // Lucide icon type
  href?: string;
}

export interface Address {
  id: number;
  type: "Billing" | "Shipping";
  isDefault: boolean;
  firstName: string;
  lastName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}
