import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';

const apiClient = new APIClient<any>('/cart/update');
const CACHE_KEY_HISTORY = ['history'];
const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, {id: number; data: any}>(({id, data}) => apiClient.update(id, data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_HISTORY);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateOrder;
