import { PaymentOverview, PerformanceItem } from "@/lib/types/affiliate";
import { Card } from "../common/Card";

interface DashboardViewProps {
  payment: PaymentOverview;
  performance: PerformanceItem[];
}
export default function DashboardView({
  payment,
  performance,
}: DashboardViewProps) {
  return (
    <div className="space-y-6">
      {/* Payment Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col items-center justify-center text-center py-10">
          <h3 className="text-gray-600 font-medium mb-2">
            Pending Commissions
          </h3>
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {payment.pending}
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Will be paid on next payout date
          </p>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            View Details
          </button>
        </Card>
        <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col items-center justify-center text-center py-10">
          <h3 className="text-gray-600 font-medium mb-2">
            Available for Withdrawal
          </h3>
          <div className="text-3xl font-bold text-[#007042] mb-2">
            {payment.available}
          </div>
          <p className="text-sm text-gray-400 mb-6">Ready to withdraw</p>
          <button className="px-4 py-2 bg-[#007042] text-white rounded-lg text-sm font-semibold hover:bg-[#005c36] transition-colors">
            Request Payout
          </button>
        </Card>
      </div>
      {/* Recent Performance Section */}
      <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
        <h3 className="text-gray-900 font-bold mb-4">Recent Performance</h3>
        <div className="space-y-4">
          {performance.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-4 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                  <span>{item.clicks}</span>
                  <span>{item.conversions}</span>
                  <div className="font-bold text-[#007042]">
                    {item.earnings}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
