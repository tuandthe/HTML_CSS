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
        {/* Pending Commissions Card */}
        <Card className=" bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col  gap-6">
          <div className="grid auto-rows-min grid-rows-1 items-start gap-1.5 px-6 pt-6">
            <h4>Pending Commissions</h4>
          </div>
          <div className="px-6 pb-6">
            <div className="text-center py-4">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {payment.pending}
              </div>

              <p className="text-sm text-gray-500 mb-6">
                Will be paid on next payout date
              </p>
              <button className="px-6 py-2.5 bg-gray-50 border border-gray-200  rounded-full text-sm font-semibold text-gray-700">
                View Details
              </button>
            </div>
          </div>
        </Card>

        {/* Available for Withdrawal Card */}
        <Card className=" bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col gap-6">
          <div className="grid auto-rows-min grid-rows-1 items-start gap-1.5 px-6 pt-6">
            <h4>Available for Withdrawal</h4>
          </div>
          <div className="px-6 pb-6">
            <div className="text-center py-4">
              <div className="text-3xl font-bold text-[#007042] mb-2">
                {payment.available}
              </div>
              <p className="text-sm text-gray-500 mb-6">Ready to withdraw</p>
              <button className="px-6 py-2.5 bg-[#007042] text-white rounded-full text-sm font-semibold hover:bg-[#005c36] transition-colors">
                Request Payout
              </button>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Performance Section */}
      <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
        <h4 className="mb-4">Recent Performance</h4>
        <div className="space-y-4">
          {performance.map((item) => (
            <div key={item.id} className="bg-gray-50 p-4 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span>{item.clicks}</span>
                <span>{item.conversions}</span>
                <span className="font-bold text-[#007042]">
                  {item.earnings}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
