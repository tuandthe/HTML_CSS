import { UserProfile } from "@/lib/types/user";
import { Card } from "../common/Card";

const InfoField = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col">
    <span className="text-sm font-medium text-woo-text mb-1">{label}</span>
    <span className="text-sm text-woo-text-secondary">{value}</span>
  </div>
);

export default function ProfileView({ data }: { data: UserProfile }) {
  return (
    // bg-white -> bg-woo-card, border-gray-200 -> border-woo-border
    <Card className="p-8 bg-woo-card shadow-sm border border-woo-border rounded-xl">
      <div className="space-y-8">
        
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-semibold text-woo-text mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <InfoField label="First Name*" value={data.firstName} />
            <InfoField label="Last Name*" value={data.lastName} />
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-woo-text mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <InfoField label="Email Address*" value={data.email} />
            <InfoField label="Phone Number*" value={data.phone} />
          </div>
        </div>

        {/* Address Information */}
        <div>
          <h3 className="text-lg font-semibold text-woo-text mb-4">Address Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-6">
            <InfoField label="Country" value={data.country} />
            <InfoField label="City" value={data.city} />
          </div>
          <div className="grid grid-cols-1 gap-6 mb-6">
            <InfoField label="Address Line 1" value={data.addressLine1} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            <InfoField
              label="Address Line 2"
              value={data.addressLine2 || "-"}
            />
            <InfoField label="ZIP/Postal Code" value={data.zipCode} />
          </div>
        </div>
      </div>
    </Card>
  );
}