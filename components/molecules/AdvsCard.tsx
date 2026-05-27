'use client'
import Image from "next/image";
import { useState } from "react";
import LightBoxImage from "./LightBoxImage";

export interface Advertisement {
    img: string;
    date: string;
    title: string;
    badges?: string[];
    description: string;
}

interface Props {
    adv: Advertisement
}

export default function AdvsCard({ adv }: Props) {
    const [openFlyer, setOpenFlyer] = useState<boolean>(false);
    return (
        <>
            <div className="bg-primary rounded-sm h-full flex max-w-80 flex-col shadow-2xl shadow-black-800 space-y-6">
                <div className="flex justify-center items-center m-0">
                    <div className="w-80 h-80 relative">
                        <Image src={adv.img} alt={`Flyer de ${adv.title}`} fill className="object-cover rounded-sm" />
                    </div>
                </div>
                <div className="p-2 space-y-2 flex flex-col flex-1">
                    <p className="font-bold text-lg">{adv.title}</p>
                    <p className="text-sm">{adv.description}</p>
                    {adv.badges && (
                        <div className="flex gap-3">
                            {adv.badges.map((b) => (
                                <p key={b} className="rounded-2xl bg-transparent text-secondary border border-secondary py-1 text-xs px-3">{b}</p>
                            ))}
                        </div>
                    )}
                    <div className="flex justify-between items-center mt-auto pt-2">
                        <p className="text-sm"> {adv.date}</p>
                        <button onClick={() => setOpenFlyer(true)}
                            className="inline-flex items-center gap-2 bg-secondary text-sm text-primary font-bold px-4 py-1 rounded-sm hover:bg-white hover:text-primary transition-all duration-300">Ver flyer</button>
                    </div>
                </div>
            </div>
            <LightBoxImage onClose={() => setOpenFlyer(false)} isOpen={openFlyer} image={adv.img} />
        </>
    )
}