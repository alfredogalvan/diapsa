import Image from "next/image"
export function MisionVisionSection() {
    return (
        <section className="w-full bg-white py-16 lg:py-24 space-y-4">
            <div className="max-w-7xl mx-auto px-6 space-y-2 mb-16" >
                <div className="flex flex-col items-center">
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-4">Excelencia operativa</span>
                </div>
                <h2 className="text-primary text-3xl lg:text-4xl font-extrabold text-center">COMPROMETIDOS CON LA  <span className="text-secondary">CONFIABILIDAD</span></h2>
                <p className="text-tertiary text-center">Somos líderes en mantenimiento predictivo y monitoreo de condiciones, asegurando que su planta opera con la máxima eficiencia y seguridad</p>

            </div>
            {/* Misión */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 items-center p-8 lg:px-32 lg:py-0 md:min-h-[50vh]">
                <div className="md:py-16">
                    <h3 className="font-semibold text-2xl text-primary border-b-4 border-secondary mb-4 pb-2">Nuestra misión</h3>
                    <p className="text-lg italic text-tertiary leading-relaxed">
                        &ldquo;Ser líderes en las disciplinas que
                        desarrollamos a través de un servicio de calidad, precisión y rapidez, beneficiando a
                        nuestros clientes, incrementando la confiabilidad de los equipos y la productividad de
                        la planta.&rdquo;
                    </p>
                </div>
                <div className="relative w-full h-full rounded-sm border-e-4 border-t-4 border-secondary hidden md:block p-4">
                    <div className="relative w-full h-full overflow-hidden rounded-sm">
                        <Image
                            src="/images/mision-image.jpeg"
                            fill
                            className="object-cover"
                            alt="Representación de la misión de la Grupo Diapsa"
                        />
                    </div>
                </div>
            </div>

            {/* Visión */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 items-center p-8 lg:px-28 lg:py-0 md:min-h-[50vh]">
                <div className="relative w-full h-full rounded-sm border-b-4 border-s-4 border-primary hidden md:block p-4">
                    <div className="relative w-full h-full overflow-hidden rounded-sm">
                        <Image
                            src="/images/vision-image.jpg"
                            fill
                            className="object-cover"
                            alt="Representación de la visión de la Grupo Diapsa"
                        />
                    </div>
                </div>
                <div className="md:py-16">
                    <h3 className="font-semibold text-2xl text-primary border-b-4 border-primary mb-4 pb-2">Nuestra visión</h3>
                    <p className="text-lg italic text-tertiary leading-relaxed">
                        &ldquo;Elevar la confiabilidad y seguridad de las plantas a través
                        del monitoreo de condición del estado de la maquinaria mediante herramientas
                        predictivas, desarrollando los servicios con eficiencia y calidad, comprometidos como
                        equipo con las normativas de seguridad e higiene.&rdquo;
                    </p>
                </div>
            </div>
        </section>
    )
}