"use client";

import { NotFoundError } from "@/lib/errors/NotFoundError";
import { UserProfile } from "@/lib/types/user";
import { useState } from "react";

export function useProfileEdit(
  initialData: UserProfile,
  onSave: (newData: UserProfile) => Promise<void> | void,
) {
  const [formData, setFormData] = useState<UserProfile>(initialData);

  const handleChange = (field: keyof UserProfile, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!formData.firstName || !formData.lastName) {
        throw new Error("First name and Last name are required.");
      }

      await onSave(formData);
    } catch (err) {
      if (err instanceof NotFoundError) {
        return Response.json({ message: err.message }, { status: 404 });
      }
      console.log("Failed to save profile:", err);
      return Response.json(
        { message: "Internal Server Error" },
        { status: 500 },
      );
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}
