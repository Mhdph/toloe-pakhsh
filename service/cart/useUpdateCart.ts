import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CART, CACHE_KEY_CATEGORY} from '../constants';
import {toast} from 'react-hot-toast';
import {UpdateCart} from '@/entities/Cart';

const apiClient = new APIClient<UpdateCart>('/cart-row/update');

const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateCart, Error, UpdateCart>((data) => apiClient.patch(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CART);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateCart;
