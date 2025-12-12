import type { Product } from "../interfaces/product.js";

export function getProductSummary(product: Product[]): Pick<Product, "id" | "name" | "price">[] {
    return product.map(p => ({
        id: p.id,
        name: p.name,
        price: p.price
    })
    );
}