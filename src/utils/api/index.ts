import {API, BASE_URL} from './api';

// sample metode hit api
export const APIClient = {
  async get<Type>(resource: string, path?: string): Promise<Type> {
    try {
      console.info('GET', `${BASE_URL}/${resource}/${path}`);
      let url = ''; // some url here

      if (path) {
        url = `${resource}/${path}`;
      } else {
        url = resource;
      }

      return await API.get(url);
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },

  async post<Type>(resource: string, path?: string, body?: any): Promise<Type> {
    try {
      let url = '';

      if (path) {
        url = `${resource}/${path}`;
      } else {
        url = resource;
      }

      console.info('POST', `${BASE_URL}/${url}`);

      return await API.post(url, body);
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },

  async patch<Type>(
    resource: string,
    path?: string,
    body?: any,
  ): Promise<Type> {
    try {
      let url = '';

      if (path) {
        url = `${resource}/${path}`;
      } else {
        url = resource;
      }

      console.info('PATCH', `${BASE_URL}/${url}`);

      return await API.patch(url, body);
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },

  async put<Type>(resource: string, path?: string, body?: any): Promise<Type> {
    try {
      let url = '';

      if (path) {
        url = `${resource}/${path}`;
      } else {
        url = resource;
      }

      console.info('PUT', `${BASE_URL}/${url}`);

      return await API.put(url, body);
    } catch (err: any) {
      if (err?.response) {
        throw err?.response;
      }

      throw err;
    }
  },
};
