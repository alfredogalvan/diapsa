interface Props {
    className?: string;
}

export function TrophyIcon({ className = "w-6 h-6" }: Props) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M8 4H16V8.5C16 10.71 14.21 12.5 12 12.5C9.79 12.5 8 10.71 8 8.5V4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path d="M9.5 20H14.5M12 12.5V17M10 17H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 6H5C5 9 6.2 10.8 8.7 11.2M16 6H19C19 9 17.8 10.8 15.3 11.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
