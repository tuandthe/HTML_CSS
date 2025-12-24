import { Order } from "@/lib/types/order";

export const ordersData: Order[] = [
  {
    id: "ORD-001",
    date: new Date("Jan 15, 2024"),
    status: "Processing",
    items: "Wireless Headphones + 2 more items",
    total: 149.97,
    createdAt: new Date("Jan 15, 2024"),
    updatedAt: new Date("Jan 15, 2024"),
  },
  {
    id: "ORD-002",
    date: new Date("Jan 10, 2024"),
    status: "Completed",
    items: "Smart Watch Series 8",
    total: 399.99,
    createdAt: new Date("Jan 10, 2024"),
    updatedAt: new Date("Jan 10, 2024"),
  },
  {
    id: "ORD-003",
    date: new Date("Jan 5, 2024"),
    status: "Completed",
    items: "Coffee Mug Set + 1 more item",
    total: 44.98,
    createdAt: new Date("Jan 5, 2024"),
    updatedAt: new Date("Jan 5, 2024"),
  },
  {
    id: "ORD-004",
    date: new Date("Dec 28, 2023"),
    status: "Cancelled",
    items: "Portable Charger",
    total: 29.99,
    createdAt: new Date("Dec 28, 2023"),
    updatedAt: new Date("Dec 28, 2023"),
  },
  {
    id: "ORD-005",
    date: new Date("Dec 20, 2023"),
    status: "Completed",
    items: "Leather Wallet",
    total: 49.99,
    createdAt: new Date("Dec 20, 2023"),
    updatedAt: new Date("Dec 20, 2023"),
  },
];
