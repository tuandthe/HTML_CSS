import OrderInfoCards from "@/components/orders/OrderInfoCards";
import OrderItems from "@/components/orders/OrderItems";
import OrderStatusCard from "@/components/orders/OrderStatusCard";
import { Card } from "@/components/common/Card";
import { ArrowLeft, Download, MessageSquare } from "lucide-react";
import Link from "next/link";

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const orderId = (await params).id || "ORD-001";
  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/orders"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </Link>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
            <p className="text-gray-500">Order #{orderId}</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm transition-all">
          <Download size={16} /> Invoice
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          <OrderStatusCard />
          <OrderItems />

          {/* Need Help Widget */}
          <Card className="p-4 flex items-center justify-between bg-white border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-[#007042]">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Need Help?</p>
                <p className="text-xs text-gray-500">
                  Have questions about your order?
                </p>
              </div>
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold hover:bg-gray-50 transition-colors">
              Contact Support
            </button>
          </Card>
        </div>

        {/* (1/3) */}
        <div className="space-y-6">
          <OrderInfoCards />
        </div>
      </div>
    </div>
  );
}
