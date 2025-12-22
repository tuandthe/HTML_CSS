import { Product } from "@/lib/types/product";
import { Card } from "../common/Card";
import Image from "next/image";
import { ShoppingCart, Star, Trash2 } from "lucide-react";

interface WishlistCardProps {
  product: Product;
  onDelete: (id: number) => void;
}

export default function WishlistCard({ product, onDelete }: WishlistCardProps) {
  return (
    <Card className="overflow-hidden group flex flex-col h-full bg-woo-card border border-woo-border">
      
      {/* Product Image */}
      <div className="relative h-56 bg-woo-bg flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges: Discount */}
        {product.discountLabel && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">
            {product.discountLabel}
          </span>
        )}
        
        {/* Badges: Out of Stock */}
        {product.stockStatus === "Out of Stock" && (
          <div className="absolute inset-0 bg-woo-card/60 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              Out of Stock
            </span>
          </div>
        )}
        
        {/* Delete Button */}
        <button
          onClick={() => onDelete(product.id)}
          className="absolute top-3 right-3 p-2 bg-woo-card rounded-full text-red-500 shadow-sm hover:bg-red-50 transition-colors"
        >
          <Trash2 size={16} />
        </button>
      </div>

      {/* Content Area */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-woo-text mb-1 line-clamp-1">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                className={
                  i >= Math.floor(product.rating) ? "text-gray-300" : ""
                }
              />
            ))}
          </div>
          <span className="text-xs text-woo-text-muted">({product.reviews})</span>
        </div>
        
        {/* Price & Category */}
        <div className="flex items-center justify-between mb-4 mt-auto">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg text-woo-text">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-woo-text-muted line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <span className="text-xs text-woo-text-secondary font-medium">
            {product.category}
          </span>
        </div>
        
        {/* Action Button */}
        {product.stockStatus === "In Stock" ? (
          <button className="w-full flex items-center justify-center gap-2 bg-woo-primary hover:bg-woo-primary-hover text-white py-2.5 rounded-2xl font-bold text-sm transition-colors">
            <ShoppingCart size={16} /> Add to Cart
          </button>
        ) : (
          <button
            disabled
            className="w-full flex items-center justify-center gap-2 bg-woo-bg text-woo-text-muted py-2.5 rounded-lg font-bold text-sm cursor-not-allowed"
          >
            <ShoppingCart size={16} /> Out of Stock
          </button>
        )}
      </div>
    </Card>
  );
}