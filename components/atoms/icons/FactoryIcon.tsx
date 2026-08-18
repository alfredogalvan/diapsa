interface Props {
    className?: string;
}

export function FactoryIcon({ className = "w-6 h-6" }: Props) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M3 21V10L8 13V10L13 13V7L21 4V21H3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M7 17H9M12 17H14M17 17H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}
