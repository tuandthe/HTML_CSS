// ApiResponse<T> và User types
interface User {
  id: number;
  name: string;
  email: string;
  address?: string;
//   role: "admin" | "'ser";
//   createdAt: string;
}

type ApiResponse<T> = 
    | { status: "success"; data: T; timestamp: string }
    | { status: "error"; message: string; code: number; timestamp: string };

export function isSuccess<T>(response: ApiResponse<T>): response is { status: "success"; data: T; timestamp: string } {
    return response.status === "success";
}
export function isError<T>(response: ApiResponse<T>): response is { status: "error"; message: string; code: number; timestamp: string } {
    return response.status === "error";
}

export const successResponse: ApiResponse<User> = {
    status: "success",
    data: {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        address: "123 Main St",
//         role: "admin",
//         createdAt: new Date().toISOString(),
    },
    timestamp: new Date().toISOString(),
};
export const errorResponse: ApiResponse<User> = {
    status: "error",
    message: "User not found",
    code: 404,
    timestamp: new Date().toISOString(),
};

// PaginatedUser và fetch function
type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export async function fetchPaginatedUsers(page: number, pageSize: number): Promise<ApiResponse<Paginated<User>>> {
    try{
        const response = await fetch(`https://fake-json-api.mock.beeceptor.com/users?page=${page}&pageSize=${pageSize}`);
        if (!response.ok) {
            return {
                status: "error",
                message: `Error fetching users: ${response.statusText}`,
                code: response.status,
                timestamp: new Date().toISOString(),
            };
        }

        const data = await response.json() as Paginated<User>;
        console.log(data);
        return {
            status: "success",
            data: {
                items: data.items,
                total: 10,
                page: 1,
                pageSize: 10,
                totalPages: 1,
            },
            timestamp: new Date().toISOString(),
        };
    } catch (error) {
        return {
            status: "error",
            message: (error as Error).message,
            code: 500,
            timestamp: new Date().toISOString(),
        };
    }

}