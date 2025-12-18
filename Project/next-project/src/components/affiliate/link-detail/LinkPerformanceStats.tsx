import { Card } from "@/components/common/Card";
import { LinkDetailFull } from "@/lib/types/affiliate";
import { BarChart3, DollarSign, MousePointer2, TrendingUp } from "lucide-react";

export default function LinkPerformanceStats({
  link,
}: {
  link: LinkDetailFull;
}) {
  const stats = [
    {
      label: "Total Clicks",
      value: link.clicks,
      icon: MousePointer2,
      color: "text-blue-600 bg-blue-50",
    },
    {
      label: "Conversions",
      value: link.conversions,
      icon: TrendingUp,
      color: "text-green-600 bg-green-50",
    },
    {
      label: "Earnings",
      value: link.earnings,
      icon: DollarSign,
      color: "text-[#007042] bg-[#EAF7F2]",
    },
    {
      label: "Conv. Rate",
      value: `${((link.conversions / link.clicks) * 100).toFixed(2)}%`,
      icon: BarChart3,
      color: "text-purple-600 bg-purple-50",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <Card
          key={idx}
          className="p-5 bg-white border border-gray-100 shadow-sm rounded-xl"
        >
          <div className="flex justify-between items-start mb-4">
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <stat.icon size={20} />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
