import { Card } from "@/components/common/Card";
import { LinkStats } from "@/lib/types/affiliate";
import { DollarSign, MousePointer2, TrendingUp } from "lucide-react";

export default function LinkStatsCards({ stats }: { stats: LinkStats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Clicks */}
      <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-1">Total Clicks</p>
          <p className="text-3xl font-bold text-gray-900">{stats.clicks}</p>
        </div>
        <div className="p-3 bg-blue-50 text-blue-600 rounded-full">
          <MousePointer2 size={24} />
        </div>
      </Card>
      {/* Conversions */}
      <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-1">
            Total Conversions
          </p>
          <p className="text-3xl font-bold text-gray-900">
            {stats.conversions}
          </p>
        </div>
        <div className="p-3 bg-green-50 text-green-600 rounded-full">
          <TrendingUp size={24} />
        </div>
      </Card>
      {/* Earnings */}
      <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium mb-1">
            Total Earnings
          </p>
          <p className="text-3xl font-bold text-gray-900">{stats.earnings}</p>
        </div>
        <div className="p-3 bg-[#007042]/10 text-[#007042] rounded-full">
          <DollarSign size={24} />
        </div>
      </Card>
    </div>
  );
}
