import { ordersData } from "@/lib/data/orders";
import { Order } from "@/lib/types/order";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const orderApi = {
  getAll: async (): Promise<Order[]> => {
    return ordersData;
  },
};