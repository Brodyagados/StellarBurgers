import { AccountApi } from '../api';

export const BASE_URL = 'https://norma.nomoreparties.space/api';

class ApiClient {
  request = async <T>(url: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...options?.headers
      }
    });

    if (!response.ok) {
      return response.json().then((error) => Promise.reject(error));
    }

    return response.json() as Promise<T>;
  };

  requestWithRefresh = async <T>(url: string, options?: RequestInit): Promise<T> => {
    try {
      return this.request<T>(url, {
        ...options,
        headers: {
          ...options?.headers,
          authorization: localStorage.getItem('accessToken')!
        }
      });
    } catch (e) {
      if ((e as Error).message === 'jwt expired') {
        const refreshData = await AccountApi.refreshToken();
        return this.request<T>(url, {
          ...options,
          headers: {
            ...options?.headers,
            authorization: refreshData.accessToken!
          }
        });
      } else {
        return Promise.reject(e);
      }
    }
  };
}

export default new ApiClient();
