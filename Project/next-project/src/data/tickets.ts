import { Ticket } from '@/types/ticket';

export const ticketsData: Ticket[] = [
  {
    id: 'TKT-001',
    subject: 'Order delivery delay - Need urgent assistance',
    category: 'Order Tracking',
    status: 'Open',
    priority: 'High',
    orderId: 'ORD-12345',
    createdDate: 'Jan 15, 2024, 05:30 PM',
    updatedDate: 'Jan 16, 2024, 09:20 PM',
    messagesCount: 3
  },
  {
    id: 'TKT-002',
    subject: 'Payment failed but amount was deducted',
    category: 'Payments',
    status: 'Waiting for Customer',
    priority: 'Medium',
    orderId: 'ORD-12344',
    createdDate: 'Jan 14, 2024, 04:15 PM',
    updatedDate: 'Jan 15, 2024, 11:45 PM',
    messagesCount: 5
  },
  {
    id: 'TKT-003',
    subject: 'How to track my order status?',
    category: 'General',
    status: 'Resolved',
    priority: 'Low',
    orderId: undefined,
    createdDate: 'Jan 12, 2024, 10:22 PM',
    updatedDate: 'Jan 13, 2024, 06:30 PM',
    messagesCount: 2
  },
  {
    id: 'TKT-004',
    subject: 'Request refund for damaged product',
    category: 'Refunds',
    status: 'Closed',
    priority: 'Medium',
    orderId: 'ORD-12343',
    createdDate: 'Jan 10, 2024, 08:45 PM',
    updatedDate: 'Jan 14, 2024, 05:15 PM',
    messagesCount: 8
  },
  {
    id: 'TKT-005',
    subject: 'Website not loading properly on mobile',
    category: 'Technical',
    status: 'Open',
    priority: 'Low',
    orderId: undefined,
    createdDate: 'Jan 16, 2024, 03:30 PM',
    updatedDate: 'Jan 16, 2024, 03:30 PM',
    messagesCount: 1
  }
];

// Danh mục để tạo filter tabs
export const ticketCategories = [
  "All Categories",
  ...Array.from(new Set(ticketsData.map((p) => p.category))),
];