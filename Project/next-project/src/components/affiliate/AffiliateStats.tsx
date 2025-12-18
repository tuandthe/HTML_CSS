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
            className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl"
          >
            <div className="flex items-center justify-around">
              <div>
                <p className="text-sm text-woo-text-secondary">{stat.label}</p>
                <p className="text-2xl font-bold text-woo-text">{stat.value}</p>
              </div>
              {stat.icon === "target" ? (
                <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                  <Icon size={20} />
                </div>
              ) : stat.icon === "users" ? (
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                  <Icon size={20} />
                </div>
              ) : stat.icon === "chart" ? (
                <div className="p-2 bg-green-100 rounded-full text-green-600">
                  <Icon size={20} />
                </div>
              ) : (
                <div className="text-green-600 font-bold text-xl">$</div>
              )}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
