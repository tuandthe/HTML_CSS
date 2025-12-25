import { Order } from "@/lib/types/order";
import { Card } from "../common/Card";
import { Package } from "lucide-react";

export default function OrderItems({ order }: { order: Order | null }) {
  if (!order) return null;
  const subtotal = order.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const total = subtotal + 10 + 14.51;
  return (
    <Card className="overflow-hidden bg-woo-card border border-woo-border">
      <div className="p-4 border-b border-woo-border font-semibold bg-woo-bg/50 text-woo-text">
        Order Items
      </div>

      <div className="divide-y divide-woo-border">
        {order.items.map((item) => (
          <div
            key={item.id}
            className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-woo-bg rounded-lg shrink-0 flex items-center justify-center border border-woo-border">
                <Package size={24} className="text-woo-text-muted" />
              </div>
              <div>
                <p className="font-bold text-woo-text">{item.product.name}</p>
                <p className="text-sm text-woo-text-secondary mt-1">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-bold text-woo-text">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <p className="text-xs text-woo-text-muted">
                ${item.price.toFixed(2)} each
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="bg-woo-bg/50 p-6 space-y-3 border-t border-woo-border">
        <div className="flex justify-between text-sm">
          <span className="text-woo-text-secondary">Subtotal</span>
          <span className="font-medium text-woo-text">
            ${`${subtotal.toFixed(2)}`}
          </span>
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
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </Card>
  );
}
