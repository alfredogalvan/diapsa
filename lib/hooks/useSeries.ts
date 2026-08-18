/**
 * useSeries Hook
 * Obtiene series de la API con caché y filtros opcionales
 */

'use client';

import { useState, useEffect } from 'react';
import { getSeries } from '@/lib/api/categories';
import type { Series } from '@/types/category';

interface UseSeriesOptions {
    brand?: string;
    category?: string;
}

// Cache global para evitar múltiples llamadas
const seriesCache = new Map<string, { data: Series[]; timestamp: number }>();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutos

export function useSeries(options?: UseSeriesOptions) {
    const [series, setSeries] = useState<Series[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const brand = options?.brand;
    const category = options?.category;

    useEffect(() => {
        const fetchSeries = async () => {
            // Generar clave de caché basada en los filtros
            const filters = { brand, category };
            const cacheKey = JSON.stringify(filters);

            // Verificar caché
            const now = Date.now();
            const cached = seriesCache.get(cacheKey);
            if (cached && now - cached.timestamp < CACHE_DURATION) {
                setSeries(cached.data);
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);

                const data = await getSeries(filters);

                // Actualizar caché
                seriesCache.set(cacheKey, { data, timestamp: now });

                setSeries(data);
            } catch (err) {
                const error = err instanceof Error ? err : new Error('Error al cargar series');
                setError(error);
                console.error('Error fetching series:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSeries();
    }, [brand, category]);

    return { series, loading, error };
}
