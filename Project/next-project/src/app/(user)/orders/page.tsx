import OrderFilter from "@/components/orders/OrderFilter";
import OrderList from "@/components/orders/OrderList";
// import { useOrders } from "@/hooks/orders/useOrders";
import { orderStatusWithAll } from "@/lib/types/order";
import { orderService } from "@/services/order.service";

export default async function OrderPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  // const { filteredOrders, activeTab, setActiveTab, counts } = useOrders();
  const statusParam = (await searchParams).status || orderStatusWithAll.All;

  const [orders, counts] = await Promise.all([
    orderService.getAllOrders(statusParam),
    orderService.getOrderCounts(),
  ]);

  return (
    <div className="lg:ml-64">
      <div className="p-4 lg:p-8">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h2 className="text-3xl font-bold text-woo-text mb-2">Orders</h2>
            <p className="text-woo-text-secondary">
              Track and manage your order history.
            </p>
          </div>

          <div>
            <OrderFilter counts={counts} />
          </div>

          <OrderList orders={orders} />
        </div>
      </div>
    </div>
  );
}
