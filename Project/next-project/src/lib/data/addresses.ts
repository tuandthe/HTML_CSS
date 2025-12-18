import { Address } from "@/lib/types/address";

export const initialAddresses: Address[] = [
  {
    id: 1,
    type: "Billing",
    isDefault: true,
    firstName: "John",
    lastName: "Doe",
    company: "Tech Corp",
    addressLine1: "123 Main Street",
    addressLine2: "Suite 100",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    phone: "+1 (555) 123-4567",
  },
  {
    id: 2,
    type: "Shipping",
    isDefault: true,
    firstName: "John",
    lastName: "Doe",
    company: "",
    addressLine1: "456 Oak Avenue",
    city: "Brooklyn",
    state: "NY",
    zipCode: "11201",
    country: "United States",
    phone: "+1 (555) 123-4567",
  },
];
export const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Vietnam",
];
