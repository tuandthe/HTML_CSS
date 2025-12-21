import { Ticket, CreateTicketDTO, Message } from "@/lib/types/ticket";
import { ticketsData, mockTicketMessages } from "@/lib/data/tickets";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let mockDb = [...ticketsData];
const mockMessagesDb = { ...mockTicketMessages };

export const ticketApi = {
  // 1. Lấy danh sách Ticket
  getAll: async (): Promise<Ticket[]> => {
    return mockDb;
  },

  create: async (data: CreateTicketDTO): Promise<Ticket> => {
    const newTicket: Ticket = {
      id: `TKT-${Math.floor(Math.random() * 10000)}`, 
      subject: data.subject,
      category: data.category,
      message: data.message,
      status: "Open",
      priority: data.priority,
      orderId: data.orderId,
      createdDate: new Date().toLocaleString(),
      updatedDate: new Date().toLocaleString(),
      messagesCount: 0,
    };
    
    mockDb = [newTicket, ...mockDb];
    return newTicket;
  },

  getMessages: async (ticketId: string): Promise<Message[]> => {
    return mockMessagesDb[ticketId] || [];
  }
};