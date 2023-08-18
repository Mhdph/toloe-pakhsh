import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CART} from '../constants';
import {toast} from 'react-hot-toast';
import {UpdateCart} from '@/entities/Cart';

const apiClient = new APIClient<UpdateCart>('/cart-row/update');

const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateCart, Error, {id: number; data: UpdateCart}>(({id, data}) => apiClient.update(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CACHE_KEY_CART],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useUpdateCart;
