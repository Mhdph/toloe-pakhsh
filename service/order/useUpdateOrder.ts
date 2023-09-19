import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {toast} from 'react-hot-toast';

const apiClient = new APIClient<UpdateOrder>('/cart/update');

const useUpdateOrder = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<UpdateOrder, Error, UpdateOrder>((data) => apiClient.update(id, data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CATEGORY);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateOrder;
