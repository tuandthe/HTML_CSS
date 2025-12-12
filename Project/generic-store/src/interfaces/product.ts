// Interface cho Product
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: "Electronics" | "Clothing" | "Books"; 
  inStock: boolean;
}
