
import { Order } from "@/lib/types/order";
import { Card } from "../common/Card";

export default function OrderItems({ order }: { order: Order | null }) {
  return (
    <Card className="overflow-hidden bg-woo-card border border-woo-border">
      <div className="p-4 border-b border-woo-border font-semibold bg-woo-bg/50 text-woo-text">
        Order Items
      </div>
      <div className="divide-y divide-woo-border">
        {/* Item 1 */}
        <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-woo-bg rounded-lg shrink-0 overflow-hidden relative flex items-center justify-center text-woo-text-muted text-xs border border-woo-border">
              img
            </div>
            <div>
              <p className="font-bold text-woo-text">{order?.items}</p>
              <p className="text-sm text-woo-text-secondary mt-1">
                Quantity: 1
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-woo-text">${order?.total?.toString()}</p>
            <p className="text-xs text-woo-text-muted">${order?.total?.toString()} each</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-woo-bg rounded-lg shrink-0 overflow-hidden relative flex items-center justify-center text-woo-text-muted text-xs border border-woo-border">
              Img
            </div>
            <div>
              <p className="font-bold text-woo-text">{order?.items}</p>
              <p className="text-sm text-woo-text-secondary mt-1">
                Quantity: 2
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-bold text-woo-text">${order?.total?.toString()}</p>
            <p className="text-xs text-woo-text-muted">${order?.total?.toString()} each</p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-woo-bg/50 p-6 space-y-3 border-t border-woo-border">
        <div className="flex justify-between text-sm">
          <span className="text-woo-text-secondary">Subtotal</span>
          <span className="font-medium text-woo-text">$134.96</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-woo-text-secondary">Shipping</span>
          <span className="font-medium text-woo-text">$10.00</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-woo-text-secondary">Tax</span>
          <span className="font-medium text-woo-text">$14.51</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-woo-text pt-4 border-t border-woo-border mt-2">
          <span>Total</span>
          <span>$159.47</span>
        </div>
      </div>
    </Card>
  );
}
