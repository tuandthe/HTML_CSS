export type orderStatus = "Processing" | "Completed" | "Cancelled";

export interface Order {
  id: string;
  date: string;
  status: orderStatus;
  items: string;
  total: string;
}
