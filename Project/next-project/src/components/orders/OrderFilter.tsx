"use client";

import { useOrderFilter } from "@/hooks/orders/useOrderFilters";
import { orderStatusWithAll } from "@/lib/types/order";
import { cn } from "@/lib/utils/utils";

interface OrderFilterProps {
  // activeTab: string;
  // onTabChange: (tab: string) => void;
  counts: { [key: string]: number };
}

export default function OrderFilter({
  counts,
}: {
  counts: OrderFilterProps["counts"];
}) {
  const { activeTab, setFilter } = useOrderFilter();
  return (
    <div className="flex flex-wrap gap-2">
      {Object.values(orderStatusWithAll).map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={cn(
            "px-4 py-2 rounded-3xl font-medium transition-colors border",
            activeTab === tab
              ? "bg-woo-primary text-white border-woo-primary"
              : "bg-woo-card text-woo-text-secondary border-woo-border hover:bg-woo-bg",
          )}
        >
          {tab === orderStatusWithAll.All
            ? `All Orders (${counts.All || 0})`
            : `${tab} (${counts[tab] || 0})`}
        </button>
      ))}
    </div>
  );
}
