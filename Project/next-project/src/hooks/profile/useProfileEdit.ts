"use client";

import { UserProfile } from "@/lib/types/user";
import { useState } from "react";

export function useProfileEdit(
  initialData: UserProfile,
  onSave: (newData: UserProfile) => Promise<void> | void,
) {
  const [formData, setFormData] = useState<UserProfile>(initialData);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof UserProfile, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setError(null);

    try {
      if (!formData.firstName || !formData.lastName) {
        throw new Error("First name and Last name are required.");
      }

      await onSave(formData);
      
    } catch (err) {
      console.error("Profile update error:", err);
      setError("Failed to update profile.");
    } 
  };

  return {
    formData,
    error,        
    handleChange,
    handleSubmit,
  };
}