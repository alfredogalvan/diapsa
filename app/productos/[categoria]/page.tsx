/**
 * Category Products Page
 * Listado de productos filtrados por categoría con filtros por marca y serie
 */

'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/lib/api/categories';
import { useProducts } from '@/lib/hooks/useProducts';
import { useBrands } from '@/lib/hooks/useBrands';
import { useSeries } from '@/lib/hooks/useSeries';
import PageHeader from '@/components/organisms/PageHeader';
import ProductGrid from '@/components/organisms/ProductGrid';
import ProductFilter from '@/components/molecules/ProductFilter';
import SearchBar from '@/components/molecules/SearchBar';
import LoadingSpinner from '@/components/atoms/LoadingSpinner';
import type { Category } from '@/types/category';
import type { ProductFilters } from '@/types/product';

export default function CategoryPage() {
    const params = useParams();
    const categoria = params.categoria as string;

    const [category, setCategory] = useState<Category | null>(null);
    const [categoryLoading, setCategoryLoading] = useState(true);
    const [categoryError, setCategoryError] = useState(false);

    const [filters, setFilters] = useState<ProductFilters>({
        category: categoria,
        page: 1,
        per_page: 12,
    });

    const [searchQuery, setSearchQuery] = useState('');

    const { products, meta, loading, error, refetch } = useProducts(filters);
    const { brands, loading: brandsLoading } = useBrands();
    const { series, loading: seriesLoading } = useSeries({ category: categoria });

    // Cargar información de la categoría
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                setCategoryLoading(true);
                const data = await getCategoryBySlug(categoria);
                setCategory(data);
            } catch (error) {
                console.error('Error loading category:', error);
                setCategoryError(true);
            } finally {
                setCategoryLoading(false);
            }
        };

        if (categoria) {
            fetchCategory();
        }
    }, [categoria]);

    // Actualizar filtro de categoría cuando cambie el parámetro
    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            category: categoria,
            page: 1,
        }));
    }, [categoria]);

    // Breadcrumb items
    const breadcrumbItems = useMemo(() => {
        if (!category) return [];

        return [
            { label: 'Inicio', href: '/' },
            { label: 'Productos', href: '/productos' },
            { label: category.name, href: `/productos/${category.slug}` },
        ];
    }, [category]);

    // Convertir marcas y series de la API al formato de filtros
    const filterGroups = useMemo(() => {
        const groups = [];

        // Filtro de marcas
        if (brands.length > 0) {
            groups.push({
                id: 'brand',
                label: 'Marca',
                options: brands.map((brand) => ({
                    value: brand.slug,
                    label: brand.name,
                })),
            });
        }

        // Filtro de series
        if (series.length > 0) {
            groups.push({
                id: 'series',
                label: 'Serie',
                options: series.map((s) => ({
                    value: s.slug,
                    label: s.name,
                })),
            });
        }

        return groups;
    }, [brands, series]);

    const handleFilterChange = (filterId: string, value: string) => {
        setFilters((prev) => ({
            ...prev,
            [filterId]: value || undefined,
            page: 1, // Reset to first page
        }));
    };

    const handleClearFilters = () => {
        setFilters({
            category: categoria,
            page: 1,
            per_page: 12,
        });
    };

    const handlePageChange = (page: number) => {
        setFilters((prev) => ({
            ...prev,
            page,
        }));
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // TODO: Implementar búsqueda con useProductSearch hook
    };

    const activeFilters = {
        brand: filters.brand || '',
        series: filters.series || '',
    };

    // Mostrar 404 si hay error cargando la categoría
    if (categoryError) {
        notFound();
    }

    // Estado de carga inicial
    if (categoryLoading) {
        return (
            <main className="min-h-screen bg-gray-50 flex items-center justify-center">
                <LoadingSpinner size="large" />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">
            {category && (
                <PageHeader
                    title={category.name}
                    subtitle={category.description || `Encuentra productos de ${category.name}`}
                    breadcrumbs={breadcrumbItems.map((item) => ({
                        label: item.label,
                        link: item.href,
                    }))}
                />
            )}

            <section className="py-8 lg:py-12">
                <div className="container mx-auto px-4">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <SearchBar
                            value={searchQuery}
                            onChange={setSearchQuery}
                            onSearch={handleSearch}
                            placeholder="Buscar productos por nombre, modelo o marca..."
                        />
                    </div>

                    <div className="lg:grid lg:grid-cols-4 lg:gap-8">
                        {/* Filters Sidebar */}
                        <aside className="lg:col-span-1 mb-8 lg:mb-0">
                            <div className="lg:sticky lg:top-4">
                                {brandsLoading || seriesLoading ? (
                                    <div className="bg-white rounded-lg p-6 shadow">
                                        <div className="animate-pulse space-y-4">
                                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                        </div>
                                    </div>
                                ) : (
                                    <ProductFilter
                                        filters={filterGroups}
                                        activeFilters={activeFilters}
                                        onFilterChange={handleFilterChange}
                                        onClearFilters={handleClearFilters}
                                    />
                                )}
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <div className="lg:col-span-3">
                            {/* Results count */}
                            {meta && !loading && (
                                <div className="mb-6">
                                    <p className="text-sm text-gray-600">
                                        {meta.total} {meta.total === 1 ? 'producto encontrado' : 'productos encontrados'}
                                    </p>
                                </div>
                            )}

                            <ProductGrid
                                products={products}
                                loading={loading}
                                error={error}
                                meta={meta}
                                onPageChange={handlePageChange}
                                onRetry={refetch}
                                emptyMessage="No se encontraron productos en esta categoría"
                                emptyDescription="Intenta ajustar los filtros o buscar con otros términos"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}