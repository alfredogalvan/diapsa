import AdvsCard, { Advertisement } from "../molecules/AdvsCard"

interface Props {
    advertisements: Advertisement[]
}
export default function AdSection({ advertisements }: Props) {
    return (
        <section className="bg-white h-screen px-18 py-10 space-y-10">
            <h2 className="text-center text-black font-bold text-5xl">Proximos Eventos en DIAPSA</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {advertisements.map((adv) => (
                    <AdvsCard key={adv.title} adv={adv} />
                ))}
            </div>
        </section>
    )
}