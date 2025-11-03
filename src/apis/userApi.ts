import { createApiClient } from "./apiClient";
import { createApi } from "./baseApi";
import { API_URLS } from "./apiConfig";
import User from "../types/User";

const apiClient = createApiClient(API_URLS.users);
const userApi = createApi<User>("users", apiClient);

export default userApi;
