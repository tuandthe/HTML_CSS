import { errorResponse, fetchPaginatedUsers, isError, isSuccess, successResponse,  } from "./types/typingApiResponse.js";
import { exampleUsage, fetchPaginatedUser, fetchUser } from "./types/typingPromise.js";

// typingApiResponse
if (isSuccess(successResponse)) {
    console.log("User Name:", successResponse.data.name);
}
 if (isError(errorResponse)) {
    console.log("Error:", errorResponse.message);
}

// fetchPaginatedUsers
async function exampleFetch() {
    const response = await fetchPaginatedUsers(1, 10);
    if (isSuccess(response)) {
        console.log("Fetched Users:", response.data.items);
    } else if (isError(response)) {
        console.log("Fetch Error:", response.message);
    }
}
exampleFetch();

// typingPromise
exampleUsage();

// generic request<T>()
fetchUser(1);
fetchPaginatedUser();