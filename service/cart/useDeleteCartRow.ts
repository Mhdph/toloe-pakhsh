import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';
import {CACHE_KEY_CART} from '../constants';
import {Cart} from '@/entities/Cart';

const apiClient = new APIClient<Cart>('/cart-row/delete');

const useDeleteCartRow = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<Cart, Error, Cart>({
    mutationFn: () => apiClient.delete(id),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CART);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteCartRow;
