import AdvsCard, { Advertisement } from "../molecules/AdvsCard"

interface Props {
    advertisements: Advertisement[]
}

export default function AdSection({ advertisements }: Props) {
    return (
        <section className="bg-gray-100 py-16 lg:py-24 px-6 md:px-18 relative overflow-hidden">

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
                    <span className="inline-block text-secondary text-xs font-semibold tracking-widest uppercase border border-secondary/40 rounded-full px-3 py-1 bg-secondary/10 mb-2">
                        Calendario
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
                        PRÓXIMOS EVENTOS <span className="text-secondary">EN DIAPSA</span>
                    </h2>
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