/**
 * useSuccessCases Hook
 * Fetch published success cases.
 */

'use client';

import { useEffect, useState } from 'react';
import { getSuccessCases, type PostListFilters } from '@/lib/api/posts';
import type { SuccessCase } from '@/types/post';

interface UseSuccessCasesResult {
  successCases: SuccessCase[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useSuccessCases(
  filters: PostListFilters = {}
): UseSuccessCasesResult {
  const [successCases, setSuccessCases] = useState<SuccessCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const filtersKey = JSON.stringify(filters);

  const fetchSuccessCases = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getSuccessCases(filters);
      setSuccessCases(data);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Error al cargar casos de exito')
      );
      setSuccessCases([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuccessCases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersKey]);

  return {
    successCases,
    loading,
    error,
    refetch: fetchSuccessCases,
  };
}
