import { Order } from "@/lib/types/order";
import { Card } from "../common/Card";
import Link from "next/link";
import { Calendar, Eye } from "lucide-react";
import { OrderBadge } from "./OrderBadge";

export default function OrderList({ orders }: { orders: Order[] }) {
  if (orders.length === 0) {
    return (
      <Card className="p-8 text-center text-woo-text-secondary bg-woo-card border border-woo-border">
        No orders found.
      </Card>
    );
  }
  return (
    <Card className="divide-y divide-woo-border overflow-hidden bg-woo-card border border-woo-border">
      <div className="p-6 font-semibold text-woo-text border-b border-woo-border bg-woo-bg/50">
        Order History
      </div>
      {orders.map((order) => (
        <div
          key={order.id}
          className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-woo-bg transition-colors"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-semibold text-woo-text text-lg">
                {order.id}
              </span>
              <OrderBadge status={order.status} />
            </div>
            <p className="text-sm text-woo-text-secondary mb-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1 inline-block" />{" "}
                {order.date}
              </span>
              <span className="hidden sm:inline mx-2">•</span>
              <span>{order.items}</span>
            </p>
            <p className="font-semibold text-woo-text mt-2">{order.total}</p>
          </div>

          <Link
            href={`/orders/${order.id}`}
            className="flex items-center gap-2 px-4 py-2 border border-woo-border bg-woo-bg rounded-3xl text-sm font-medium text-woo-text hover:bg-woo-border hover:shadow-sm transition-all"
          >
            <Eye size={16} /> View Details
          </Link>
        </div>
      ))}
    </Card>
  );
}
