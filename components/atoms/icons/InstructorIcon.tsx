interface Props {
    className?: string;
}

export function InstructorIcon({ className = "w-6 h-6" }: Props) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M9 10C10.933 10 12.5 8.433 12.5 6.5C12.5 4.567 10.933 3 9 3C7.067 3 5.5 4.567 5.5 6.5C5.5 8.433 7.067 10 9 10Z"
                stroke="currentColor"
                strokeWidth="2"
            />
            <path
                d="M3.5 21V18.8C3.5 15.95 5.85 13.6 8.7 13.6H9.3C12.15 13.6 14.5 15.95 14.5 18.8V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path d="M15 5H21V15H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 9H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}
