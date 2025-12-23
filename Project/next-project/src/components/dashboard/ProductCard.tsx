import { ShoppingCart, Star } from "lucide-react";
import { Card } from "@/components/common/Card";
import { Product } from "@/lib/types/product";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="p-4 bg-woo-card border border-woo-border hover:shadow-lg transition-shadow">
      <div className="relative aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover opacity-90 hover:opacity-100 transition-opacity"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h4 className="font-medium text-woo-text mb-2 line-clamp-2 leading-tight">
        {product.name}
      </h4>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
              stroke="currentColor"
              className={
                i >= Math.floor(product.rating)
                  ? "text-gray-300"
                  : "text-yellow-400"
              }
            />
          ))}
        </div>
        <span className="text-sm text-woo-text-secondary ml-1">
          ({product.reviews})
        </span>
      </div>

      {/* Price & Action */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-woo-text">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-woo-text-muted line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Nút giỏ hàng dùng màu Primary */}
        <button className="p-2 bg-woo-primary text-white rounded-xl hover:bg-woo-primary-hover transition-colors">
          <ShoppingCart size={16} />
        </button>
      </div>
    </Card>
  );
}
