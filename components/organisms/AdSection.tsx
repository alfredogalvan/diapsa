import AdvsCard, { Advertisement } from "../molecules/AdvsCard"

interface Props {
    advertisements: Advertisement[]
}
export default function AdSection({ advertisements }: Props) {
    return (
        <section className="bg-white min-h-screen px-18 py-10 space-y-10">
            <h2 className="text-center text-black font-bold text-5xl">Proximos Eventos en DIAPSA</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {advertisements.map((adv) => (
                    <div className="flex justify-center">
                        <AdvsCard key={adv.title} adv={adv} />
                    </div>
                ))}
            </div>
        </section>
    )
}