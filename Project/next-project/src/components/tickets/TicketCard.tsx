import { Ticket } from "@/lib/types/ticket";
import { TicketBadge, TicketPriorityBadge } from "../common/Badge";
import { Info } from "lucide-react";
import Link from "next/link";

export default function TicketCard({ ticket }: { ticket: Ticket }) {
  return (
    <div className="p-6 hover:bg-gray-50 transition-colors group">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        {/* Content Left */}
        <div className="flex-1 space-y-3">
          {/* Header: Title + Status */}
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-bold text-gray-900 text-base">
              {ticket.subject}
            </h3>
            <TicketBadge status={ticket.status} />
          </div>
          {/* Meta Info Row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
            {/* Ticket ID */}
            <div className="flex items-center gap-1.5">
              <Info size={14} className="text-blue-500" />
              <span className="font-mono text-gray-700">{ticket.id}</span>
            </div>
            {/* Category Tag */}
            <div className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600">
              {ticket.category}
            </div>
            {/* Order ID (Optional) */}
            {ticket.orderId && (
              <div className="flex items-center gap-1">
                <span className="text-gray-400">Order:</span>
                <span className="font-mono text-gray-700">
                  {ticket.orderId}
                </span>
              </div>
            )}
            {/* Priority */}
            <span>
              <TicketPriorityBadge priority={ticket.priority} />
            </span>
            {/* Date & Message Count Row */}
            <div className="text-xs text-gray-400 pt-1 flex flex-wrap gap-x-4 gap-y-1">
              <span>Updated: {ticket.updatedDate}</span>
              <span className="text-gray-500 font-medium">
                {ticket.messagesCount} messages
              </span>
            </div>
          </div>
        </div>
        {/* Action Right */}
        <Link
          href={`/tickets/${ticket.id}`}
          className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all whitespace-nowrap w-full md:w-auto text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
