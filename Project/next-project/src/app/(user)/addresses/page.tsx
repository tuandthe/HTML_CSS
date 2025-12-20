"use client";
import { Plus } from "lucide-react";
import AddressForm from "@/components/addresses/AddressForm";
import { AddressCard } from "@/components/addresses/AddressCard";
import { initialAddresses } from "@/lib/data/addresses";
import { useAddresses } from "@/hooks/addresses/useAddresses";

export default function AddressPage() {
  const {
    addresses,
    isAdding,
    editingId,
    addAddress,
    deleteAddress,
    editAddress,
    saveAddress,
    cancelAction,
  } = useAddresses(initialAddresses);

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Header */}
      <div className="flex items-center justify-between max-w-3xl">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Addresses</h2>
          <p className="text-gray-500 mt-1">
            Manage your billing and shipping addresses.
          </p>
        </div>

        {
          <button
            onClick={addAddress}
            className="flex items-center gap-2 m bg-[#007042] hover:bg-[#005c36] text-white px-5 py-2.5 rounded-2xl font-medium text-sm transition-colors shadow-sm"
          >
            <Plus size={18} /> Add Address
          </button>
        }
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Add New Address Form */}
        {isAdding && (
          <div className="mb-8">
            <AddressForm
              key="add-new"
              onSave={saveAddress}
              onCancel={cancelAction}
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
                onSave={saveAddress}
                onCancel={cancelAction}
                className="max-w-3xl"
              />
            ) : (
              <AddressCard
                key={addr.id}
                address={addr}
                onEdit={editAddress}
                onDelete={deleteAddress}
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
