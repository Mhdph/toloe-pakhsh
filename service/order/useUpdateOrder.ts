import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';
import axios from 'axios';

const apiClient = new APIClient<any>('/cart/update');
const CACHE_KEY_HISTORY = ['history'];
const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, {id: number; data: any}>(({id, data}) => apiClient.update(id, data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_HISTORY);
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useUpdateOrder;
