"use client";

import { Ticket } from "@/lib/types/ticket";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { TicketPriorityBadge, TicketStatusBadge } from "./TicketBadges";

export default function TicketDetailHeader({ ticket }: { ticket: Ticket }) {
  const router = useRouter();
  return (
    <div className="flex items-start gap-4">
      <button
        onClick={() => router.back()}
        className="mt-1 p-2 hover:bg-woo-bg rounded-full transition-colors text-woo-text-secondary"
      >
        <ArrowLeft size={20} />
      </button>
      <div>
        <h2 className="text-2xl font-bold text-woo-text">{ticket.subject}</h2>
        <div className="flex items-center gap-3 mt-2 text-sm text-woo-text-secondary">
          <span className="font-mono font-medium">{ticket.id}</span>
          <TicketStatusBadge status={ticket.status} />
          <TicketPriorityBadge priority={ticket.priority} />
        </div>
      </div>
    </div>
  );
}
