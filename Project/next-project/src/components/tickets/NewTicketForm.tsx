"use client";

import { CreateTicketDTO } from "@/lib/types/ticket";
import { Card } from "../common/Card";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { ticketCategories } from "@/lib/data/tickets";
import { Paperclip, Send } from "lucide-react";
import { useNewTicketForm } from "@/hooks/tickets/useNewTicketForm";

interface NewTicketFormProps {
  onCancel: () => void;
  onSubmit: (data: CreateTicketDTO) => void;
}
export default function NewTicketForm({
  onCancel,
  onSubmit,
}: NewTicketFormProps) {
  const { formData, isValid, handleChange, handleSubmit } =
    useNewTicketForm(onSubmit);
    
  return (
    <Card className="p-6 mb-6 animate-in fade-in slide-in-from-top-4 duration-300 bg-woo-card border border-woo-border">
      {/* Header Form */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg text-woo-text">Create New Ticket</h3>
        <button
          onClick={onCancel}
          className="px-4 py-1.5 text-sm font-medium text-woo-text-secondary border border-woo-border rounded-lg hover:bg-woo-bg hover:text-woo-text transition-colors"
        >
          Cancel
        </button>
      </div>
      <div className="space-y-6">
        {/* Subject */}
        <Input
          label="Subject*"
          placeholder="Briefly describe your issue"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
        />
        {/* Row: Category + Order Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="block text-sm font-medium text-woo-text mb-1.5">
              Category*
            </label>
            <Select
              options={ticketCategories.filter(
                (cat) => cat !== "All Categories",
              )}
              value={formData.category || ""}
              onChange={(val) => handleChange("category", val)}
              placeholder="Select category"
              className="border border-woo-border rounded-lg bg-woo-bg text-woo-text"
            />
          </div>
          <Input
            label="Order Number (Optional)"
            placeholder="e.g., ORD-12345"
            value={formData.orderId}
            onChange={(e) => handleChange("orderId", e.target.value)}
          />
        </div>
        {/* Message (Textarea) */}
        <div>
          <label className="block text-sm font-medium text-woo-text mb-1.5">
            Message*
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 border border-woo-border rounded-lg text-sm text-woo-text bg-woo-bg focus:outline-none focus:ring-2 focus:ring-woo-primary focus:border-transparent transition-all placeholder:text-woo-text-muted resize-none"
            placeholder="Describe your issue in detail..."
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
        </div>
        {/* Attachments (Fake UI) */}
        <div>
          <label className="block text-sm font-medium text-woo-text mb-1.5">
            Attachments (Optional)
          </label>
          <div className="border-2 border-dashed border-woo-border rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-woo-bg transition-colors cursor-pointer group">
            <div className="p-3 bg-woo-bg rounded-full mb-3 group-hover:bg-woo-card group-hover:shadow-sm transition-all">
              <Paperclip size={20} className="text-woo-text-secondary" />
            </div>
            <p className="text-sm text-woo-text-secondary mb-2">
              Drag and drop files here, or click to browse
            </p>
            {/* Nút giả fix cứng */}
            <button className="px-4 py-1.5 bg-woo-card border border-woo-border rounded-lg text-xs font-bold text-woo-text shadow-sm pointer-events-none">
              Choose Files
            </button>
          </div>
        </div>
        {/* Footer Actions */}
        <div className="pt-2">
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className={`
              flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm
              ${
                isValid
                  ? "bg-woo-primary hover:bg-woo-primary-hover text-white cursor-pointer transform active:scale-95"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-70"
              }
            `}
          >
            <Send size={16} />
            Submit Ticket
          </button>
        </div>
      </div>
    </Card>
  );
}