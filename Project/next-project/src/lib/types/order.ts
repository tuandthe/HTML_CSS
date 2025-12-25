export type orderStatus = "Processing" | "Completed" | "Cancelled";

export enum orderStatusWithAll {
  All = "All",
  Processing = "Processing",
  Completed = "Completed",
  Cancelled = "Cancelled",
}
export interface Product {
  id: string;
  name: string;
}

export interface OrderItem {
  id: string;
  quantity: number;
  price: number;
  productId: string;
  product: Product;
}

export interface Order {
  id: string;
  date: Date;
  status: orderStatus;
  total: number;
  createdAt: Date;
  updatedAt: Date;

  items: OrderItem[];
}
