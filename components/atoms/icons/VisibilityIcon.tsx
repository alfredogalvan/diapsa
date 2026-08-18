interface Props {
    className?: string;
}

export function VisibilityIcon({ className = "w-6 h-6" }: Props) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path d="M2 12C3.73 7.61 7.77 5 12 5C16.23 5 20.27 7.61 22 12C20.27 16.39 16.23 19 12 19C7.77 19 3.73 16.39 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}
