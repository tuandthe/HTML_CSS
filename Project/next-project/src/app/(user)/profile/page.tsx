"use client";
import ProfileEditForm from "@/components/profile/ProfileEditForm";
import ProfileView from "@/components/profile/ProfileView";
import { useProfile } from "@/hooks/profile/useProfile";
import { User } from "lucide-react";

export default function EditProfilePage() {
  const { userData, isEditing, setIsEditing, handleSave } =
    useProfile();

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header Page */}
      <div className="flex items-center justify-between">
        <div className="mr-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Edit Profile
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage your personal information and preferences.
          </p>
        </div>
        {/* Edit Button */}
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center justify-center gap-2 bg-[#007042] hover:bg-[#005c36] text-white px-5 py-2 rounded-2xl font-medium text-sm transition-colors shadow-sm whitespace-nowrap"
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
  );
}
