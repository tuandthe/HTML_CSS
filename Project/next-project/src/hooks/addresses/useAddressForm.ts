import { Address, addressType } from "@/lib/types/address";
import { useState } from "react";

const defaultValues = {
  type: "Billing" as addressType,
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
  onSave: (data: Omit<Address, "id">) => Promise<void> | void,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      if (!formData.firstName || !formData.addressLine1) {
        throw new Error("Please fill in required fields");
      }
      await onSave(formData); 

    } catch (err) {
      console.error("Submit error:", err);
    } 
  };
  return {
    formData,
    handleChange,
    handleSubmit,
  };
}
