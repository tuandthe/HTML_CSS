import { Ticket } from "@/types/ticket";
import { CheckCircle2, MessageSquare, XCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function TicketDetailInfo({ ticket }: { ticket: Ticket }) {
  return (
    <div className="space-y-6">
      {/* Ticket Information Card */}
      <Card className="p-5 shadow-sm border border-gray-200 bg-white rounded-xl">
        <h3 className="font-bold text-gray-900 mb-4 text-base">
          Ticket Information
        </h3>
        <div className="space-y-5 text-sm">
          {/* Category */}
          <div>
            <div className="text-gray-500 mb-2 text-xs font-medium">
              Category
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium text-xs border border-gray-200">
              {ticket.category}
            </div>
          </div>

          {/* Related Order */}
          {ticket.orderId && (
            <div>
              <div className="text-gray-500 mb-1 text-xs font-medium">
                Related Order
              </div>
              <div className="font-bold text-[#007042] cursor-pointer hover:underline text-sm">
                {ticket.orderId}
              </div>
            </div>
          )}

          {/* Dates */}
          <div className="space-y-4 pt-1">
            <div>
              <div className="text-gray-500 mb-1 text-xs font-medium">
                Created
              </div>
              <div className="font-medium text-gray-900">
                {ticket.createdDate}
              </div>
            </div>
            <div>
              <div className="text-gray-500 mb-1 text-xs font-medium">
                Last Updated
              </div>
              <div className="font-medium text-gray-900">
                {ticket.updatedDate}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Actions Card */}
      <Card className="p-5 shadow-sm border border-gray-200 bg-white rounded-xl">
        <h3 className="font-bold text-gray-900 mb-4 text-base">Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
            <CheckCircle2 size={18} className="text-gray-500" /> Mark as
            Resolved
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
            <XCircle size={18} className="text-gray-500" /> Close Ticket
          </button>
        </div>
      </Card>

      {/* Help Widget */}
      <div className="bg-[#EAF7F2] p-5 rounded-xl border border-transparent">
        <div className="w-10 h-10 bg-[#007042] rounded-full flex items-center justify-center text-white mb-3 shadow-sm shadow-green-900/10">
          <MessageSquare size={20} />
        </div>
        <h3 className="font-bold text-gray-900 mb-2">Need More Help?</h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Check out our knowledge base for instant answers to common questions.
        </p>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
          Browse Help Articles
        </button>
      </div>
    </div>
  );
}
