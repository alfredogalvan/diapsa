/**
 * useAnnouncementDetail Hook
 * Fetch announcement detail by slug with caching.
 */

'use client';

import { useEffect, useState } from 'react';
import { getAnnouncementBySlug } from '@/lib/api/posts';
import type { Announcement } from '@/types/post';

interface UseAnnouncementDetailResult {
  announcement: Announcement | null;
  loading: boolean;
  error: Error | null;
  notFound: boolean;
  refetch: () => void;
}

const cache = new Map<string, { data: Announcement; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000;

export function useAnnouncementDetail(slug: string): UseAnnouncementDetailResult {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [notFound, setNotFound] = useState(false);

  const fetchAnnouncement = async () => {
    const cached = cache.get(slug);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      setAnnouncement(cached.data);
      setLoading(false);
      setError(null);
      setNotFound(false);
      return;
    }

    setLoading(true);
    setError(null);
    setNotFound(false);

    try {
      const data = await getAnnouncementBySlug(slug);
      setAnnouncement(data);
      cache.set(slug, { data, timestamp: Date.now() });
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Error al cargar anuncio');
      setError(error);
      setAnnouncement(null);

      if (error.message.includes('no encontrado') || error.message.includes('404')) {
        setNotFound(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchAnnouncement();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return {
    announcement,
    loading,
    error,
    notFound,
    refetch: fetchAnnouncement,
  };
}
