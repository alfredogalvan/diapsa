export function ThermometerIcon({ className = "w-6 h-6" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M14 14.76V5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5V14.76C8.79 15.46 8 16.77 8 18.25C8 20.46 9.79 22 12 22C14.21 22 16 20.46 16 18.25C16 16.77 15.21 15.46 14 14.76Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}
