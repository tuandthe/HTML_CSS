import { Ticket } from "@/lib/types/ticket";
import { Info } from "lucide-react";
import Link from "next/link";
import { TicketPriorityBadge, TicketStatusBadge } from "./TicketBadges";

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <div className="p-6 hover:bg-woo-bg transition-colors group">
      <div className="flex flex-col md:flex-row items-start justify-between gap-4">
        {/* Content Left */}
        <div className="flex-1 space-y-3">
          {/* Header: Title + Status */}
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-woo-text text-base">
              {ticket.subject}
            </h3>
            <TicketStatusBadge status={ticket.status} />
          </div>
          {/* Meta Info Row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-woo-text-secondary mb-2">
            {/* Ticket ID */}
            <div className="flex items-center gap-1.5">
              <Info size={14} className="text-blue-500" />
              <span>{ticket.id}</span>
            </div>
            {/* Category Tag */}
            <div className="bg-woo-bg px-2 py-1 rounded text-xs border border-woo-border">
              {ticket.category}
            </div>
            {/* Order ID (Optional) */}
            {ticket.orderId && (
              <div className="flex items-center gap-1">
                <span>Order:</span>
                <span className="font-medium text-woo-text">{ticket.orderId}</span>
              </div>
            )}
            {/* Priority */}
            <span>
              <TicketPriorityBadge priority={ticket.priority} />
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-woo-text-secondary">
            {/* Date & Message Count Row */}
            <span>Created: {ticket.createdDate}</span>
            <span>Updated: {ticket.updatedDate}</span>
            <span>{ticket.messagesCount} messages</span>
          </div>
        </div>
        {/* Action Right */}
        <Link
          href={`/tickets/${ticket.id}`}
          className="px-4 py-2 border border-woo-border bg-woo-bg rounded-2xl text-sm font-medium text-woo-text hover:border-woo-text-muted transition-all whitespace-nowrap w-full md:w-auto text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}