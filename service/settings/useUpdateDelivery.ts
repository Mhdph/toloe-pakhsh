import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_POST} from '../constants';
import {toast} from 'react-hot-toast';
interface UpdateDelivery {
  cost: string;
}

const apiClient = new APIClient<UpdateDelivery>('/post');

const useUpdateDelivery = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation<UpdateDelivery, Error, UpdateDelivery>((data) => apiClient.update(id, data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_POST);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateDelivery;
