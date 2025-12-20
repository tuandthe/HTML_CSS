"use client";

import { useState, useMemo } from "react";
import { Product } from "@/lib/types/product";

export function useWishlist(initialItems: Product[]) {
  const [items, setItems] = useState<Product[]>(initialItems);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOption, setSortOption] = useState("newest");

  const handleDelete = (id: number) => {
    if (confirm("Remove this item from wishlist?")) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const processedItems = useMemo(() => {
    let filtered = items;
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    return [...filtered].sort((a, b) => {
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
  }, [items, selectedCategory, sortOption]);

  return {
    items,
    processedItems,
    selectedCategory,
    sortOption,
    setSelectedCategory,
    setSortOption,
    handleDelete,
  };
}
