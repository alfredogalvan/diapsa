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

    const openModal = () => {
        setOpenFlyer(true)
    }
    return (
        <>
            <div className="bg-primary rounded-sm h-full flex max-w-80 flex-col shadow-2xl shadow-black-800 space-y-6">
                <div className="flex justify-center items-center m-0">
                    <div className="w-80 h-80 relative">
                        <Image src={adv.img} alt={`Flyer de ${adv.title}`} fill className="object-cover" />
                    </div>
                </div>
                <div className="p-2 space-y-2 flex flex-col flex-1">
                    <p className="font-bold text-lg">{adv.title}</p>
                    <p className="text-sm">{adv.description}</p>
                    {adv.badges && (
                        <div className="flex gap-3">
                            {adv.badges.map((b) => (
                                <p key={b} className="rounded-2xl bg-secondary text-black py-1 text-sm px-3">{b}</p>
                            ))}
                        </div>
                    )}
                    <div className="flex justify-between mt-auto pt-2">
                        <p className="text-sm"> {adv.date}</p>
                        <button onClick={() => openModal()}
                            className="text-secondary border-b-2 border-secondary hover:text-white hover:border-white transition-all ease-in-out">Ver flyer</button>
                    </div>
                </div>
            </div>
            {openFlyer && (
                <LightBoxImage onClose={() => setOpenFlyer(false)} isOpen={openFlyer} image={adv.img} />
            )}
        </>
    )
}