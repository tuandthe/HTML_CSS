"use client";

import OrderFilter from "@/components/orders/OrderFilter";
import OrderList from "@/components/orders/OrderList";
import { useOrders } from "@/hooks/orders/useOrders";

export default function OrderPage() {
  const { filteredOrders, activeTab, setActiveTab, counts } = useOrders();

  return (
    <div className="lg:ml-64">
      <div className="p-4 lg:p-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-woo-text mb-2">Orders</h2>
            <p className="text-woo-text-secondary">
              Track and manage your order history.
            </p>
          </div>

          <div>
            <OrderFilter
              activeTab={activeTab}
              onTabChange={setActiveTab}
              counts={counts}
            />
          </div>

          <OrderList orders={filteredOrders} />
        </div>
      </div>
    </div>
  );
}
