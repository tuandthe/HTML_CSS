"use client";

import { Message, Ticket } from "@/lib/types/ticket";
import { useEffect, useState } from "react";

export function useTicketDetail(
  initialTickets: Ticket[],
  mockTicketMessages: Record<string, Message[]>,
  ticketId: string,
) {
  const ticket = initialTickets.find((t) => t.id === ticketId);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (ticket) {
      const initialMessages = mockTicketMessages[ticketId] || [];

      if (initialMessages.length === 0 && ticket.message) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMessages([
          {
            id: "initial",
            senderId: "user",
            senderName: "You",
            text: ticket.message,
            timestamp: ticket.createdDate,
          },
        ]);
      } else {
        setMessages(initialMessages);
      }
    }
  }, [ticket, mockTicketMessages, ticketId]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: "user",
      senderName: "You",
      text: text,
      timestamp: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
  };
  return { ticket, messages, handleSendMessage };
}
