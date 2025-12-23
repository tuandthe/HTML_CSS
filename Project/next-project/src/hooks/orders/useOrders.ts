import { useState, useEffect, useMemo } from "react";
import { Order } from "@/lib/types/order";
import { orderApi } from "@/lib/api-client/orderApi";
import { NotFoundError } from "@/lib/errors/NotFoundError";

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
        if (error instanceof NotFoundError) {
          return Response.json({ message: error.message }, { status: 404 });
        }
        console.error(error);
        return Response.json(
          { message: "Internal Server Error" },
          { status: 500 },
        );
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
