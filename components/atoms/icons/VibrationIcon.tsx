interface Props {
    className?: string;
}

export function VibrationIcon({ className = "w-6 h-6" }: Props) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path d="M8 5H16V19H8V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M4 8V16M1 10V14M20 8V16M23 10V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}
