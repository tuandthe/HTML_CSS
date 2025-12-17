"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Address } from "@/types/address";
import { cn } from "@/lib/utils";
import { Select } from "../ui/Select";
import { countries } from "@/data/addresses";

interface AddressFormProps {
  initialData?: Address | null;
  onSave: (data: Omit<Address, "id">) => void;
  onCancel: () => void;
  className?: string;
}

export default function AddressForm({
  initialData,
  onSave,
  onCancel,
  className,
}: AddressFormProps) {
  const [formData, setFormData] = useState({
    type: initialData?.type || ("Billing" as "Billing" | "Shipping"),
    firstName: initialData?.firstName || "",
    lastName: initialData?.lastName || "",
    company: initialData?.company || "",
    addressLine1: initialData?.addressLine1 || "",
    addressLine2: initialData?.addressLine2 || "",
    city: initialData?.city || "",
    state: initialData?.state || "",
    zipCode: initialData?.zipCode || "",
    country: initialData?.country || "United States",
    phone: initialData?.phone || "",
    isDefault: initialData?.isDefault || false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Card
      className={cn(
        "p-6 border-[#007042] border-2 shadow-md h-full",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <MapPin size={20} className="text-[#007042]" />
          <h3 className="font-bold text-lg text-gray-900">
            {initialData ? "Edit Address" : "Add New Address"}
          </h3>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Radio Type */}
        <div className="flex gap-6 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              className="accent-[#007042] w-4 h-4"
              checked={formData.type === "Billing"}
              onChange={() => handleChange("type", "Billing")}
            />
            <span className="text-sm font-medium">Billing</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="type"
              className="accent-[#007042] w-4 h-4"
              checked={formData.type === "Shipping"}
              onChange={() => handleChange("type", "Shipping")}
            />
            <span className="text-sm font-medium">Shipping</span>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name*"
            required
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
          <Input
            label="Last Name*"
            required
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>

        <Input
          label="Company"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />
        <Input
          label="Address Line 1*"
          required
          value={formData.addressLine1}
          onChange={(e) => handleChange("addressLine1", e.target.value)}
        />
        <Input
          label="Address Line 2"
          value={formData.addressLine2}
          onChange={(e) => handleChange("addressLine2", e.target.value)}
        />

        <div className="grid grid-cols-3 gap-4">
          <Input
            label="City*"
            required
            value={formData.city}
            onChange={(e) => handleChange("city", e.target.value)}
          />
          <Input
            label="State*"
            required
            value={formData.state}
            onChange={(e) => handleChange("state", e.target.value)}
          />
          <Input
            label="Zip*"
            required
            value={formData.zipCode}
            onChange={(e) => handleChange("zipCode", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Country*
            </label>
            <Select
              options={countries}
              value={formData.country}
              onChange={(val) => handleChange("country", val)}
              placeholder="Select Country"
            />
          </div>
          <Input
            label="Phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-100 mt-4">
          <button
            type="submit"
            className="bg-[#007042] hover:bg-[#005c36] text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm flex-1"
          >
            {initialData ? "Save Changes" : "Save Address"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold text-sm transition-colors flex-1"
          >
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
}
