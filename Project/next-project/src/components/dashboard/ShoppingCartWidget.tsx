import { Card } from "@/components/common/Card";
import { recentProducts } from "@/lib/data/products";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ShoppingCartWidget() {
  return (
    <div>
      <Card className="p-6 bg-woo-card border border-woo-border sticky top-4">
        <div className="flex items-center gap-2 mb-4">
          <ShoppingCart size={20} className="text-woo-primary" />
          <h3 className="font-semibold text-woo-text">Shopping Cart</h3>
        </div>

        <div className="space-y-4 mb-4">
          {/* Mock Cart Items */}
          {recentProducts.slice(0, 2).map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <div className="w-12 h-12 relative border border-woo-border rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-woo-text truncate">
                  {item.name}
                </p>
                <p className="text-xs text-woo-text-secondary">
                  1 x ${item.price}
                </p>
              </div>
              <p className="text-sm font-bold text-woo-text">${item.price}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-woo-border pt-4 mb-4 flex justify-between items-center">
          <span className="font-medium text-woo-text">Subtotal:</span>
          <span className="font-bold text-xl text-woo-text">
            ${recentProducts[0].price + recentProducts[1].price}
          </span>
        </div>

        {/* Checkout Button */}
        <button className="w-full bg-woo-primary text-white py-2.5 rounded-2xl font-medium hover:bg-woo-primary-hover mb-2 transition-colors">
          Checkout &rarr;
        </button>

        {/* View Cart Button */}
        <button className="w-full bg-gray-100 text-woo-text py-2.5 rounded-2xl font-medium hover:bg-gray-200 transition-colors">
          View Cart
        </button>
      </Card>
    </div>
  );
}
