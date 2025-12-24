export type orderStatus = "Processing" | "Completed" | "Cancelled";

export interface Order {
  id: string;
  date: Date;
  status: orderStatus;
  items: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}
