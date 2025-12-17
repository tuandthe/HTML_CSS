"use client";

import ChatBubble from "@/components/tickets/ChatBubble";
import MessageInput from "@/components/tickets/MessageInput";
import TicketDetailHeader from "@/components/tickets/TicketDetailHeader";
import TicketDetailInfo from "@/components/tickets/TicketDetailInfo";
import { Card } from "@/components/ui/Card";
import { mockTicketMessages, ticketsData } from "@/data/tickets";
import { Message } from "@/types/ticket";
import { notFound, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function TicketDetailPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  const params = useParams();
  const ticketId = params.id as string;

  const ticket = ticketsData.find((t) => t.id === ticketId);

  const messagesEndRef = useRef<HTMLDivElement>(null);

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
  }, [ticket, ticketId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  if (!ticket) {
    return notFound();
  }
  return (
    <div className="p-2 lg:p-4">
      {/* Header */}
      <div className="space-y-6">
        <TicketDetailHeader ticket={ticket} />
      {/* Main Layout */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Left Column: Conversation CARD */}
        <Card className="lg:col-span-2 space-y-6 max-h-[140vh] flex flex-col">
          
          {/* Header Card Conversation */}
          <div className="p-4 border-b border-gray-100 flex-shrink-0">
                <h3 className="font-bold text-gray-900">Conversation</h3>
            </div>
          
          {/* Messages Area (Scrollable) */}
          <div className="flex-1 p-3 overflow-y-scroll bg-white">
            {messages.length > 0 ? (
              messages.map((msg) => (
                <ChatBubble
                  key={msg.id}
                  message={msg}
                  isMe={msg.senderId === "user"}
                />
              ))
            ) : (
              <div className="text-center text-gray-400 mt-10">
                No messages yet.
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {/* Input Area (Fixed bottom) */}
          <div className=" p-6 border-t border-woo-border bg-gray-50">
                <div className="bg-transparent"> 
                    <MessageInput onSend={handleSendMessage} />
                </div>
            </div>
        </Card>
        {/* Right Column: Info Sidebar (Fixed width on Desktop) */}
        <div className="space-y-6">
          <TicketDetailInfo ticket={ticket} />
        </div>
      </div>
      </div>
    </div>
  );
}
