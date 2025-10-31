import { createApiClient } from "./apiClient";
import { createApi } from "./baseApi";
import Course from "../types/Course";
import { API_URLS } from "./apiConfig";
import Account from "../types/Account";

const apiClient = createApiClient(API_URLS.accounts);
const accountsApi = createApi<Account>("accounts", apiClient);

export default accountsApi;
