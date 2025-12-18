import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    processing: "bg-green-700 text-white",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-gray-100 text-gray-600",
    shipped: "bg-blue-100 text-blue-700",
  };
  return colors[status] || "bg-gray-100 text-gray-600";
}
