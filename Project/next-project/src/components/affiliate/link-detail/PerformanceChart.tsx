import { Card } from "@/components/common/Card";
import { ChartDataPoint } from "@/lib/types/affiliate";

export default function PerformanceChart({ data }: { data: ChartDataPoint[] }) {
  const maxVal = Math.max(...data.map((d) => d.clicks));
  return (
    <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
      <h3 className="font-bold text-gray-900 mb-6">
        Performance Over Time (Last 7 Days)
      </h3>
      <div className="space-y-6">
        {data.map((point, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700">{point.date}</span>
              <div className="flex gap-4 text-gray-500">
                <span>{point.clicks} clicks</span>
                <span>{point.conversions} conversions</span>
                <span className="font-bold text-[#007042]">
                  {point.earnings}
                </span>
              </div>
            </div>
            {/* Progress Bars */}
            <div className="flex gap-2">
              {/* Clicks Bar */}
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${(point.clicks / maxVal) * 80}%` }}
                />
              </div>
              {/* Conversions Bar */}
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500 rounded-full transition-all duration-500"
                  style={{ width: `${(point.conversions / maxVal) * 80}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-gray-600">Clicks</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-gray-600">Conversions</span>
        </div>
      </div>
    </Card>
  );
}
