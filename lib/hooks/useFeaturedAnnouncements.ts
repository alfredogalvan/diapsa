/**
 * useFeaturedAnnouncements Hook
 * Fetch featured announcements with caching.
 */

'use client';

import { useEffect, useState } from 'react';
import { getFeaturedAnnouncements } from '@/lib/api/posts';
import type { Announcement } from '@/types/post';

interface UseFeaturedAnnouncementsResult {
  announcements: Announcement[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

let cachedAnnouncements: Announcement[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 5 * 60 * 1000;

export function useFeaturedAnnouncements(): UseFeaturedAnnouncementsResult {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchFeaturedAnnouncements = async () => {
    const now = Date.now();
    if (cachedAnnouncements && now - cacheTimestamp < CACHE_TTL) {
      setAnnouncements(cachedAnnouncements);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await getFeaturedAnnouncements();
      setAnnouncements(data);
      cachedAnnouncements = data;
      cacheTimestamp = now;
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('Error al cargar anuncios destacados')
      );
      setAnnouncements([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedAnnouncements();
  }, []);

  return {
    announcements,
    loading,
    error,
    refetch: fetchFeaturedAnnouncements,
  };
}
