import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CART} from '../constants';
import {toast} from 'react-hot-toast';
import {AddCart} from '@/entities/Cart';

const apiClient = new APIClient<AddCart>('/cart-row/add');

const useAddCart = () => {
  const queryClient = useQueryClient();

  return useMutation<AddCart, Error, AddCart>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CART);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useAddCart;
