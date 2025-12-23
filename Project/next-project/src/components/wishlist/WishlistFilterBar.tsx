import { Filter } from "lucide-react";
import { Card } from "../common/Card";
import { Select } from "../common/Select";
import { sortOptions } from "@/lib/data/products";

interface WishlistFilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  sortOption: string;
  onSortChange: (sort: string) => void;
}

export default function WishlistFilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
}: WishlistFilterBarProps) {
  return (
    <Card className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-woo-card border border-woo-border">
      {/* Category Filter */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-woo-text">
          <Filter size={18} />
        </div>
        <div className="w-full sm:w-56">
          <Select
            label="Filter:"
            options={categories}
            value={selectedCategory}
            onChange={onCategoryChange}
            className="border-woo-border text-woo-text bg-woo-card"
          />
        </div>
      </div>

      {/* Sort Options */}
      <div className="flex items-center gap-3">
        <div className="w-full sm:w-auto flex justify-end">
          <Select
            label="Sort by:"
            options={sortOptions}
            value={sortOption}
            onChange={onSortChange}
            className="w-full sm:w-56 border-woo-border text-woo-text bg-woo-card"
          />
        </div>
      </div>
    </Card>
  );
}
