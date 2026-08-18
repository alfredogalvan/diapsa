export function formatDate(date?: string | null): string {
    if (!date) return "";

    return new Date(date).toLocaleDateString('es-MX', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}