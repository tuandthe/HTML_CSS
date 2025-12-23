import { UserProfile } from "@/lib/types/user";
import { usersData } from "../data/users";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

let mockUserDb = { ...usersData[0] };

export const userApi = {
  getProfile: async (): Promise<UserProfile> => {
    return mockUserDb;
  },

  updateProfile: async (data: UserProfile): Promise<UserProfile> => {
    mockUserDb = { ...mockUserDb, ...data };
    return mockUserDb;
  },
};
