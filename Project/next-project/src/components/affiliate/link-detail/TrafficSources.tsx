import { Card } from "@/components/common/Card";
import { TrafficSource } from "@/lib/types/affiliate";
import { Facebook, Instagram, Link2, Share2, Twitter } from "lucide-react";

const iconMap = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  direct: Link2,
  other: Share2,
};
export default function TrafficSources({
  sources,
}: {
  sources: TrafficSource[];
}) {
  return (
    <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-xl">
      <h3 className="font-bold text-gray-900 mb-6">Top Traffic Sources</h3>
      <div className="space-y-4">
        {sources.map((src, idx) => {
          const Icon = iconMap[src.icon] || Share2;
          return (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-gray-500" />
                <span className="font-medium text-gray-700">{src.source}</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-gray-500">
                  Clicks: <b className="text-gray-900">{src.clicks}</b>
                </span>
                <span className="text-gray-500">
                  Conv: <b className="text-gray-900">{src.conversions}</b>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
