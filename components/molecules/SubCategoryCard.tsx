/**
 * SubCategoryCard Component - Informativa
 * 
 * Card simple para mostrar subcategorías
 * Diseño limpio, puramente informativo sin interactividad
 */

import { Category } from '@/types/category';

interface Props {
    subCategory: Category;
}

export default function SubCategoryCard({ subCategory }: Props) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 space-y-3">
            {/* Ícono decorativo */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                </svg>
            </div>

            {/* Contenido */}
            <div className="space-y-2">
                {/* Título */}
                <h3 className="text-lg font-bold text-primary leading-tight">
                    {subCategory.name}
                </h3>

                {/* Descripción */}
                {subCategory.description && (
                    <p className="text-sm text-tertiary leading-relaxed">
                        {subCategory.description}
                    </p>
                )}
            </div>

            {/* Badge de nivel (si aplica) */}
            {subCategory.level > 0 && (
                <div className="inline-flex items-center bg-primary/5 px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-primary">
                        Nivel {subCategory.level}
                    </span>
                </div>
            )}
        </div>
    );
}
