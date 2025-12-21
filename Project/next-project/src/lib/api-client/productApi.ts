import { recentProducts } from "@/lib/data/products";
import { Product } from "@/lib/types/product";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let mockWishlistDb = [...recentProducts];

export const productApi = {
  getWishlist: async (): Promise<Product[]> => {
    return mockWishlistDb;
  },

  removeWishlistItem: async (id: number): Promise<boolean> => {
    mockWishlistDb = mockWishlistDb.filter((item) => item.id !== id);
    return true;
  },
};