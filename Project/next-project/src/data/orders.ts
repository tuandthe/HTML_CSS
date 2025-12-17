import { Order } from "@/types/order";

export const ordersData: Order[] = [
  {
    id: "ORD-001",
    date: "Jan 15, 2024",
    status: "Processing",
    items: "Wireless Headphones + 2 more items",
    total: "$149.97",
  },
  {
    id: "ORD-002",
    date: "Jan 10, 2024",
    status: "Completed",
    items: "Smart Watch Series 8",
    total: "$399.99",
  },
  {
    id: "ORD-003",
    date: "Jan 5, 2024",
    status: "Completed",
    items: "Coffee Mug Set + 1 more item",
    total: "$44.98",
  },
  {
    id: "ORD-004",
    date: "Dec 28, 2023",
    status: "Cancelled",
    items: "Portable Charger",
    total: "$29.99",
  },
  {
    id: "ORD-005",
    date: "Dec 20, 2023",
    status: "Completed",
    items: "Leather Wallet",
    total: "$49.99",
  },
];
