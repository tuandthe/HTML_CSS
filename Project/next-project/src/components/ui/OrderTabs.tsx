"use client";

import { cn } from "@/lib/utils";

interface Tab {
  key: string;
  label: string;
  count: number;
}

interface OrderTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function OrderTabs({ tabs, activeTab, onTabChange }: OrderTabsProps) {
  return (
    <div className="flex gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            activeTab === tab.key
              ? "bg-green-700 text-white"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
          )}
        >
          {tab.label} ({tab.count})
        </button>
      ))}
    </div>
  );
}
