import { useCallback, useEffect, useState } from "react";

export default function useFetch<T>(fetchFn: () => Promise<{ data: T[] }>) {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchFn();
      setData(res.data);
    } catch (error: any) {
      setError(error.message || "Lỗi tải dữ liệu");
    } finally {
      setLoading(false);
    }
  }, [fetchFn]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { data, loading, error, refetch: loadData };
}
