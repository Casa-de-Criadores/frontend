// lib/api-client.ts

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:48128';

/**
 * Custom error class for API-related failures
 */
export class ApiError extends Error {
    constructor(
        message: string,
        public readonly status: number,
        public readonly data?: Record<string, unknown>
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

/**
 * Handle fetch response and extract typed data or throw ApiError
 */
async function handleResponse<TResponse>(response: Response): Promise<TResponse> {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({})) as Record<string, unknown>;
        throw new ApiError(
            (errorData.message as string) || `API Error: ${response.status}`,
            response.status,
            errorData
        );
    }

    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
        return response.json() as Promise<TResponse>;
    }

    // For non-JSON responses, return text (caller should handle type assertion)
    return response.text() as Promise<TResponse>;
}

/**
 * Perform a GET request to the API
 * @param path - API endpoint path (e.g., '/brand/slug/studio-aurelia')
 * @param options - Additional fetch options
 * @returns Typed response data
 */
export async function fetchFromApi<TResponse>(
    path: string,
    options?: RequestInit
): Promise<TResponse> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });

    return handleResponse<TResponse>(response);
}

/**
 * Perform a POST request to the API
 * @param path - API endpoint path
 * @param data - Request body data
 * @param options - Additional fetch options
 * @returns Typed response data
 */
export async function postToApi<TResponse, TPayload = Record<string, unknown>>(
    path: string,
    data?: TPayload,
    options?: RequestInit
): Promise<TResponse> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    });

    return handleResponse<TResponse>(response);
}

/**
 * Perform a PUT request to the API
 * @param path - API endpoint path
 * @param data - Request body data
 * @param options - Additional fetch options
 * @returns Typed response data
 */
export async function updateInApi<TResponse, TPayload = Record<string, unknown>>(
    path: string,
    data?: TPayload,
    options?: RequestInit
): Promise<TResponse> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    });

    return handleResponse<TResponse>(response);
}

/**
 * Perform a DELETE request to the API
 * @param path - API endpoint path
 * @param options - Additional fetch options
 * @returns Typed response data
 */
export async function deleteFromApi<TResponse = void>(
    path: string,
    options?: RequestInit
): Promise<TResponse> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });

    return handleResponse<TResponse>(response);
}