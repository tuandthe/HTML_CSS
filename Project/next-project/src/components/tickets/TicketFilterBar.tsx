"use client";

import { Search } from "lucide-react";
import { Card } from "../common/Card";
import { cn } from "@/lib/utils/utils";

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
    <Card className="p-4 flex flex-col xl:flex-row gap-4 xl:items-center justify-between bg-woo-card border border-woo-border">
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {/* Search Input */}
        <div className="flex-1">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-woo-text-muted"
              size={18}
            />
            <input
              type="text"
              placeholder="Search tickets by subject or ID"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg text-sm bg-woo-bg text-woo-text focus:outline-none focus:ring-2 focus:ring-woo-primary focus:bg-woo-card transition-all border border-transparent focus:border-transparent placeholder:text-woo-text-muted"
            />
          </div>
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
                  ? "bg-woo-primary text-white border-woo-primary"
                  : "bg-woo-card text-woo-text-secondary border-woo-border hover:bg-woo-bg",
              )}
            >
              {cat}
              <span className="opacity-70 text-xs ml-1">
                ({counts[cat] || 0})
              </span>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
