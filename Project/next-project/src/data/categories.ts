import { Category } from "@/types";

export const mockCategories: Category[] = [
  { id: "1", name: "Điện thoại", slug: "dien-thoai", productCount: 25 },
  { id: "2", name: "Laptop", slug: "laptop", productCount: 18 },
  { id: "3", name: "Tablet", slug: "tablet", productCount: 12 },
  { id: "4", name: "Phụ kiện", slug: "phu-kien", productCount: 45 },
  {
    id: "5",
    name: "Đồng hồ thông minh",
    slug: "dong-ho-thong-minh",
    productCount: 8,
  },
];

// data/dashboard.ts
import { DashboardStats } from "@/types";
import { mockOrders } from "./orders";

export const mockDashboardStats: DashboardStats = {
  totalUsers: 1234,
  totalOrders: 567,
  totalRevenue: 2450000000,
  totalProducts: 89,
  recentOrders: mockOrders.slice(0, 5),
  chartData: [
    { name: "T1", value: 4000, revenue: 2400000000, orders: 120 },
    { name: "T2", value: 3000, revenue: 1800000000, orders: 98 },
    { name: "T3", value: 2000, revenue: 2200000000, orders: 115 },
    { name: "T4", value: 2780, revenue: 1900000000, orders: 89 },
    { name: "T5", value: 1890, revenue: 2100000000, orders: 102 },
    { name: "T6", value: 2390, revenue: 2500000000, orders: 130 },
  ],
};
