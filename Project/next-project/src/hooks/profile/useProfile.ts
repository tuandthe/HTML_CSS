"use client";

import { UserProfile } from "@/lib/types/user";
import { useState } from "react";

export function useProfile(usersData: UserProfile[]) {
  const [userData, setUserData] = useState<UserProfile>(usersData[0]);
  const [isEditing, setIsEditing] = useState(false);
  const handleSave = (newData: UserProfile) => {
    setUserData(newData);
    setIsEditing(false);
  };
  return {
    userData,
    isEditing,
    setIsEditing,
    handleSave,
  };
}
