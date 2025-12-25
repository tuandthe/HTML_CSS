import { Order } from "@/lib/types/order";

export const ordersData: Order[] = [
  {
    id: "ORD-001",
    date: new Date("Jan 15, 2024"),
    status: "Processing",
    items: [
      {
        id: "ITEM-001",
        quantity: 1,
        price: 99.99,
        productId: "PROD-001",
        product: {
          id: "PROD-001",
          name: "Wireless Headphones",
        },
      },
      {
        id: "ITEM-002",
        quantity: 2,
        price: 24.99,
        productId: "PROD-002",
        product: {
          id: "PROD-002",
          name: "USB-C Charging Cable",
        },
      },
    ],
    total: 149.97,
    createdAt: new Date("Jan 15, 2024"),
    updatedAt: new Date("Jan 15, 2024"),
  },
  {
    id: "ORD-002",
    date: new Date("Jan 10, 2024"),
    status: "Completed",
    items: [
      {
        id: "ITEM-003",
        quantity: 1,
        price: 399.99,
        productId: "PROD-003",
        product: {
          id: "PROD-003",
          name: "Smart Watch Series 8",
        },
      },
    ],
    total: 399.99,
    createdAt: new Date("Jan 10, 2024"),
    updatedAt: new Date("Jan 10, 2024"),
  },
  {
    id: "ORD-003",
    date: new Date("Jan 5, 2024"),
    status: "Completed",
    items: [
      {
        id: "ITEM-004",
        quantity: 3,
        price: 14.99,
        productId: "PROD-004",
        product: {
          id: "PROD-004",
          name: "Bluetooth Speaker",
        },
      },
      {
        id: "ITEM-005",
        quantity: 1,
        price: 9.99,
        productId: "PROD-005",
        product: {
          id: "PROD-005",
          name: "Wireless Mouse",
        },
      },
    ],
    total: 44.98,
    createdAt: new Date("Jan 5, 2024"),
    updatedAt: new Date("Jan 5, 2024"),
  },
  {
    id: "ORD-004",
    date: new Date("Dec 28, 2023"),
    status: "Cancelled",
    items: [
      {
        id: "ITEM-006",
        quantity: 1,
        price: 29.99,
        productId: "PROD-006",
        product: {
          id: "PROD-006",
          name: "Portable Charger",
        },
      },
    ],
    total: 29.99,
    createdAt: new Date("Dec 28, 2023"),
    updatedAt: new Date("Dec 28, 2023"),
  },
  {
    id: "ORD-005",
    date: new Date("Dec 20, 2023"),
    status: "Completed",
    items: [
      {
        id: "ITEM-007",
        quantity: 2,
        price: 19.99,
        productId: "PROD-007",
        product: {
          id: "PROD-007",
          name: "Gaming Keyboard",
        },
      },
      {
        id: "ITEM-008",
        quantity: 1,
        price: 9.99,
        productId: "PROD-008",
        product: {
          id: "PROD-008",
          name: "HDMI Cable",
        },
      },
    ],
    total: 49.99,
    createdAt: new Date("Dec 20, 2023"),
    updatedAt: new Date("Dec 20, 2023"),
  },
];
