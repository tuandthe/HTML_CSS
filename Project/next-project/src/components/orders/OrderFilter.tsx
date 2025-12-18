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
            "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
            activeTab === tab
              ? "bg-[#007042] text-white border-[#007042]"
              : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50",
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
