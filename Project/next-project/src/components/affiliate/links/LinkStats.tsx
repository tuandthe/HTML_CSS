import { Card } from "@/components/common/Card";
import { LinkStats } from "@/lib/types/affiliate";
import { DollarSign, MousePointer, TrendingUp } from "lucide-react";

export default function LinkStatsCards({ stats }: { stats: LinkStats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Clicks */}
      <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-500 text-sm font-medium mb-1">Total Clicks</p>
          <MousePointer size={20} className="text-blue-500" />
        </div>
        <p className="text-3xl font-bold text-gray-900">{stats.clicks}</p>
      </Card>
      {/* Conversions */}
      <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <p className="text-gray-500 text-sm font-medium mb-1">
            Total Conversions
          </p>
          <TrendingUp size={24} className="text-green-500" />
        </div>
        <p className="text-3xl font-bold text-gray-900">{stats.conversions}</p>
      </Card>
      {/* Earnings */}
      <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <p className="text-woo-text-secondary text-sm mb-1">Total Earnings</p>
          <DollarSign size={20} className="text-woo-primary" />
        </div>
        <p className="text-3xl font-bold text-woo-text">{stats.earnings}</p>
      </Card>
    </div>
  );
}
