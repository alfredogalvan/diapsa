interface Props {
    className?: string;
}

export function WarningIcon({ className = "w-6 h-6" }: Props) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path d="M12 3L22 20H2L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 9V14M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}
