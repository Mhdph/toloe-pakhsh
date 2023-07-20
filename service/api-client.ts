import axios, {AxiosRequestConfig} from 'axios';
import Cookies from 'js-cookie';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://tolouapi.iran.liara.run',
});

const token = Cookies.get('token');
axiosInstance.defaults.headers.common['Authorization'] = token;

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + '/' + id).then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  delete = (id: number | string) => {
    return axiosInstance.delete<T>(this.endpoint + '/' + id).then((res) => res.data);
  };

  update = (id: number | string, data: T) => {
    return axiosInstance.patch<T>(this.endpoint + '/' + id, data).then((res) => res.data);
  };
}

export default APIClient;
