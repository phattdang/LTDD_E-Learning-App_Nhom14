import { createApiClient } from "./apiClient";
import { createApi } from "./baseApi";
import Course from "../types/Course";
import { API_URLS } from "./apiConfig";

const apiClient = createApiClient(API_URLS.courses);
const courseApi = createApi<Course>("courses", apiClient);

export default courseApi;
