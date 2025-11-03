import { createApiClient } from "./apiClient";
import { createApi } from "./baseApi";
import { API_URLS } from "./apiConfig";
import User from "../types/User";
import Enrollment from "../types/Enrollment";

const apiClient = createApiClient(API_URLS.enrollments);
const enrollmentApi = createApi<Enrollment>("enrollments", apiClient);

export default enrollmentApi;
