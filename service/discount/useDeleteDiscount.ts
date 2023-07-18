import {useMutation, useQueryClient} from '@tanstack/react-query';
import APIClient from '../api-client';
import {Discount} from '@/entities/discount';
import {CACHE_KEY_DISCOUNT} from '../constants';
import {toast} from 'react-hot-toast';

const apiClient = new APIClient<Discount>('/discount/delete');

const useDeleteDiscount = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation<Discount, Error, Discount>({
    mutationFn: () => apiClient.delete(id),
    onSuccess: () => {
      queryClient.refetchQueries(CACHE_KEY_DISCOUNT);
      toast.success('تخفیف با موفقیت حذف شد');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteDiscount;
