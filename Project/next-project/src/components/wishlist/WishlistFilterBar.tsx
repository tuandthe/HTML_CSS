import { Filter } from "lucide-react";
import { Card } from "../ui/Card";
import { Select } from "../ui/Select";
import { sortOptions } from "@/data/products";

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
    <Card className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      {/* Category Filter */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-gray-900">
          <Filter size={18} />
          {/* <span className="font-medium text-sm">Filter:</span> */}
        </div>
        <div className="w-full sm:w-56">
          <Select 
            label="Filter:"
            options={categories}
            value={selectedCategory}
            onChange={onCategoryChange}
          />
        </div>
        
      </div>
      {/* Sort Options */}
      <div className="flex items-center gap-3">
        {/* <span className="font-medium text-sm text-gray-900">Sort by:</span> */}
        <div className="w-full sm:w-auto flex justify-end">
        <Select 
          label="Sort by:"
          options={sortOptions}
          value={sortOption}
          onChange={onSortChange}
          className="w-full sm:w-56" 
        />
      </div>
      </div>
    </Card>
  );
}
