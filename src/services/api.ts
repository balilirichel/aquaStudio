import axios, { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { getCachedAccessToken } from './tokenStorage';

const DEFAULT_BASE_URL = 'https://api.aquascapestudio.example.com';

export const BASE_URL = process.env.EXPO_PUBLIC_API_URL ?? DEFAULT_BASE_URL;

export class ApiError extends Error {
  readonly isApiError = true;

  constructor(
    message: string,
    readonly status?: number,
    readonly code?: string,
    readonly details?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }

  static fromAxios(error: unknown): ApiError {
    if (error instanceof ApiError) {
      return error;
    }
    if (axios.isAxiosError(error)) {
      return this.fromAxiosError(error);
    }
    if (error instanceof Error) {
      return new ApiError(error.message);
    }
    return new ApiError('An unexpected error occurred.');
  }

  private static fromAxiosError(error: AxiosError): ApiError {
    const status = error.response?.status;
    const data = error.response?.data as { message?: string; error?: string; code?: string } | undefined;
    const serverMessage = data?.message ?? data?.error;

    if (status === 401) {
      return new ApiError('Your session has expired. Please sign in again.', 401, 'UNAUTHORIZED');
    }
    if (status != null) {
      return new ApiError(
        serverMessage ?? `Request failed with status ${status}.`,
        status,
        data?.code ?? error.code,
      );
    }
    if (error.code === 'ECONNABORTED') {
      return new ApiError('The request timed out. Please try again.', undefined, 'TIMEOUT');
    }
    return new ApiError(
      serverMessage ?? 'Cannot reach the server. Check your connection and try again.',
      undefined,
      error.code,
    );
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}

let onUnauthorizedHandler: (() => void) | null = null;

export function setOnUnauthorized(handler: (() => void) | null): void {
  onUnauthorizedHandler = handler;
}

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  const token = getCachedAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    const apiError = ApiError.fromAxios(error);
    if (apiError.status === 401) {
      onUnauthorizedHandler?.();
    }
    return Promise.reject(apiError);
  },
);

function unwrap<T>(response: AxiosResponse<T>): T {
  return response.data;
}

export async function apiGet<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.get<T>(path, config);
  return unwrap(response);
}

export async function apiPost<T>(path: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.post<T>(path, body, config);
  return unwrap(response);
}

export async function apiPut<T>(path: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.put<T>(path, body, config);
  return unwrap(response);
}

export async function apiDelete<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
  const response = await api.delete<T>(path, config);
  return unwrap(response);
}
