"use client";

import ProfileEditForm from "@/components/profile/ProfileEditForm";
import ProfileView from "@/components/profile/ProfileView";
import { usersData } from "@/lib/data/users";
import { UserProfile } from "@/lib/types/user";
import { User } from "lucide-react";
import { useState } from "react";

export default function EditProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserProfile>(usersData[0]);

  const handleSave = (newData: UserProfile) => {
    setUserData(newData);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header Page */}
      <div className="flex items-center justify-between">
        <div className="mr-4">
          <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage your personal information and preferences.
          </p>
        </div>
        {/* Edit Button */}
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center justify-center gap-2 bg-[#007042] hover:bg-[#005c36] text-white px-5 py-2 rounded-lg font-bold text-sm transition-colors shadow-sm whitespace-nowrap"
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
