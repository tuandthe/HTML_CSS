import { Order } from "@/lib/types/order";
import { Card } from "../common/Card";
import Link from "next/link";
import { Calendar, Eye } from "lucide-react";
import { OrderBadge } from "./OrderBadge";

export default function OrderList({ orders }: { orders: Order[] }) {
  if (orders.length === 0) {
    return (
      <Card className="p-8 text-center text-gray-500">No orders found.</Card>
    );
  }
  return (
    <Card className="divide-y divide-gray-100 overflow-hidden">
      <div className="p-4 font-semibold text-gray-900 border-b border-gray-200 bg-gray-50/50">
        Order History
      </div>
      {orders.map((order) => (
        <div
          key={order.id}
          className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-gray-50 transition-colors"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-semibold  text-gray-900 text-lg">
                {order.id}
              </span>
              <OrderBadge status={order.status} />
            </div>
            <p className="text-sm text-gray-500 mb-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
              <Calendar size={14} className="inline-block mr-1" />
              <span> {order.date}</span>
              <span className="hidden sm:inline mx-2">•</span>
              <span>{order.items}</span>
            </p>
            <p className="font-semibold text-gray-900 mt-2">{order.total}</p>
          </div>
          <Link
            href={`/orders/${order.id}`}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-gray-100 rounded-3xl text-sm font-medium text-gray-700   hover:shadow-sm transition-all"
          >
            <Eye size={16} /> View Details
          </Link>
        </div>
      ))}
    </Card>
  );
}
