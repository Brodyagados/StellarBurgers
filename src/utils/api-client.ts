import { AccountApi } from '../api';

const BASE_URL = 'https://norma.nomoreparties.space/api';

class ApiClient {
  request = async <T>(url: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      ...options
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await (response.json() as Promise<T>);
    return data;
  };

  requestWithRefresh = async <T>(url: string, options?: RequestInit): Promise<T> => {
    try {
      return this.request<T>(url, options);
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
