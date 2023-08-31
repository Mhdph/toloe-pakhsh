import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {toast} from 'react-hot-toast';
import {CACHE_KEY_CART} from '../constants';
import {Cart} from '@/entities/Cart';

const apiClient = new APIClient<string | number>('/cart-row/delete');

const useDeleteCartRow = () => {
  const queryClient = useQueryClient();

  return useMutation<string | number, Error, string | number>((data) => apiClient.delete(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CACHE_KEY_CART],
      });
      toast.success('اطلاعات با موفقیت به روز رسانی شد');
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteCartRow;
