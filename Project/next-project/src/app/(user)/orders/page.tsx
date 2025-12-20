"use client";

import OrderFilter from "@/components/orders/OrderFilter";
import OrderList from "@/components/orders/OrderList";
import { useOrders } from "@/hooks/orders/useOrders";
import { ordersData } from "@/lib/data/orders";

export default function OrderPage() {
  const { filteredOrders, activeTab, setActiveTab, counts } =
    useOrders(ordersData);
  return (
    <div className="space-y-8 max-w-xl">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-woo-text mb-2">Orders</h2>
        <p className="text-gray-500">Track and manage your order history.</p>
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
  );
}
