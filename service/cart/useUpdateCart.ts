import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CATEGORY} from '../constants';
import {toast} from 'react-hot-toast';
import {UpdateCart} from '@/entities/Cart';

const apiClient = new APIClient<UpdateCart>('/cart-row/update');

const useUpdateCart = (id: string, data: UpdateCart) => {
  const queryClient = useQueryClient();

  return useMutation<UpdateCart, Error, UpdateCart>({
    mutationFn: () => apiClient.update(id, data),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CATEGORY);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateCart;
