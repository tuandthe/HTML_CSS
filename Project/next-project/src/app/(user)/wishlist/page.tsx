"use client";

import WishlistCard from "@/components/wishlist/WishlistCard";
import WishlistFilterBar from "@/components/wishlist/WishlistFilterBar";
import { useWishlist } from "@/hooks/wishlist/useWishlist";
import { categories, recentProducts } from "@/lib/data/products";
import { Share2 } from "lucide-react";

export default function Wishlist() {
  const {
    items,
    processedItems,
    selectedCategory,
    sortOption,
    setSelectedCategory,
    setSortOption,
    handleDelete,
  } = useWishlist(recentProducts);

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">My Wishlist</h2>
          <p className="text-gray-500">{items.length} items saved for later</p>
        </div>
        <button className="flex items-center gap-2  border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm">
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
      {processedItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {processedItems.map((product) => (
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
