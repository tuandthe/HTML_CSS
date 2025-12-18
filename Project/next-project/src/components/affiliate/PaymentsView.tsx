import { PaymentHistoryItem } from "@/lib/types/affiliate";
import { Card } from "../common/Card";

export default function PaymentsView({
  history,
}: {
  history: PaymentHistoryItem[];
}) {
  return (
    <Card className="p-6 bg-white border border-gray-100 shadow-sm rounded-2xl">
      <h3 className="text-gray-900 font-medium text-lg mb-6">
        Payment History
      </h3>
      <div className="space-y-4">
        {history.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border border-woo-border rounded-lg"
          >
            <div>
              <div className="font-medium text-woo-text">{item.date}</div>
              <div className="text-sm text-gray-500">{item.method}</div>
            </div>
            <div className="text-right">
              <p className="font-bold text-woo-text">{item.amount}</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
