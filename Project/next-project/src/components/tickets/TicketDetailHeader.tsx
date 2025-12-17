"use client";

import { Ticket } from "@/types/ticket";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { TicketBadge, TicketPriorityBadge } from "../ui/Badge";

export default function TicketDetailHeader({ ticket }: { ticket: Ticket }) {
  const router = useRouter();
  return (
    <div className="flex items-start gap-4 mb-6">
      <button
        onClick={() => router.back()}
        className="mt-1 p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500"
      >
        <ArrowLeft size={20} />
      </button>
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{ticket.subject}</h2>
        <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
          <span className="font-mono font-medium">{ticket.id}</span>
          <TicketBadge status={ticket.status} />
          <TicketPriorityBadge priority={ticket.priority} />
        </div>
      </div>
    </div>
  );
}
