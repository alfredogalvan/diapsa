'use client'

import Link from "next/link";
import { useCourses } from "@/lib/hooks/useCourses";
import CourseCard from "../molecules/CourseCard";

export default function CursosTeaser() {
    const { courses } = useCourses({ courseType: 'Certificación' });

    return (
        <section className="w-full bg-white py-16 lg:py-24 relative overflow-hidden">
            {/* Glows industriales difuminados */}
            <div className="absolute -top-32 -right-32 w-125 h-125 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-100 h-100 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
                    <div>
                        <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase">
                            Formación Profesional
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
                            Cursos y <span className="text-secondary">Certificaciones</span>
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
