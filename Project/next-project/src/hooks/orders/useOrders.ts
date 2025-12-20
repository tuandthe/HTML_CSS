"use client";

import { Order } from "@/lib/types/order";
import { useMemo, useState } from "react";

export function useOrders(orders: Order[]) {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredOrders = useMemo(() => {
    return activeTab === "All"
      ? orders
      : orders.filter((order) => order.status === activeTab);
  }, [activeTab, orders]);

  const counts = useMemo(() => {
    return {
      all: orders.length,
      Processing: orders.filter((o) => o.status === "Processing").length,
      Completed: orders.filter((o) => o.status === "Completed").length,
      Cancelled: orders.filter((o) => o.status === "Cancelled").length,
    };
  }, [orders]);
  return {
    filteredOrders,
    activeTab,
    setActiveTab,
    counts,
  };
}
