// baseApi.ts
import { AxiosInstance } from "axios";

export function createApi<T>(resourceName: string, client: AxiosInstance) {
  return {
    getAll: () => client.get<T[]>(`/${resourceName}`),
    getById: (id: string) => client.get<T>(`/${resourceName}/${id}`),
    delete: (id: string) => client.delete(`/${resourceName}/${id}`),
    add: (data: Omit<T, "id">) => client.post(`/${resourceName}`, data),
    update: (id: string, data: Partial<T>) =>
      client.put(`/${resourceName}/${id}`, data),
  };
}
