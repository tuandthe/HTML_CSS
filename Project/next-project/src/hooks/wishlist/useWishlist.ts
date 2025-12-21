"use client";

import { useState, useEffect, useMemo } from "react";
import { Product } from "@/lib/types/product";
import { productApi } from "@/lib/api-client/productApi";

export function useWishlist() {
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortOption, setSortOption] = useState("newest");

  // --- FETCH DATA ---
  useEffect(() => {
    const fetchWishlist = async () => {
      setIsLoading(true);
      try {
        const data = await productApi.getWishlist();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch wishlist:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  // --- ACTIONS ---
  const handleDelete = async (id: number) => {
    if (!confirm("Remove this item from wishlist?")) return;
    
    const prevItems = [...items];
    setItems((prev) => prev.filter((item) => item.id !== id));

    try {
      await productApi.removeWishlistItem(id);
    } catch (error) {
      console.error("Failed to delete", error);
      setItems(prevItems);
      alert("Failed to remove item.");
    }
  };

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(items.map((p) => p.category)));
    return ["All Categories", ...uniqueCategories];
  }, [items]);

  const processedItems = useMemo(() => {
    let filtered = items;

    // Filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Sort
    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case "oldest":
          return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
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
    categories,         
    
    selectedCategory,
    sortOption,
    isLoading,          
    
    setSelectedCategory,
    setSortOption,
    handleDelete,
  };
}