export type TicketStatus = 'Open' | 'Waiting for Customer' | 'Resolved' | 'Closed';
export type TicketPriority = 'High' | 'Medium' | 'Low';

export interface Ticket {
  id: string; // TKT-001
  subject: string;
  category: string;
  status: TicketStatus;
  priority: TicketPriority;
  orderId?: string; 
  createdDate: string;
  updatedDate: string;
  messagesCount: number;
}