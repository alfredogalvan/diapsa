/**
 * useSuccessCaseDetail Hook
 * Fetch success case detail by slug with caching.
 */

'use client';

import { useEffect, useState } from 'react';
import { getSuccessCaseBySlug } from '@/lib/api/posts';
import type { SuccessCase } from '@/types/post';

interface UseSuccessCaseDetailResult {
  successCase: SuccessCase | null;
  loading: boolean;
  error: Error | null;
  notFound: boolean;
  refetch: () => void;
}

const cache = new Map<string, { data: SuccessCase; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000;

export function useSuccessCaseDetail(slug: string): UseSuccessCaseDetailResult {
  const [successCase, setSuccessCase] = useState<SuccessCase | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [notFound, setNotFound] = useState(false);

  const fetchSuccessCase = async () => {
    const cached = cache.get(slug);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      setSuccessCase(cached.data);
      setLoading(false);
      setError(null);
      setNotFound(false);
      return;
    }

    setLoading(true);
    setError(null);
    setNotFound(false);

    try {
      const data = await getSuccessCaseBySlug(slug);
      setSuccessCase(data);
      cache.set(slug, { data, timestamp: Date.now() });
    } catch (err) {
      const error =
        err instanceof Error ? err : new Error('Error al cargar caso de exito');
      setError(error);
      setSuccessCase(null);

      if (error.message.includes('no encontrado') || error.message.includes('404')) {
        setNotFound(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchSuccessCase();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return {
    successCase,
    loading,
    error,
    notFound,
    refetch: fetchSuccessCase,
  };
}
