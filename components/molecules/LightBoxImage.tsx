import Image from "next/image";

interface Props {
    image?: string | null;
    isOpen: boolean
    onClose: () => void;
}
export default function LightBoxImage({ image, onClose, isOpen }: Props) {
    return (
        isOpen && (
            <div
                onClick={onClose}
                className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm duration-300"
            >
                <button
                    className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    onClick={onClose}
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="relative max-w-5xl w-full h-[95vh] flex items-center justify-center">
                    {image ? (
                        <Image
                            src={image}
                            alt="Imagen ampliada"
                            fill
                            priority
                            sizes="100vw"
                            className="object-contain"
                        />
                    ) : (
                        <p className="text-white text-lg text-center">
                            Imagen no disponible en este momento
                        </p>
                    )}
                </div>
            </div>
        )
    )
}
