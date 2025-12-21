import { Address } from "@/lib/types/address";
import { initialAddresses } from "@/lib/data/addresses";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let mockDb = [...initialAddresses];

export const addressApi = {
  getAll: async (): Promise<Address[]> => {
    return mockDb;
  },

  create: async (data: Omit<Address, "id">): Promise<Address> => {
    const newAddress: Address = {
      ...data,
      id: Math.random().toString(36).substr(2, 9), 
    };
    mockDb = [newAddress, ...mockDb];
    return newAddress;
  },

  update: async (id: string, data: Partial<Address>): Promise<Address> => {
    mockDb = mockDb.map((addr) =>
      addr.id === id ? { ...addr, ...data } : addr
    );
    const updated = mockDb.find((a) => a.id === id);
    if (!updated) throw new Error("Address not found");
    return updated;
  },

  delete: async (id: string): Promise<boolean> => {
    mockDb = mockDb.filter((addr) => addr.id !== id);
    return true;
  },
};