import { Card } from "@/components/common/Card";
import { StatItem } from "@/lib/types/product";

export default function StatsCard({ item }: { item: StatItem }) {
  const Icon = item.icon;
  return (
    <Card className="p-6 rounded-2xl shadow-woo hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105 active:scale-98">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-woo-text-secondary mb-1">{item.label}</p>
          <p className="text-3xl font-bold text-woo-text">{item.value}</p>
        </div>
        <div className="w-12 h-12 bg-green-800/10 text-green-800 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
      </div>
    </Card>
  );
}
