import { ShoppingCart, Star } from "lucide-react";
import { Card } from "@/components/common/Card";
import { Product } from "@/lib/types/product";
import Image from "next/image";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="p-4">
      <div className=" h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 relative">
        {/* Placeholder for Image */}
        <Image
          src={product.image}
          alt={product.name}
          fill // 👈 Tự động dãn full chiều rộng/cao của thẻ cha (thay thế w-full h-full)
          className="object-cover opacity-80"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Giúp tối ưu tải ảnh theo màn hình
        />
      </div>
      <h4 className="font-semibold text-gray-900 line-clamp-1">
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
        <button className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <ShoppingCart size={16} />
        </button>
      </div>
    </Card>
  );
}
