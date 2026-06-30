interface Props {
    className?: string;
}

export function TagIcon({ className = "w-6 h-6" }: Props) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M4 5.5C4 4.67 4.67 4 5.5 4H12.6C13.13 4 13.64 4.21 14.01 4.59L20 10.58C20.78 11.36 20.78 12.62 20 13.4L13.4 20C12.62 20.78 11.36 20.78 10.58 20L4.59 14.01C4.21 13.64 4 13.13 4 12.6V5.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path d="M8.5 8.5H8.51" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}
