import { CertificateIcon, FactoryIcon, InstructorIcon, TargetIcon } from "@/components/atoms/icons";
import { TimerCourses } from "../molecules/TimerCourses";

const stats = [
    { value: "+15", label: "Cursos disponibles" },
    { value: "+500", label: "Profesionales formados" },
    { value: "3", label: "Modalidades de capacitación" },
];

const highlights = [
    { icon: TargetIcon, text: "Certificaciones alineadas a normas internacionales" },
    { icon: FactoryIcon, text: "Casos reales de la industria" },
    { icon: InstructorIcon, text: "Instructores con experiencia en campo" },
];

export function CoursesNCerts() {
    return (
        <section className="w-full bg-white py-12 sm:px-6">
            <div className="mx-auto flex flex-col md:flex-row justify-between gap-10 items-center">
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    <span className="inline-flex items-center gap-2 w-fit bg-secondary/10 text-secondary font-semibold text-sm px-3 py-1 rounded-full uppercase tracking-wider">
                        <CertificateIcon className="w-4 h-4" />
                        Programa de capacitación
                    </span>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
                            Cursos y
                        </h2>
                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            <span className="text-secondary">Certificaciones</span>
                        </h2>
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed max-w-lg">
                        En DIAPSA compartimos el conocimiento que transforma la industria.
                        Diseñamos <strong className="text-primary">cursos y certificaciones</strong> que
                        forman expertos capaces de anticipar fallas, interpretar datos y tomar
                        decisiones clave con confianza.
                    </p>

                    <ul className="flex flex-col gap-2">
                        {highlights.map(({ icon: Icon, text }) => (
                            <li key={text} className="flex items-center gap-3 text-sm text-gray-700">
                                <Icon className="w-5 h-5 text-secondary shrink-0" />
                                {text}
                            </li>
                        ))}
                    </ul>

                    <div className="w-16 h-1 rounded-full bg-secondary" />

                    <div className="flex flex-wrap gap-6">
                        {stats.map((s) => (
                            <div key={s.label} className="flex flex-col">
                                <span className="text-3xl font-extrabold text-primary">{s.value}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <TimerCourses />
                </div>
            </div>
        </section>
    );
}
