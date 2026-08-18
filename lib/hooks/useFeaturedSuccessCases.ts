/**
 * useFeaturedSuccessCases Hook
 * Fetch featured success cases with caching.
 */

'use client';

import { useEffect, useState } from 'react';
import { getFeaturedSuccessCases } from '@/lib/api/posts';
import type { SuccessCase } from '@/types/post';

interface UseFeaturedSuccessCasesResult {
  successCases: SuccessCase[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

let cachedSuccessCases: SuccessCase[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000;

export function useFeaturedSuccessCases(): UseFeaturedSuccessCasesResult {
  const [successCases, setSuccessCases] = useState<SuccessCase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchFeaturedSuccessCases = async () => {
    const now = Date.now();
    if (cachedSuccessCases && now - cacheTimestamp < CACHE_TTL) {
      setSuccessCases(cachedSuccessCases);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await getFeaturedSuccessCases();
      setSuccessCases(data);
      cachedSuccessCases = data;
      cacheTimestamp = now;
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error('Error al cargar casos de exito destacados')
      );
      setSuccessCases([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedSuccessCases();
  }, []);

  return {
    successCases,
    loading,
    error,
    refetch: fetchFeaturedSuccessCases,
  };
}
