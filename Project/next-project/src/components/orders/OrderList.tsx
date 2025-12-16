import { Order } from "@/types";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import Link from "next/link";
import { Eye } from "lucide-react";

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
              <span className="font-bold text-gray-900 text-lg">
                {order.id}
              </span>
              <Badge status={order.status} />
            </div>
            <p className="text-sm text-gray-500 mb-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
              <span>📅 {order.date}</span>
              <span className="hidden sm:inline mx-2">•</span>
              <span className="text-gray-700 font-medium">{order.items}</span>
            </p>
            <p className="font-bold text-gray-900 mt-2">{order.total}</p>
          </div>
          <Link
            href={`/orders/${order.id}`}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:border-gray-300 hover:shadow-sm transition-all bg-white"
          >
            <Eye size={16} /> View Details
          </Link>
        </div>
      ))}
    </Card>
  );
}
