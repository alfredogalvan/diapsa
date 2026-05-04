'use client'
import React from "react";
import Link from "next/link";
import { useCourses } from "@/lib/hooks/useCourses";
import CourseCard from "../molecules/CourseCard";
// const FEATURED_IDS = [1, 2, 3];

const iconMap: Record<string, React.ReactElement> = {
    thermometer: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M9 3v11.382A4 4 0 1015 14.382V3a3 3 0 00-6 0z" />
        </svg>
    ),
    vibration: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M9 19V6l2 4 2-7 2 4 2-4v13M3 12h2m14 0h2" />
        </svg>
    ),
    sound: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M15.536 8.464a5 5 0 010 7.072M12 6a7 7 0 010 12M9 9H6a1 1 0 00-1 1v4a1 1 0 001 1h3l4 4V5L9 9z" />
        </svg>
    ),
};

export default function CursosTeaser() {
    const { courses, loading, error } = useCourses({ courseType: 'Certificación' });

    console.log('Cursos: ', courses);
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
                    <div>
                        <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                            Formación Profesional
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
                            CURSOS Y <span className="text-secondary">CERTIFICACIONES</span>
                        </h2>
                        <p className="text-tertiary mt-2 max-w-xl">
                            Certifica a tu equipo bajo estándares ISO 18436 con instructores con experiencia real en campo.
                        </p>
                    </div>
                    <Link
                        href="/cursos"
                        className="self-start lg:self-auto inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-2.5 rounded-xs hover:bg-secondary hover:text-primary transition-all duration-300 shadow-md whitespace-nowrap"
                    >
                        Ver todos los cursos
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <CourseCard key={course.id} variant="certificado" course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}
