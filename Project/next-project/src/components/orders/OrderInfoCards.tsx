import { Calendar, Truck, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function OrderInfoCards() {
  return (
    <div className="space-y-6">
      {/* Info Box */}
      <Card className="p-5">
        <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
          Order Information
        </h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Calendar size={18} className="text-gray-400 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500">Order Date</p>
              <p className="text-sm font-semibold text-gray-900">
                Jan 15, 2024
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck size={18} className="text-gray-400 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500">Estimated Delivery</p>
              <p className="text-sm font-semibold text-gray-900">
                Jan 20, 2024
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Shipping Address */}
      <Card className="p-5">
        <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
          Shipping Address
        </h4>
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-[#007042] mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              123 Main Street
              <br />
              San Francisco, CA 94102
              <br />
              United States
            </p>
          </div>
        </div>
      </Card>

      {/* Payment */}
      <Card className="p-5">
        <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
          Payment Method
        </h4>
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
          <div className="w-10 h-6 bg-blue-600 rounded text-white text-[10px] flex items-center justify-center font-bold tracking-wider italic">
            VISA
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Credit Card</p>
            <p className="text-xs text-gray-500">**** 4242</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
