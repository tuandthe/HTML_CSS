export type addressType = "Billing" | "Shipping";

export interface Address {
  id: number;
  type: addressType;
  isDefault: boolean;
  firstName: string;
  lastName: string;
  company?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}
