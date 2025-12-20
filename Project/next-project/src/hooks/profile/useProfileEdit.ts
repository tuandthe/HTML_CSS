"use client";

import { UserProfile } from "@/lib/types/user";
import { useState } from "react";

export function useProfileEdit(
  initialData: UserProfile,
  onSave: (newData: UserProfile) => void,
) {
  const [formData, setFormData] = useState<UserProfile>(initialData);
  const handleChange = (field: keyof UserProfile, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };
  return { formData, handleChange, handleSubmit };
}
