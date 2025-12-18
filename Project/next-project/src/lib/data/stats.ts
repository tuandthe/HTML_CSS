import { Package, CheckCircle, Gift } from "lucide-react";
import { StatItem } from "@/lib/types/product";

export const statsData: StatItem[] = [
  { label: "Active Orders", value: 3, icon: Package, href: "/orders" },
  {
    label: "Completed Orders",
    value: 24,
    icon: CheckCircle,
    href: "/orders",
  },
  { label: "Reward Points", value: "1,240", icon: Gift },
];
