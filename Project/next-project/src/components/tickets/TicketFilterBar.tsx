"use client";

import { Search } from "lucide-react";
import { Card } from "../ui/Card";
import { cn } from "@/lib/utils";

interface TicketFilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  counts: Record<string, number>;
}

export default function TicketFilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  counts,
}: TicketFilterBarProps) {
  return (
    <Card className="p-4 flex flex-col xl:flex-row gap-4 xl:items-center justify-between">
      {/* Search Input */}
      <div className="relative w-full xl:w-72 shrink-0">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search tickets by subject or ID"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#007042] focus:bg-white transition-all"
        />
      </div>
      {/* Categories Chips */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors border",
              selectedCategory === cat
                ? "bg-[#007042] text-white border-[#007042]"
                : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50",
            )}
          >
            {cat}
            <span className="opacity-70 text-xs ml-1">
              ({counts[cat] || 0})
            </span>
          </button>
        ))}
      </div>
    </Card>
  );
}
