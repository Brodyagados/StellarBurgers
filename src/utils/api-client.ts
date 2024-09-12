const BASE_URL = 'https://norma.nomoreparties.space/api';

class ApiClient {
  request = async <T>(url: string, options?: RequestInit): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await (response.json() as Promise<{ data: T }>);
    return data.data;
  };
}

export default new ApiClient();
