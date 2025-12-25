// src/lib/utils/order.utils.ts
import { Order } from "@/lib/types/order";

export const getOrderSummaryString = (items: Order["items"]) => {
  if (items.length === 0) return "No items";
  if (items.length === 1) {
    return items[0].product.name;
  }
  return `${items[0].product.name} + ${items.length - 1} more item${
    items.length - 1 > 1 ? "s" : ""
  }`;
};
