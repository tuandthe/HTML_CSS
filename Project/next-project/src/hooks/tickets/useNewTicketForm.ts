"use client";

import { useState, useEffect } from "react";
import { CreateTicketDTO } from "@/lib/types/ticket";

const defaultValues: CreateTicketDTO = {
  subject: "",
  message: "",
  priority: "Medium Priority",
  orderId: "", 
};

export function useNewTicketForm(
  onSubmit: (data: CreateTicketDTO) => Promise<void> | void
) {
  const [formData, setFormData] = useState<CreateTicketDTO>(defaultValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { subject, category, message } = formData;
    const isFormFilled =
      subject.trim().length > 0 &&
      (category?.trim().length ?? 0) > 0 &&
      message.trim().length > 0;
    setIsValid(isFormFilled);
  }, [formData]);

  const handleChange = (
    field: keyof CreateTicketDTO, 
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault(); 

    if (!isValid) return;

    setError(null);
    setIsSubmitting(true); 

    try {
      await onSubmit(formData);
      
      setFormData(defaultValues);
    } catch (err) {
      console.error("Submit error:", err);
      setError("Failed to create ticket");
    } finally {
      setIsSubmitting(false); 
    }
  };

  return {
    formData,
    isValid,
    isSubmitting, 
    error,        
    handleChange,
    handleSubmit,
  };
}