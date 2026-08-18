/**
 * useBlogDetail Hook
 * Fetch blog detail by slug with caching.
 */

'use client';

import { useEffect, useState } from 'react';
import { getBlogBySlug } from '@/lib/api/posts';
import type { Blog } from '@/types/post';

interface UseBlogDetailResult {
  blog: Blog | null;
  loading: boolean;
  error: Error | null;
  notFound: boolean;
  refetch: () => void;
}

const cache = new Map<string, { data: Blog; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000;

export function useBlogDetail(slug: string): UseBlogDetailResult {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [notFound, setNotFound] = useState(false);

  const fetchBlog = async () => {
    const cached = cache.get(slug);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      setBlog(cached.data);
      setLoading(false);
      setError(null);
      setNotFound(false);
      return;
    }

    setLoading(true);
    setError(null);
    setNotFound(false);

    try {
      const data = await getBlogBySlug(slug);
      setBlog(data);
      cache.set(slug, { data, timestamp: Date.now() });
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Error al cargar blog');
      setError(error);
      setBlog(null);

      if (error.message.includes('no encontrado') || error.message.includes('404')) {
        setNotFound(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBlog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return {
    blog,
    loading,
    error,
    notFound,
    refetch: fetchBlog,
  };
}
