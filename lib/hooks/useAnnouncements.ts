/**
 * useAnnouncements Hook
 * Fetch published and active announcements.
 */

'use client';

import { useEffect, useState } from 'react';
import { getAnnouncements, type PostListFilters } from '@/lib/api/posts';
import type { Announcement } from '@/types/post';

interface UseAnnouncementsResult {
  announcements: Announcement[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useAnnouncements(
  filters: PostListFilters = {}
): UseAnnouncementsResult {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const filtersKey = JSON.stringify(filters);

  const fetchAnnouncements = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAnnouncements(filters);
      setAnnouncements(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Error al cargar anuncios'));
      setAnnouncements([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersKey]);

  return {
    announcements,
    loading,
    error,
    refetch: fetchAnnouncements,
  };
}
