import { Card } from "../common/Card";

export default function OrderItems() {
  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b border-gray-100 font-semibold bg-gray-50/50">
        Order Items
      </div>
      <div className="divide-y divide-gray-100">
        {/* Item 1 */}
        <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0 overflow-hidden relative flex items-center justify-center text-gray-400 text-xs">
              Img
            </div>
            <div>
              <p className="font-bold text-gray-900">Wireless Headphones</p>
              <p className="text-sm text-gray-500 mt-1">Quantity: 1</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-900">$79.99</p>
            <p className="text-xs text-gray-400">$79.99 each</p>
          </div>
        </div>
        {/* Item 2 */}
        <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg shrink-0 overflow-hidden relative flex items-center justify-center text-gray-400 text-xs">
              Img
            </div>
            <div>
              <p className="font-bold text-gray-900">Phone Case</p>
              <p className="text-sm text-gray-500 mt-1">Quantity: 2</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-900">$39.98</p>
            <p className="text-xs text-gray-400">$19.99 each</p>
          </div>
        </div>
      </div>
      {/* Summary */}
      <div className="bg-gray-50/50 p-6 space-y-3 border-t border-gray-100">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Subtotal</span>
          <span className="font-medium text-gray-900">$134.96</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Shipping</span>
          <span className="font-medium text-gray-900">$10.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Tax</span>
          <span className="font-medium text-gray-900">$14.51</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-900 pt-4 border-t border-gray-200 mt-2">
          <span>Total</span>
          <span>$159.47</span>
        </div>
      </div>
    </Card>
  );
}
