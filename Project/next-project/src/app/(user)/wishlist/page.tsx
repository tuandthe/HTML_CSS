"use client";

import WishlistCard from "@/components/wishlist/WishlistCard";
import WishlistFilterBar from "@/components/wishlist/WishlistFilterBar";
import { useWishlist } from "@/hooks/wishlist/useWishlist";
import { Share2 } from "lucide-react";

export default function Wishlist() {
  const {
    items,
    categories,
    processedItems,
    selectedCategory,
    sortOption,
    setSelectedCategory,
    setSortOption,
    handleDelete,
  } = useWishlist();

  return (
    <div className="lg:ml-64 !w-full max-w-7xl">
      <div className="p-4 lg:p-8 ">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-woo-text">My Wishlist</h2>
              <p className="text-woo-text-secondary">
                {items.length} items saved for later
              </p>
            </div>
            <button className="flex items-center gap-2 border border-woo-border hover:bg-woo-bg text-woo-text px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm">
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
            <div className="text-center py-20 bg-woo-card rounded-xl border border-dashed border-woo-border">
              <p className="text-woo-text-secondary font-medium">
                No items found matching your filter.
              </p>
              <button
                onClick={() => setSelectedCategory("All Categories")}
                className="mt-2 text-woo-primary font-bold text-sm hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
