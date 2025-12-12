// getToken(): Promise<string>
async function getToken(): Promise<string> {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve("secure-token-123");
        }, 1000);
    });
}

// async getProfile(): Promise<{id:number; name:string}>
interface Profile {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}
async function getProfile(): Promise<Profile> {
    return {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://example.com/avatar.jpg"
    }
}
// exampleUsage()
export async function exampleUsage() {
    const token = await getToken();
    console.log("Token:", token);
    const profile = await getProfile();
    console.log("Profile:", profile);
}

// generic request<T>()
interface ApiResponse<T> {
  data: T;
  status: "success" | "error";
  message?: string;
}
async function request<T>(url: string): Promise<ApiResponse<T>> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            return {
                data: null as any,
                status: "error",
                message: `HTTP ${response.status}: ${response.statusText}`
            };
        }

        const data = await response.json() as T;
        return {
            data ,
            status: "success"
        };
        
    } catch (error) {
        return {
            data: null as any,
            status: "error",
            message: error instanceof Error ? error.message : "Unknown error"
        };
        
    }

}
// 
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
}
export async function fetchUser(id: number): Promise<void> {
  const result = await request<User>(`/api/users/${id}`);
  if (result.status === "success" && result.data) {
    console.log("User Data:", result.data);
  } else {
    console.error("Error fetching user:", result.message);
  }

}

// 
interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
export async function fetchPaginatedUser(): Promise<void> {
    const result = await request<Paginated<User>>("/api/users");
    if (result.status === "success" && result.data) {
       console.log(`Total users: ${result.data.total}`);
    result.data.items.forEach(user => {
      console.log(`- ${user.name} (${user.role})`);
    });
    }   
}