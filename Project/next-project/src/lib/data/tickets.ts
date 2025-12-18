import { CATEGORIES_LIST, Ticket } from "@/lib/types/ticket";

export const ticketsData: Ticket[] = [
  {
    id: "TKT-001",
    subject: "Order delivery delay - Need urgent assistance",
    category: "Order Tracking",
    message:
      "I placed an order last week and it was supposed to be delivered 3 days ago. However, I haven't received any updates regarding the shipment. Can you please look into this matter and provide me with an estimated delivery date?",
    status: "Open",
    priority: "High Priority",
    orderId: "ORD-12345",
    createdDate: "Jan 15, 2024, 05:30 PM",
    updatedDate: "Jan 16, 2024, 09:20 PM",
    messagesCount: 3,
  },
  {
    id: "TKT-002",
    subject: "Payment failed but amount was deducted",
    message:
      "I tried to make a payment for my recent order, but the transaction failed. However, I noticed that the amount has been deducted from my bank account. Please assist me in resolving this issue and ensuring that my order is processed.",
    category: "Payments",
    status: "Waiting for Customer",
    priority: "Medium Priority",
    orderId: "ORD-12344",
    createdDate: "Jan 14, 2024, 04:15 PM",
    updatedDate: "Jan 15, 2024, 11:45 PM",
    messagesCount: 5,
  },
  {
    id: "TKT-003",
    subject: "How to track my order status?",
    message:
      "I recently placed an order and would like to know how I can track its status. Could you please provide me with the necessary information or steps to do so?",
    category: "General",
    status: "Resolved",
    priority: "Low Priority",
    orderId: undefined,
    createdDate: "Jan 12, 2024, 10:22 PM",
    updatedDate: "Jan 13, 2024, 06:30 PM",
    messagesCount: 2,
  },
  {
    id: "TKT-004",
    subject: "Request refund for damaged product",
    category: "Refunds",
    message:
      "I received my order yesterday, but unfortunately, the product was damaged upon arrival. I would like to request a refund for the damaged item. Please let me know the process for initiating the refund.",
    status: "Closed",
    priority: "Medium Priority",
    orderId: "ORD-12343",
    createdDate: "Jan 10, 2024, 08:45 PM",
    updatedDate: "Jan 14, 2024, 05:15 PM",
    messagesCount: 8,
  },
  {
    id: "TKT-005",
    subject: "Website not loading properly on mobile",
    category: "Technical",
    message:
      "I am experiencing issues with your website when trying to access it on my mobile device. The pages are not loading correctly, and some features are unresponsive. Please look into this technical issue and provide a solution.",
    status: "Open",
    priority: "Low Priority",
    orderId: undefined,
    createdDate: "Jan 16, 2024, 03:30 PM",
    updatedDate: "Jan 16, 2024, 03:30 PM",
    messagesCount: 1,
  },
];
// data/tickets.ts (Thêm đoạn này vào cuối file)
import { Message } from "@/lib/types/ticket";

export const mockTicketMessages: Record<string, Message[]> = {
  "TKT-001": [
    {
      id: "m1",
      senderId: "user",
      senderName: "You",
      text: "I placed an order last week and it was supposed to be delivered 3 days ago. However, I haven't received any updates regarding the shipment. Can you please look into this matter and provide me with an estimated delivery date?",
      timestamp: "Jan 15, 2024, 05:30 PM",
    },
    {
      id: "m2",
      senderId: "support",
      senderName: "Sarah Johnson",
      text: "Hello! Thank you for contacting us. I apologize for the delay in getting you the tracking information. Let me look into your order right away.",
      timestamp: "Jan 15, 2024, 06:15 PM",
    },
    {
      id: "m3",
      senderId: "support",
      senderName: "Sarah Johnson",
      text: "Good news! I've located your order. It was shipped yesterday and is currently in transit. Your tracking number is TRK123456789. You can track it on our website or directly through the carrier.",
      timestamp: "Jan 15, 2024, 06:25 PM",
      attachment: "tracking_details.pdf",
    },
  ],
  "TKT-002": [
    {
      id: "m1",
      senderId: "user",
      senderName: "You",
      text: "I placed an order last week and it was supposed to be delivered 3 days ago. However, I haven't received any updates regarding the shipment. Can you please look into this matter and provide me with an estimated delivery date?",
      timestamp: "Jan 15, 2024, 05:30 PM",
    },
    {
      id: "m2",
      senderId: "support",
      senderName: "Sarah Johnson",
      text: "Hello! Thank you for contacting us. I apologize for the delay in getting you the tracking information. Let me look into your order right away.",
      timestamp: "Jan 15, 2024, 06:15 PM",
    },
    {
      id: "m3",
      senderId: "support",
      senderName: "Sarah Johnson",
      text: "Good news! I've located your order. It was shipped yesterday and is currently in transit. Your tracking number is TRK123456789. You can track it on our website or directly through the carrier.",
      timestamp: "Jan 15, 2024, 06:25 PM",
      attachment: "tracking_details.pdf",
    },
  ],

  "TKT-003": [
    {
      id: "m1",
      senderId: "user",
      senderName: "You",
      text: "I placed an order last week and it was supposed to be delivered 3 days ago. However, I haven't received any updates regarding the shipment. Can you please look into this matter and provide me with an estimated delivery date?",
      timestamp: "Jan 15, 2024, 05:30 PM",
    },
    {
      id: "m2",
      senderId: "support",
      senderName: "Sarah Johnson",
      text: "Hello! Thank you for contacting us. I apologize for the delay in getting you the tracking information. Let me look into your order right away.",
      timestamp: "Jan 15, 2024, 06:15 PM",
    },
    {
      id: "m3",
      senderId: "support",
      senderName: "Sarah Johnson",
      text: "Good news! I've located your order. It was shipped yesterday and is currently in transit. Your tracking number is TRK123456789. You can track it on our website or directly through the carrier.",
      timestamp: "Jan 15, 2024, 06:25 PM",
      attachment: "tracking_details.pdf",
    },
  ],
  "TKT-004": [
    {
      id: "m1",
      senderId: "user",
      senderName: "You",
      text: "I placed an order last week and it was supposed to be delivered 3 days ago. However, I haven't received any updates regarding the shipment. Can you please look into this matter and provide me with an estimated delivery date?",
      timestamp: "Jan 15, 2024, 05:30 PM",
    },
    {
      id: "m2",
      senderId: "support",
      senderName: "Sarah Johnson",
      text: "Hello! Thank you for contacting us. I apologize for the delay in getting you the tracking information. Let me look into your order right away.",
      timestamp: "Jan 15, 2024, 06:15 PM",
    },
    {
      id: "m3",
      senderId: "support",
      senderName: "Sarah Johnson",
      text: "Good news! I've located your order. It was shipped yesterday and is currently in transit. Your tracking number is TRK123456789. You can track it on our website or directly through the carrier.",
      timestamp: "Jan 15, 2024, 06:25 PM",
      attachment: "tracking_details.pdf",
    },
  ],
  "TKT-005": [
    {
      id: "m1",
      senderId: "user",
      senderName: "You",
      text: "I placed an order last week and it was supposed to be delivered 3 days ago. However, I haven't received any updates regarding the shipment. Can you please look into this matter and provide me with an estimated delivery date?",
      timestamp: "Jan 15, 2024, 05:30 PM",
    },
    {
      id: "m2",
      senderId: "support",
      senderName: "Sarah Johnson",
      text: "Hello! Thank you for contacting us. I apologize for the delay in getting you the tracking information. Let me look into your order right away.",
      timestamp: "Jan 15, 2024, 06:15 PM",
    },
    {
      id: "m3",
      senderId: "support",
      senderName: "Sarah Johnson",
      text: "Good news! I've located your order. It was shipped yesterday and is currently in transit. Your tracking number is TRK123456789. You can track it on our website or directly through the carrier.",
      timestamp: "Jan 15, 2024, 06:25 PM",
      attachment: "tracking_details.pdf",
    },
  ],
};
// Danh mục để tạo filter tabs
export const ticketCategories: string[] = [
  "All Categories",
  ...CATEGORIES_LIST,
];
