import { Card } from "@/components/ui/Card";

export default function ShoppingCartWidget() {
  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Shopping Cart</h3>
      <Card className="p-4">
        <div className="space-y-4 mb-4">
          {/* Mock Cart Items */}
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-md"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Wireless Headphones</p>
              <p className="text-xs text-gray-500">1 x $79.99</p>
            </div>
            <p className="text-sm font-bold">$79.99</p>
          </div>
          <div className="flex gap-3">
            <div className="w-12 h-12 bg-gray-100 rounded-md"></div>
            <div className="flex-1">
              <p className="text-sm font-medium">Smart Watch Series 8</p>
              <p className="text-xs text-gray-500">1 x $399.99</p>
            </div>
            <p className="text-sm font-bold">$399.99</p>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-4 mb-4 flex justify-between items-center">
          <span className="font-medium text-gray-900">Subtotal:</span>
          <span className="font-bold text-xl text-gray-900">$479.98</span>
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
