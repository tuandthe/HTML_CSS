import { useState, useEffect } from "react";
import { UserProfile } from "@/lib/types/user";
import { userApi } from "@/lib/api-client/userApi";

const initialProfileData: UserProfile = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  country: "",
  zipCode: "",
  id: 0,

};
export function useProfile() {
  const [userData, setUserData] = useState<UserProfile>(initialProfileData);
  
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 
  const [isSaving, setIsSaving] = useState(false);  

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const data = await userApi.getProfile();
        setUserData(data);
      } catch (error) {
        console.error("Failed to fetch profile", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async (newData: UserProfile) => {
    setIsSaving(true);
    try {
      const updatedUser = await userApi.updateProfile(newData);
      setUserData(updatedUser); 
      setIsEditing(false);     
    } catch (error) {
      console.error("Failed to save profile", error);
      alert("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  return {
    userData,
    isLoading,   
    isSaving,    
    isEditing,
    setIsEditing,
    handleSave,
  };
}