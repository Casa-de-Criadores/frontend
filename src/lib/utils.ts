// lib/utils.ts

/**
 * Format a number as Brazilian Real currency
 */
export function formatPrice(price: number): string {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
}

/**
 * Format a date string to Brazilian format
 */
export function formatDate(dateString: string): string {
    return new Intl.DateTimeFormat('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(dateString));
}

/**
 * Get localized text from i18n object
 */
export function getLocalizedText(
    text: Record<string, string> | undefined,
    locale: string = 'pt-BR'
): string {
    if (!text) return '';
    return text[locale] || text['pt-BR'] || Object.values(text)[0] || '';
}