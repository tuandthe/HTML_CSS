export type TicketStatus =
  | "Open"
  | "Waiting for Customer"
  | "Resolved"
  | "Closed";
export type TicketPriority =
  | "High Priority"
  | "Medium Priority"
  | "Low Priority";

export const CATEGORIES_LIST = [
  "Payments",
  "Refunds",
  "Order Tracking",
  "Technical",
  "General",
] as const;

export type TicketCategory = (typeof CATEGORIES_LIST)[number];

export interface Ticket {
  id: string;
  subject: string;
  message: string;
  category?: TicketCategory;
  status: TicketStatus;
  priority: TicketPriority;
  orderId?: string;
  createdDate: string;
  updatedDate: string;
  messagesCount: number;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: string;
  attachment?: string;
}

export interface CreateTicketDTO {
  subject: string;
  category?: TicketCategory;
  message: string;
  priority: TicketPriority;
  orderId?: string;
}
