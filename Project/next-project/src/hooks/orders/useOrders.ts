import { useState, useEffect, useMemo } from "react";
import { Order } from "@/lib/types/order";
import { orderApi } from "@/lib/api-client/orderApi";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [activeTab, setActiveTab] = useState<string>("All");

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const data = await orderApi.getAll();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

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
    isLoading,      
  };
}