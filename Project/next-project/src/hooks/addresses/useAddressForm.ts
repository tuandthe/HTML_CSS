import { Address } from "@/lib/types/address";
import { useState } from "react";

const defaultValues = {
  type: "Billing" as "Billing" | "Shipping",
  firstName: "",
  lastName: "",
  company: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  zipCode: "",
  country: "United States",
  phone: "",
  isDefault: false,
};

export function useAddressForm(
  initialData: Address | null,
  onSave: (data: Omit<Address, "id">) => void,
) {
  const [formData, setFormData] = useState({
    type: initialData?.type || defaultValues.type,
    firstName: initialData?.firstName || defaultValues.firstName,
    lastName: initialData?.lastName || defaultValues.lastName,
    company: initialData?.company || defaultValues.company,
    addressLine1: initialData?.addressLine1 || defaultValues.addressLine1,
    addressLine2: initialData?.addressLine2 || defaultValues.addressLine2,
    city: initialData?.city || defaultValues.city,
    state: initialData?.state || defaultValues.state,
    zipCode: initialData?.zipCode || defaultValues.zipCode,
    country: initialData?.country || defaultValues.country,
    phone: initialData?.phone || defaultValues.phone,
    isDefault: initialData?.isDefault || defaultValues.isDefault,
  });
  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };
  return {
    formData,
    handleChange,
    handleSubmit,
  };
}
