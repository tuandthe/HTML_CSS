"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import AddressForm from "@/components/addresses/AddressForm";
import { AddressCard } from "@/components/addresses/AddressCard";
import { initialAddresses } from "@/lib/data/addresses";
import { Address } from "@/lib/types/address";

export default function AddressPage() {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);

  const [isAdding, setIsAdding] = useState(false);

  const [editingId, setEditingId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this address?")) {
      setAddresses((prev) => prev.filter((addr) => addr.id !== id));
    }
  };

  const handleEditClick = (address: Address) => {
    setIsAdding(false);
    setEditingId(address.id);
  };

  const handleSave = (data: Omit<Address, "id">) => {
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

  const handleCancel = () => {
    setIsAdding(false);
    setEditingId(null);
  };

  return (
    <div className="space-y-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between max-w-3xl">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Addresses</h2>
          <p className="text-gray-500 mt-1">
            Manage your billing and shipping addresses.
          </p>
        </div>

        {!isAdding && (
          <button
            onClick={() => {
              setIsAdding(true);
              setEditingId(null);
            }}
            className="flex items-center gap-2 m bg-[#007042] hover:bg-[#005c36] text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors shadow-sm"
          >
            <Plus size={18} /> Add Address
          </button>
        )}
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Add New Address Form */}
        {isAdding && (
          <div className="mb-8">
            <AddressForm
              key="add-new"
              onSave={handleSave}
              onCancel={handleCancel}
              className="max-w-3xl"
            />
          </div>
        )}

        {/* Address List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {addresses.map((addr) =>
            editingId === addr.id ? (
              <AddressForm
                key={addr.id}
                initialData={addr}
                onSave={handleSave}
                onCancel={handleCancel}
                className="h-full"
              />
            ) : (
              <AddressCard
                key={addr.id}
                address={addr}
                onEdit={handleEditClick}
                onDelete={handleDelete}
              />
            ),
          )}
        </div>

        {addresses.length === 0 && !isAdding && (
          <p className="text-gray-500 text-center py-10 bg-white rounded-xl border border-dashed border-gray-300">
            No addresses found.
          </p>
        )}
      </div>
    </div>
  );
}
