import OrderInfoCards from "@/components/orders/OrderInfoCards";
import OrderItems from "@/components/orders/OrderItems";
import OrderStatusCard from "@/components/orders/OrderStatusCard";
import { Card } from "@/components/common/Card";
import { ArrowLeft, Download, MessageSquare } from "lucide-react";
import Link from "next/link";
import { orderService } from "@/services/order.service";
import { notFound } from "next/navigation";

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const orderId = (await params).id;

  const order = await orderService.getOrderById(orderId);
  if (!order) {
    return notFound();
  }

  return (
    <div className="lg:ml-64 !w-full max-w-7xl">
      <div className="p-4 lg:p-8">
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/orders"
            className="p-2 hover:bg-woo-bg rounded-full transition-colors"
          >
            <ArrowLeft size={20} className="text-woo-text-secondary" />
          </Link>
          <div className="flex-1">
            <div>
              <h2 className="text-2xl font-bold text-woo-text">
                Order Details
              </h2>
              <p className="text-woo-text-secondary">Order #{orderId}</p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-woo-border bg-woo-card rounded-lg text-sm font-medium text-woo-text hover:bg-woo-bg shadow-sm transition-all">
            <Download size={16} /> Invoice
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            <OrderStatusCard status={order?.status} />
            <OrderItems order={order} />

            {/* Need Help Widget */}
            <Card className="p-4 flex items-center justify-between bg-woo-card border border-woo-border">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-woo-primary-light rounded-full flex items-center justify-center text-woo-primary">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm text-woo-text">Need Help?</p>
                  <p className="text-xs text-woo-text-secondary">
                    Have questions about your order?
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 border border-woo-border rounded-lg text-xs font-bold hover:bg-woo-bg transition-colors text-woo-text">
                Contact Support
              </button>
            </Card>
          </div>

          {/* Right Column (1/3) */}
          <div className="space-y-6">
            <OrderInfoCards order={order} />
          </div>
        </div>
      </div>
    </div>
  );
}
