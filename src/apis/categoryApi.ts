import { createApiClient } from "./apiClient";
import { createApi } from "./baseApi";
import { API_URLS } from "./apiConfig";
import Category from "../types/Category";

const apiClient = createApiClient(API_URLS.categories);
const categoryApi = createApi<Category>("categories", apiClient);

export default categoryApi;
