import { Ticket } from "@/lib/types/ticket";
import { CheckCircle2, MessageSquare, XCircle } from "lucide-react";
import { Card } from "@/components/common/Card";

export default function TicketDetailInfo({ ticket }: { ticket: Ticket }) {
  return (
    <div className="space-y-6">
      {/* Ticket Information Card */}
      <Card className="p-5 shadow-sm border border-woo-border bg-woo-card rounded-xl">
        <h3 className="font-bold text-woo-text mb-4 text-base">
          Ticket Information
        </h3>
        <div className="space-y-5 text-sm">
          {/* Category */}
          <div>
            <div className="text-woo-text-secondary mb-2 text-xs font-medium">
              Category
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-woo-bg text-woo-text font-medium text-xs border border-woo-border">
              {ticket.category}
            </div>
          </div>

          {/* Related Order */}
          {ticket.orderId && (
            <div>
              <div className="text-woo-text-secondary mb-1 text-xs font-medium">
                Related Order
              </div>
              <div className="font-bold text-woo-primary cursor-pointer hover:underline text-sm">
                {ticket.orderId}
              </div>
            </div>
          )}

          {/* Dates */}
          <div className="space-y-4 pt-1">
            <div>
              <div className="text-woo-text-secondary mb-1 text-xs font-medium">
                Created
              </div>
              <div className="font-medium text-woo-text">
                {ticket.createdDate}
              </div>
            </div>
            <div>
              <div className="text-woo-text-secondary mb-1 text-xs font-medium">
                Last Updated
              </div>
              <div className="font-medium text-woo-text">
                {ticket.updatedDate}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Actions Card */}
      <Card className="p-5 shadow-sm border border-woo-border bg-woo-card rounded-xl">
        <h3 className="font-bold text-woo-text mb-4 text-base">Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-woo-card border border-woo-border rounded-lg text-sm font-semibold text-woo-text hover:bg-woo-bg hover:border-woo-border-hover transition-all shadow-sm">
            <CheckCircle2 size={18} className="text-woo-text-secondary" /> Mark
            as Resolved
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-woo-card border border-woo-border rounded-lg text-sm font-semibold text-woo-text hover:bg-woo-bg hover:border-woo-border-hover transition-all shadow-sm">
            <XCircle size={18} className="text-woo-text-secondary" /> Close
            Ticket
          </button>
        </div>
      </Card>

      {/* Help Widget */}
      <div className="bg-green-50 p-5 rounded-xl border border-transparent">
        <div className="w-10 h-10 bg-woo-primary rounded-full flex items-center justify-center text-white mb-3 shadow-sm shadow-green-900/10">
          <MessageSquare size={20} />
        </div>
        <h3 className="font-bold text-woo-text mb-2">Need More Help?</h3>
        <p className="text-sm text-woo-text-secondary mb-4 leading-relaxed">
          Check out our knowledge base for instant answers to common questions.
        </p>
        <button className="px-4 py-2 bg-woo-card border border-woo-border rounded-lg text-sm font-bold text-woo-text shadow-sm hover:bg-woo-bg transition-colors">
          Browse Help Articles
        </button>
      </div>
    </div>
  );
}
