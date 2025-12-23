"use client";
import ProfileEditForm from "@/components/profile/ProfileEditForm";
import ProfileView from "@/components/profile/ProfileView";
import { useProfile } from "@/hooks/profile/useProfile";
import { User } from "lucide-react";

export default function EditProfilePage() {
  const { userData, isEditing, setIsEditing, handleSave } = useProfile();

  return (
    <div className="lg:ml-64">
      <div className="p-4 lg:p-8">
        <div className="space-y-8">
          {/* Header Page */}
          <div className="flex items-center justify-between">
            <div className="mr-4">
              {/* text-gray-900 -> text-woo-text */}
              <h1 className="text-3xl font-bold text-woo-text mb-2">
                Edit Profile
              </h1>
              {/* text-gray-500 -> text-woo-text-secondary */}
              <p className="text-woo-text-secondary mt-1 text-sm">
                Manage your personal information and preferences.
              </p>
            </div>

            {/* Edit Button */}
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                // bg-[#007042] -> bg-woo-primary
                className="flex items-center justify-center gap-2 bg-woo-primary hover:bg-woo-primary-hover text-white px-5 py-2 rounded-2xl font-medium text-sm transition-colors shadow-sm whitespace-nowrap"
              >
                <User size={18} />
                <span>Edit Profile</span>
              </button>
            )}
          </div>

          {/* Conditional Rendering */}
          <div className="w-full">
            {isEditing ? (
              <ProfileEditForm
                initialData={userData}
                onCancel={() => setIsEditing(false)}
                onSave={handleSave}
              />
            ) : (
              <ProfileView data={userData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
