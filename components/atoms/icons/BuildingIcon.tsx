interface Props {
    className?: string;
}

export function BuildingIcon({ className = "w-6 h-6" }: Props) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M5 21V4.8C5 3.81 5.81 3 6.8 3H17.2C18.19 3 19 3.81 19 4.8V21M3 21H21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M8 7H10M14 7H16M8 11H10M14 11H16M8 15H10M14 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}
