"use client";

import { useState, useEffect } from "react";
import { Ticket } from "@/lib/types/ticket";

// Giá trị khởi tạo
const initialData: Ticket = {
  id: "",
  subject: "",
  message: "",
  status: "Open",
  priority: "Medium Priority",
  createdDate: new Date().toISOString(),
  updatedDate: new Date().toISOString(),
  messagesCount: 1,
};

export function useNewTicketForm(onSubmit: (data: Ticket) => void) {
  const [formData, setFormData] = useState<Ticket>(initialData);
  const [isValid, setIsValid] = useState(false);

  // Logic Validate
  useEffect(() => {
    const { subject, category, message } = formData;
    const isFormFilled =
      subject.trim().length > 0 &&
      (category?.trim().length ?? 0) > 0 &&
      message.trim().length > 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsValid(isFormFilled);
  }, [formData]);

  // Hàm xử lý thay đổi chung cho mọi trường
  const handleChange = (field: keyof Ticket, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Hàm Submit
  const handleSubmit = () => {
    if (isValid) {
      onSubmit({
        ...formData,
        id: `TKT-${Math.floor(Math.random() * 1000)}`, // Giả lập ID
      });
    }
  };

  return {
    formData,
    isValid,
    handleChange,
    handleSubmit,
  };
}
