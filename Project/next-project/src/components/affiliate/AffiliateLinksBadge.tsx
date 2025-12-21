import { Badge } from "@/components/common/Badge";
import { CheckCircle, PauseCircle, Clock, XCircle, AlertCircle, LucideIcon } from "lucide-react";

export function AffiliateLinksBadge({ status }: { status: string }) {
  const variantMap: Record<string, "success" | "warning" | "info" | "danger"> = {
    Active: "success",
    Paused: "warning",
    Pending: "info",
    Rejected: "danger",
  };

  const iconMap: Record<string, LucideIcon> = {
    Active: CheckCircle,
    Paused: PauseCircle,
    Pending: Clock,
    Rejected: XCircle,
  };

  const Icon = iconMap[status] || AlertCircle;

  return (
    <Badge 
      variant={variantMap[status] || "neutral"} 
      icon={<Icon size={12} strokeWidth={2.5} />}
    >
      {status}
    </Badge>
  );
}