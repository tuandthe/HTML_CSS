import { cn } from "@/lib/utils/utils";
import { orderStatus } from "@/lib/types/order";
import { TicketPriority, TicketStatus } from "@/lib/types/ticket";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  LucideIcon,
  PauseCircle,
  XCircle,
} from "lucide-react";

export function OrderBadge({ status }: { status: orderStatus | string }) {
  const styles = {
    Processing: "bg-blue-100 text-blue-700",
    Completed: "bg-yellow-100 text-yellow-800",
    Cancelled: "bg-green-100 text-green-700",
  };
  const className =
    styles[status as orderStatus] || "bg-gray-100 text-gray-700";
  return (
    <span
      className={cn(
        "px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap",
        className,
      )}
    >
      {status}
    </span>
  );
}

export function TicketBadge({ status }: { status: TicketStatus | string }) {
  const styles = {
    Open: "bg-blue-100 text-blue-700",
    "Waiting for Customer": "bg-yellow-100 text-yellow-800",
    Resolved: "bg-green-100 text-green-700",
    Closed: "bg-gray-100 text-gray-600",
  };
  const className =
    styles[status as TicketStatus] || "bg-gray-100 text-gray-700";

  return (
    <span
      className={cn(
        "px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap",
        className,
      )}
    >
      {status}
    </span>
  );
}
export function TicketPriorityBadge({
  priority,
}: {
  priority: TicketPriority | string;
}) {
  const styles = {
    "High Priority": "text-red-600",
    "Medium Priority": "text-orange-500",
    "Low Priority": "text-green-600",
  };
  const className =
    styles[priority as TicketPriority] || "text-gray-500 bg-gray-100";

  return (
    <span
      className={cn(
        "px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap",
        className,
      )}
    >
      {priority}
    </span>
  );
}
export function AffiliateLinksBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Active: "bg-green-100 text-green-700",
    Paused: "bg-yellow-100 text-yellow-800",
    Pending: "bg-blue-100 text-blue-700",
    Rejected: "bg-red-100 text-red-700",
  };
  const className = styles[status] || "bg-gray-100 text-gray-700";

  const icons: Record<string, LucideIcon> = {
    Active: CheckCircle,
    Paused: PauseCircle,
    Pending: Clock,
    Rejected: XCircle,
  };
  const Icon = icons[status] || AlertCircle;
  return (
    <span
      className={cn(
        "px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap",
        className,
      )}
    >
      <div className="inline-flex gap-2">
        {/* Render Icon */}
        <Icon size={14} strokeWidth={2.5} />

        {/* Render Text */}
        {status}
      </div>
    </span>
  );
}
