/**
 * useFeaturedBlogs Hook
 * Fetch featured blog posts with caching.
 */

'use client';

import { useEffect, useState } from 'react';
import { getFeaturedBlogs } from '@/lib/api/posts';
import type { Blog } from '@/types/post';

interface UseFeaturedBlogsResult {
  blogs: Blog[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

let cachedBlogs: Blog[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000;

export function useFeaturedBlogs(): UseFeaturedBlogsResult {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchFeaturedBlogs = async () => {
    const now = Date.now();
    if (cachedBlogs && now - cacheTimestamp < CACHE_TTL) {
      setBlogs(cachedBlogs);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await getFeaturedBlogs();
      setBlogs(data);
      cachedBlogs = data;
      cacheTimestamp = now;
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Error al cargar blogs destacados')
      );
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedBlogs();
  }, []);

  return {
    blogs,
    loading,
    error,
    refetch: fetchFeaturedBlogs,
  };
}
