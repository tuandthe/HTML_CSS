export type status = "Processing" | "Completed" | "Cancelled";

export interface Order {
  id: string;
  date: string;
  status: status;
  items: string;
  total: string;
}