"use client";

import { Ticket } from "@/lib/types/ticket";
import { useEffect, useState } from "react";
import { Card } from "../common/Card";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { ticketCategories } from "@/lib/data/tickets";
import { Paperclip, Send } from "lucide-react";

interface NewTicketFormProps {
  onCancel: () => void;
  onSubmit: (data: Ticket) => void;
}
export default function NewTicketForm({
  onCancel,
  onSubmit,
}: NewTicketFormProps) {
  const [isValid, setIsValid] = useState(false);

  const [formData, setFormData] = useState<Ticket>({
    id: "",
    subject: "",
    message: "",
    status: "Open",
    priority: "Medium Priority",
    createdDate: new Date().toISOString(),
    updatedDate: new Date().toISOString(),
    messagesCount: 1,
  });

  useEffect(() => {
    const { subject, category, message } = formData;
    const isFormFilled =
      subject.trim().length > 0 &&
      (category?.trim().length ?? 0) > 0 &&
      message.trim().length > 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsValid(isFormFilled);
  }, [formData]);

  const handleSubmit = () => {
    if (isValid) {
      onSubmit({
        ...formData,
        id: `TKT-${Math.floor(Math.random() * 1000)}`,
      });
    }
  };
  return (
    <Card className="p-6 mb-6 animate-in fade-in slide-in-from-top-4 duration-300">
      {/* Header Form */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg text-gray-900">Create New Ticket</h3>
        <button
          onClick={onCancel}
          className="px-4 py-1.5 text-sm font-medium text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
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
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
        {/* Row: Category + Order Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Category*
            </label>
            <Select
              options={ticketCategories.filter(
                (cat) => cat !== "All Categories",
              )}
              value={formData.category || ""}
              onChange={(val) =>
                setFormData({
                  ...formData,
                  category: val as Ticket["category"],
                })
              }
              placeholder="Select category"
              className="border border-gray-300 rounded-lg"
            />
          </div>
          <Input
            label="Order Number (Optional)"
            placeholder="e.g., ORD-12345"
            value={formData.orderId}
            onChange={(e) =>
              setFormData({ ...formData, orderId: e.target.value })
            }
          />
        </div>
        {/* Message (Textarea) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Message*
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007042] focus:border-transparent transition-all placeholder:text-gray-400 resize-none"
            placeholder="Describe your issue in detail..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
        {/* Attachments (Fake UI) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Attachments (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className="p-3 bg-gray-100 rounded-full mb-3 group-hover:bg-white group-hover:shadow-sm transition-all">
              <Paperclip size={20} className="text-gray-500" />
            </div>
            <p className="text-sm text-gray-500 mb-2">
              Drag and drop files here, or click to browse
            </p>
            {/* Nút giả fix cứng */}
            <button className="px-4 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-bold text-gray-700 shadow-sm pointer-events-none">
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
                  ? "bg-[#007042] hover:bg-[#005c36] text-white cursor-pointer transform active:scale-95"
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
