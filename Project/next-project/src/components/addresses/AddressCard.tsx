import { Address } from "@/types";
import { Card } from "../ui/Card";
import { Edit, MapPin, Trash2 } from "lucide-react";

interface AddressCardProps {
  address: Address;
  onEdit: (address: Address) => void;
  onDelete: (id: number) => void;
}
export function AddressCard({ address, onEdit, onDelete }: AddressCardProps) {
  return (
    <Card className="p-6 relative group h-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-green-50 text-[#007042] rounded-full mt-1">
            <MapPin size={18} />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base">
              {address.type} Address
            </h3>
            {address.isDefault && (
              <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-[#007042] text-[10px] font-bold uppercase rounded-sm">
                Default
              </span>
            )}
          </div>
        </div>
        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(address)}
            className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={() => onDelete(address.id)}
            className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all"
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
