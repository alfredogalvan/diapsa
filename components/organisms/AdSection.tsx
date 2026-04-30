import AdvsCard, { Advertisement } from "../molecules/AdvsCard"

interface Props {
    advertisements: Advertisement[]
}

export default function AdSection({ advertisements }: Props) {
    return (
        <section className="bg-gray-100 py-20 px-6 md:px-18 relative overflow-hidden">

            {/* Dot grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.10]"
                style={{
                    backgroundImage: "radial-gradient(circle, #002e46 1.5px, transparent 1.5px)",
                    backgroundSize: "28px 28px",
                }}
            />

            {/* Decorative blobs */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary opacity-15 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary opacity-15 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-14 space-y-3">
                    <p className="text-secondary uppercase tracking-widest text-sm font-semibold">
                        Calendario
                    </p>
                    <h2 className="text-primary font-bold text-4xl md:text-5xl">
                        Próximos Eventos en DIAPSA
                    </h2>
                    <div className="mx-auto w-16 h-1 bg-secondary rounded-full" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {advertisements.map((adv) => (
                        <div key={adv.title} className="flex justify-center">
                            <AdvsCard adv={adv} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}