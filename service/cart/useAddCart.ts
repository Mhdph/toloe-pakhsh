import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CART} from '../constants';
import {toast} from 'react-hot-toast';
import {AddCart} from '@/entities/Cart';
import axios from 'axios';
import {useCartListCount} from '@/store/zustand';

const apiClient = new APIClient<AddCart>('/cart-row/add');

const useAddCart = () => {
  const queryClient = useQueryClient();
  const increaseCountCart = useCartListCount((state) => state.increaseCount);

  return useMutation<AddCart, Error, AddCart>((data) => apiClient.post(data), {
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CART);
      toast.success('محصول به سبد شما اضافه شد');
      increaseCountCart(1);
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useAddCart;
