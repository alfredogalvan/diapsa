interface Props {
    className?: string;
}

export function CertificateIcon({ className = "w-6 h-6" }: Props) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M6 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H6C4.9 20 4 19.1 4 18V6C4 4.9 4.9 4 6 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <path d="M8 8H16M8 12H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path
                d="M16.5 13.5L17.22 14.96L18.83 15.19L17.66 16.33L17.94 17.93L16.5 17.18L15.06 17.93L15.34 16.33L14.17 15.19L15.78 14.96L16.5 13.5Z"
                fill="currentColor"
            />
        </svg>
    );
}
