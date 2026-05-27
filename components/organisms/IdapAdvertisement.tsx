import Image from "next/image"
import Link from "next/link"
export function IdapAdvertisementSection() {
    return (
        <section className="w-full bg-black py-16 lg:py-24 border-y-4 border-secondary">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="relative overflow-hidden hidden md:block">
                    <Image
                        fill
                        alt="Imagen de IDAP"
                        src="/images/idap/mockup2.png"
                        className="object-cover"
                    />
                </div>
                <div className="py-10">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">
                        Plataforma digital
                    </span>
                    <h2 className="text-3xl lg:text-4xl text-white font-extrabold leading-tight">NUESTRA PLATAFORMA <span className="text-secondary">IDAP</span></h2>
                    <h3 className="text-gray-400"> Inspection, Diagnostic &amp; Asset Platform</h3>
                    <hr className="border-2 border-secondary my-2" />
                    <div className="space-y-5 py-10">
                        <p className="font-semibold text-2xl text-white">IDAP transforma el monitoreo de condición en decisiones confiables.</p>
                        <p className="text-white">
                            Una plataforma que centraliza la información técnica de los activos industriales y permite visualizar su estado,
                            priorizar riesgos y anticiparse a fallas que afectan la operación.</p>

                        <Link href="/servicios/idap" className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-3 rounded-xs hover:bg-white hover:text-primary transition-all duration-300 shadow-md">
                            Conoce más sobre IDAP
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}