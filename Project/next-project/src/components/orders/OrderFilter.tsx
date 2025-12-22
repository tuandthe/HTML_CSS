"use client";

import { cn } from "@/lib/utils/utils";

interface OrderFilterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  counts: { [key: string]: number };
}
const tabs = ["All", "Processing", "Completed", "Cancelled"];

export default function OrderFilter({
  activeTab,
  onTabChange,
  counts,
}: OrderFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "px-4 py-2 rounded-3xl text-sm font-medium transition-colors border",
            activeTab === tab
              ? "bg-woo-primary text-white border-woo-primary"
              : "bg-woo-card text-woo-text-secondary border-woo-border hover:bg-woo-bg"
          )}
        >
          {tab === "All"
            ? `All Orders (${counts.all})`
            : `${tab} (${counts[tab] || 0})`}
        </button>
      ))}
    </div>
  );
}