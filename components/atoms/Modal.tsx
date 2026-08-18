import { useEffect, useRef } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

export default function Modal({ isOpen, onClose, children, className = "" }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }

        if (isOpen) {
            dialog.classList.remove("modal-closing");
            dialog.classList.add("modal-opening");
            if (!dialog.open) dialog.showModal();
        } else if (dialog.open) {
            dialog.classList.remove("modal-opening");
            dialog.classList.add("modal-closing");
            closeTimerRef.current = setTimeout(() => {
                if (dialog.open) dialog.close();
            }, 300);
        }

        return () => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current);
                closeTimerRef.current = null;
            }
        };
    }, [isOpen]);

    // Guard against animationend events bubbling up from child elements
    const handleAnimationEnd = (e: React.AnimationEvent<HTMLDialogElement>) => {
        if (e.target !== e.currentTarget) return;
        if (e.currentTarget.classList.contains("modal-closing")) {
            e.currentTarget.close();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onAnimationEnd={handleAnimationEnd}
            className={`modal-opening relative m-auto rounded-xl shadow-2xl p-0 backdrop:bg-black/50 overflow-hidden open:flex open:flex-col ${className}`}
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-4 text-gray-400 text-2xl p-2 rounded bg-gray-200 leading-none z-10 hover:text-white hover:bg-red-500"
                aria-label="Cerrar"
            >
                &times;
            </button>
            <div className="overflow-y-auto flex flex-col flex-1">
                {children}
            </div>
        </dialog>
    )
}
