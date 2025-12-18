"use client";

import OrderFilter from "@/components/orders/OrderFilter";
import OrderList from "@/components/orders/OrderList";
import { ordersData } from "@/lib/data/orders";
import { useState } from "react";

export default function OrderPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredOrders =
    activeTab === "All"
      ? ordersData
      : ordersData.filter((order) => order.status === activeTab);

  const counts = {
    all: ordersData.length,
    Processing: ordersData.filter((o) => o.status === "Processing").length,
    Completed: ordersData.filter((o) => o.status === "Completed").length,
    Cancelled: ordersData.filter((o) => o.status === "Cancelled").length,
  };
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Orders</h2>
        <p className="text-gray-500">Track and manage your order history.</p>
      </div>
      <div className="max-w-2xl w-full space-y-4">
        <OrderFilter
          activeTab={activeTab}
          onTabChange={setActiveTab}
          counts={counts}
        />
        <OrderList orders={filteredOrders} />
      </div>
    </div>
  );
}
