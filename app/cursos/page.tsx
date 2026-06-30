'use client';

import PageHeader from "@/components/organisms/PageHeader";
import { CoursesNCerts } from "@/components/organisms/CoursesNCerts";
import CourseTypeSection from "@/components/organisms/CourseTypeSection";
import { useCourses } from "@/lib/hooks/useCourses";
// import CourseMainContent from "@/components/organisms/CourseMainContent";
import { groupCoursesByType } from "@/lib/utils/groupCourses";


export default function CursosPage() {
  const { courses, loading } = useCourses()
  const coursesByType = groupCoursesByType(courses);
  return (
    <main className="bg-gray-50 min-h-screen">
      <PageHeader
        title="Cursos"
        subtitle="Capacitación profesional certificada en mantenimiento predictivo"
      />

      <section className="w-full bg-white p-5">
        <CoursesNCerts />
      </section>

      {/* <section className="bg-white p-5">
        <CourseMainContent />
      </section> */}

      {(loading || coursesByType.certificates.length > 0) && (
        <section className="bg-white p-5">
          <CourseTypeSection title="Certificados" variant="certificado" courses={coursesByType.certificates} loading={loading} />
        </section>
      )}

      {(loading || coursesByType.workshops.length > 0) && (
        <section className="bg-white p-5">
          <CourseTypeSection title="Talleres prácticos" variant="taller" courses={coursesByType.workshops} loading={loading} />
        </section>
      )}

      {(loading || coursesByType.strategics.length > 0) && (
        <section className="bg-white p-5">
          <CourseTypeSection title="Cursos estratégicos" variant="estrategico" courses={coursesByType.strategics} loading={loading} />
        </section>
      )}
    </main>
  );
}
