import { AffiliateStat } from "@/lib/types/affiliate";
import { DollarSign, Target, TrendingUp, Users } from "lucide-react";
import { Card } from "../common/Card";

const iconMap = {
  dollar: DollarSign,
  chart: TrendingUp,
  users: Users,
  target: Target,
};
export default function AffiliateStats({ stats }: { stats: AffiliateStat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon];
        return (
          <Card
            key={index}
            className="p-3.5 bg-white border border-gray-100 shadow-sm rounded-2xl"
          >
            <div className="flex items-center justify-start">
              <div>
                <p className="text-sm">{stat.label}</p>
                <p className="text-2xl font-medium ">{stat.value}</p>
              </div>
              {stat.icon === "target" ? (
                <div className="p-2  text-purple-600">
                  <Icon size={32} />
                </div>
              ) : stat.icon === "users" ? (
                <div className="p-2  text-blue-600">
                  <Icon size={32} />
                </div>
              ) : stat.icon === "chart" ? (
                <div className="p-2  text-green-600">
                  <Icon size={32} />
                </div>
              ) : stat.icon === "dollar" ? (
                <div className="p-2  text-green-600">
                  <Icon size={32} />
                </div>
              ) : null}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
