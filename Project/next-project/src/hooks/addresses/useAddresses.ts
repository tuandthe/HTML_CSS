import { useState, useEffect } from "react";
import { Address } from "@/lib/types/address";
import { addressApi } from "@/lib/api-client/addressApi";

export function useAddresses() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    setIsLoading(true);
    try {
      const data = await addressApi.getAll();
      setAddresses(data);
    } catch (error) {
      console.error("Failed to fetch addresses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addAddress = () => {
    setIsAdding(true);
    setEditingId(null);
  };

  const editAddress = (address: Address) => {
    setIsAdding(false);
    setEditingId(address.id);
  };

  const deleteAddress = async (id: string) => {
    if (!confirm("Are you sure you want to delete this address?")) return;

    const previousAddresses = [...addresses];
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));

    try {
      await addressApi.delete(id);
    } catch (error) {
      console.error("Failed to delete:", error);
      setAddresses(previousAddresses);
      alert("Failed to delete address");
    }
  };

  const saveAddress = async (data: Omit<Address, "id">) => {
    setIsLoading(true); 
    try {
      if (editingId) {
        await addressApi.update(editingId, data);
      } else {
        await addressApi.create(data);
      }
      
      await fetchAddresses();
      
      setIsAdding(false);
      setEditingId(null);
    } catch (error) {
      console.error("Failed to save:", error);
      alert("Failed to save address");
      setIsLoading(false); 
    }
  };

  const cancelAction = () => {
    setIsAdding(false);
    setEditingId(null);
  };

  return {
    addresses,
    isLoading,
    isAdding,
    editingId,
    addAddress,
    deleteAddress,
    editAddress,
    saveAddress,
    cancelAction,
  };
}