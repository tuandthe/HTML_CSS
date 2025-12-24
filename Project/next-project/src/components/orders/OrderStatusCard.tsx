import { Truck } from "lucide-react";
import { Card } from "../common/Card";
import { OrderBadge } from "./OrderBadge";
import { orderStatus } from "@/lib/types/order";

export default function OrderStatusCard({ status }: { status: orderStatus }) {
  return (
    <Card className="p-6 bg-woo-card border border-woo-border">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-woo-text">Order Status</h3>
        <OrderBadge status={status} />
      </div>

      {/* Timeline */}
      <div className="relative pl-4 border-l-2 border-woo-border space-y-8 ml-2">
        {/* Step 1: Active */}
        <div className="relative">
          <div className="absolute -left-[23px] top-0 bg-woo-primary w-5 h-5 rounded-full border-4 border-woo-card shadow-sm flex items-center justify-center"></div>
          <div>
            <p className="font-bold text-woo-text text-sm">Order Placed</p>
            <p className="text-xs text-woo-text-secondary mt-0.5">
              Jan 15, 2024, 10:30 AM
            </p>
          </div>
        </div>

        {/* Step 2: Active */}
        <div className="relative">
          <div className="absolute -left-[23px] top-0 bg-woo-primary w-5 h-5 rounded-full border-4 border-woo-card shadow-sm"></div>
          <div>
            <p className="font-bold text-woo-text text-sm">Processing</p>
            <p className="text-xs text-woo-text-secondary mt-0.5">
              Jan 15, 2024, 2:45 PM
            </p>
          </div>
        </div>

        {/* Step 3: Inactive */}
        <div className="relative opacity-40">
          <div className="absolute -left-[23px] top-0 bg-gray-300 w-5 h-5 rounded-full border-4 border-woo-card"></div>
          <div>
            <p className="font-bold text-woo-text text-sm">Shipped</p>
            <p className="text-xs text-woo-text-secondary mt-0.5">Pending</p>
          </div>
        </div>
      </div>

      {/* Tracking Box */}
      <div className="mt-8 p-4 bg-woo-bg rounded-xl border border-woo-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs text-woo-text-secondary uppercase font-semibold tracking-wider">
            Tracking Number
          </p>
          <p className="font-mono font-bold text-woo-text text-lg mt-1">
            TRK123456789
          </p>
        </div>
        <button className="bg-woo-primary text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-woo-primary-hover transition-colors shadow-md w-full sm:w-auto flex items-center justify-center gap-2">
          <Truck size={18} /> Track Package
        </button>
      </div>
    </Card>
  );
}
