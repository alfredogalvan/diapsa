'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Course } from '@/types/course';
import { minutesToTimeString } from '@/lib/utils/time';
import { ArrowRightIcon, BuildingIcon, CalendarIcon, ClockIcon, TagIcon } from '@/components/atoms/icons';

interface CourseCardProps {
    course: Course;
    variant?: 'certificado' | 'taller' | 'estrategico';
}

export default function CourseCard({ course, variant = 'certificado' }: CourseCardProps) {
    const layouts: Record<NonNullable<CourseCardProps['variant']>, React.ReactElement> = {
        certificado: <CertificateLayout course={course} />,
        taller: <WorkshopLayout course={course} />,
        estrategico: <StrategicLayout course={course} />,
    };

    return layouts[variant];
}

function formatCourseDate(date: string | Date, withYear = false) {
    try {
        const d = new Date(date);
        return d.toLocaleDateString('es-MX', {
            month: 'short',
            day: 'numeric',
            ...(withYear ? { year: '2-digit' as const } : {}),
        });
    } catch {
        return 'Pronto';
    }
}

function CertificateLayout({ course }: { course: Course }) {
    return (
        <Link
            href={`/cursos/${course.slug}`}
            className="flex flex-col h-full bg-white border border-gray-200 rounded-sm hover:shadow-xl hover:border-secondary/30 transition-all duration-300 overflow-hidden group"
        >
            <div className="bg-primary text-white px-4 py-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide">Certificado</span>
                {course.reference_norm && (
                    <span className="text-xs font-bold px-2 py-1 bg-secondary/20 rounded text-yellow-200">
                        ISO {course.reference_norm}
                    </span>
                )}
            </div>

            <div className="relative w-full h-40 bg-linear-to-br from-primary/10 to-secondary/5 overflow-hidden">
                <Image
                    src={course.url_img || '/images/fondo-mantenimiento.webp'}
                    alt={course.alt_img || `Imagen de ${course.name}`}
                    fill
                    className="object-cover opacity-85 group-hover:opacity-95 transition-opacity"
                    sizes="200px"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-all" />
            </div>

            <div className="p-5 flex flex-col space-y-4 flex-1">
                <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2">
                    {course.name}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-2">
                    {course.description}
                </p>

                <div className="space-y-3 pt-2 border-t border-gray-100">
                    <div className="flex items-center justify-between gap-2 text-xs text-gray-700">
                        {course.duration > 0 && (
                            <span className="flex items-center gap-1">
                                <ClockIcon className="w-4 h-4 text-primary" />
                                {minutesToTimeString(course.duration)}
                            </span>
                        )}
                        {course.next_date && (
                            <span className="flex items-center gap-1 bg-secondary/10 text-secondary font-semibold px-2 py-1 rounded">
                                <CalendarIcon className="w-4 h-4" />
                                {formatCourseDate(course.next_date)}
                            </span>
                        )}
                    </div>
                </div>

                <span className="mt-auto flex items-center justify-center gap-2 w-full py-2 px-4 bg-primary text-white font-semibold text-sm rounded-lg group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                    Ver programa completo
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        </Link>
    );
}

function StrategicLayout({ course }: { course: Course }) {
    return (
        <Link
            href={`/cursos/${course.slug}`}
            className="flex flex-col h-full bg-white border border-gray-200 rounded-sm hover:border-tertiary hover:shadow-md transition-all duration-300 overflow-hidden group"
        >
            <div className="bg-tertiary/5 border-b border-tertiary/20 px-4 py-2 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-tertiary">Estratégico</span>
                {course.category?.name && (
                    <span className="text-xs font-semibold text-primary bg-primary/5 px-2 py-1 rounded">
                        {course.category.name}
                    </span>
                )}
            </div>

            <div className="p-6 flex flex-col space-y-4 flex-1">
                <h3 className="font-bold text-gray-900 text-base leading-snug group-hover:text-primary transition-colors">
                    {course.name}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3">
                    {course.description}
                </p>

                <div className="border-t border-gray-100" />

                <div className="space-y-2 pt-2 flex-1">
                    {course.duration > 0 && (
                        <div className="flex items-center gap-2 text-sm">
                            <ClockIcon className="w-4 h-4 text-tertiary shrink-0" />
                            <span className="font-semibold text-gray-900">{minutesToTimeString(course.duration)}</span>
                            <span className="text-gray-500 text-xs">de aprendizaje</span>
                        </div>
                    )}

                    {course.next_date && !isNaN(new Date(course.next_date).getTime()) && (
                        <div className="flex items-center gap-2 text-sm">
                            <CalendarIcon className="w-4 h-4 text-primary shrink-0" />
                            <div className="flex-1">
                                <span className="text-gray-500 text-xs">Próxima sesión:</span>
                                <span className="font-semibold text-primary block">
                                    {formatCourseDate(course.next_date, true)}
                                </span>
                            </div>
                        </div>
                    )}

                    {course.provider && (
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                            <BuildingIcon className="w-4 h-4 text-gray-500 shrink-0" />
                            <span>{course.provider}</span>
                        </div>
                    )}
                </div>

                <span className="mt-auto flex items-center justify-center gap-2 w-full py-2 px-4 bg-primary/5 text-primary font-semibold text-sm rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    Explorar curso
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        </Link>
    );
}

function WorkshopLayout({ course }: { course: Course }) {
    return (
        <Link
            href={`/cursos/${course.slug}`}
            className="flex flex-col h-full bg-white border border-gray-200 rounded-sm hover:border-secondary hover:shadow-lg transition-all duration-300 overflow-hidden group"
        >
            <div className="bg-linear-to-r from-secondary/10 to-secondary/5 border-b border-secondary/20 px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Taller Práctico</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-5 flex-1">
                <div className="relative w-full h-52 sm:w-40 sm:h-24 shrink-0 bg-linear-to-br from-secondary/20 to-primary/10 rounded-lg overflow-hidden shadow-sm">
                    <Image
                        src={course.url_img || '/images/fondo-mantenimiento.webp'}
                        alt={course.alt_img || `Imagen de ${course.name}`}
                        fill
                        className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        sizes="150px"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent group-hover:from-black/20 transition-all" />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-secondary transition-colors">
                            {course.name}
                        </h3>

                        {course.provider && (
                            <p className="text-xs text-secondary font-semibold mb-2">
                                <span className="inline-flex items-center gap-1.5">
                                    <BuildingIcon className="w-3.5 h-3.5" />
                                    {course.provider}
                                </span>
                            </p>
                        )}

                        <p className="text-gray-600 text-xs line-clamp-2">
                            {course.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 pt-3">
                        {course.duration > 0 && (
                            <span className="flex items-center gap-1 bg-primary/5 px-2 py-1 rounded text-primary font-semibold">
                                <ClockIcon className="w-3.5 h-3.5" />
                                {minutesToTimeString(course.duration)}
                            </span>
                        )}
                        {course.next_date && !isNaN(new Date(course.next_date).getTime()) && (
                            <span className="flex items-center gap-1 bg-secondary/5 px-2 py-1 rounded text-secondary font-semibold">
                                <CalendarIcon className="w-3.5 h-3.5" />
                                {formatCourseDate(course.next_date)}
                            </span>
                        )}
                        {course.category?.name && (
                            <span className="flex items-center gap-1 truncate" title={course.category.name}>
                                <TagIcon className="w-3.5 h-3.5 shrink-0" />
                                {course.category.name}
                            </span>
                        )}
                    </div>

                    <span className="sm:hidden mt-3 flex items-center justify-center gap-2 w-full py-2 px-4 bg-secondary/10 text-secondary font-semibold text-xs rounded-lg group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                        Ver taller
                        <ArrowRightIcon className="w-3 h-3" />
                    </span>
                </div>

                <div className="hidden sm:flex items-center shrink-0 text-secondary group-hover:translate-x-1 transition-transform">
                    <ArrowRightIcon className="w-5 h-5" />
                </div>
            </div>
        </Link>
    );
}
