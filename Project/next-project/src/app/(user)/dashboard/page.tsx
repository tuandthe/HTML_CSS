import StatsCard from "@/components/dashboard/StatsCard";
import ProductCard from "@/components/dashboard/ProductCard";
import ShoppingCartWidget from "@/components/dashboard/ShoppingCartWidget";
import { statsData } from "@/lib/data/stats";
import { recentProducts } from "@/lib/data/products";

export default function DashboardPage() {
  return (
    <div className="lg:ml-64">
      <div className="p-4 lg:p-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="mb-8">
              <h1 className="text-3xl font-bold text-woo-text mb-2">
                Dashboard
              </h1>
              <p className="text-woo-text-secondary">
                Welcome back! Here&apos;s your account overview.
              </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 !mt-0 !mb-8">
            {statsData.map((item, index) => (
              <StatsCard key={index} item={item} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 !mt-0">
            {/* Left Column (Products) */}
            <div className="xl:col-span-3">
              <div className="mb-6">
              <h2 className="text-xl font-semibold text-woo-text">
                Recently Viewed
              </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            {/* Right Column (Cart Widget) */}
            <div className="xl:col-span-1">
              <ShoppingCartWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
