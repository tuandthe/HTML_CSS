import { Card } from "@/components/common/Card";
import { LinkStatus } from "@/lib/types/affiliate";
import { cn } from "@/lib/utils/utils";
import { Search } from "lucide-react";

interface LinkFilterBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeFilter: LinkStatus | "All";
  onFilterChange: (filter: LinkStatus | "All") => void;
  counts: Record<string, number>;
}
export default function LinkFilterBar({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
  counts,
}: LinkFilterBarProps) {
  const filters: (LinkStatus | "All")[] = [
    "All",
    "Active",
    "Paused",
    "Pending",
    "Rejected",
  ];
  return (
    <Card className="p-4 flex flex-col xl:flex-row gap-4 xl:items-center justify-between">
      {/* Search Input */}
      <div className="relative w-full xl:w-72 shrink-0">
        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search links by name, ID, or Category"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#007042] focus:bg-white transition-all"
        />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-colors border",
              activeFilter === filter
                ? "bg-[#007042] text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-100",
            )}
          >
            {filter === "All" ? "All Links" : filter}
            <span
              className={cn(
                "ml-1.5 text-xs opacity-80",
                activeFilter === filter ? "text-white" : "text-gray-400",
              )}
            >
              ({counts[filter as keyof typeof counts]})
            </span>
          </button>
        ))}
      </div>
    </Card>
  );
}
