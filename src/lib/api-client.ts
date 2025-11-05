// lib/api-client.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:48128';

class ApiError extends Error {
    constructor(
        message: string,
        public status: number,
        public data?: any
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new ApiError(
            errorData.message || `API Error: ${response.status}`,
            response.status,
            errorData
        );
    }

    const contentType = response.headers.get('content-type');
    if (contentType?.includes('application/json')) {
        return response.json();
    }

    return response.text() as any;
}

export async function apiGet<T>(path: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });

    return handleResponse<T>(response);
}

export async function apiPost<T>(
    path: string,
    data?: any,
    options?: RequestInit
): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    });

    return handleResponse<T>(response);
}

export async function apiPut<T>(
    path: string,
    data?: any,
    options?: RequestInit
): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    });

    return handleResponse<T>(response);
}

export async function apiDelete<T>(path: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
    });

    return handleResponse<T>(response);
}

// Export the error class for error handling in components
export { ApiError };