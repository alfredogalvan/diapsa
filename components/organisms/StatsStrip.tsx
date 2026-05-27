const stats = [
    { value: "+50,000", label: "Fallas detectadas" },
    { value: "+1,500", label: "Servicios realizados" },
    { value: "+22", label: "Años de trayectoria" },
    { value: "95%", label: "Efectividad en detección" },
];

export default function StatsStrip() {
    return (
        <section className="w-full bg-primary py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/20">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center text-center">
                            <span className="text-3xl lg:text-5xl font-extrabold text-secondary">
                                {stat.value}
                            </span>
                            <span className="text-white/70 text-sm lg:text-base mt-1 uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
