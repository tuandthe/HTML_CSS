"use client";

import ChatBubble from "@/components/tickets/ChatBubble";
import MessageInput from "@/components/tickets/MessageInput";
import TicketDetailHeader from "@/components/tickets/TicketDetailHeader";
import TicketDetailInfo from "@/components/tickets/TicketDetailInfo";
import { Card } from "@/components/common/Card";
import { mockTicketMessages, ticketsData } from "@/lib/data/tickets";
import { notFound, useParams } from "next/navigation";
import { useTicketDetail } from "@/hooks/tickets/useTicketDetail";

export default function TicketDetailPage() {
  const params = useParams();

  const ticketId = params.id as string;

  const { ticket, messages, handleSendMessage } = useTicketDetail(
    ticketsData,
    mockTicketMessages,
    ticketId,
  );

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
