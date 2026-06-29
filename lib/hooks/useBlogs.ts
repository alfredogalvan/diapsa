/**
 * useBlogs Hook
 * Fetch published blog posts.
 */

'use client';

import { useEffect, useState } from 'react';
import { getBlogs, type PostListFilters } from '@/lib/api/posts';
import type { Blog } from '@/types/post';

interface UseBlogsResult {
  blogs: Blog[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useBlogs(filters: PostListFilters = {}): UseBlogsResult {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const filtersKey = JSON.stringify(filters);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getBlogs(filters);
      setBlogs(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al cargar blogs'));
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersKey]);

  return {
    blogs,
    loading,
    error,
    refetch: fetchBlogs,
  };
}
