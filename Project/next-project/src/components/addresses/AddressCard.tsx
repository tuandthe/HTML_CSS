import { Address } from "@/lib/types/address";
import { Card } from "../common/Card";
import { Edit, MapPin, Trash2 } from "lucide-react";

interface AddressCardProps {
  address: Address;
  onEdit: (address: Address) => void;
  onDelete: (id: string) => void;
}
export function AddressCard({ address, onEdit, onDelete }: AddressCardProps) {
  return (
    <Card className="p-6 relative group h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className=" text-[#007042] ">
            <MapPin size={18} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              {address.type} Address
            </h3>
            {address.isDefault && (
              <span className="inline mt-1 px-2 py-1 bg-green-50 text-[#0d724f] text-xs font-medium rounded-xl">
                Default
              </span>
            )}
          </div>
        </div>
        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(address)}
            className="p-2 border border-gray-200 rounded-xl text-gray-500 bg-gray-50"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => onDelete(address.id)}
            className="p-2 border border-red-600 rounded-xl text-red-600 bg-gray-50 hover:text-gray-500 transition-all"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="text-sm text-gray-600 space-y-1.5 pl-[50px]">
        <p className="font-bold text-gray-900 text-base">
          {address.firstName} {address.lastName}
        </p>
        {address.company && <p>{address.company}</p>}
        <p>{address.addressLine1}</p>
        {address.addressLine2 && <p>{address.addressLine2}</p>}
        <p>
          {address.city}, {address.state} {address.zipCode}
        </p>
        <p>{address.country}</p>
        {address.phone && <p className="pt-1">{address.phone}</p>}
      </div>
    </Card>
  );
}
