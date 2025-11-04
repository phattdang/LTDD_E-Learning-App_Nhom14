import { createApiClient } from "./apiClient";
import { createApi } from "./baseApi";
import { API_URLS } from "./apiConfig";
import Lesson from "../types/Lesson";

const apiClient = createApiClient(API_URLS.lessons);
const lessonApi = createApi<Lesson>("lessons", apiClient);

export default lessonApi;
