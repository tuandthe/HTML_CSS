import { UserProfile } from "@/lib/types/user";
import { Card } from "../common/Card";
import { Save, X } from "lucide-react";
import { Input } from "../common/Input";
import { Select } from "../common/Select";
import { countries } from "@/lib/data/addresses";
import { useProfileEdit } from "@/hooks/profile/useProfileEdit";

interface ProfileEditFormProps {
  initialData: UserProfile;
  onCancel: () => void;
  onSave: (newData: UserProfile) => void;
}
export default function ProfileEditForm({
  initialData,
  onCancel,
  onSave,
}: ProfileEditFormProps) {
  const { formData, handleChange, handleSubmit } = useProfileEdit(
    initialData,
    onSave,
  );
  return (
    <Card className="p-8 bg-white shadow-sm border border-gray-200 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="First Name*"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <Input
              label="Last Name*"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Email Address*"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <Input
              label="Phone Number*"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>
        </div>

        {/* Address Information */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Address Information
          </h3>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Country
                </label>
                <Select
                  options={countries}
                  value={formData.country}
                  onChange={(val) => handleChange("country", val)}
                  className="border border-gray-200"
                />
              </div>
              <Input
                label="City"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
            <Input
              label="Address Line 1"
              value={formData.addressLine1}
              onChange={(e) => handleChange("addressLine1", e.target.value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Address Line 2"
                value={formData.addressLine2 || ""}
                onChange={(e) => handleChange("addressLine2", e.target.value)}
              />
              <Input
                label="ZIP/Postal Code"
                value={formData.zipCode}
                onChange={(e) => handleChange("zipCode", e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
          <button
            type="submit"
            className="flex items-center gap-2 bg-[#007042] hover:bg-[#005c36] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm"
          >
            <Save size={18} />
            Save Changes
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-sm"
          >
            <X size={18} />
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
}
