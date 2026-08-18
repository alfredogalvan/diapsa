'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRightIcon, CertificateIcon, EnergyIcon, SettingsIcon, TrophyIcon } from '@/components/atoms/icons';
import { getNextCourse } from '@/lib/api/courses';
import type { CourseDetail } from '@/types/course';

interface TimeLeft {
    dias: number;
    horas: number;
    minutos: number;
    segundos: number;
}

function TimerUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="relative flex items-center justify-center w-20 h-20 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm shadow-inner">
                <span className="text-4xl font-black text-secondary tabular-nums leading-none">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <span className="text-white/70 text-xs font-medium uppercase tracking-widest">{label}</span>
        </div>
    );
}

function Separator() {
    return <span className="text-secondary/60 text-3xl font-bold self-start mt-4">:</span>;
}

function LoadingSkeleton() {
    return (
        <div className="flex flex-col gap-4 p-6 bg-primary/80 rounded-2xl animate-pulse">
            <div className="h-5 bg-white/10 rounded-full w-48 mx-auto" />
            <div className="h-4 bg-white/10 rounded-full w-32 mx-auto" />
            <div className="flex gap-3 justify-center mt-2">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-20 h-20 bg-white/10 rounded-xl" />
                ))}
            </div>
            <div className="h-9 bg-white/10 rounded-lg mt-2" />
        </div>
    );
}

function getTimeLeft(nextDate: string | Date): TimeLeft | null {
    const targetDate = new Date(nextDate);
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return null;

    return {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((difference % (1000 * 60)) / 1000),
    };
}

function CoursePromo() {
    const pillars = [
        { icon: TrophyIcon, text: 'Certificaciones ISO reconocidas globalmente' },
        { icon: SettingsIcon, text: 'Metodología práctica basada en campo real' },
        { icon: EnergyIcon, text: 'Profesionales que reducen fallas hasta un 40%' },
    ];

    return (
        <div className="relative overflow-hidden flex flex-col gap-6 p-6 md:p-8 bg-linear-to-br from-primary via-primary to-primary/90 rounded-2xl shadow-2xl border border-white/10">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <span className="inline-flex items-center gap-2 w-fit bg-secondary/20 text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                <CertificateIcon className="w-4 h-4" />
                Programa de formación
            </span>

            <div className="space-y-2">
                <p className="text-white/60 text-sm uppercase tracking-widest">La diferencia entre</p>
                <h3 className="text-white text-2xl md:text-3xl font-extrabold leading-tight">
                    reaccionar a las fallas
                    <br />
                    <span className="text-secondary">y anticiparlas</span>
                    <br />
                    <span className="text-white/80 text-xl md:text-2xl font-bold">se llama formación.</span>
                </h3>
            </div>

            <ul className="flex flex-col gap-3">
                {pillars.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3 text-sm text-white/80">
                        <Icon className="w-5 h-5 text-secondary shrink-0" />
                        {text}
                    </li>
                ))}
            </ul>

            <div className="w-12 h-0.5 rounded-full bg-secondary/50" />

            <div className="flex flex-col gap-3">
                <p className="text-white/50 text-xs text-center">
                    Nuevas fechas disponibles próximamente
                </p>
                <Link
                    href="/cursos"
                    className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 active:scale-95 transition-all text-white font-bold py-3 px-6 rounded-lg shadow-lg text-sm uppercase tracking-wider"
                >
                    Explorar todos los cursos
                    <ArrowRightIcon className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}

export function TimerCourses() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
    const [course, setCourse] = useState<CourseDetail | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getNextCourse()
            .then((data) => setCourse(data))
            .catch(() => setCourse(null))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        if (!course?.next_date) return;

        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(course.next_date));
        }, 1000);

        return () => clearInterval(timer);
    }, [course]);

    if (isLoading) return <LoadingSkeleton />;
    const currentTimeLeft = course?.next_date ? timeLeft ?? getTimeLeft(course.next_date) : null;

    if (!course || !currentTimeLeft) return <CoursePromo />;

    const formattedDate = new Date(course.next_date).toLocaleDateString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="relative overflow-hidden flex flex-col gap-5 p-6 md:p-8 bg-linear-to-br from-primary via-primary to-primary/90 rounded-2xl shadow-2xl border border-white/10">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    <CertificateIcon className="w-4 h-4" />
                    Próximo curso
                </span>
                <span className="text-white/50 text-xs">{formattedDate}</span>
            </div>

            <div>
                <p className="text-white/70 text-sm uppercase tracking-widest mb-1">Inscríbete ahora en</p>
                <h3 className="text-white text-xl md:text-2xl font-extrabold leading-tight">
                    {course.name}
                </h3>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 justify-center flex-wrap">
                <TimerUnit value={currentTimeLeft.dias} label="Días" />
                <Separator />
                <TimerUnit value={currentTimeLeft.horas} label="Horas" />
                <Separator />
                <TimerUnit value={currentTimeLeft.minutos} label="Min" />
                <Separator />
                <TimerUnit value={currentTimeLeft.segundos} label="Sec" />
            </div>

            <div className="flex flex-col gap-3">
                <p className="inline-flex items-center justify-center gap-1.5 text-white/60 text-xs text-center">
                    <EnergyIcon className="w-4 h-4 text-secondary shrink-0" />
                    Los lugares son limitados: asegura el tuyo antes de que se agoten
                </p>
                <Link
                    href={`/cursos/${course.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 active:scale-95 transition-all text-white font-bold py-3 px-6 rounded-lg shadow-lg text-sm uppercase tracking-wider"
                >
                    Ver detalles e inscribirme
                    <ArrowRightIcon className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
