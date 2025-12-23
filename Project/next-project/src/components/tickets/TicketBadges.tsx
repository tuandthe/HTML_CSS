"use client";

import { Badge } from "@/components/common/Badge";
import { TicketPriority, TicketStatus } from "@/lib/types/ticket";

export function TicketStatusBadge({
  status,
}: {
  status: TicketStatus | string;
}) {
  const variantMap: Record<string, "info" | "warning" | "success" | "neutral"> =
    {
      Open: "info",
      "Waiting for Customer": "warning",
      Resolved: "success",
      Closed: "neutral",
    };

  const variant = variantMap[status] || "neutral";

  return <Badge variant={variant}>{status}</Badge>;
}

export function TicketPriorityBadge({
  priority,
}: {
  priority: TicketPriority | string;
}) {
  // Map từ Priority -> Màu sắc
  const variantMap: Record<
    string,
    "danger" | "warning" | "success" | "neutral"
  > = {
    "High Priority": "danger",
    "Medium Priority": "warning",
    "Low Priority": "success",
  };

  const variant = variantMap[priority] || "neutral";

  return (
    <Badge variant={variant} className="bg-gray-10 text-md">
      {priority}
    </Badge>
  );
}
