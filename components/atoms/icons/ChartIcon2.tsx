

interface Props {
    className?: string;
}

export function ChartIcon2({ className = "w-6 h-6" }: Props) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M4 20V11M10 20V7M16 20V4M22 20H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
