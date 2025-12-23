import { orderStatus } from "@/lib/types/order";
import { Badge } from "@/components/common/Badge";

export function OrderBadge({ status }: { status: orderStatus | string }) {
  // Map status của Order sang màu của Badge
  const variantMap: Record<string, "info" | "success" | "neutral"> = {
    Processing: "info",
    Completed: "success",
    Cancelled: "neutral",
  };

  const variant = variantMap[status] || "neutral";

  return <Badge variant={variant}>{status}</Badge>;
}
