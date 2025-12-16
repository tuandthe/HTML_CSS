import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { StatItem } from "@/types";

export default function StatsCard({ item }: { item: StatItem }) {
  const Icon = item.icon;
  const Wrapper = item.href ? Link : "div";
  const props = item.href ? { href: item.href } : {};

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Wrapper {...props} className="block h-full">
      <Card className="p-6 h-full flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
        <div>
          <p className="text-sm text-gray-500 font-medium">{item.label}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{item.value}</p>
        </div>
        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
          <Icon size={24} />
        </div>
      </Card>
    </Wrapper>
  );
}
