import StatsCard from "@/components/dashboard/StatsCard";
import ProductCard from "@/components/dashboard/ProductCard";
import ShoppingCartWidget from "@/components/dashboard/ShoppingCartWidget";
import { statsData } from "@/lib/data/stats";
import { recentProducts } from "@/lib/data/products";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-woo-text mb-2">Dashboard</h2>
        <p className="text-gray-500">
          Welcome back! Here&apos;s your account overview.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((item, index) => (
          <StatsCard key={index} item={item} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div className="xl:col-span-3">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Recently Viewed
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <ShoppingCartWidget />
      </div>
    </div>
  );
}
