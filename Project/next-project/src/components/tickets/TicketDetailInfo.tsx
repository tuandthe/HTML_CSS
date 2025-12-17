import { Ticket } from "@/types/ticket";
import { Card } from "../ui/Card";
import { CheckCircle2, MessageSquare, XCircle } from "lucide-react";

export default function TicketDetailInfo({ ticket }: { ticket: Ticket }) {
  return (
    <div className="space-y-6">
      {/* Ticket Information Card */}
      <Card className="p-5 shadow-sm border-gray-200 bg-white">
        <h3 className="font-bold text-gray-900 mb-4">Ticket Information</h3>
        <div className="space-y-4 text-sm">
          <div>
            {/* Category */}
            <div className="text-gray-500 mb-1">Category</div>
            <div className="font-medium bg-gray-100 text-gray-700 inline-block px-3 py-1 rounded-full">
              {ticket.category}
            </div>
          </div>
          {/* Related Order */}
          {ticket.orderId && (
            <div>
              <div className="text-gray-500 mb-1">Related Order</div>
              <div className="font-medium text-[#007042] cursor-pointer hover:underline">
                {ticket.orderId}
              </div>
            </div>
          )}
          {/* Created Date  */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <div className="text-gray-500 mb-1">Created</div>
              <div className="font-medium text-gray-900">
                {ticket.createdDate}
              </div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Last Updated</div>
              <div className="font-medium text-gray-900">
                {ticket.updatedDate}
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* Actions Card */}
      <Card className="p-5 shadow-sm border-gray-200 bg-white">
        <h3 className="font-bold text-gray-900 mb-4">Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:border-gray-300 transition-all">
            <CheckCircle2 size={18} /> Mark as Resolved
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-white hover:border-gray-300 transition-all">
            <XCircle size={18} /> Close Ticket
          </button>
        </div>
      </Card>
      {/* Help Widget */}
      <div className="bg-[#EAF7F2] p-5 rounded-xl border border-transparent">
        <div className="w-10 h-10 bg-[#007042] rounded-full flex items-center justify-center text-white mb-3 shadow-sm">
          <MessageSquare size={20} />
        </div>
        <h3 className="font-bold text-gray-900 mb-2">Need More Help?</h3>
        <p className="text-sm text-gray-600 mb-4">
          Check out our knowledge base for instant answers to common questions.
        </p>
        <button className="px-4 py-2 bg-white border border-transparent rounded-lg text-sm font-bold text-gray-700 shadow-sm hover:bg-gray-50">
          Browse Help Articles
        </button>
      </div>
    </div>
  );
}
