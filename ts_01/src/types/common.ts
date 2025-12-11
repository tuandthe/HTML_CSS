// Chứa các type chung (Address, Metadata)
export interface Address {
  street: string;
  district: string;
  city: string;
  postalCode: number;
  country: 'VN' | 'US' | 'UK' | 'FR' | 'JP';
}

export interface Metadata {
  version: string;
  build: string;
  updatedAt: Date;
}
