import { Calendar, Truck, MapPin } from "lucide-react";
import { Card } from "@/components/common/Card";
import { Order } from "@/lib/types/order";

export default function OrderInfoCards({ order }: { order: Order }) {
  return (
    <div className="space-y-6">
      {/* Info Box */}
      <Card className="p-5 bg-woo-card border border-woo-border">
        <h4 className="font-bold text-woo-text mb-4 text-sm uppercase tracking-wide">
          Order Information
        </h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar size={18} className="text-woo-text-muted mt-0.5" />
            <div>
              <p className="text-xs text-woo-text-secondary">Order Date</p>
              <p className="text-sm font-semibold text-woo-text">
                {order.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck size={18} className="text-woo-text-muted mt-0.5" />
            <div>
              <p className="text-xs text-woo-text-secondary">
                Estimated Delivery
              </p>
              <p className="text-sm font-semibold text-woo-text">
                {order.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Shipping Address */}
      <Card className="p-5 bg-woo-card border border-woo-border">
        <h4 className="font-bold text-woo-text mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
          Shipping Address
        </h4>
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-woo-primary mt-0.5" />
          <div>
            <p className="text-sm font-bold text-woo-text">John Doe</p>
            <p className="text-xs text-woo-text-secondary mt-1 leading-relaxed">
              123 Main Street
              <br />
              San Francisco, CA 94102
              <br />
              United States
            </p>
          </div>
        </div>
      </Card>

      {/* Payment */}
      <Card className="p-5 bg-woo-card border border-woo-border">
        <h4 className="font-bold text-woo-text mb-4 text-sm uppercase tracking-wide">
          Payment Method
        </h4>
        <div className="flex items-center gap-3 bg-woo-bg p-3 rounded-lg border border-woo-border">
          <div className="w-10 h-6 bg-blue-600 rounded text-white text-[10px] flex items-center justify-center font-bold tracking-wider italic">
            VISA
          </div>
          <div>
            <p className="text-sm font-bold text-woo-text">Credit Card</p>
            <p className="text-xs text-woo-text-secondary">**** 4242</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
