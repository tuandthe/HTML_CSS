"use client";

import { Address } from "@/lib/types/address";
import { useState } from "react";

export function useAddresses(initialAddresses: Address[]) {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const deleteAddress = (id: number) => {
    if (confirm("Are you sure you want to delete this address?")) {
      setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    }
  };
  const editAddress = (address: Address) => {
    setIsAdding(false);
    setEditingId(address.id);
  };
  const addAddress = () => {
    setIsAdding(true);
    setEditingId(null);
  };
  const saveAddress = (data: Omit<Address, "id">) => {
    if (isAdding) {
      const newAddress = { ...data, id: Date.now() };
      setAddresses([newAddress, ...addresses]);
      setIsAdding(false);
    } else if (editingId) {
      setAddresses((prev) =>
        prev.map((addr) =>
          addr.id === editingId ? { ...data, id: editingId } : addr,
        ),
      );
      setEditingId(null);
    }
  };
  const cancelAction = () => {
    setIsAdding(false);
    setEditingId(null);
  };
  return {
    addresses,
    isAdding,
    editingId,
    addAddress,
    deleteAddress,
    editAddress,
    saveAddress,
    cancelAction,
  };
}
