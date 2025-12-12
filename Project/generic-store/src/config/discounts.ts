import type { Product } from "../interfaces/product.js";

export type ProductCategory = Product["category"];

export const CATEGORY_DISCOUNTS: Record<ProductCategory, number> = {
  Electronics: 0.1, // 10% discount
  Clothing: 0.15,   // 15% discount
  Books: 0.05       // 5% discount
};