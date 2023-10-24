import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {CACHE_KEY_CART} from '../constants';
import {toast} from 'react-hot-toast';
import {AddCategory} from '@/entities/category';
import axios from 'axios';

const apiClient = new APIClient<AddCategory>('/cart/completeOrder');

const useAddOrder = (data: AddCategory) => {
  const queryClient = useQueryClient();

  return useMutation<AddCategory, Error, AddCategory>({
    mutationFn: () => apiClient.post(data),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_CART);
      toast.success('کتگوری با موفقیت اضافه شد');
    },
    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useAddOrder;
