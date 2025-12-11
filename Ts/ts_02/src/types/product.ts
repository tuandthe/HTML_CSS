// Bài 1: Define Product và các biến thể
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
  category: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
export type ProductUpdate = Partial<Product>;
export type CreateProductDTO = Omit<Product, "id" | "createdAt" | "updatedAt">;
export type ProductPick = Pick<Product, "id" | "name" | "price">;
export type ReadonlyProduct = Readonly<Product>;
function getProductById(id: number): Product {
    // Giả sử có một sản phẩm mẫu để trả về
    return {
        id,
        name: "Sample Product",
        price: 100,
        description: "This is a sample product",
        inStock: true,
        category: "Sample Category",
        tags: ["sample", "product"],
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
// Bài 2: Hàm update với validation
export function updateProduct(
  id: number,
  updates: ProductUpdate
): Product {
    const existingProduct = getProductById(id);
// Validate required fields nếu được cung cấp
  if (updates.name && updates.name.trim().length === 0) {
    throw new Error("Product name cannot be empty");
  }
  
  if (updates.price && updates.price < 0) {
    throw new Error("Product price cannot be negative");
  }
  const updatedProduct: Product = { ...existingProduct, ...updates, updatedAt: new Date() };
  return updatedProduct;
}
// Bài 3: Record Types
type UserRole = "admin" | "user" | "guest";
type AppConfig = Record<"dev" | "prod", { apiUrl: string }>;

const config: AppConfig = {
  dev: { apiUrl: "http://localhost:3000" },
  prod: { apiUrl: "https://api.com" }
};