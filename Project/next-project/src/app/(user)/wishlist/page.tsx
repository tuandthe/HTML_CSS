"use client";

import WishlistCard from "@/components/wishlist/WishlistCard";
import WishlistFilterBar from "@/components/wishlist/WishlistFilterBar";
import { categories, recentProducts } from "@/data/products";
import { Product } from "@/types/product";
import { Share2 } from "lucide-react";
import { useState } from "react";

export default function Wishlist() {
  const [items, setItems] = useState<Product[]>(recentProducts);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOption, setSortOption] = useState("newest");

  const handleDelete = (id: number) => {
    if (confirm("Remove this item from wishlist?"))
      setItems((prev) => prev.filter((items) => items.id !== id));
  };
  const getProcessItems = () => {
    // Filter
    let filtered = items;

    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(
        (items) => items.category === selectedCategory,
      );
    }
    // Sort

    filtered.sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return (
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
          );
        case "oldest":
          return (
            new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
          );
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
    return filtered;
  };
  const displayItems = getProcessItems();

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Wishlist</h2>
          <p className="text-gray-500">{items.length} items saved for later</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm">
          <Share2 size={16} /> Share Wishlist
        </button>
      </div>

      {/* Filter & Sort Bar */}
      <WishlistFilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />

      {/* Wishlist Items */}
      {displayItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((product) => (
            <WishlistCard
              key={product.id}
              product={product}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        // Empty State
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 font-medium">
            No items found matching your filter.
          </p>
          <button
            onClick={() => setSelectedCategory("All Categories")}
            className="mt-2 text-[#007042] font-bold text-sm hover:underline"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
