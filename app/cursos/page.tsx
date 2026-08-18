import type { Metadata } from "next";
import PageHeader from "@/components/organisms/PageHeader";
import { CoursesNCerts } from "@/components/organisms/CoursesNCerts";
import CourseTypeSection from "@/components/organisms/CourseTypeSection";
import { getCourses } from "@/lib/api/courses";
import { groupCoursesByType } from "@/lib/utils/groupCourses";

export const metadata: Metadata = {
  title: "Cursos y Capacitación",
  description: "Capacitación profesional certificada en mantenimiento predictivo, termografía infrarroja, análisis de vibraciones y ultrasonido industrial. Certif icaciones nivel I, II y III.",
  alternates: {
    canonical: "/cursos",
  },
  openGraph: {
    title: "Cursos de Mantenimiento Predictivo — Grupo DIAPSA",
    description: "Certificaciones y talleres prácticos en termografía, vibraciones, ultrasonido y diagnóstico de maquinaria industrial.",
    url: "/cursos",
    type: "website",
  },
};

export default async function CursosPage() {
  const coursesResponse = await getCourses();
  const courses = coursesResponse.data;
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

      {coursesByType.certificates.length > 0 && (
        <section className="bg-white p-5">
          <CourseTypeSection
            title="Certificados"
            variant="certificado"
            courses={coursesByType.certificates}
            loading={false}
          />
        </section>
      )}

      {coursesByType.workshops.length > 0 && (
        <section className="bg-white p-5">
          <CourseTypeSection
            title="Talleres prácticos"
            variant="taller"
            courses={coursesByType.workshops}
            loading={false}
          />
        </section>
      )}

      {coursesByType.strategics.length > 0 && (
        <section className="bg-white p-5">
          <CourseTypeSection
            title="Cursos estratégicos"
            variant="estrategico"
            courses={coursesByType.strategics}
            loading={false}
          />
        </section>
      )}
    </main>
  );
}
