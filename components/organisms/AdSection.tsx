import { Announcement } from "@/types/post"
import AdvsCard from "@/components/molecules/AdvsCard"


interface Props {
    advertisements: Announcement[]
}

export default function AdSection({ advertisements }: Props) {
    if (advertisements.length === 0) {
        return null;
    }

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
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
                        Tablero de Anuncios de <span className="text-secondary">DIAPSA</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
