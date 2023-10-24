import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CART, CACHE_KEY_SHOP} from '../constants';
import {toast} from 'react-hot-toast';
import {UpdateCart} from '@/entities/Cart';
import axios from 'axios';

const apiClient = new APIClient<UpdateCart>('/cart-row/update');

const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateCart, Error, {id: number; data: UpdateCart}>(({id, data}) => apiClient.update(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CACHE_KEY_SHOP],
      });
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useUpdateCart;
