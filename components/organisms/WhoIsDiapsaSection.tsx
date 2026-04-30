import Image from "next/image"
import { CheckCircleIcon } from "../atoms/icons/CheckCircleIcon"
export function WhoIsDiapsaSection() {
    return (
        <section className="w-full bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <div className="py-6 space-y-6">
                        <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10">
                            Quiénes somos
                        </span>
                        <h2 className="text-primary text-3xl lg:text-4xl font-extrabold leading-tight">¿QUIÉNES SON <br /> <span className="text-secondary">GRUPO DIAPSA?</span></h2>
                        <p className="text-tertiary text-lg">Somos una empresa mexicana líder en mantenimiento predictivo industrial, especializada en ofrecer servicios,
                            equipos y capacitación en monitoreo de condición para sectores estrategicos. </p>
                        <p className="text-tertiary text-lg"> Ayudamos a las organizaciones a
                            incrementar la confiabilidad de sus equipos críticos, reducir fallas no programadas y optimizar la operación, mediante el uso de tecnologías
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-4 text-tertiary text-base">
                            <p className="flex items-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 text-secondary" />
                                Termofrafia Infrarroja</p>
                            <p className="flex items-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 text-secondary" />
                                Vibraciones mecanicas</p>
                            <p className="flex items-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 text-secondary" />
                                Ultrasonido</p>
                            <p className="flex items-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 text-secondary" />
                                Tierrras Fisicas y Estudios Eléctricos</p>
                            <p className="flex items-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 text-secondary" />
                                Alineación y Balanceo</p>
                            <p className="flex items-center gap-2">
                                <CheckCircleIcon className="w-6 h-6 text-secondary" />
                                Análisis de Lubricante</p>

                        </div>
                        <p className="text-tertiary text-lg">

                            Con más de <strong>22 años de experiencia</strong> , acompañamos a la industria en la toma de decisiones técnicas basadas en datos, seguridad y prevención.
                        </p>
                    </div>
                    <div className="relative hidden md:block overflow-hidden ">
                        <Image
                            src="/images/about.jpg"
                            alt="representacion de que es Diapsa"
                            fill
                            className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}