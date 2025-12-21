import { ShoppingCart, Star } from "lucide-react";
import { Card } from "@/components/common/Card";
import { Product } from "@/lib/types/product";
import Image from "next/image";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="p-4 ">
      <div className="relative aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
        {/* Placeholder for Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill 
          className="object-cover opacity-80"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
        />
      </div>
      <h4 className="font-medium text-woo-text mb-2 line-clamp-2 leading-tight">
        {product.name}
      </h4>
      <div className="flex text-yellow-400 text-xs my-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
            stroke="currentColor"
            className={i >= Math.floor(product.rating) ? "text-gray-300" : ""}
          />
        ))}
        <span className="text-gray-400 ml-1">({product.reviews})</span>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <button className="p-2 bg-green-800 text-white rounded-xl hover:bg-green-900 transition-colors">
          <ShoppingCart size={16} />
        </button>
      </div>
    </Card>
  );
}
