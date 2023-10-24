import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';
import {CACHE_KEY_CART, CACHE_KEY_SHOP} from '../constants';
import {Cart} from '@/entities/Cart';
import axios from 'axios';

const apiClient = new APIClient<string | number>('/cart-row/delete');

const useDeleteCartRow = () => {
  const queryClient = useQueryClient();

  return useMutation<string | number, Error, string | number>((data) => apiClient.delete(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CACHE_KEY_SHOP],
      });
      toast.success('اطلاعات با موفقیت به روز رسانی شد');
    },

    onError: (error) => {
      if (error && axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });
};

export default useDeleteCartRow;
