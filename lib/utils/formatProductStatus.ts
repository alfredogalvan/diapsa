export function formatStatusProduct(status: string) {

    const STATUS_MAP: Record<string, string> = {
        available: 'Disponible',
        on_request: 'Sobre pedido',
        discontinued: 'Descontinuado'
    }

    return STATUS_MAP[status]
}