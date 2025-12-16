import { Card } from "@/components/ui/Card";
import { recentProducts } from "@/data/products";
import Image from "next/image";
export default function ShoppingCartWidget() {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Shopping Cart</h3>
      <Card className="p-4">
        <div className="space-y-4 mb-4">
          {/* Mock Cart Items */}
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-md relative">
              <Image
                src={recentProducts[0].image}
                alt={recentProducts[0].name}
                fill
                className="w-12 h-12 object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{recentProducts[0].name}</p>
              <p className="text-xs text-gray-500">
                1 x ${recentProducts[0].price}
              </p>
            </div>
            <p className="text-sm font-bold">${recentProducts[0].price}</p>
          </div>
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-md relative">
              <Image
                src={recentProducts[1].image}
                alt={recentProducts[1].name}
                fill
                className="w-12 h-12 object-cover rounded-md"
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{recentProducts[1].name}</p>
              <p className="text-xs text-gray-500">
                1 x ${recentProducts[1].price}
              </p>
            </div>
            <p className="text-sm font-bold">${recentProducts[1].price}</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mb-4 flex justify-between items-center">
          <span className="font-medium text-gray-900">Subtotal:</span>
          <span className="font-bold text-xl text-gray-900">
            ${recentProducts[0].price + recentProducts[1].price}
          </span>
        </div>

        <button className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 mb-2 transition-colors">
          Checkout &rarr;
        </button>
        <button className="w-full bg-gray-100 text-gray-700 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition-colors">
          View Cart
        </button>
      </Card>
    </div>
  );
}
